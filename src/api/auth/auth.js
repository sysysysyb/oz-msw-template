import { localStorageUtils } from "../../utilities/localStorage";
import { Auth } from "../config";
import { instance } from "../instance";
import { authDto, userDto } from "./auth.dto";

export const login = async (loginData) => {
  const { setItemToLocalStorage } = localStorageUtils();
  const response = await instance.post(Auth.login(), loginData);
  const { userInfo, authTokens } = authDto(response.data);
  setItemToLocalStorage("authkey", authTokens);
  return userInfo;
};

export const logout = async () => {
  const { setItemToLocalStorage } = localStorageUtils();
  await instance.post(Auth.logout());
  setItemToLocalStorage("authkey", "");
};

export const getUser = async () => {
  const response = await instance.get(Auth.userInfo());
  return userDto(response.data);
};
