import React, { useContext, useEffect, useState } from 'react'
import '../Cart/Cart.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import api from '../Config/API';

const Cart = () => {
    const [usercart, setUserCart] = useState([]);
    const [finalprice, setFinalPrice] = useState(0);
    const { state } = useContext(AuthContext)
    const route = useNavigate();

    useEffect(() => {
        if (state?.user?.role === "Seller") {
            route('/')
        }
    }, [state?.user])


    useEffect(() => {
        if (usercart?.length) {
          let sum = 0;
          for (let i = 0; i < usercart.length; i++) {
            sum += parseInt(usercart[i].price);
          }
          setFinalPrice(sum);
        }
      }, [usercart]);

    useEffect(() => {
        async function getCartProucts() {
            try {
                const token = JSON.parse(localStorage.getItem("Token"));
                const response = await api.post("/get-cart-products", { token });

                if (response.data.success) {
                    console.log(response.data, "data")
                    setUserCart(response.data.product);
                    console.log(usercart)
                }
            } catch (error) {
                console.log(error.response.data.message);
            }
        }

        getCartProucts();
    }, []);
    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("MyntraCurrent-User"));
    //     if (user?.email) {
    //         const alluser = JSON.parse(localStorage.getItem("MyntraUser"));
    //         for (var i = 0; i < alluser.length; i++) {
    //             if (alluser[i].email == user.email && alluser[i].password == user.password) {
    //                 setUserCart(alluser[i].cart);
    //                 break;
    //             }
    //         }
    //     } else {
    //         toast.error("Please Login To Watch Your Cart!!!!")
    //         route('/login')
    //     }
    // }, [])

    // RemoveSingleProduct

    const removeItem = async (productId) => {
        try {
            const token = JSON.parse(localStorage.getItem('Token'))
            const response = await api.post('/removeItem', { productId, token })
            if (response.data.success) {
                
                toast.success(response.data.message)
                setUserCart(response.data.product)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    // const removeItem = (index) => {
    //     // console.log(index)
    //     toast.error("Deleted!!!")
    //     const user = JSON.parse(localStorage.getItem("MyntraCurrent-User"));
    //     if (user?.email) {
    //         const allUsers = JSON.parse(localStorage.getItem("MyntraUser"));
    //         // const removeitem = usercart.filter()
    //         for (var i = 0; i < allUsers.length; i++) {
    //             if (allUsers[i].email == user.email) {
    //                 allUsers[i].cart.splice(index, 1)
    //                 localStorage.setItem("Users", JSON.stringify(allUsers))
    //                 setUserCart(allUsers[i].cart);
    //             }
    //         }
    //     }
    // };


    // Buy Order

    const placeOrder=async()=>{
        try {
            const token = JSON.parse(localStorage.getItem("Token"));
      
            const response = await api.post("/placeOrder", {token});
      
            if (response.data.success) {
              toast.success(response.data.message);
              setUserCart([]);
              setFinalPrice(0)
              route('/')
            }
          } catch (error) {
            console.log(error);
          }
    }
    // function buyProducts() {
    //     const user = JSON.parse(localStorage.getItem("MyntraCurrent-User"));
    //     if (user?.email) {
    //         const allUsers = JSON.parse(localStorage.getItem("MyntraUser"));
    //         for (var i = 0; i < allUsers.length; i++) {
    //             if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
    //                 allUsers[i].cart = [];
    //                 break;
    //             }
    //         }
    //         localStorage.setItem("Users", JSON.stringify(allUsers))
    //     }
    //     setFinalPrice(0)
    //     setUserCart([]);
    //     toast.success("Product will deliver soon, Thank you for shopping.")
    // }
    return (
        <div>
            <div id="navbar">
                <div id="logo">
                    <a href="./home.html">
                        <img src='data:image/jpeg;base64,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' />
                    </a>
                </div>
                <div id="procedure">
                    <p>BAG</p>
                    <p>------------- ADDRESS --------------</p>
                    <p>PAYMENT</p>
                </div>
                <div id="payment-secure">
                    <img
                        src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
                        alt=""
                    />
                    <p>100% Secure</p>
                </div>
            </div>
            <div id="cart_body">
                <div id="cart_main">
                    <div id="left-cart">
                        <div id="leftone">
                            <p>Check delivery time & services</p>
                            <button>ENTER PIN CODE</button>
                        </div>
                        <div id="left-two">
                            <p>Available Offers</p>
                            <p>
                                10% instant Discount on Kotak Credit and Debit card on a min
                                spen Rs 4,000 TCA
                            </p>

                            <p>Show More</p>
                        </div>
                        {usercart && usercart.map((pro, index) => (
                            <div id="leftfour">
                                <i class="fa-solid fa-xmark fa-xl" onClick={() => removeItem(pro._id)}></i>

                                <div id="cart-img">
                                    <img src={pro.image}
                                    />
                                </div>
                                <div id="cart-details">

                                    <div class="detail-desc">
                                        <h4>{pro.name}</h4>
                                        {/* <p>Striped Polo Collar Cotton T-shirt</p>
                                        <p>sold by : Eshopobox Ecommerce Pvt Ltd</p> */}
                                    </div>

                                    {/* <div id="qty">
                                        <p>Size: XXL</p>
                                        <p>Qty: 1</p>
                                    </div> */}
                                    <div class="detail-desc">
                                        <p><b> Rs {pro.price}</b> <span> 25% OFF </span></p>
                                        <p><b>14 days </b><span> return available</span></p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div id="right_cart">
                        <div id="right_main">
                            {/* <h5>Coupons</h5> */}

                            {/* <div id="right-top">
                                <div id="right-top-1">
                                    <i class="fa-solid fa-tag fa-lg" style={{ color: '#a0a2a7' }}></i>
                                    <h4>Apply Coupons</h4>
                                </div>
                                <button>Apply</button>
                            </div> */}

                            <div id="right-3">
                                <h4>Price Details </h4>

                                <div id="final-price">
                                    <div>
                                        <p>Total Mrp</p>
                                        <p>Delivery Charge</p>
                                        {/* <p>Coupon Discount</p> */}
                                        <p>
                                            Cart Total<span style={{ color: 'rgb(12, 177, 12)' }}> 50%</span>

                                        </p>
                                    </div>
                                    <div>
                                        <p>{finalprice}</p>
                                        <p style={{ color: 'green' }}>FREE</p>
                                        {/* <p style={{color: 'red'}}>Apply Couppon</p> */}
                                        <p>
                                            {finalprice / 2}
                                        </p>
                                    </div>
                                </div>

                                <div id="total-price">
                                    <h4>Total Amount</h4>
                                    <h4>{finalprice / 2}</h4>
                                </div>

                                <div id="order-btn" onClick={placeOrder}>
                                    <button>PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div id="payment-method">
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
                                alt=""
                            />
                        </div>
                        <div id="payment-img">
                            <img
                                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div id="need-help">Need Help ? Contact Us</div>
                </div>
            </div>
        </div>

    )
}

export default Cart