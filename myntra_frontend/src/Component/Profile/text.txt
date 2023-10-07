import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Profile.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { MyntraContext } from "./Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Profile = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [prevValue, setPrevValue] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  // console.log(prevValue);

  const route = useNavigate();
  const { state, login } = useContext(MyntraContext);

  const updateProfileDetails = (e) => {
    const { name, value } = e.target;
    setPrevValue({ ...prevValue, [name]: value });
  };

  const submitUpdateProfileDetails = async (e) => {
    e.preventDefault();

    const { name, password, confirmPassword } = prevValue;

    if (name && password && confirmPassword) {
      if (password === confirmPassword) {
        const token = JSON.parse(localStorage.getItem("myntraToken"));
        const response = await axios.post("http://localhost:8000/editprofile", {
          token,
          prevValue,
        });

        if (response.data.success) {
          const userData = response.data.updateUser;
          login(userData, token);
          toast.success(response.data.message);
          setProfileModal(false);
        }
      } else {
        toast.warn("password doesnot match");
      }
    } else {
      toast.warn("all fields are mandatory");
    }
  };

  const openProfileModal = () => {
    setProfileModal(true);
  };
  const closeProfileModal = () => {
    setProfileModal(false);
  };

  useEffect(() => {
    if (!state?.currentuser?.name) {
      route("/");
    }
  }, [state]);

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* edit profile modal */}

      {profileModal && (
        <div className="editProfileModal">
          <p onClick={closeProfileModal} className="closeProfileContainer">
            X
          </p>
          <form
            className="updateProfileForm"
            onSubmit={submitUpdateProfileDetails}
          >
            <div>
              <input
                type="text"
                onChange={updateProfileDetails}
                placeholder="Update Name"
                value={prevValue.name}
                name="name"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={updateProfileDetails}
                placeholder="Update password"
                value={prevValue.password}
                name="password"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={updateProfileDetails}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={prevValue.confirmPassword}
              />
            </div>
            <div>
              <input type="submit" value="UPDATE DETAILS" />
            </div>
          </form>
        </div>
      )}

      {/* main body profile */}
      <div id="body">
        <div id="main-body">
          <div id="top">
            <h2>Account</h2>

            {state?.currentuser && (
              <p
                style={{
                  color: "orange",
                  fontWeight: "bolder",
                  fontSize: "1.2em",
                }}
              >
                {state?.currentuser?.name}
              </p>
            )}
          </div>
          <div id="middle">
            <div id="left">
              <div>
                <div>
                  <p>Overiew</p>
                </div>
                <div>
                  <h2>ORDERS</h2>
                  <p>Orders & Returns</p>
                </div>
                <div>
                  <h2>CREDITS</h2>
                  <p>Coupons</p>
                  <p>Myntra Credit</p>
                  <p>MynCash</p>
                </div>
                <div>
                  <h2>ACCOUNT</h2>
                  <p id="prof">Profile</p>
                  <p>Saved Cards</p>
                  <p>Saved VPA</p>
                  <p>Addressess</p>
                  <p>Myntra Insider</p>
                </div>
                <div>
                  <h2>LEGAL</h2>
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
            <div id="right">
              <div id="right-content">
                <div id="heading">
                  <h2>Profile Details</h2>
                </div>
                <div id="details">
                  <div>
                    <p>Name</p>
                    <p>Mobile Number</p>
                    <p>Email ID</p>
                    <p>Gender</p>
                    <p>Date of Birth</p>
                    <p>Location</p>
                    <p>ROLE</p>
                    <p>Hint Name</p>
                  </div>
                  <div>
                    {state?.currentuser && (
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "bolder",
                          fontSize: "1.2em",
                        }}
                      >
                        {state?.currentuser?.name}
                      </p>
                    )}
                    <p>xxxxxxxx968</p>
                    <p
                      style={{
                        color: "orange",
                        fontWeight: "bolder",
                        fontSize: "1.2em",
                      }}
                    >
                      {state?.currentuser?.email}
                    </p>
                    <p>Male</p>
                    <p>dd//mm//yyy</p>
                    <p>Mumbai</p>
                    {state?.currentuser && (
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "bolder",
                          fontSize: "1.2em",
                        }}
                      >
                        {state?.currentuser?.role}
                      </p>
                    )}
                    <p>Mano</p>
                  </div>
                </div>
                <div id="edit-btn">
                  <button onClick={openProfileModal}>EDIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
