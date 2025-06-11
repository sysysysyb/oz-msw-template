export const Auth = {
  login() {
    return "/login";
  },
  logout() {
    return "/logout";
  },
  userInfo() {
    return "/user-info";
  },
};

export const Comment = {
  default() {
    return "/comment";
  },
  detail(id) {
    return `/comment/${id}`;
  },
};
