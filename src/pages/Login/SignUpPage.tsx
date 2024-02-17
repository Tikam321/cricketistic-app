import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styles from "../../assets/css/signUpPage.module.scss";
import { getSignUp } from "../../store/actions/authActions";

const SignUpPage = () => {
  const navigate = useNavigate();
  const arr = 12;
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidUserNameError, setInvalidusernamError] = useState<boolean>(false);
  const [invalidEmailError, setInvalidEmaiLError] = useState<boolean>(false);
  const [invalidPasswordError, setInvalidPasswordError] = useState<boolean>(false);
  const reg = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  useEffect(() => {
    console.warn("userName " + userName + " password " + password + " email "+ email);
  }, [userName, password, email])

  const onSave = () => {
    if (userName.length < 5) {
      toast.error("userName length should be more than 5.")
    } else if (!reg.test(email)) {
      toast.error("enter the correct email id format.");
    } else if (password.length < 5) {
      toast.error("the length of password is greater than 5.");
    } else {
      dispatch(getSignUp({userName, password}));
      navigate("/login");
      toast.success("Congratulations you have Successfully registered.")
    } 
  };

  return (
    <>
        <div className={styles.container}>
        <h1>Sign Up page</h1>
           <li>
          <label htmlFor="uname">
            <b>User Name</b>
          </label>
          <input
            data-testid="userNameInput"
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
            data-testid="emailInput"
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
            data-testid="passwordInput"
            value={password}
            onChange={event => setPassword(event?.target.value)}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          </li>
          <button role='button' type="submit" onClick={onSave}>Sign Up</button>
        </div>
    </>
  );
};
export default SignUpPage;
