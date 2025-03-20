import  {createContext, useState} from "react";

export const UserContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );


}

export default AuthProvider;