import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter your email or mobile phone number and password.");
    } else {
      setError("");
      // Handle authentication logic
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Sign in
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email or mobile phone number
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </form><br></br>

        

        <p className="text-center text-sm text-gray-600">New to Luku Store?</p><br></br>
        <button onClick={onSwitch} className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Create your Luku Store account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
