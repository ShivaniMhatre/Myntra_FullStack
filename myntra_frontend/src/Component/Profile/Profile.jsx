import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import '../Profile/Profile.css';
import { AuthContext } from '../Context/AuthContext';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../Config/API'

const Profile = () => {
  const { state, Login } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [prevValue, setPrevValue] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [profileModal, setProfileModal] = useState(false);
  const route = useNavigate();

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUserData({ ...userData, [name]: value })
  // }
  // useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem('Token'))
  //     if (!user) {
  //         route('/login')
  //     }
  //     const alluser = JSON.parse(localStorage.getItem('MyntraUser'))
  //     for (let i = 0; i < alluser.length; i++) {
  //         if (alluser[i].email == user.email && alluser[i].password == user.password) {
  //             setUserData(alluser[i])
  //         }
  //     }
  // }, [])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const user = JSON.parse(localStorage.getItem('MyntraCurrent-User'))
  //   const alluser = JSON.parse(localStorage.getItem('MyntraUser'))
  //   for (let i = 0; i < alluser.length; i++) {
  //     if (alluser[i].email == user.email && alluser[i].password == user.password) {
  //       alluser[i].name = userData.name;
  //       alluser[i].password = userData.password;
  //       user.name = userData.name;
  //       user.password = userData.password;
  //     }
  //   }
  //   Login(user)
  //   localStorage.setItem("MyntraUser", JSON.stringify(alluser));
  //   localStorage.setItem("MyntraCurrent-User", JSON.stringify(user));
  //   setUserData({});
  //   toast.success("Profile Updated");
  //   route('/');
  // }

  const updateProfileDetails = (e) => {
    const { name, value } = e.target;
    setPrevValue({ ...prevValue, [name]: value });
  };

  const submitUpdateProfileDetails = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = prevValue;

    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        const token = JSON.parse(localStorage.getItem("Token"));
        const response = await api.post("/editprofile", {
          token,
          prevValue,
        });

        if (response.data.success) {
          const userData = response.data.updateUser;
          Login(userData, token);
          toast.success(response.data.message);
          setProfileModal(false);
        }
      } else {
        toast.warn("password doesnot match");
      }
    } else {
      toast.error("all fields are mandatory");
    }
  };

  const openProfileModal = () => {
    setProfileModal(true);
  };
  const closeProfileModal = () => {
    setProfileModal(false);
  };

  return (
    <div>
      {/*Edit Modal*/ }
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
                type="email"
                onChange={updateProfileDetails}
                placeholder="Update Email"
                value={prevValue.email}
                name="email"
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
      <Navbar />
      <div id="profile_body">
        <div id="profile_main">
          <div id="top">
            <h2>Account</h2>
            <p>{state?.user?.name}</p>
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
                  <h1>Profile Detail</h1>
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
                    {state?.user && (
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "bolder",
                          fontSize: "1.2em",
                        }}
                      >
                        {state?.user?.name}
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
                      {state?.user?.email}
                    </p>
                    <p>Male</p>
                    <p>dd//mm//yyy</p>
                    <p>Mumbai</p>
                    {state?.user && (
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "bolder",
                          fontSize: "1.2em",
                        }}
                      >
                        {state?.user?.role}
                      </p>
                    )}
                    <p>shiva</p>
                  </div>
                </div>
                <div id="edit-btn">
                  <button onClick={openProfileModal}>EDIT</button>
                </div>
              </div>
            </div>
          </div>

          {/* <div id="footer">
            <div id="footer-child">
              <div id="onlineShopping">
                <h4 class="headings">Online Shopping</h4>
                <ul id="onlineShop-list">
                  <li>Men</li>
                  <li>Women</li>
                  <li>kids</li>
                  <li>Home Living</li>
                  <li>Beauty</li>
                  <li>Gift Cards</li>
                </ul>

                <h4 id="useful-links">Useful Links</h4>
                <ul>
                  <li>Blogs</li>
                  <li>Careers</li>
                  <li>Site map</li>
                  <li>Corporate Informations</li>
                  <li>White Hat</li>
                </ul>
              </div>
              <div id="customerPolicies">
                <h4 class="headings">Customer Policies</h4>

                <ul>
                  <li>Contact us</li>
                  <li>FAQ</li>
                  <li>T&C</li>
                  <li>Terms of use</li>
                  <li>Track Orders</li>
                  <li>Shipping</li>
                  <li>Cancellations</li>
                  <li>Returns</li>
                  <li>Privacy policy</li>
                  <li>Grievance officer</li>
                </ul>
              </div>
              <div id="experience">
                <h4>Experience Myntra App on Mobile</h4>

                <div style="display: flex">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                    alt=""
                  />
                  <img
                    src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                    alt=""
                    style="padding-left: 10px"
                  />
                </div>

                <h5>Keep in Touch</h5>

                <div id="social-link" style="display: flex">
                  <i class="fa-brands fa-square-facebook fa-xl"></i>
                  <i
                    class="fa-brands fa-twitter fa-xl"
                    style="padding-left: 15px"
                  ></i>
                  <i
                    class="fa-brands fa-youtube fa-xl"
                    style="padding-left: 15px"
                  ></i>
                  <i
                    class="fa-brands fa-square-instagram fa-xl"
                    style="padding-left: 15px"
                  ></i>
                </div>
              </div>
              <div id="guarantee">
                <div style="display: flex; align-items: center">
                  <div>
                    <img
                      src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                      alt=""
                      width="50px"
                    />
                  </div>

                  <div style="padding-left: 20px; line-height: 5px">
                    <div>
                      <strong>100% Original</strong> <span>guarantee for</span>
                    </div>
                    <p>all products at myntra.com</p>
                  </div>
                </div>

                <div
                  style="display: flex; align-items: center; margin-top: 10px"
                >
                  <div>
                    <img
                      src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                      alt=""
                      width="50px"
                    />
                  </div>

                  <div style="padding-left: 20px; line-height: 5px">
                    <strong>Return within 30days</strong> <span>of</span>
                    <p>receiving your order</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile