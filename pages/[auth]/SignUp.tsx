import axios from "axios";
import { useRef } from "react";

const SignUp = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwdInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPwd = pwdInputRef.current!.value;
  };

  const emailValid = (enteredEmail: string) => {
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 검증에 사용할 정규식 변수 regExp에 저장
    if (enteredEmail.match(regExp) != null) {
      return true;
    }
  };

  const passwordValid = (enteredPwd: string) => {
    if (enteredPwd.length >= 8) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form>
        <p>email</p>
        <input id="email" ref={emailInputRef} />
        <p>password</p>
        <input />

        <button>submit</button>
      </form>
    </div>
  );
};
export default SignUp;

// POST
axios
  .post("/users/create", { email: "ajax 공부", password: "password" })
  .then((res) => {
    console.log(res);
    const Token = res;
  });
