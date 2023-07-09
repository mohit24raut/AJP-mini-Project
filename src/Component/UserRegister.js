import { useRef, useState } from "react";
import axios from "axios";
import "./UserRegister.css";

export default function UserRegister() {
  let formRef = useRef();
  let [passMatch, setPassMatch] = useState("Password Not Match");
  let [isPassMatch, setIsPassMatch] = useState(false);
  let [color, setColor] = useState("red");
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    providedConsu_id: "",
    username: "",
    password: "",
    confirm_password: "",
    
  });

  let HandlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };
  let HandlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };
  let HandlerConfirmPasswordAction = (e) => {
    let newuser = { ...user, confirm_password: e.target.value };

    if (e.target.value !== user.password) {
      setIsPassMatch(true);
    } else {
      setPassMatch("Password Match");
      setColor("green");
    }
    setUser(newuser);
    setIsPassMatch(false);
  };
  
  let HandlerConsumerNoAction = (e) => {
    let newuser = { ...user, providedConsu_id: e.target.value };
    setUser(newuser);
  };
  
  let registerAction =() => {
    console.log(user);
    let url = `http://localhost:9292/registeruser`;
    axios.post(url, user).then((response)=>{
      if(response.data === "Pending")
      {
        alert("Yet Not Approve");
      }
      else if(response.data === "Register")
      {
        alert("Register Successfully");
      }
      else if(response.data === "Connection")
      {
        alert("Connection is not exist. Create Connection!!!");
      }
      else{
        alert("Account Exist, You can Login");
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
                  <h2 style={{ textAlign: "center" }}>Register</h2>
                  <label htmlFor="consumerNo">Consumer Number</label>
                  <input
                    type="text"
                    placeholder="1234"
                    className="form-control my-2 border-warning"
                    value={user.providedConsu_id}
                    onChange={HandlerConsumerNoAction}
                    required
                  />
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
                    value={user.confirm_password}
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