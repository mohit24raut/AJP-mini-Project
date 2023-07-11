import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

export default function TotalConn() {

    let [pending, setPending] = useState([]);

    useEffect(()=>{onEnter();}, []);
    let onEnter= ()=>{
        let url = `http://localhost:9292/getPendingStatus?status=Approve`;
        console.log(url);
        axios.post(url).then((response)=>{
            setPending(response.data);
            console.log(response.data);
            console.log(pending == 0);
        })
    }

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
        <div className="row" style={{ marginTop:"5vh"}}>
                    <div className="col">
                        <h1 style={{textAlign:"center", fontFamily:"cursive"}}>Total Consumer Connection</h1>
                    </div>
                </div>
        <div
          className="row justify-content-center "
          style={{ marginTop:"5vh", height:"55vh"}}
        >
          <div className="col-md-10 col-sm-12">
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date Of Birth</th>
                  <th scope="col">Address</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((item, index)=>(
                    <>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.eamil}</td>
                            <td>{item.dob}</td>
                            <td>{item.address}</td>
                            <td>{item.status}</td>
                        </tr>
                    </>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
        </div>
        <div className="container-fluid">
          <Footer/>
        </div>
      </>
    );
  }