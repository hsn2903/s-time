const { createContext, useState, useContext } = require("react");

// the actual value you want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
