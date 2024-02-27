import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div>
        <div className="top-div">
          <NavigationBar />
        </div>
        <div
          className="myDiv"
          style={{
            marginTop: "55rem",
            marginBottom: "5rem",
            minWidth: "100vh",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>
            Let's discuss<br></br>
            <h2>the details!</h2>
          </h1>
          <h4 style={{ marginLeft: "3rem" }}>
            If you have questions ,please write to{" "}
            <span style={{ color: "darkviolet", fontWeight: "bold" }}>
              info@goorderz.hu
            </span>{" "}
            or call us :{" "}
            <span style={{ color: "darkviolet", fontWeight: "bold" }}>
              +36 30 495 1539
            </span>{" "}
            <br />
            <div style={{width:"100%",textAlign:"center",color:"darkviolet",fontSize:"2rem"}}>
            <i className="bi bi-instagram"></i> <i className="bi bi-facebook"></i> <i className="bi bi-envelope"></i>
            </div>


            If you have any errors or development needs, simply let us know:
          </h4>
          <button
            className="btn btn-primary mb-3"
            style={{
              backgroundColor: "#892be2",
              border: "none",
              borderRadius: "5rem",
              fontWeight: "bold",
            }}
          >
            Error Report
          </button>
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "5rem",
              backgroundColor: "#892be2",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Development Needs
          </button>
        </div>
      </div>
      <div
        className="top-div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
          Lets discuss the details!
        </h1>
        <span>
          <button
            className="btn btn-primary"
            style={{
              margin: "1rem",
              borderRadius: "5rem",
              backgroundColor: "#892be2",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Lets get into it <i className="bi bi-arrow-right-circle"></i>
          </button>
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "5rem",
              backgroundColor: "transparent",
              border: "3px solid white",
              fontWeight: "bold",
            }}
          >
            Request a call back! <i className="bi bi-telephone-forward"></i>
          </button>
        </span>
      </div>
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            ></a>
            <img
              style={{ width: "11.5rem", height: "4.2rem" }}
              src="https://goorderz.hu/wp-content/uploads/2021/06/logo-faded-purple.png"
              class="text-body-secondary"
            ></img>
            <br />

            <i
              class="bi bi-envelope"
              style={{ fontSize: "1rem", color: "darkviolet" }}
            >
              {" "}
              info@goorderz.hu
            </i>

            <br />
            <i
              class="bi bi-phone"
              style={{ fontSize: "1rem", color: "darkviolet" }}
            >
              {" "}
              +36 30 495 1539
            </i>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5 style={{fontWeight:"bold"}}>Our Packages</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i> GoPOS
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i> GoKIOSK
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i>  GoAPP
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i>  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 style={{fontWeight:"bold"}}>Our pages</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i>  About us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i>  Prices and packages
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i>  Blog
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-arrow-right-circle-fill" style={{color:"darkviolet",fontSize:"1.2rem"}}></i>  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 style={{fontWeight:"bold"}}>Social media</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                 <i className="bi bi-facebook" style={{color:"darkviolet",fontSize:"1.2rem"}}> Facebook</i>
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                <i className="bi bi-instagram" style={{color:"darkviolet",fontSize:"1.2rem"}}> Instagram</i>
                </a>
              </li>
            </ul>
            <br></br>
            <br></br>

          </div>
          <div style={{display:"flex",width:"100%",justifyContent:"space-evenly",flexWrap:"wrap"}}>
          <img style={{width:"6rem",height:"4rem"}} src="https://goorderz.hu/wp-content/uploads/2022/01/EU_zaszlo_text_CMYK_hu-1024x913.jpg"></img>
          <img style={{width:"10rem",height:"3rem"}} src="https://goorderz.hu/wp-content/uploads/2022/01/LOGO_hiventures-14-1-1024x227.png"></img>

          <p style={{ color: "black",  float:"right",marginTop:"1rem",fontFamily:"cursive"}}>
              Privacy Policy Cookie management Application data Impulse
            </p>
          </div>

        </footer>
      </div>
      <div
        style={{
          width: "100%",
          height: "fitcontent",
          textAlign: "center",
          backgroundColor: "#892be2",
          color: "white",
          padding: "0.4rem",
        }}
      >
        <h6 style={{ textAlign: "center", alignSelf: "center" }}>
          2024 © All rights reserved | Designed by: Manish pandey
        </h6>
      </div>
    </>
  );
}

export default App;
