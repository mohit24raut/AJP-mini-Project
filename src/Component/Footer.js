import "./Footer.css";

export default function Footer()
{
    return(
        <>
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
        </>
    )
}