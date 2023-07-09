import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Booking() {
  let [pending, setPending] = useState({
    id: "",
    name: "",
    eamil: "",
    mobileNo: "",
    dob: "",
    aadharNo: "",
    address: "",
    status: "",
  });
  let [cylinder, setCylinder] = useState({
    id: "",
    cylinderType: "",
    price: "",
    quantity: "",
  });
  let [gasBooking, setGasBooking] = useState({});
  useEffect(() => {
    onEnter();
  }, []);
  let onEnter = () => {
    let url = `http://localhost:8080/bookingDetails?id=1`;

    axios.get(url).then((response) => {
      setPending(response.data);
      console.log(response.data);
    });
    let url1 = `http://localhost:8080/fetchCylinder?id=1`;
    axios.get(url1).then((response) => {
      setCylinder(response.data);
      console.log(response.data);
    });
  };

  let bookCylinder = () => {
    let url = `http://localhost:8080/book?cylinderid=1&conid=1`;
    axios.get(url).then((response) => {
      console.log(response.data);
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
                        to={"/"}
                        style={{
                        color: "aliceblue",
                        fontWeight: "lighter",
                        fontSize: "large",
                        cursor: "pointer",
                        }}
                        >Contact Us
                    </Link>
                    
                    <Link
                        className="nav-link"
                        to={"/"}
                        style={{
                        color: "aliceblue",
                        fontWeight: "lighter",
                        fontSize: "large",
                        }}
                        >Log out
                    </Link>
                    </div>
                </div>
                </div>
            </nav>
    <div className="container-fluid">
      <div
        className=" row  justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className=" border border-primary-subtle bg-secondary-subtle  col-md-6 col-sm-12">
          <h1>Book Your Cylinder</h1>
          <h3>Refill cylinder request for</h3>
          <select id="dropdown">
            <option value="N/A">LPG Refill - 14.2 Kg</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div className="row d-flex">
            <div className="col-md-6 col-sm-12">
              <h4>Distributor Name</h4>
              <p className="">INDANE</p>
              <h4>Consumer Name</h4>
              <p>{pending.name}</p>
              <h4>Registered Contact Number</h4>
              <p>{pending.mobileNo}</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4>Consumer Number</h4>
              <p>{pending.mobile_no}</p>
              <h4>Shipping Address</h4>
              <p>{pending.address}</p>
              <h4>Consumer Email-Id</h4>
              <p>{pending.eamil}</p>
            </div>
          </div>
          <div>
            <h4>Price</h4>
            <p>{cylinder.price}</p>
          </div>
          <div className="mb-2 justify-content-center">
            <button
              className="btn  w-25 btn-primary "
              onClick={bookCylinder}
              type="button"
            >
              Book
            </button>
            <button className="btn ms-2 w-25 btn-primary " type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}