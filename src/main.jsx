import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

const enableMocking = async () => {
  // 개발 환경에서만 실행하기 위해 개발 환경이 아니면 함수 반환
  if (!import.meta.env.DEV) {
    return;
  }

  // MSW를 실행하기 위한 import
  const { worker } = await import("./mock/browser.js");
  return worker.start();
};

// MSW 연결 후 React 렌더링
enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </StrictMode>
  );
});
