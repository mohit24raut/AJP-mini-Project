import "./PendingCon.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function PendingCon()
{
    let navigate = useNavigate();
    let [pending, setPending] = useState([]);

    useEffect(()=>{onEnter();}, []);
    let onEnter= ()=>{
        let url = `http://localhost:9292/getPendingStatus?status=Pending`;
        axios.post(url).then((response)=>{
            setPending(response.data);
            console.log(response.data);
            console.log(pending == 0);
        })
    }

    const Approved = async(item)=>{
        let url = `http://localhost:9292/updateStatus?pending=Approve&id=${item.id}`;
        axios.get(url).then((response)=>{
            console.log(response);
            navigate("/PendingCon");
        })
        
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
                <div className="row">
                    <div className="col">
                        <h1 style={{textAlign:"center", fontFamily:"cursive"}}>Pending Consumer Connection</h1>
                    </div>
                </div>

                
                    <div className="row justify-content-center my-1" >
                        <div className="col-sm-8 p-1 my-1">
                            

                            {pending.map((item, index)=>(
                                    <>
                                        <div className="row connection my-2 p-1">
                                            <div className="col-1">
                                                <img src="/ProfilePic.png" alt="" className="profilepic"/>
                                            </div>
                                            <div className="col-10">
                                                <h6>Name :- {item.name}</h6>
                                                <h6>DOB :- {item.dob}</h6>
                                                <h6>Email Id :- {item.eamil}</h6>
                                                <h6>Status :- <span style={{color:"red"}}>Pending</span></h6>
                                                <Button variant="primary" onClick={()=>Approved(item)}>
                                                    Click Here
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                ))}
                        </div>
                    </div>
                <Footer className="sticky-bottom"/>
            </div>
        </>
    )
}