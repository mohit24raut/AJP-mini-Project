import "./AboutUs.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function About()
{
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
                <section className="hero">
                  <div className="heading">
                    <h1 style={{ display: "flex", justifyContent: "center" }}>
                      About Us
                    </h1>
                  </div>
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-5 my-5 border"
                      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                    >
                      <h2 className="hero-content-h2">CDAC Cooking Gas</h2>
                      <p style={{ textAlign: "justify" }} className="hero-content-p">
                      CDAC Cooking Gas has played a major role in India’s transition to cleaner fuels from the time it started marketing Liquified Petroleum Gas (LPG) in 1975. Brand Indane was conceived in 1974 to bring modern cooking to Indian kitchens and the first Indane LPG connection was released on 22nd October 1975 in Mumbai. From a humble beginning of a consumer base of around 2,000 in 1975, the brand has grown into a super brand that rules nearly 16 crore kitchens. As a matter of fact, every second cooking gas connection in India is an CDAC Cooking Gas.
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-7   ">
                      <img
                        src="/AboutUs.jpeg"
                        alt=""
                        className="imgOldPerson"
                        style={{ height: "300px", width:"100%" }}
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div className="container-fluid">
                <div className="row my-4">
                  <div
                    className="col-md-4 border"
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="details">
                      <h2>Aim</h2>
                      <p style={{ textAlign: "justify" }}>
                        CDAC has now become one of the largest packed-LPG brands in the world, with CDAC gas as the second-largest marketer of LPG globally. CDAC is a Consumer Superbrand as conferred by the Superbrands Council of India. It is a brand synonymous with safety, reliability, and convenience.
                        To improve LPG penetration in the country and help better the lives of rural masses, CDACGas undertook the task of achieving 100% LPG penetration in the country in December 2015. Vyachakurahalli in Chikkaballapur district in Karnataka became the country’s first smokeless village, entering into the Limca Book of Records-2017.
                      </p>
                      <a href="https://egramswaraj.gov.in/">read more</a>
                    </div>
                  </div>
                  <div
                    className="col-md-4 border"
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="details">
                      <h2>Mission</h2>
                      <p style={{ textAlign: "justify" }}>
                      CDAC Cooking Gas mission statement is "Taking the lead to fuel india's energy needs CDAC Cooking Gas's cross-country pipeline network facilitates crude oil transportation to refineries and finished products to high-demand centres in an efficient, economical, and environment-friendly manner."
                      </p>
                      <a href="https://egramswaraj.gov.in/">read more</a>
                    </div>
                  </div>
                  <div
                    className="col-md-4 border"
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="details">
                      <h2>Vision</h2>
                      <p style={{ textAlign: "justify" }}>
                          Every COCian, present and future, must embody these revitalized values that will steer us towards greater heights. We encourage each one of you to reflect on how you bring these values to life every day. This self-reflection and awareness will ensure that our internal compass is always pointed towards our North Star. These new values will also be reflected on our company website as a public commitment to all our stakeholders.
                          From this day forward, let us recommit ourselves to our values of Care, Innovation, Passion, Trust, and Nation-first with renewed fervor as we embark on this new era. Welcome to the future of CDAC Cooking Gas.
                      </p>
                      <a href="https://egramswaraj.gov.in/">read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="container">
                <div className=" row justify-content-center">
                    <div className="col-sm-4 border 2px">
                        <img src="https://iocl.com/images/static/banner-3.jpg" className="gasimg"/>
                    </div>
                    <div className="col-sm-4 border 2px">
                        <img src="https://iocl.com/images/static/pmyu-tollfree.jpg" className="gasimg"/>
                    </div>
                    <div className="col-sm-4 border 2px ">
                        <img src="https://iocl.com/images/static/lpg-help-line.jpg" className="gasimg"/>
                    </div>
                </div>
              </div>
              <div
                className="details"
                style={{ display: "flex", justifyContent: "center", color: "Coral" }}
              >
                <h1 style={{ height: "10px" }}>OUR TEAM</h1>
              </div>
              <br />
              <br />
              <div
                className="row justify-content-center p-5 border border-5 border-shadow p-3 mb-5 bg-dark-subtle rounded"
                style={{
                  boxSizing: "border-box",
                  margin: "0%",
                  padding: "0%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="col-sm-12 col-md-3">
                  <div className="card">
                    <img
                      src="Ar.jpeg"
                      className="card-img-top imgUs"
                      alt=""
                    />
                    <div className="card-body">
                      <h5>Aniket Raut</h5>
                      <p className="card-text">
                        Currently Pursuing PGDAC from CDAC MUMBAI
                      </p>
                    </div>
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col-sm-12 col-md-3">
                  <div className="card">
                    <img
                      src="Mr.jpg"
                      className="card-img-top imgUs"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mohit Raut</h5>
                      <p className="card-text">
                        Currently Pursuing PGDAC from CDAC MUMBAI
                      </p>
                    </div>
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col-sm-12 col-md-3">
                  <div className="card">
                    <img
                      src="Ag.jpeg"
                      className="card-img-top imgUs"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Aniket Ghargate</h5>
                      <p className="card-text">
                        Currently Pursuing PGDAC from CDAC MUMBAI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Footer/>
            </>
          );
}