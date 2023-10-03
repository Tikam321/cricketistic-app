import styles from "../../assets/css/signUpPage.module.scss";


const SignUpPage = () => {
  const arr = 12;
  return (
    <>
        <div className={styles.container}>
        <h1>Sign Up page</h1>
           <li>
          <label htmlFor="uname">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="uname"
            required
          />
          </li>
          
          <li>
          <label htmlFor="uname">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="uname"
            required
          />
          </li>

          <li>
          <label htmlFor="uname">
            <b>Email</b>
          </label>
          <input
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
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          </li>
          <button type="submit">Sign Up</button>
        </div>
    </>
  );
};
export default SignUpPage;
