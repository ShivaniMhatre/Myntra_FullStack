import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import '../Product/Single.css'
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import api from "../Config/API";
import toast from "react-hot-toast";
import '../Product/Add_Product.css'

const Single = () => {

  const [singleProduct, setSingleProduct] = useState({})
  const { productId } = useParams();
  const { state } = useContext(AuthContext);

  const route = useNavigate();

  useEffect(() => {
   
      async function singleProduct() {
        try {
          const response = await api.post("/single",
            { productId }
          );
            
          if (response.data.success) {
            console.log(response.data)
            setSingleProduct(response.data.product);

          }
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
      singleProduct();
  }, []);

  
  const addToCart = async (productId) => {
    try {
      const token = JSON.parse(localStorage.getItem("Token"));
      const response = await api.post("/add-to-cart", {productId, token});

      if (response.data.success) {
        toast.success(response.data.message);
        // setTimeout(() => {
        route("/cart");
        // }, 800);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };


  
  return (
    <>
      <Navbar />

      <div id="heading">
        {/* <p>
          Home / Clothing / Men Clothing / Tshirts / Roadster
          <b> Tshirts / More By Roadster</b>
        </p> */}
      </div>

      <div id="main-singlebody">
        <div id="main-singleProdsection">
          <div id="left-singleProd">
            <div>
              <img src={singleProduct.image} alt="" />
            </div>
            <div>
              <img src={singleProduct.image} alt="" />
            </div>
            <div>
              <img src={singleProduct.image} alt="" />
            </div>
            <div>
              <img src={singleProduct.image} alt="" />
            </div>
            <div>
              <img src={singleProduct.image} alt="" />
            </div>
          </div>
          <div id="right-singleProd">
            <div>
              <div id="right-1">
                <h2>{singleProduct.name}</h2>
                {/* <p>{singleProd.title}</p> */}

                <div id="right-ratings">
                  <p>4.1</p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#1d981b" }}
                  ></i>
                  <p className="vertical-line">|</p>
                  <p>4.3k Ratings</p>
                </div>
              </div>
              <div id="right-2">
                <div id="right-2-inside">
                  <h3>&#8377;{singleProduct.price}</h3>
                  {/* <p>MRP</p> */}
                  <p>&#8377;{singleProduct.d_price}</p>
                  {/* <p>({singleProd.prodOffer})%</p> */}
                </div>

                <p>inclusive of all taxes</p>
                <div id="right-2-inside-2">
                  <p>SELECT SIZE</p>
                  <p>SIZE CHART </p>
                </div>

                <div id="size">
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                </div>

                {state?.user?.role === "Buyer" && (
                  <div id="btn">
                    <div>
                      <button onClick={() => addToCart(singleProduct._id)}>
                        ADD TO CART
                      </button>
                    </div>
                    <div>
                      <button>WISHLIST</button>
                    </div>
                  </div>
                )}
                {state?.user?.role === "Seller" && (
                  <div id="btn">
                    <div>
                      <button onClick={() => route(`/updateproduct/${singleProduct._id}`)}>
                        UPDATE
                      </button>
                    </div>
                    {/* <div>
                      <button>WISHLIST</button>
                    </div> */}
                  </div>
                )}
              </div>

              <div id="right-3">
                <div id="right-3-inside-1">
                  <h3>DELIVERY OPTIONS</h3>
                  <i
                    className="fa-solid fa-truck fa-lg"
                    style={{ color: "#000000" }}
                  ></i>
                </div>

                <div id="right-3-inside-2">
                  <div>
                    <input type="text" placeholder="Enter Pincode" />

                    <h5>Check</h5>
                  </div>

                  <div>
                    <p>
                      Please enter PIN code to check delivery time & Pay on
                      Delivery Availability
                    </p>

                    <div id="details">
                      <p>100% Original Products</p>
                      <p>Pay on delivery might be available</p>
                      <p>Easy 14 days returns and exchanges</p>
                      <p>100% Original Products</p>
                      <p>Try & Buy might be available</p>
                    </div>
                  </div>

                  <div id="right-3-inside-3">
                    <div id="heading-2">
                      <h3>BEST OFFERS</h3>
                      <i className="fa-solid fa-tag fa-lg"></i>
                    </div>

                    <p id="bestprice">
                      Best Price: <span className="orange-text">Rs. 299</span>
                    </p>

                    <ul>
                      <li>
                        Coupon Discount: Rs. 60 off (check cart for final
                        savings)
                      </li>
                      <li>
                        Applicable on: Orders above Rs. 599 (only on first
                        purchase)
                      </li>
                      <li>
                        Coupon code: <span id="coupon"> MYNTRA100</span>
                      </li>
                    </ul>

                    <p className="red-p">View Eligible Products</p>

                    <h4 className="">
                      Up To Rs 500 Cashback on CRED pay transactions.
                    </h4>

                    <ul>
                      <li>
                        Min Spend Rs 1,000. Available only on Android Devices.
                      </li>
                    </ul>

                    <p className="red-p">Terms & Condition</p>
                    <h4>EMI option available</h4>
                    <ul>
                      <li>EMI starting from Rs.17/month</li>
                    </ul>

                    <p className="red-p">View Plan</p>
                  </div>
                </div>
              </div>
              <div id="right-4">
                <div>
                  <h3>Product Details</h3>
                  <p>White printed T-shirt, has a round neck, short sleeves</p>
                  <h3>Size & Fit</h3>
                  <p>The model (height 6') is wearing a size M</p>
                  <h3>Material & Care</h3>

                  <p>100% cotton</p>
                  <p>Machine-wash</p>
                  <h3>Specifications</h3>
                </div>

                <div id="specs">
                  <div id="left-spec">
                    <div>
                      <p>Fabric</p>
                      <p>Pure Cotton</p>
                    </div>
                    <div>
                      <p>Length</p>
                      <p>Regular</p>
                    </div>
                    <div>
                      <p>Multipack Set</p>
                      <p>Single</p>
                    </div>
                    <div>
                      <p>Occasion</p>
                      <p>Casual</p>
                    </div>
                  </div>
                  <div id="right-spec">
                    <div>
                      <p>Fit</p>
                      <p>Regular Fit</p>
                    </div>
                    <div>
                      <p>Main Trend</p>
                      <p>New Basics</p>
                    </div>
                    <div>
                      <p>Neck</p>
                      <p>Round Neck</p>
                    </div>
                    <div>
                      <p>Pattern</p>
                      <p>Printed</p>
                    </div>
                  </div>
                </div>
                <p className="red-p">See More</p>
              </div>

              <div id="right-5">
                <div id="right-5-inside-1">
                  <h4>Ratings</h4>
                  <i className="fa-solid fa-star fa-sm"></i>
                </div>

                <div id="right-5-inside-2">
                  <div id="left-ratings">
                    <div id="left-rating-flex">
                      <h1>4.1</h1>
                      <i
                        className="fa-solid fa-star fa-lg"
                        style={{ color: "#3c7317" }}
                      ></i>
                    </div>
                    <p>4.3k Verified Buyers</p>
                  </div>
                  <div id="right-side-ratings">
                    <div id="main-rating">
                      <p>5</p>
                      <i className="fa-solid fa-star"></i>

                      <hr
                        style={{
                          width: "150px",
                          height: "5px",
                          backgroundColor: "red",
                        }}
                      />

                      <p>2274</p>
                    </div>
                    <div id="main-rating">
                      <p>4</p>
                      <i className="fa-solid fa-star"></i>

                      <hr
                        style={{
                          width: "150px",
                          height: "5px",
                          backgroundColor: "rgb(0, 255, 34)",
                        }}
                      />

                      <p>1010</p>
                    </div>
                    <div id="main-rating">
                      <p>3</p>
                      <i className="fa-solid fa-star"></i>

                      <hr
                        style={{
                          width: "150px",
                          height: "5px",
                          backgroundColor: "rgb(6, 230, 255)",
                        }}
                      />

                      <p>480</p>
                    </div>
                    <div id="main-rating">
                      <p>2</p>
                      <i className="fa-solid fa-star"></i>

                      <hr
                        style={{
                          width: "150px",
                          height: "5px",
                          backgroundColor: "rgb(189, 252, 0)",
                        }}
                      />

                      <p>186</p>
                    </div>

                    <div id="main-rating">
                      <p>1</p>
                      <i className="fa-solid fa-star"></i>

                      <hr
                        style={{
                          width: "150px",
                          height: "5px",
                          backgroundColor: "rgb(17, 0, 255)",
                        }}
                      />

                      <p>347</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="right-6">
                <div id="right-6-inside-1">
                  <h4>WHAT CUSTOMERS SAID</h4>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p style={{ color: "grey" }}>Fit</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div id="right-6-inside-2" style={{ display: "flex" }}>
                    <p id="inside-color"></p>
                  </div>
                  <p style={{ paddingLeft: "15px", fontSize: " 0.8em" }}>
                    Just Right (68%)
                  </p>
                </div>
                <p style={{ color: "grey" }}>Length</p>

                <div style={{ paddingLeft: "15px", fontSize: " 0.8em" }}>
                  <div id="right-6-inside-2">
                    <p id="inside-color"></p>
                  </div>
                  <p style={{ paddingLeft: "15px", fontSize: " 0.8em" }}>
                    Just Right (68%)
                  </p>
                </div>
                <p className="red-p">View Details</p>
              </div>

              <div id="right-7">
                <h4>Customer Photos (34)</h4>

                <div id="flex-img">
                  <div id="customer-img">
                    <img
                      src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2021/10/15/d6094e0b-4de1-4f25-b44c-a97d5df22e621634283820881-IMG_20211012_001913-01.jpeg"
                      alt=""
                    />
                  </div>
                  <div id="customer-img">
                    <img
                      src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2021/10/15/d6094e0b-4de1-4f25-b44c-a97d5df22e621634283820881-IMG_20211012_001913-01.jpeg"
                      alt=""
                    />
                  </div>
                  <div id="customer-img">
                    <img
                      src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2021/10/15/d6094e0b-4de1-4f25-b44c-a97d5df22e621634283820881-IMG_20211012_001913-01.jpeg"
                      alt=""
                    />
                  </div>
                  <div id="customer-img">
                    <img
                      src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2021/10/15/d6094e0b-4de1-4f25-b44c-a97d5df22e621634283820881-IMG_20211012_001913-01.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Customer Reviews (341)</h4>

                <div id="comments">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque incidunt rem adipisci delectus voluptate repellendus
                    at quod hic rerum veritatis!
                  </p>

                  <div id="interact">
                    <p>Amit Kumar 3 | Apr 2021</p>

                    <div id="thumbs">
                      <i className="fa-regular fa-thumbs-up"></i>
                      <i className="fa-regular fa-thumbs-down"></i>
                    </div>
                  </div>
                </div>

                <div id="last">
                  <p className="red-p">View all 341 reviews</p>
                  <p>
                    Product Code: <b> 2475811 </b>
                  </p>
                  <p>
                    Seller : <span className="red-p">Truenett Commerce</span>
                  </p>
                  <p>View Supplier Information</p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom">
          <div id="bottom-heading">
            <h2>SIMILAR PRODUCTS</h2>
          </div>

          <div id="bottom-img-section">
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/19611286/2022/8/23/fb01b1b2-e0fb-446a-bc9b-21bfd5733adc1661234128758HIGHLANDERMenGreenPrintedSlimFitT-shirt1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/17280256/2022/2/25/327c5f09-46db-40f5-969d-fe0b9bbbb41a1645730937107HIGHLANDERMenBlackTypographyPrintedSlimFitT-shirt1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/17948156/2022/4/20/2815a489-c263-44e3-8683-a1d3d34029ec1650439586364HIGHLANDERMenPinkTypographyPrintedSlimFitT-shirt5.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/17952572/2022/4/20/2270c012-f979-4077-abab-e752ba70d4cc1650452996679HIGHLANDERMenBlackPrintedExtendedSleevesAppliqueSlimFitT-shi1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/17280344/2022/2/24/6fb5f416-efb0-401f-8bf0-61233aa634dd1645727147365HIGHLANDERMenWhiteVarsityPrintedAppliqueSlimFitT-shirt1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/19611282/2022/8/23/e45ea024-ee54-4d74-b924-9547eaf60fb61661234070610HIGHLANDERMenWhitePrintedV-NeckExtendedSleevesSlimFitT-shirt1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/17805688/2022/4/8/cae17ca5-7977-4bbd-9e11-45ebdcc977a21649358053957HIGHLANDERMenBlackPrintedV-NeckAppliqueSlimFitT-shirt1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/16730868/2022/1/7/af6b9ea7-6531-4018-97cf-b85b6f101f0e1641576424626AjilebyPantaloonsMenRedTypography2PrintedAppliqueSlimFitT-sh1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/15627192/2021/9/27/cf77b28e-8e10-48b1-9a8f-60e01d3886cc1632746883405LoungeTshirts1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
            <div className="bottom-img">
              <img
                src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/19879744/2022/9/10/6362adc5-3185-482b-8687-c878ac6f2f441662820900021abofMenNavyBlueJoggersTrousers1.jpg"
                alt=""
              />
              <div>
                <h3>HIGHLANDER</h3>
                <p>Men Printed Slim Fit T-shirt</p>
                <h3>Rs.244</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Single;