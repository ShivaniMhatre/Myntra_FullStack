import React from "react";
import "../Home/Footer.css";
const Footer = () => {
    return (
        <>
            <div id="footer">
                <div id="footer-child">
                    <div id="onlineShopping">
                        <h4 className="headings">Online Shopping</h4>
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
                        <h4 className="headings">Customer Policies</h4>

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

                        <div style={{ display: "flex" }}>
                            <img
                                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                                alt=""
                            />
                            <img
                                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                                alt=""
                                style={{ paddingLeft: "10px" }}
                            />
                        </div>

                        <h5>Keep in Touch</h5>

                        <div id="social-link" style={{ display: "flex" }}>
                            <i className="fa-brands fa-square-facebook fa-xl"></i>
                            <i
                                className="fa-brands fa-twitter fa-xl"
                                style={{ paddingLeft: "15px" }}
                            ></i>
                            <i
                                className="fa-brands fa-youtube fa-xl"
                                style={{ paddingLeft: "15px" }}
                            ></i>
                            <i
                                className="fa-brands fa-square-instagram fa-xl"
                                style={{ paddingLeft: "15px" }}
                            ></i>
                        </div>
                    </div>
                    <div id="guarantee">
                        <div style={{ display: " flex", alignItems: " center" }}>
                            <div>
                                <img
                                    src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                                    alt=""
                                    width="50px"
                                />
                            </div>

                            <div style={{ paddingLeft: "20px", lineHeight: "5px" }}>
                                <div>
                                    <strong>100% Original</strong> <span>guarantee for</span>
                                </div>
                                <p>all products at myntra.com</p>
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <div>
                                <img
                                    src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                                    alt=""
                                    width="50px"
                                />
                            </div>

                            <div style={{ paddingLeft: "20px", lineHeight: "5px" }}>
                                <strong>Return within 30days</strong> <span>of</span>
                                <p>receiving your order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
