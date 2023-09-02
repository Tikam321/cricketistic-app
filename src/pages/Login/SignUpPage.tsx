import "../../assets/css/signUpPage.css";

const SignUpPage = () => {
  const arr = 12;
  return (
    <>
      <div>
        <h1>This is a Login page</h1>
        <div className="container">
        <div className="login-container">
            <div className="login-form">
          <label htmlFor="uname">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="uname"
            required
          />
          </div>
          <div className="login-form">
          <label htmlFor="uname">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="uname"
            required
          />
          </div>

          <div className="login-form">
          <label htmlFor="uname">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="uname"
            required
          />
          </div>
          <div className="login-form">
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit">Sign Up</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default SignUpPage;
