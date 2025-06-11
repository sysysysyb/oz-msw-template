import { memo, useCallback } from "react";
import { login } from "../../api/auth/auth";
import { useForm } from "../../hooks/useForm";
import { CustomButton } from "../_common/buttons";
import FormInput from "../_common/inputs/FormInput";
import { LoginInputConfigs } from "./config";
import { useUserInfo } from "../../contexts/UserContext";
import { CustomModal } from "../_common/modal";

import LoginLogo from "../../assets/logos/POSTS.png";

const LoginForm = ({ onClose }) => {
  const { handleUserInfo } = useUserInfo();
  const { error, touched, handleSubmit, getFieldProps, ErrorModal } = useForm({
    initialValues: { email: "", password: "" },
    validate: useCallback((values) => {
      const errors = { email: "", password: "" };

      if (!values.email) {
        errors.email = "이메일을 입력해주세요.";
      }
      if (!values.password) {
        errors.password = "비밀번호를 입력해주세요.";
      }
      return errors;
    }, []),
    onSubmit: async (loginDatas) => {
      const response = await login(loginDatas);
      onClose();
      handleUserInfo({ ...response, isLoggedIn: true });
    },
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative min-w-72 min-h-96 my-12 mx-10 flex flex-col items-center justify-center"
      >
        <img
          src={LoginLogo}
          alt="login-logo"
          width={255}
          height={80}
          className="absolute -top-20 max-w-48 left-12"
        />
        <div className="w-full flex flex-col justify-between items-stretch pb-4">
          {LoginInputConfigs.map((props, idx) => (
            <FormInput
              key={`${props.name}-${idx}`}
              {...props}
              {...getFieldProps(props.name)}
              error={touched[props.name] ? error[props.name] : ""}
            />
          ))}
        </div>
        <CustomButton mode="button">로그인</CustomButton>
      </form>
      <CustomModal onClose={ErrorModal.closeModal} isOpen={ErrorModal.isOpen}>
        <div className="flex flex-col items-center gap-8 p-8 min-w-2xs font-gamja">
          <h1 className="text-3xl">⚠️ 에러</h1>
          <p className="text-xl">로그인에 실패했습니다.</p>
          <CustomButton mode="button" onClick={ErrorModal.closeModal}>
            확인
          </CustomButton>
        </div>
      </CustomModal>
    </>
  );
};

export default memo(LoginForm);
