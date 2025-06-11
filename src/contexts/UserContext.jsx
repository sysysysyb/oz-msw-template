import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const DefaultUserInfo = {
  username: "",
  email: "",
  id: -1,
  isLoggedIn: false,
};

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(DefaultUserInfo);
  const handleUserInfo = (newUserInfo) => {
    if (
      typeof newUserInfo !== "object" &&
      Array.from(newUserInfo).some(([key, val]) => {
        switch (key) {
          case "username":
            if (typeof val !== "string") {
              return true;
            }
            break;
          case "email":
            if (typeof val !== "string") {
              return true;
            }
            break;
          case "id":
            if (typeof val !== "number") {
              return true;
            }
            break;
        }
        return false;
      })
    ) {
      throw new Error(
        "SetUserInfoError: handleUserInfo에는 userInfo의 부분 객체 혹은 userInfo 타입 객체가 와야합니다."
      );
    }
    setUserInfo((prev) => ({ ...prev, ...newUserInfo }));
  };
  return (
    <UserContext.Provider value={{ userInfo, handleUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserInfo = () => {
  const ctx = useContext(UserContext);
  if (!ctx)
    throw new Error(
      "ContextError: UserContext는 UserProvider 내부에서만 사용할 수 있습니다."
    );

  return ctx;
};
