import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Product/All_Categories.css';
// import '../Product/Add_Product.css';
import Navbar from "../Navbar/Navbar";

const All_Categories = () => {
  const [isProductExist, setIsProductExist] = useState(false);
  const [products, setProducts] = useState();

  const route = useNavigate();

  // useEffect(() => {
  //   const productfromDB = JSON.parse(localStorage.getItem('Myntra_Product'));
  //   if (productfromDB) {
  //     setIsProductExist(true)
  //     setProducts(productfromDB)
  //   }
  //   else {
  //     setIsProductExist(false)
  //   }
  // }, [])
  
  // console.log(products,"pro")


  // const redirect = (_id) => {
  //   route(`/single/${_id}`)
  // }

  const handleChange=()=>{

  }
  const handleSubmit=()=>{

  }
  return (
    <div>
      {/* <div id='update_screen'> */}
       
      {/* </div> */}
      <Navbar />
      {!isProductExist ? <div>No Product</div>
        :
        <div id='allPro'>
          {products && products.map((pro) => (
            <div className='allPro' key={pro._id} onClick={() => route(`/single/${pro._id}`)}>
              <div className='allPro_img'>
                <img src={pro.img} />
              </div>
              <div className='allPro_text'>
                <h3>{pro.name}</h3>
                <div style={{ display: 'flex' }}>
                  <h4>&#8377;{pro.price}</h4>
                  <p>&#8377;{pro.d_price}</p>
                </div>
                <h4>{pro.category}</h4>
              </div>
            </div>
          ))}
        </div>}
    </div>
  )

}

export default All_Categories