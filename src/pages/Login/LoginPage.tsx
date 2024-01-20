import { useDispatch } from "react-redux";
import styles from "../../assets/css/loginPage.module.scss";
import { useState } from "react";
import { getLogin } from "../../store/actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = () => {
    dispatch(getLogin({userName, password}));
  }
  return (
    <>
      <div>
        <div className={styles.container}>
          <h1>Login page</h1>
          <li>
          <label htmlFor="uname">
            <b>User Name</b>
          </label>
          <input
            value={userName}
            onChange={event => setUserName(event?.target.value)}
            type="text"
            placeholder="Enter User Name"
            name="uname"
            required
          />
          </li>
          <li>
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            value={password}
            onChange={event => setPassword(event?.target.value)}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          </li>
          <button type="submit" onClick={() => onLogin()}>Login</button>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
