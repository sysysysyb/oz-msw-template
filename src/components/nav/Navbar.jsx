import { logout } from "../../api/auth/auth";
import { useUserInfo } from "../../contexts/UserContext";
import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../_common/buttons";
import { CustomModal } from "../_common/modal";
import { UserCard } from "../_common/userCard";
import LoginForm from "../login/Login.Form";
import { ComputerDesktopIcon } from "@heroicons/react/16/solid";
import FullLogo from "../../assets/logos/FullLogo.png";

export const Navbar = () => {
  const LoginModal = useModal();
  const ErrorModal = useModal();
  const LogoutModal = useModal();
  const { userInfo, handleUserInfo } = useUserInfo();
  const signout = async () => {
    try {
      await logout();
      handleUserInfo({ username: "", email: "", id: -1, isLoggedIn: false });
      LogoutModal.closeModal();
    } catch (err) {
      console.log(err);
      ErrorModal.openModal();
    }
  };
  const handleCancel = () => {
    LogoutModal.closeModal();
  };
  const handleErrorConfirm = () => {
    ErrorModal.closeModal();
    LogoutModal.closeModal();
  };
  return (
    <nav className="fixed top-0 right-0 left-0 w-full h-20 flex justify-between items-center px-10 shadow-md bg-white">
      <div className="h-full py-3">
        <img
          src={FullLogo}
          alt="POSTS 로고"
          width={219}
          height={93}
          className="h-full w-full object-fit"
        />
      </div>
      {userInfo.isLoggedIn ? (
        <div className="flex items-center gap-3">
          <UserCard userInfo={userInfo} />
          <CustomButton
            mode="text"
            onClick={LogoutModal.openModal}
            className="underline underline-offset-4"
          >
            로그아웃
          </CustomButton>
        </div>
      ) : (
        <CustomButton mode="button" onClick={LoginModal.openModal}>
          로그인
        </CustomButton>
      )}

      <CustomModal onClose={LoginModal.closeModal} isOpen={LoginModal.isOpen}>
        <LoginForm onClose={LoginModal.closeModal} />
      </CustomModal>
      <CustomModal onClose={LogoutModal.closeModal} isOpen={LogoutModal.isOpen}>
        <div className="flex flex-col items-center gap-8 p-8 font-gamja min-w-sm">
          <h1 className="text-3xl flex items-center justify-center gap-2">
            <ComputerDesktopIcon className="w-6 h-6" />
            로그아웃
          </h1>
          <p className="text-xl">로그아웃하시겠습니까?</p>
          <div className="flex items-center justify-between gap-12 w-full">
            <CustomButton mode="text" onClick={handleCancel} className="w-full">
              취소
            </CustomButton>
            <CustomButton
              mode="text"
              onClick={signout}
              className="w-full text-xl text-primary hover:text-secondary"
            >
              로그아웃
            </CustomButton>
          </div>
        </div>
      </CustomModal>
      <CustomModal onClose={ErrorModal.closeModal} isOpen={ErrorModal.isOpen}>
        <div className="flex flex-col items-center gap-8 p-8 min-w-2xs font-gamja">
          <h1 className="text-3xl">⚠️ 에러</h1>
          <p className="text-xl">로그아웃에 실패했습니다.</p>
          <CustomButton mode="button" onClick={handleErrorConfirm}>
            확인
          </CustomButton>
        </div>
      </CustomModal>
    </nav>
  );
};
