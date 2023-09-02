import "../../assets/css/loginPage.css";

const loginPage = () => {
  const arr = 12;
  return (
    <>
      <div>
        <h1>This is a Login page</h1>
        <div className="container">
        <div className="login-container">
            <div className="login-form">
          <label htmlFor="uname">
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter User Name"
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
          <button type="submit">Login</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default loginPage;
