import "./Page1.css";
const Page1 = () => {
  return (
    <>
      <div id="grow">
        {/* <img src="https://newint.org/sites/default/files/2021/wedding-gcfb52f837_1280%20%281%29.jpg" alt='sdff'/> */}
        <div className="cnp">
          <h1>Grow your Bussiness with wedding wire!</h1>
          <li>showcase your services on your industry leading site!</li>
          <li>Reach local engaged couples and book more weddings.</li>
          <li>Trusted by over 68,000 professionals</li>
          <div className="vendorbtn">
            <button>
              VENDOR SIGN UP <span> &#8640;</span>
            </button>
          </div>
        </div>
        <div className="zform">
          <div className="loginsignbtn">
            {/* <div className="swipe"></div> */}
            <button>Login</button> <button>sign up</button>
          </div>
          <form className="formm">
            <h6>Welcome Back !!!</h6>
            <h1>VENDOR LOGIN</h1>

            <div className="cont">
              <label>Mobile Number</label>
              <input placeholder="8008372144" />
            </div>
            <div className="forgot">
              <a href="kk">Forgot Password?</a>
            </div>
            <div className="otpbtn">
              <button>
                Get OTP <span> &#8640; </span>
              </button>
            </div>
            <div className="dosignup">
              <p>
                I don't have an acoount?
                <a href="vdfg">sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Page1;
