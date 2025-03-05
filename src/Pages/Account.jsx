import React, { useState } from "react";
import Register from "../Components/Register";
import SigninForm from "../Components/SigninForm";

function Account() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen max-md: bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
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
