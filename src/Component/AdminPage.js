import "./AdminPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

export default function AdminPage() {
  let navigate = useNavigate();
  let goToPending = () => {
    navigate("/PendingCon");
  };
  let goToConsumer = () => {
    navigate("/TotalConn");
  };
  let goToStock = () => {
     navigate("/Stock");
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
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10 mt-1">
          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.power-eng.com/wp-content/uploads/2019/12/CameronLNG.png" className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://cdn.zeebiz.com/sites/default/files/2018/11/04/58525-oil-reuters1.jpg" className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://kiakiagas.com/sites/default/files/styles/large/public/photos/blog/1_9.jpg?itok=DDjjfUVb" className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p id="h2feat">Services</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <img
                    src="/Connection.png"
                    className="card-img-top imgCard"
                    width={200} // Adjust the value to change the width
                  />
                  <Card.Body>
                    <Card.Title>Pending Connection</Card.Title>
                    <Button variant="primary" onClick={goToPending}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <img
                    src="/UserConnection.png"
                    
                    className="card-img-top imgCard"
                    width={200} // Adjust the value to change the width
                  />
                  <Card.Body>
                    <Card.Title>Consumer</Card.Title>
                    <Button variant="primary" onClick={goToConsumer}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4">
                <Card style={{ width: "16rem" }}>
                  <video
                    src="stock-footage-charity-donation-k-animation-with-a-jar-of-coin-and-hands-raising-funds-concept-for-poor-people.webm"
                    autoPlay
                    loop
                    className="card-img-top imgCard"
                    width={200} // Adjust the value to change the width
                  />
                  <Card.Body>
                    <Card.Title>Stock</Card.Title>
                    <Button variant="primary" onClick={goToStock}>
                      Click Here
                    </Button>
                  </Card.Body>
                </Card>
              </div>
             
            </div>
          </div>
        </div>
        
        <div
                className="row justify-content-center align-item-center p-2"
                style={{ backgroundColor: "#4a3635" }}
              >
                <div className="col-sm-6 ">
                  <p className="page">
                    Content on this website is owned, updated, and managed by the 
                  </p>  
                  <p className="page">
                    CDAC Cooking Gas pvt lmt, Government of India.
                  </p>
                  <p className="page">Designed and Developed by CDAC Mumbai</p>
                  <p className="page">Follow Us On</p>
                </div>
                <div className="col-sm-5 ">
                  <p className="page">
                    Toll FREE Number: 1800-2333-555
                  </p>
                  <p className="page">Commercial LPG Helpline No. 1860-5991-111</p>
                  <p className="page">Last updated on 03/07/2023 01:10 PM</p>
                </div>
                <div className="col-sm-1">
                  <img src="https://1.bp.blogspot.com/-3hatBLgnA6M/VwnzLx9ZcqI/AAAAAAAAE74/z5dQE1VgjFg4sWJ4yp2laew6sOfwVV0Sg/s1600/wsscc-to-support-swachh-bharat-slider.png" className="swachimg"/>
                </div>
              </div>
      </div>
    </>
  );
}