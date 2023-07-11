import { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import Footer from "./Footer";
//import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";


export default function Login() {
  let navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({ username: "", password: "" });
  let changeUname = (e) => {
    let newUname = { ...user, username: e.target.value };
    setUser(newUname);
  };
  let changePass = (e) => {
    let newPass = { ...user, password: e.target.value };
    setUser(newPass);
  };

  let addUserLogin = () => {
    console.log(user);
    let url = `http://localhost:9292/login`;
    axios.post(url, user).then((response) => {
      console.log(response.data);
      let newuser = {
        username: "", password: "" 
      };
      setUser(newuser);

      if(response.data === "User")
      {
        
        navigate("/UserPage");
      }
      else if(response.data === "Admin")
      {
        navigate("/AdminPage");
      }
      else 
      {
        alert("Register first");
      }
      
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000000" }}>
                <div className="container-fluid">
                  
                  <h1 className="navbar-brand gram-app fs-1 my-1" style={{ color: "coral" }}>
                      <a className="navbar-brand" href="#">
                          <img src="/gasForNav.jpg" alt="Logo" width="90" height="40" class="d-inline-block align-text-top"/>
                          <span className="navbar-brand gram-app fs-1 my-1" style={{ color: "coral" }}>CDAC Gas</span>
                      </a>
                  </h1>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ color: "aliceblue" }}
                  >
                    <span
                      className="navbar-toggler-icon"
                      style={{ backgroundColor: "coral" }}
                    ></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                    <Link
                        className="nav-link"
                        to={"/"}
                        style={{
                          color: "aliceblue",
                          fontWeight: "lighter",
                          fontSize: "large",
                        }}
                        >Home
                      </Link>
                      <Link
                        className="nav-link"
                        to={"/Login"}
                        style={{
                          color: "aliceblue",
                          fontWeight: "lighter",
                          fontSize: "large",
                        }}
                        >Login
                      </Link>
                      <Link
                        className="nav-link "
                        to={"/About"}
                        style={{
                          color: "aliceblue",
                          fontWeight: "lighter",
                          fontSize: "large",
                          cursor: "pointer",
                        }}
                        >About Us
                      </Link>
                      <Link
                        className="nav-link"
                        to={"/ContactUs"}
                        style={{
                          color: "aliceblue",
                          fontWeight: "lighter",
                          fontSize: "large",
                          cursor: "pointer",
                        }}
                        >Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
      <div className="container-fluid">
        <div className="row " style={{ height: "100vh" }}>
                <div className="col-4" >
                    <img src="LoginSidePic1.jpg" alt="" height="100%"/>
                </div>
          <div className="col-8">
            <div class="row align-text-center justify-content-center" style={{ height: "100vh" }}>
              <div class="col-sm-9 col-md-6 p-3 " style={{ margin: "16vh" }}>
                <h2 id="idh111">Login</h2>
                <form ref={formRef} className="needs-validation " novalidate>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="username"
                    value={user.username}
                    onChange={changeUname}
                    class="form-control my-2 border-warning"
                  />
                  <span id="ffname" class="text-danger"></span>
                  <label htmlFor="pass">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={changePass}
                    required
                    id="password"
                    class="form-control  my-2 border-warning"
                  />
                  <span id="ppword" class="text-danger"></span>
                </form>
                {isSuccess && (
                  <div className="alert alert-success">Success</div>
                )}
                {isError && <div className="alert alert-danger">Error</div>}
                <div class="btndiv">
                  <input
                    type="button"
                    value="Login"
                    onClick={addUserLogin}
                    class="btn btn-primary mt-2 w-50 fs-4"
                  />
                </div>
                <div class="btndiv">
                  <p class="m-3">
                    Don't have an account ?
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}