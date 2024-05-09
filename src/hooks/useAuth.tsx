import { jwtDecode } from "jwt-decode";

const useAuthentication = () => {
  const isAuthenticated = () => {
    console.log(localStorage);
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp! > currentTime;
    }
    return false;
  };

  const getUserInfo = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return jwtDecode(token);
    }
    return null;
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return {
    isAuthenticated,
    getUserInfo,
    logout,
  };
};

export default useAuthentication;
