import React, { useContext, useEffect, useState } from 'react'
import '../Men/Men_Single.css';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-hot-toast';

const Women_Single = () => {
    const [isProductExist, setIsProductExist] = useState(false);
    const [singleproduct, setSingleProduct] = useState({});
    const [isUserLoggedin, setUserLoggedin] = useState(false);
    const [CurrentUserEmail, setCurrentUserEmail] = useState("");
    const [products, setProducts] = useState();
    const [userData, setUserData] = useState();
    const { id } = useParams();
    const { state } = useContext(AuthContext);

    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state]);

    console.log(userData, "dta")
    useEffect(() => {
        const productfromDB = JSON.parse(localStorage.getItem('Myntra_Product'))
        if (productfromDB) {
            setIsProductExist(true);
            setProducts(productfromDB);
        }
        else {
            setIsProductExist(false);
        }
    }, [])
    console.log(products, "pro")

    useEffect(() => {
        if (isProductExist) {
            if (id && products.length) {
                const res = products.find((pro) => pro.id == id)
                setSingleProduct(res);
            }
        }
    }, [id, products])

    useEffect(() => {
      var user = JSON.parse(localStorage.getItem("MyntraCurrent-User"));
      console.log(user, "-user")
      if (user) {
        setUserLoggedin(true);
        setCurrentUserEmail(user.email)
      }
    }, [])
    // console.log(singleproduct, "-sp")
    function addtocart() {
      // alert("hii")
      if (isUserLoggedin) {
        const user = JSON.parse(localStorage.getItem("MyntraUser"));
        for (var i = 0; i < user.length; i++) {
          if (user[i].email == CurrentUserEmail) {
            user[i].cart.push(singleproduct);
            localStorage.setItem("MyntraUser", JSON.stringify(user));
            break;
          }
        }
        toast.success("Product Added Successfully!!!")

      }
    }
    // console.log(singleproduct, "-sp")
    return (
        <div>
            <Navbar />
            <div id='menSingle_body'>
                <div id="heading">
                    <p>
                        Home / Clothing / Men Clothing / Tshirts / Roadster
                        <b> Tshirts <i class="fa-solid fa-angle-right"></i> More By Roadster</b>
                    </p>
                </div>
                <div id='menSingle_body'>
                    <div id='men_section'>
                        <div id='men_left'>
                            <div>
                                <img src={singleproduct.img} />
                            </div>
                            <div>
                                <img src={singleproduct.img} />
                            </div>
                            <div>
                                <img src={singleproduct.img} />
                            </div>

                        </div>
                        <div id='men_right'>
                            <div>
                                <div id='first_right'>
                                    <h2>{singleproduct.name}</h2>
                                    {/* <p>Men White Printed Cotton Pure Cotton T-shirt</p> */}

                                    <div id="ratings">
                                        <p>4.1</p>
                                        <i class="fa-solid fa-star" style={{ color: '#1d981b' }}></i>
                                        <p class="vertical-line">|</p>
                                        <p>4.3k Ratings</p>
                                    </div>
                                </div>
                                <div id="sec_right">
                                    <div id="sec_right_inside">
                                        <h3>&#8377;{singleproduct.price}</h3>
                                        <p>MRP</p>
                                        <p>&#8377;{singleproduct.d_price}</p>
                                        <p>(40% OFF)</p>
                                    </div>

                                    <p>inclusive of all taxes</p>


                                    <div id="sec_right_inside2">
                                        <p>SELECT SIZE</p>
                                        <p>SIZE CHART <i class="fa-solid fa-angle-right"></i> </p>
                                    </div>

                                    <div id="size">
                                        <p>XS</p>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                        <p>XL</p>
                                    </div>



                                    {userData?.role == "Seller" ?
                                        < div id="btn">
                                            <div>
                                                <button>Update  <i class="fa-regular fa-pen-to-square"></i></button>
                                            </div>
                                        </div>
                                        :
                                        <div id="btn">
                                            <div onClick={addtocart}>
                                                <button>ADD TO CART  <i class="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                            <div>
                                                <button>WISHLIST  <i class="fa-solid fa-heart"></i></button>
                                            </div>
                                        </div>}
                                </div>
                                <div id="right-3">
                                    <div id="right-3-inside-1">
                                        <h3>DELIVERY OPTIONS</h3>
                                        <i class="fa-solid fa-truck fa-lg" style={{ color: '#000000' }}></i>
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

                                            {/* <div id="details">
                                                <p>100% Original Products</p>
                                                <p>Pay on delivery might be available</p>
                                                <p>Easy 14 days returns and exchanges</p>
                                                <p>100% Original Products</p>
                                                <p>Try & Buy might be available</p>
                                            </div> */}
                                        </div>

                                        <div id="right-3-inside-3">
                                            <div id="heading-2">
                                                <h3>BEST OFFERS</h3>
                                                <i class="fa-solid fa-tag fa-lg"></i>
                                            </div>

                                            <p id="bestprice">
                                                Best Price: <span class="orange-text">Rs. 299</span>
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
                                                <li>Coupon code: <span id="coupon"> MYNTRA100</span></li>
                                            </ul>

                                            <p class="red-p">View Eligible Products</p>

                                            <h4 class="">
                                                Up To Rs 500 Cashback on CRED pay transactions.
                                            </h4>

                                            <ul>
                                                <li>
                                                    Min Spend Rs 1,000. Available only on Android Devices.
                                                </li>
                                            </ul>

                                            <p class="red-p">Terms & Condition</p>
                                            <h4>EMI option available</h4>
                                            <ul>
                                                <li>EMI starting from Rs.17/month</li>
                                            </ul>

                                            <p class="red-p">View Plan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Women_Single