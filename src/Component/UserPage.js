import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";


function UserPage() {

    let navigate = useNavigate();
  let goToBooking = () => {
    navigate("/Booking");
  };
  let goToHistory = () => {
    navigate("/BookingHistory");
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
                className=" img-fluid my-1"
                style={{
                backgroundImage: `url("https://hpcladmin.hindustanpetroleum.com/img/UploadedFiles/HomeBanner/EnglishBanners/1bd5f92de3eb45f895681389504c6356.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "50vh",

                display: "flex",
                width: "100vw",
                }}
            ></div>
            <hr />
            <div className="container mt-5 px-4 text-center">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                <div className="col mb-4">
                    <Card style={{ width: "16rem" }}>
                    <img
                        src=""
                        className="card-img-top imgCard"
                        width={200} // Adjust the value to change the width
                    />
                    <Card.Body>
                        <Card.Title>Booking</Card.Title>
                        <Button variant="primary" onClick={goToBooking}>
                        Book
                        </Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col mb-4">
                    <Card style={{ width: "16rem" }}>
                    <img
                        src=""
                        className="card-img-top imgCard"
                        width={200} // Adjust the value to change the width
                    />
                    <Card.Body>
                        <Card.Title>Booking History</Card.Title>
                        <Button variant="primary" onClick={goToHistory}>
                        View
                        </Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col mb-4">
                    <Card style={{ width: "16rem" }}>
                    <img
                        src=""
                        className="card-img-top imgCard"
                        width={200} // Adjust the value to change the width
                    />
                    <Card.Body>
                        <Card.Title>Booking History</Card.Title>
                        <Button variant="primary" onClick="">
                        View
                        </Button>
                    </Card.Body>
                    </Card>
                </div>
                </div>
            </div>
            <hr />
      
      
        <Footer/>
        </div>
    </>
  );
}
export default UserPage;