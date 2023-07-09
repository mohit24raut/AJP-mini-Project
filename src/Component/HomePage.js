import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./HomePage.css";

export function HomePage() {
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
                    <NavDropdown
                      className="nav-link me-auto fw-normal fs-6 navColor"
                      title="Register"
                      id="navbarScrollingDropdown"
                      
                    >
                      <NavDropdown.Item
                        className="nav-link me-3 fw-normal fs-5"
                        href="#action3"
                        style={{
                          color: "aliceblue",
                          fontWeight: "lighter",
                          fontSize: "large",
                          cursor: "pointer",
                        }}
                      >
                        Secretery Login
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="nav-link me-3 fw-normal fs-5"
                        href="#action4"
                        style={{
                          color: "aliceblue",
                          fontWeight: "lighter",
                          fontSize: "large",
                          cursor: "pointer",
                        }}
                      >
                        Memeber Login
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="nav-link me-3 fw-normal fs-5"
                        href="#action4"
                        style={{
                          color: "aliceblue",
                          fontWeight: "lighter",
                          fontSize: "large",
                          cursor: "pointer",
                        }}
                      >
                        Admin Login
                      </NavDropdown.Item>
                    </NavDropdown>
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
                <div className="row my-1" style={{height: "80vh"}}>
                    <div className="col">
                        <img src="/HomePage6.jpg" alt="" style={{height: "80vh", width:"100%"}}/>
                    </div> 
                </div>
                <div className="row d-flex align-items-center justify-content-center "style={{height:"40vh"}}>
                  <div className="col-sm-12 col-md-3 d-flex align-items-center justify-content-center">
                    <div >
                      <h1 className="text-center">WELCOME</h1>
                      <input type="button" value="click me" className="d-block mx-auto" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, dolorum beatae,
                          architecto nulla deserunt commodi id temporibus, at quo voluptates tenetur! Quaerat temporibus
                          dolore quidem pariatur similique vero maxime doloremque provident quibusdam voluptatem suscipit
                          deserunt quos adipisci facere illum, maiores consequatur ex eos eius. Tenetur laborum eligendi
                          in consequuntur amet!
                        </p>
                      </div>

                      <div className="col-sm-12 col-md-3">
                        <div >
                          <h1>Gas Booking</h1>
                          
                        </div>
                      </div>
                    </div>
                
                <div className="row">
                    <div className="col-sm-12">
                        <p id="h2feat">LPG Gas Safety Tips</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="https://cdn.supergas.com/-/media/sites/india/lpg-for-home/2j6a9907_1.jpg?w=860&hash=6A7B43A6CD3AFCB27029B2C191000E65" 
                                    alt=""
                                    className="safetyimg"/>
                        </div>
                        <div className="col-sm-7 justify-content-center p-3">
                            <h3 className="safetyheading">When Buying LPG</h3>
                            <p>Always make sure that you are buying from an authorized franchisee.</p>
                            <p>Do not forget to check the company seal and safety cap on the cylinder at the time of delivery.</p>
                            <p>Do not accept the cylinder if the seal is broken.</p>
                            <p>Do not accept the cylinder if the due date is over.</p>

                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-7 justify-content-center p-3">
                            <h3 className="safetyheading">When Cooking with LPG</h3>
                            <p>Keep the doors and windows of your kitchen open for proper ventilation.</p>
                            <p>Do not place flammable or plastic items near the flame.</p>
                            <p>Never leave your cooking unattended.</p>
                            <p>Wear clothes that do not catch fire easily.</p>
                            <p>Close the regulator knob to OFF position when cylinder is not in use</p>

                        </div>
                        <div className="col-sm-5">
                            <img src="https://cdn.supergas.com/-/media/sites/india/lpg-for-home/day-1-x-supergas0544_2.jpg?w=860&hash=C5B2BDEBFE767BDC088CD6F2D3F14E58" 
                                    alt=""
                                    className="safetyimg"/>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-sm-5">
                            <img src="https://cdn.supergas.com/-/media/sites/india/lpg-for-home/5c5a9809.jpg?w=860&hash=7ABA25A14D0C6795D02AC86D09C32BEC" 
                                    alt=""
                                    className="safetyimg"/>
                        </div>
                        <div className="col-sm-7 justify-content-center p-3">
                            <h3 className="safetyheading">If In Case Of Emergency</h3>
                            <p>Close regulator and burner knobs. Do not panic.</p>
                            <p>Open all doors and windows for ventilation.</p>
                            <p>Extinguish all flames, lamps, incense sticks and sources of fire.</p>
                            <p>Put the safety cap on the cylinder.</p>
                            <p>LPG is heavier than air and it settles on the ground. Use all available ventilation to disperse the gas</p>
                        </div>
                    </div>
                </div>

                <div
                className="row bg-dark justify-content-center align-item-center"
                style={{
                  boxSizing: "border-box",
                  margin: "0%",
                  padding: "1vh",
                }}
              >
                <div className="col-sm-6 ">
                  <p className="page">
                    Content on this website is owned, updated, and managed by the 
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