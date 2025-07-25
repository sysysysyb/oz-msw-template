import { http, HttpResponse } from "msw";

const USER_LOGIN_DATA = [
  {
    id: 0,
    email: "test@test.com",
    password: "test1212",
  },
];

const USER_DATA = [
  {
    user_id: "0",
    user_name: "김오즈",
  },
];

export const handlers = [
  // 로그인
  http.post("/login", async ({ request }) => {
    const { email, password } = await request.clone().json(); // body로 가져올 걸 todo로 구조 분해해서 가져온 것임

    if (email === USER_LOGIN_DATA[0].email && password === USER_LOGIN_DATA[0].password) {
      const response = {
        data: {
          authentication: {
            access_token: "abcd.efg.hij",
            refresh_token: "abcd.efg.hij",
          },
          ...USER_DATA,
        },
        message: "로그인 성공",
      };
      return HttpResponse.json(response);
    }
  }),

  // 로그아웃
  http.post(`/logout`, ({ request }) => {
    const authorization = request.headers.get("Authorization");
    const token = authorization.split(" ")[1];

    if (token === "abcd.efg.hij") {
      return new HttpResponse(null, { status: 204 });
    }
  }),

  // 유저 정보 조회
  http.get(`/user-info`, ({ request }) => {
    const authorization = request.headers.get("Authorization");
    const token = authorization.split(" ")[1];

    if (token === "abcd.efg.hij") {
      console.log("user-info 조회 성공!");
      return HttpResponse(...USER_DATA);
    }
  }),

  // 회원가입
  http.post("/signup", async ({ request }) => {
    const { name, email, password } = await request.clone().json();

    const response = {
      data: {
        authentication: {
          accessToken: "abcd.efg.hij",
          refreshToken: "abcd.efg.hij",
        },
        ...USER_DATA,
      },
      message: "회원가입 성공",
    };

    return HttpResponse.json(response);
  }),
];
