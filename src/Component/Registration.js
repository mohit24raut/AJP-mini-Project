import axios from "axios";
import { useRef, useState } from "react";
import "./Registration.css";

export default function Registration() {
  let formRef = useRef();
  let [passMatch, setPassMatch] = useState("Password Not Match");

  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    name: "",
    eamil: "",
    mobile_no: "",
    dob: "",
    aadhar_no:"",
    address: "",
    status:"Pending",
  });

  let HandlerFirstnameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };
  
  let HandlerGmailAction = (e) => {
    let newuser = { ...user, eamil: e.target.value };
    setUser(newuser);
  };
  let HandlerAddressAction=(e)=>{
    let newuser = { ...user, address: e.target.value };
    setUser(newuser);
  }
  let HandlerAadharAction=(e)=>{
    let newuser = { ...user, aadhar_no: e.target.value };
    setUser(newuser); 
  }
  let HandlerDOBAction = (e) => {
    let newuser = { ...user, dob: e.target.value };
    setUser(newuser);
  };
  const getMaxDOB = () => {
    const currentDate = new Date();
    const maxDOB = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    return maxDOB.toISOString().split("T")[0];
  };

  let HandlerMobnoAction = (e) => {
    let newuser = { ...user, mobile_no: e.target.value };
    setUser(newuser);
  };

  let registerAction = () => {
    console.log(user);
    let url = `http://localhost:9292/createConn`;
    axios.post(url, user).then((response)=>{
      console.log(response.data);
    })
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 d-flex align-item-center">
            <img src="registration.jpg" alt="" />
          </div>
          <div className="col-8">
            <form ref={formRef} className="needs-validation">
              <div className="row align-text-center justify-content-center">
                <div className="col-sm-12 col-md-6 p-3 bg-light m-5">
                  <h2 style={{ textAlign: "center" }}>Consumer Connection</h2>

                  <label htmlFor="firstname">Full Name</label>
                  <input
                    type="text"
                    placeholder="eg. Mohit Raut"
                    required
                    pattern="^(?=.[a-z])(?=.[A-Z])[a-zA-Z]+$"
                    className="form-control my-2 border-warning"
                    value={user.firstname}
                    onChange={HandlerFirstnameAction}
                  />

                  <label htmlFor="mob">Mobile No.</label>
                  <input
                    type="tel"
                    placeholder="eg. 8828260026"
                    className="form-control  my-2 border-warning"
                    value={user.mobno}
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
                    value={user.gmail}
                    onChange={HandlerGmailAction}
                    required
                    pattern="^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)*@gmail\.(com|in)$"
                  />
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control my-2 border-warning"
                    value={user.dob}
                    onChange={HandlerDOBAction}
                    required
                    max={getMaxDOB()}
                  />

                  <label htmlFor="mob">Aadhar No.</label>
                  <input
                    type="tel"
                    placeholder="eg. 1254 7654 8906"
                    className="form-control  my-2 border-warning"
                    value={user.aadhar}
                    onChange={HandlerAadharAction}
                    minLength={12}
                    maxLength={12}
                    pattern="^[6789]\d{0,9}$"
                    required
                  />

                  <label htmlFor="gmail">Address</label>
                  <input
                    type="text"
                    placeholder=" eg. Shivaji Colony, Pulgaon"
                    className="form-control  my-2 border-warning"
                    value={user.address}
                    onChange={HandlerAddressAction}
                    required
                    
                  />
                  <label htmlFor="gmail">Status</label>
                  <input
                    type="text"
                    className="form-control  my-2 border-warning"
                    value={user.status}  
                  />

                  <div class="btndiv">
                    <input
                      type="button"
                      value="Create"
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