import { useEffect } from "react";
import { Comments } from "./components/comments";
import { Navbar } from "./components/nav";
import { Posts } from "./components/posts";
import { localStorageUtils } from "./utilities/localStorage";
import { useUserInfo } from "./contexts/UserContext";
import { getUser } from "./api/auth/auth";

function App() {
  const { getItemFromLocalStorage } = localStorageUtils();
  const { handleUserInfo } = useUserInfo();
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        return await getUser();
      } catch (error) {
        console.log(error);
      }
    };
    const token = getItemFromLocalStorage("authkey");
    if (token?.access) {
      getUserInfo().then((res) => {
        handleUserInfo({ ...res, isLoggedIn: true });
        console.log(res);
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Posts />
      <Comments />
    </>
  );
}

export default App;
