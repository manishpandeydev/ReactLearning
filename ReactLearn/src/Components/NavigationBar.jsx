import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";

const NavigationBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ paddingLeft: "12rem" }}>
            <img
              src="https://goorderz.hu/wp-content/uploads/2021/06/logo-faded-purple.png"
              style={{ width: "fitcontent", height: "3rem" }}
            ></img>
          </a>

          <div
            class="collapse navbar-collapse"
            id="navbarText"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "right",
              padding: "8px",
            }}
          >
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  margin: "1rem",
                  backgroundColor: "transparent",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Our Services
              </button>
              <ul
                class="dropdown-menu "
                style={{ width: "20rem", zIndex:"20000"}}
              >
                <li className="listm">GoPOS- Hospitality software</li>
                <li className="listm">GoAPP- Your Own Application</li>
                <li className="listm">GoKIOSK- Self-service</li>
                <li className="listm">Webshop- Woocommerce</li>
                <li className="listm">Restaurant, food photography</li>
              </ul>
            </div>
            <a
              class="navbar-text"

              style={{
                cursor:"pointer",
                textDecoration:"none",
                marginRight: "1rem",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Packages
            </a>
            <span
              class="navbar-text"
              style={{ cursor:"pointer",
              textDecoration:"none", color: "white", fontWeight: "bold" }}
            >
              Blogs
            </span>
            <button
              className="btn"
              style={{
                marginRight: "4rem",
                marginLeft: "0.8rem",
                width: "7rem",
                borderRadius: "4rem",
                backgroundColor: "#892be2",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          marginBottom: "4rem",
        }}
      >
        Contact
      </h1>

      <div
        style={{
          height: "fitcontent",
          backgroundColor: "#eee",
          width: "30rem",
          zIndex: "1000",
          display: "flex",
          padding: "1rem",
          justifySelf: "center",
          justifyContent: "center",
          borderTopLeftRadius: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#993be9",
            width: "28rem",
            display: "flex",
            justifySelf: "center",
            borderTopLeftRadius: "2rem",
            justifyContent: "center",
            padding: "1rem",
            height: "fitcontent",
          }}
        >
          <form
            style={{
              marginTop: "1rem",
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "1rem",
              width: "25rem",
            }}
          >
            <h1>Contact Us</h1>
            <h5>Enter details below!</h5>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleCheck1" class="form-label position-relative">
                Company
              </label>
              <input type="text" class="form-control" id="exampleCheck1" />
            </div>
            <div class="mb-3">
              <label for="exampleCheck1" class="form-label position-relative">
                Message
              </label>
              <textarea
                class="form-control"
                placeholder="Leave a message here..."
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
            </div>
            <div
              class="card mb-3"
              style={{
                width: "14rem",
                margin: "auto",
                backgroundColor: "#eee",
                height: "8rem",
              }}
            >
              <div class="card-body">
                <span style={{display:"flex"}}>
                <input
                  type="checkbox"
                  style={{
                    width: "1.5rem",
                    height: "1.8rem",
                  }}
                ></input><p style={{fontSize:"1.2rem"}}>I'm no a robot</p>


                </span>

              </div>
              <p style={{ textAlign: "center" }}><i className="bi bi-arrow-clockwise" style={{fontSize:"1.2rem"}}>Captcha</i> </p>
              <br />
            </div>
            <button
              style={{ margin: "0 auto", display: "flex" }}
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
            <div className="mb-3">
              <p style={{ textAlign: "center" ,fontFamily:"fantasy"}}>
                Never share your credit details here!
              </p>
              <p style={{ textAlign: "center", color: "red" ,fontFamily:"cursive"}}>
                Created by Manish kr. Pandey
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default NavigationBar;
