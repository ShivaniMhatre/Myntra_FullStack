import React, { useEffect, useState } from 'react'
// import '../Men/Men_Multiple.css';
import '../Men/All.css'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import api from '../Config/API';

const Men_Multiple = () => {
    const [menData, setMenData] = useState([]);
    const route = useNavigate();

    console.log(menData,"data")

    useEffect(() => {
        async function getyourProduct() {
            const token = JSON.parse(localStorage.getItem('Token'))
            const response = await api.post('/men_product')
            if (response.data.success) {
                setMenData(response.data.men_product)
            }
        } getyourProduct()
    }, [])

    // useEffect(()=>{
    //     function getMenData(){
    //         const product=JSON.parse(localStorage.getItem('Products'))
    //         console.log(product)
    //         if(product){
    //             const filterData=product.filter((e)=>e.category==="Men");
    //             setMenData(filterData)
    //         }
    //     }getMenData()
    // },[])

    return (
        <>
            <Navbar />

            <div id="allProd-main-body">
                <div className="heading">
                    <p>
                        Home / Clothing / <b> Mens Section</b>
                    </p>
                </div>
                <div className="heading">
                    <p>
                        <b> Men T-Shirts </b>- 102834 items
                    </p>
                </div>

                <div id="heading-2">
                    <div id="head-1">
                        <div id="filter-heading">
                            <p>
                                <b> FILTERS</b>
                            </p>
                        </div>

                        <div id="three-options-heading">
                            <p>Bundles</p>
                            <p>Country of Origin</p>
                            <p>Size</p>
                        </div>
                    </div>

                    <div id="recommemdations">
                        <select>
                            <option value="">Sort by: Recommended</option>
                            <option value="Mens">Men</option>
                            <option value="Womens">Women</option>
                            <option value="Kids">Kids</option>
                            <option value="Home">Home</option>
                            <option value="Beauty">Beauty</option>
                        </select>
                    </div>
                </div>

                <div id="main-section">
                    <div id="filter">
                        <div className="all-filter">
                            <div id="filter-1">
                                <h4>Categories</h4>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>Tshirts ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>Lounge ( 101580)</p>
                                </div>
                            </div>
                            {/* <!-- filter 2  --> */}
                            <div id="filter-2">
                                <h4>Brands</h4>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>Roadsters ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>HRX ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>PUMA ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>WORNG ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>JACK & JONES ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>TOMMY ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>FRISKERS ( 101580)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>US (POLO) ( 101580)</p>
                                </div>
                                <p className="more">+ 616 more</p>
                            </div>

                            {/* <!-- filter 3  --> */}

                            <div id="filter-3">
                                <h4>PRICE</h4>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>Rs. 124 to Rs. 4593 (102143)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>Rs. 4593 to Rs. 9062 (15245)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>Rs. 9062 to Rs. 13531 (100)</p>
                                </div>
                                <div className="left-filters">
                                    <input type="checkbox" />
                                    <p>Rs. 13531 to Rs. 18000 (4)</p>
                                </div>
                            </div>

                            {/* <!-- filter 4 --> */}

                            <div id="filter-4">
                                <h4>COLORS</h4>
                                <div className="left-filters color-section">
                                    <input type="checkbox" />
                                    <p className="color-size" id="green"></p>
                                    <p>Green (1024)</p>
                                </div>
                                <div className="left-filters color-section">
                                    <input type="checkbox" />
                                    <p className="color-size" id="yellow"></p>

                                    <p>Yellow (555)</p>
                                </div>
                                <div className="left-filters color-section">
                                    <input type="checkbox" />
                                    <p className="color-size" id="red"></p>

                                    <p>Red (65)</p>
                                </div>
                                <div className="left-filters color-section">
                                    <input type="checkbox" />
                                    <p className="color-size" id="blue"></p>

                                    <p>Blue (25)</p>
                                </div>
                                <div className="left-filters color-section">
                                    <input type="checkbox" />
                                    <p className="color-size" id="pink"></p>

                                    <p>Pink (5)</p>
                                </div>

                                <p className="more">+ 39 more</p>
                            </div>

                            <div id="filter-5">
                                <h4>Discount RANGE</h4>
                                <div className="left-filters">
                                    <input type="radio" name="filter" />
                                    <p>10% and above</p>
                                </div>
                                <div className="left-filters">
                                    <input type="radio" name="filter" />
                                    <p>20% and above</p>
                                </div>
                                <div className="left-filters">
                                    <input type="radio" name="filter" />
                                    <p>30% and above</p>
                                </div>
                                <div className="left-filters">
                                    <input type="radio" name="filter" />
                                    <p>40% and above</p>
                                </div>
                                <div className="left-filters">
                                    <input type="radio" name="filter" />
                                    <p>50% and above</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mul-products">
                        {menData?.length ? (
                            <div id="mul-section">
                                {menData.map((item) => (
                                    <div
                                        className="mul-img"
                                        key={item.id}
                                        onClick={() => route(`/single/${item._id}`)}
                                    >
                                        <div className="singleImg">
                                            <img src={item.image} alt="" />
                                        </div>

                                        <div className="product-details">
                                            <h4>{item.name}</h4>
                                            <p>{item.prodBrand}</p>
                                            <p>
                                                <b>Rs.{item.d_price}</b>{" "}
                                                <span className="line-through">
                                                    Rs.{item.price}
                                                </span>
                                                <span className="span-color">
                                                    &nbsp;({item.prodOffer}) %
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {/* <div id="pages">
                                    <div id="child-page">
                                        <div>Page 1 of 2109</div>
                                        <div>
                                            <button>1</button>
                                            <button>2</button>
                                            <button>3</button>
                                            <button>4</button>
                                            <button>5</button>
                                            <button>6</button>
                                            <button>7</button>
                                            <button>8</button>
                                            <button>9</button>
                                            <button>10</button>
                                        </div>
                                        <div>
                                            <button>Next</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        ) : (
                            <div>...Loading</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );










    // <div>
    //     <Navbar />
    //     <div id="menMultiple_body">
    //         <div id="heading-1">
    //             <p>Home / Clothing / <b> Men</b></p>
    //         </div>
    //         <div id="heading-2">
    //             <p><b> Tshirt / Shirt For Men </b>- 131138 items</p>
    //         </div>
    //         <div id="heading-3">
    //             <div id="head-1">
    //                 <div id="filter-heading">
    //                     <p><b> FILTERS</b></p>
    //                 </div>

    //                 <div id="three-options-heading">
    //                     <p>Bundles</p>
    //                     <p>Country of Origin</p>
    //                     <p>Size</p>
    //                 </div>
    //             </div>
    //             <div id="recommemdations">
    //                 <select>
    //                     <option>Sort by: <span> Recommended</span></option>
    //                     <option>Whats new</option>
    //                     <option>Popularity</option>
    //                     <option>Better Discount</option>
    //                     <option>Price:High to Low</option>
    //                     <option>Price:Low to High</option>
    //                     <option>Customer Ratings</option>
    //                 </select>
    //             </div>
    //         </div>
    //         <div id="main">
    //             <div id="allfilter">
    //                 <div id="filter-1">
    //                     <h4>CATEGORIES</h4>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Shirt<span><small>(75894)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>T-Shirts<span><small>(55258)</small></span></p>
    //                     </div>
    //                 </div>
    //                 <div id="filter-2">
    //                     <h4>BRAND</h4>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Kalini<span><small>(8910)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Ethnic basket<span><small>(4769)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>7 Threads<span><small>(4355)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Anouk<span><small>(3764)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Sangria<span><small>(3742)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Indo Era<span><small>(3117)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>1 Stop Fashion<span><small>(2655)</small></span></p>
    //                     </div>
    //                     <p>+ 806 more</p>
    //                 </div>
    //                 <div id="filter-3">
    //                     <h4>PRICE</h4>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Rs. 199 to Rs. 1374<span><small>(3147)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Rs. 1374 to Rs. 2549<span><small>(554)</small></span></p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>Rs. 2549 to Rs. 3724<span><small>(33)</small></span></p>
    //                     </div>
    //                 </div>
    //                 <div id="filter-4">
    //                     <h4>COLOR</h4>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="green"></p>
    //                         <p>Green (12)</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="pink"></p>
    //                         <p>Pink (10)</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="blue"></p>
    //                         <p>Blue (10)</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="black"></p>
    //                         <p>Black (8)</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="gray"></p>
    //                         <p>Gray (5)</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="yellow"></p>
    //                         <p>Yellow (10)</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="red"></p>
    //                         <p>Red (25)</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p class="color-size" id="yellowgreen"></p>
    //                         <p>Yellowgreen (15)</p>
    //                     </div>
    //                     <p>+30 more</p>
    //                 </div>
    //                 <div id="filter-5">
    //                     <h4>DISCOUNT RANGE</h4>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>10% and Above</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>20% and Above</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>30% and Above</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>40% and Above</p>
    //                     </div>
    //                     <div class="left">
    //                         <input type="checkbox" />
    //                         <p>50% and Above</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div id="product">
    //                 {menData && menData.map((pro) => (
    //                     <div class='men_product' key={pro._id} onClick={() => route(`/single/${pro._id}`)}>
    //                         <div id="imgsize">
    //                             <img src={pro.image} />
    //                         </div>
    //                         <div id="men_detail">
    //                             <h2>{pro.name}</h2>
    //                             <p>
    //                                 <b>&#8377;{pro.price}</b> 
    //                                 <span> &#8377;{pro.d_price}</span>
    //                                 <span class="span-color"> (25% OFF)</span>
    //                             </p>
    //                         </div>
    //                     </div>))}

    //             </div>
    //         </div>
    //     </div>
    // </div>
}

export default Men_Multiple

// useEffect(() => {
    //     const productfromDB = JSON.parse(localStorage.getItem('Myntra_Product'));
    //     if (productfromDB) {
    //         setIsProductExist(true)
    //         setProduct(productfromDB)
    //     }
    //     else {
    //         setIsProductExist(false);
    //     }
    // }, [])

    // useEffect(() => {
    //     const Data = JSON.parse(localStorage.getItem('Myntra_Product'));
    //     const filterData = Data.filter((pro) => pro.category === 'Men');
    //     setMenData(filterData)
    // }, [])

    // const [isProductExist, setIsProductExist] = useState(false);
    // const [product, setProduct] = useState();