import { useEffect, useState } from "react";
import styles from "../../assets/css/signUpPage.module.scss";
import { useDispatch } from "react-redux";
import { getSignUp } from "../../store/actions/authActions";
import { useNavigate } from "react-router";


const SignUpPage = () => {
  const navigate = useNavigate();
  const arr = 12;
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    console.warn("userName " + userName + " password " + password + " email "+ email);
    
  }, [userName, password, email])

  const onSave = () => {
    if (userName.length >= 5 && password.length >= 5) {
       dispatch(getSignUp({userName, password}));
      navigate("/login");
    }
  }

  return (
    <>
        <div className={styles.container}>
        <h1>Sign Up page</h1>
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
          <label htmlFor="uname">
            <b>Email</b>
          </label>
          <input
            value={email}
            onChange={event => setEmail(event?.target.value)}
            type="email"
            placeholder="Enter Email"
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
          <button type="submit" onClick={onSave}>Sign Up</button>
        </div>
    </>
  );
};
export default SignUpPage;
