import React, { useState } from "react";
import Register from "../Components/Register";
import SigninForm from "../Components/SigninForm";

function Account() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        {/* Conditionally Render Sign In or Register */}
        {isRegistering ? (
          <Register onSwitch={() => setIsRegistering(false)} />
        ) : (
          <SigninForm onSwitch={() => setIsRegistering(true)} />
        )}
      </div>
    </div>
  );
}

export default Account;
