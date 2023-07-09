
import { useRef, useState } from "react";

function Contact() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    feedback: "",
  });

  let handleChnageFirstnameAction = (e) => {
    let newContact = { ...contact, firstname: e.target.value };
    setContact(newContact);
  };

  let handleChangeLastnameAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, lastname: e.target.value };
    setContact(newContact);
  };
  let handleChangeEmailAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, email: e.target.value };
    setContact(newContact);
  };
  let handleChangeMobileAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, mobile: e.target.value };
    setContact(newContact);
  };
  let handleChangeFeedbackAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, feedback: e.target.value };
    setContact(newContact);
  };

  let addContactAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:4000/addcontact?firstname=${contact.firstname}&lastname=${contact.lastname}&email=${contact.email}&mobile=${contact.mobile}&feedback=${contact.feedback}`;
      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }
      let newContact = {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        feedback: "",
      };
      setContact(newContact);
      formRef.current.classList.remove("was-validated");
      alert("Registration Succesfull");
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 2000);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text">
            Talk to the member of our team and get your issues resolved. We will
            help you to find a perfect solution for your problems.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fas fa-mobile-alt"></i>
              </span>
              <span>Phone No.</span>
              <span className="text">9970853276</span>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <span>E-mail</span>
              <span className="text">aniketraut@Teamo.com</span>
            </div>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>Address</span>
              <span className="text">221B, Baker Street</span>
            </div>
            <div>
              <span>
                <i className="fas fa-clock"></i>
              </span>
              <span>Opening Hours</span>
              <span className="text">24*7</span>
            </div>
          </div>

          <div className="row contact-form justify-content-center text-center">
            <form
              ref={formRef}
              className="col-md-8 col-sm-12 form-floating needs-validation"
            >
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={contact.firstname}
                  onChange={handleChnageFirstnameAction}
                  required
                  pattern="^[a-zA-Z]{3,15}$"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={contact.lastname}
                  onChange={handleChangeLastnameAction}
                  required
                  pattern="^[a-zA-Z]{3,15}$"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  value={contact.email}
                  onChange={handleChangeEmailAction}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  value={contact.mobile}
                  onChange={handleChangeMobileAction}
                  required
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                value={contact.feedback}
                onChange={handleChangeFeedbackAction}
                className="form-control"
                required
              ></textarea>
              <input
                type="button"
                className="send-btn"
                onClick={addContactAction}
                value="send message"
              />
            </form>
          </div>
        </div>

        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#4a3635" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Information
                  </h6>
                  <p>
                    Online dating, also known as Internet dating, Virtual
                    dating, or Mobile app dating, is a method used by people
                    with a goal of searching for and interacting with potential
                    romantic or sexual partners, via the internet.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a className="text-white">Video chat</a>
                  </p>
                  <p>
                    <a className="text-white">Play Music</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Kharghar,Mumbai
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    aniketraut@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> 9970853276
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> 7625452545
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#55acee" }}
                    href="https://twitter.com/"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="https://discord.com/"
                    role="button"
                  >
                    <i className="fa-brands fa-discord"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#0082ca" }}
                    href="https://www.linkedin.com"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#eef660" }}
                    href="https://www.snapchat.com/"
                    role="button"
                  >
                    <i
                      className="fa-brands fa-snapchat"
                      style={{ color: "#000000" }}
                    ></i>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 TeAmo.com: All rights reserved.
          </div>
        </footer>
      </section>
    </>
  );
}
export default Contact;