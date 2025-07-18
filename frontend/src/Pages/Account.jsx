import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../Components/profile";

function Account() {
  const navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("userID") &&
      navigate("/auth/sign-in", { replace: true });
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Profile />
    </div>
  );
}

export default Account;
