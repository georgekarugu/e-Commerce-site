import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors]= useState("");

  const [otp, setOTP] = useState("");
  const [currentForm, setCurrentForm] = useState("register");

  const verifyUserData = async (userObj) => {
    try {
      const response = await fetch(
        "http://localhost:8080/auth/verify-account-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        }
      );
      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      }
      setCurrentForm("otp");
    } catch (error) {
      alert("Oops..Something went wrong on our side");
      console.error("Error registering:", error);
    }
  };

  const formatPhoneNumber = (number) => {
    return `+254${number}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //setUser({username, password});
    let newErrors = {};
    // if (!firstName) newErrors.firstName = "First Name is required.";
    // if (!lastName) newErrors.lastName = "Last Name is required.";
    // if (!email) newErrors.email = "Email is required.";
    // if (!password) newErrors.password = "Password is required.";

     setErrors(newErrors);
    verifyUserData({
      firstName,
      lastName,
      email,
      password,
      phoneNumber: formatPhoneNumber(phoneNumber),
    });
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch("http://localhost:8080/auth/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phoneNumber: formatPhoneNumber(phoneNumber),
          otp,
        }),
      });
      const { error, _id } = await request.json();
      if (error) return alert(error);
      if (_id) {
        localStorage.setItem("userID", _id);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Oops..Something went wrong on our side");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100 p-4 pt-20">
      {currentForm == "register" ? (
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 "
            name="register-form"
          >
            <input
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={"w-full p-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
              }
            />

            <input
              required
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={"w-full p-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
              }
            />
            
            
            <div className="grid grid-cols-[3rem_auto] items-center gap-0.5">
              <div className="border rounded-lg h-full flex items-center justify-center">
                <span>+254</span>
              </div>
              <input
                required
                type="tel"
                minLength={9}
                maxLength={9}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={"w-full p-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
                }
              />
            </div>
          
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={"w-full p-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
              }
            />
        

            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={"w-full p-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
              }
            />

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Continue
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/auth/sign-in")}
                className="text-blue-600 hover:underline"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmitOTP} name="otp-form">
            <input
              required
              type="text"
              minLength={6}
              maxLength={6}
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className={"w-full p-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
              }
            />
            {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-5"
            >
              Verify
            </button>
            <button
              type="button"
              onClick={() => setCurrentForm("register")}
              className="text-blue-600 hover:underline"
            >
              Wrong details?
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp;
