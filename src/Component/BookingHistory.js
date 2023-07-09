import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function BookingHistory() {
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
        <div
          className="row justify-content-center align-items-center "
          style={{ height: "70vh" }}
        >
          <div className="col-md-10 col-sm-12">
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Booking Date</th>
                  <th scope="col">Cylinder Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>Larry the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer/>
      </>
    );
  }