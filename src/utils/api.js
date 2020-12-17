import http from "./http";

export const getBannerListApi = params => http.get("/home/banner", params);

export const getRecommendListApi = params =>
  http.post("/home/recommend", params);

export const getClassifyListApi = params => http.post("/classify", params);

export const getDetailInfoApi = params => http.post("/detail", params);

export const getPhoneCodeApi = params => http.post("/register/getCode", params);

export const LoginApi = params => http.post("/register", params);

export const getUserInfoApi = params => http.post("/userinfo/get", params);

export const updateUserInfoApi = params =>
  http.post("/userinfo/update", params);
