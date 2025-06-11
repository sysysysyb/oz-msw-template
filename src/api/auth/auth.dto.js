export const authDto = (rawData) => {
  const userInfo = {
    id: Number(rawData.data.user_id),
    username: rawData.data.user_name,
  };
  const authTokens = {
    access: rawData.data.authentication.access_token,
    refresh: rawData.data.authentication.refresh_token,
  };
  return { userInfo, authTokens };
};

export const userDto = (rawData) => {
  return {
    id: Number(rawData.user_info.user_id),
    username: rawData.user_info.user_name,
  };
};
