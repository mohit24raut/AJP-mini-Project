import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Footer from "./Footer";

export function HomePage() {
  let navigate = useNavigate();
  let goToConnection = () => {
    navigate("/Registration");
  };
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
                    <li class="nav-item dropdown" style={{color: "aliceblue",fontWeight: "lighter",fontSize: "large"}}>
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "aliceblue",fontWeight: "lighter",fontSize: "large"}}>
                        Registration
                      </a>
                      <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to={"/UserRegister"}>User Registration</Link></li>
                        <li><Link class="dropdown-item" to={"/AdminRegistration"}>Admin Registraton</Link></li>
                      </ul>
                    </li>
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
                      <h1 className="text-center">WELCOME !</h1>
                      <p>Create Connection With Us &#128525;</p>
                      <input type="button" value="Click Me" className="form-control d-block mx-auto bg-warning-subtle fs-4" onClick={goToConnection}/>
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

                <Footer/>
            </div>
        </>
    );
}