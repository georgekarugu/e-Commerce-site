import { useState } from "react";

function Register({onSwitch}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newErrors = {};

    if (!firstName) newErrors.firstName = "First Name is required.";
    if (!lastName) newErrors.lastName = "Last Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
  
    setErrors(newErrors);
     // Create user object
  const userData = {
    firstName,
    lastName,
    email,
    password,
  };
  // Send the user object to the server
  console.log(userData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.firstName ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}


          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.lastName ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-blue-600 hover:underline"
        >
          Sign in
        </button>
      </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
