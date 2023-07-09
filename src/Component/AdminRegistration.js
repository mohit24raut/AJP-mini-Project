import { useRef, useState } from "react";
import axios from "axios";
import "./Login.css"


export default function AdminRegistration(){
  let formRef = useRef();
  let [passMatch, setPassMatch] = useState("Password Not Match");
  let [isPassMatch, setIsPassMatch] = useState(false);
  let [color, setColor] = useState("red");
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    username: "",
    email: "",
    mobileNo: "",
    password: "",
    ConformPassword: "",
  });

  let HandlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let HandlerGmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let HandlerMobnoAction = (e) => {
    let newuser = { ...user, mobileNo: e.target.value };
    setUser(newuser);
  };
  let HandlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };
  let HandlerConfirmPasswordAction = (e) => {
    let newuser = { ...user, ConformPassword: e.target.value };

    if (e.target.value !== user.password) {
      setIsPassMatch(true);
    } else {
      setPassMatch("Password Match");
      setColor("green");
    }
    setUser(newuser);
    setIsPassMatch(false);
  };


  let registerAction = () => {
    console.log(user);
    let url = `http://localhost:9292/addAdmin`;
    axios.post(url, user).then((response)=>{
      if(response.data == "Exist")
      {
        alert("Already Register");
      }
      else{
        alert("Added Successfully");
      }
    })
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 d-flex align-item-center">
            <img src="d031de662d94f078d9fb1b9fe44cfd9f.jpg" alt="" />
          </div>
          <div className="col-8">
            <form ref={formRef} className="needs-validation">
              <div className="row align-text-center justify-content-center">
                <div className="col-sm-12 col-md-6 p-3 bg-light m-5">
                  <h2 style={{ textAlign: "center" }}>Admin Register</h2>
                  <label htmlFor="User Name">User name</label>
                  <input
                    type="text"
                    placeholder="eg. rautmohit"
                    required
                    pattern="^(?![0-9]*$)[a-z0-9]{3,}$"
                    className="form-control my-2 border-warning"
                    value={user.username}
                    onChange={HandlerUsernameAction}
                  />

                  <label htmlFor="mob">Mobile no</label>
                  <input
                    type="tel"
                    placeholder="eg. 8828260026"
                    className="form-control  my-2 border-warning"
                    value={user.mobileNo}
                    onChange={HandlerMobnoAction}
                    minLength={10}
                    maxLength={10}
                    pattern="^[6789]\d{0,9}$"
                    required
                  />
                  <label htmlFor="gmail">Gmail</label>
                  <input
                    type="email"
                    placeholder=" eg. Gmail@xyz.com"
                    className="form-control  my-2 border-warning"
                    value={user.email}
                    onChange={HandlerGmailAction}
                    required
                    pattern="^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)*@gmail\.(com|in)$"
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="eg. 1Ab@"
                    className="form-control my-2 border-warning"
                    value={user.password}
                    onChange={HandlerPasswordAction}
                    required
                    pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()])[a-zA-Z\d!@#$%^&()]{4,}$"
                    minLength={3}
                  />
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="eg. 1Ab@"
                    className="form-control  my-2 border-warning"
                    value={user.ConformPassword}
                    onChange={HandlerConfirmPasswordAction}
                    required
                    pattern={
                      user.password !== "" ? `^${user.password}$` : undefined
                    }
                    minLength={3}
                  />
                  {isPassMatch && (
                    <span style={{ color: color }}>{passMatch}</span>
                  )}
                  <div class="btndiv">
                    <input
                      type="button"
                      value="Register"
                      className="w-100 mt-3"
                      onClick={registerAction}
                      class="btn btn-primary mt-2 w-50 fs-5"
                    />
                  </div>
                  <div class="btndiv">
                    <p class="m-2">If u are already Registered ?</p>
                  </div>
                </div>
              </div>
            </form>

            {isSuccess && <div className="alert alert-success">Success</div>}
            {isError && <div className="alert alert-danger">Error</div>}
          </div>
        </div>
      </div>
    </>
  );
}