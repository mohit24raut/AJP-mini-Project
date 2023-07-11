import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Stock()
{
    let navigate = useNavigate();
    let [pending, setPending] = useState([]);

    useEffect(()=>{onEnter();}, []);
    let onEnter= ()=>{
        let url = `http://localhost:9292/getPendingStatus?status=Pending`;
        axios.post(url).then((response)=>{
            setPending(response.data);
        })
    }
    return(
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
                    <div className="col-6">
                        <img src="1c.jpg" alt="" style={{width:"50vw", height:"100vh"}}/>
                    </div>
                
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <h1 style={{textAlign:"center", fontFamily:"cursive"}}>Stock</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center py-2">
                            <div className="col">
                                <Card style={{ width: "16rem" }}>
                                    <img
                                        src="/Connection.png"
                                        className="card-img-top imgCard"
                                        width={200} // Adjust the value to change the width
                                    />
                                    <Card.Body>
                                        <Card.Title>Type: LPG 14.2 Kg</Card.Title>
                                        <h6>Price: 1023.98</h6>
                                        <h6>Quantity: 256</h6>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col">
                                <Card style={{ width: "16rem" }}>
                                    <img
                                        src="/Connection.png"
                                        className="card-img-top imgCard"
                                        width={200} // Adjust the value to change the width
                                    />
                                    <Card.Body>
                                        <Card.Title>Type: LPG 19 Kg</Card.Title>
                                        <h6>Price: 1698.98</h6>
                                        <h6>Quantity: 1000</h6>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row justify-content-center py-2">
                            <div className="col">
                                <Card style={{ width: "16rem" }}>
                                    <img
                                        src="/Connection.png"
                                        className="card-img-top imgCard"
                                        width={200} // Adjust the value to change the width
                                    />
                                    <Card.Body>
                                        <Card.Title>Type: LPG 5 Kg</Card.Title>
                                        <h6>Price: 500</h6>
                                        <h6>Quantity: 56</h6>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col">
                                <Card style={{ width: "16rem" }}>
                                    <img
                                        src="/Connection.png"
                                        className="card-img-top imgCard"
                                        width={200} // Adjust the value to change the width
                                    />
                                    <Card.Body>
                                        <Card.Title>Type: LPG 7 Kg</Card.Title>
                                        <h6>Price: 790.98</h6>
                                        <h6>Quantity: 206</h6>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}