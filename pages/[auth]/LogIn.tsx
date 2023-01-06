import axios from "axios";
const LogIn = () => {
  // POST
  axios
    .post("/users/login", { email: "ajax 공부", password: "password" })
    .then((res) => {
      console.log(res);
      var token = res;
    });

  const hasToken = () => {
    const res = "token";
    if (res === null) {
      //그냥 로그인 처음부터
    } else {
      //로그인 페이지로 리다이렉트
    }
  };
  return (
    <div>
      <p>login</p>
    </div>
  );
};
export default LogIn;
