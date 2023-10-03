import styles from "../../assets/css/loginPage.module.scss";

const LoginPage = () => {
  const arr = 12;
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
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </li>
          <button type="submit">Login</button>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
