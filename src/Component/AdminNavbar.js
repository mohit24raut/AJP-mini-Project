
import "./AdminNavbar.css";

export default function AdminNavbar() {
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
            <a
              className="nav-link active"
              aria-current="page"
              href="http://127.0.0.1:5500/HomePage.html"
              style={{
                color: "aliceblue",
                fontWeight: "lighter",
                fontSize: "large",
              }}
              >Home</a
            >
            <a
              className="nav-link"
              href="http://127.0.0.1:5500/7.html"
              style={{
                color: "aliceblue",
                fontWeight: "lighter",
                fontSize: "large",
              }}
              >Login</a
            >
            <a
              className="nav-link "
              href="http://127.0.0.1:5500/aboutus.html"
              style={{
                color: "aliceblue",
                fontWeight: "lighter",
                fontSize: "large",
                cursor: "pointer",
              }}
              >About Us</a
            >
            <a
              className="nav-link"
              href="http://127.0.0.1:5500/contact.html"
              style={{
                color: "aliceblue",
                fontWeight: "lighter",
                fontSize: "large",
                cursor: "pointer",
              }}
              >Contact Us</a
            >
          </div>
        </div>
      </div>
      </nav>
    </>
  );
}