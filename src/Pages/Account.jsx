import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("userID") &&
      navigate("/auth/sign-in", { replace: true });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg"></div>
    </div>
  );
}

export default Account;
