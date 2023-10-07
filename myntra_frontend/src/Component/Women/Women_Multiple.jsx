import React, { useEffect, useState } from 'react'
import '../Men/Men_Multiple.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Women_Multiple = () => {
    const [womenData, setWomenData] = useState();
    const [isProductExist, setIsProductExist] = useState(false);
    const [product, setProduct] = useState();
    const route=useNavigate();

    useEffect(() => {
        const productfromDB = JSON.parse(localStorage.getItem('Myntra_Product'));
        if (productfromDB) {
            setIsProductExist(true)
            setProduct(productfromDB)
        }
        else {
            setIsProductExist(false);
        }
    }, [])

    useEffect(() => {
        const Data = JSON.parse(localStorage.getItem('Myntra_Product'));
        const filterData = Data.filter((pro) => pro.category === 'Women');
        setWomenData(filterData)
    }, [])

    const redirect=(id)=>{
        route(`/women_single/${id}`);
    }
  return (
    <div>
    <Navbar />
    <div id="menMultiple_body">
        <div id="heading-1">
            <p>Home / Clothing / <b> Men</b></p>
        </div>
        <div id="heading-2">
            <p><b> Tshirt / Shirt For Men </b>- 131138 items</p>
        </div>
        <div id="heading-3">
            <div id="head-1">
                <div id="filter-heading">
                    <p><b> FILTERS</b></p>
                </div>

                <div id="three-options-heading">
                    <p>Bundles</p>
                    <p>Country of Origin</p>
                    <p>Size</p>
                </div>
            </div>
            <div id="recommemdations">
                <select>
                    <option>Sort by: <span> Recommended</span></option>
                    <option>Whats new</option>
                    <option>Popularity</option>
                    <option>Better Discount</option>
                    <option>Price:High to Low</option>
                    <option>Price:Low to High</option>
                    <option>Customer Ratings</option>
                </select>
            </div>
        </div>
        <div id="main">
            <div id="allfilter">
                <div id="filter-1">
                    <h4>CATEGORIES</h4>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Shirt<span><small>(75894)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>T-Shirts<span><small>(55258)</small></span></p>
                    </div>
                </div>
                <div id="filter-2">
                    <h4>BRAND</h4>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Kalini<span><small>(8910)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Ethnic basket<span><small>(4769)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>7 Threads<span><small>(4355)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Anouk<span><small>(3764)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Sangria<span><small>(3742)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Indo Era<span><small>(3117)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>1 Stop Fashion<span><small>(2655)</small></span></p>
                    </div>
                    <p>+ 806 more</p>
                </div>
                <div id="filter-3">
                    <h4>PRICE</h4>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Rs. 199 to Rs. 1374<span><small>(3147)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Rs. 1374 to Rs. 2549<span><small>(554)</small></span></p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>Rs. 2549 to Rs. 3724<span><small>(33)</small></span></p>
                    </div>
                </div>
                <div id="filter-4">
                    <h4>COLOR</h4>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="green"></p>
                        <p>Green (12)</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="pink"></p>
                        <p>Pink (10)</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="blue"></p>
                        <p>Blue (10)</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="black"></p>
                        <p>Black (8)</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="gray"></p>
                        <p>Gray (5)</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="yellow"></p>
                        <p>Yellow (10)</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="red"></p>
                        <p>Red (25)</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p class="color-size" id="yellowgreen"></p>
                        <p>Yellowgreen (15)</p>
                    </div>
                    <p>+30 more</p>
                </div>
                <div id="filter-5">
                    <h4>DISCOUNT RANGE</h4>
                    <div class="left">
                        <input type="checkbox" />
                        <p>10% and Above</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>20% and Above</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>30% and Above</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>40% and Above</p>
                    </div>
                    <div class="left">
                        <input type="checkbox" />
                        <p>50% and Above</p>
                    </div>
                </div>
            </div>
            <div id="product">
                {womenData && womenData.map((pro) => (
                <div id="image" onClick={()=>redirect(pro.id)}>
                    <div class="imgsize">
                        <img src={pro.img}/>
                    </div>
                    <div class="detail">
                        <h2 style={{color:'red'}}>{pro.name}</h2>
                        {/* <p>Polo Collar Cotton T-shirt</p> */}
                        <p>

                            <b>&#8377;{pro.price}</b> <span class="line-through"> &#8377;{pro.d_price}</span>
                            <span class="span-color"> (25% OFF)</span>
                        </p>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
</div>
  )
}

export default Women_Multiple