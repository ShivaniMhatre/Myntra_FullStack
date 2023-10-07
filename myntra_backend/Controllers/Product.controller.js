import jwt from 'jsonwebtoken'
import ProductModal from '../Modals/Product.modal.js';

export const AddProduct = async (req, res) => {
    try {
        const { name, category, price,d_price, image } = req.body.productData;
        const { token } = req.body;
        if (!name || !category || !price || !d_price||!image || !token) return res.json({ success: false, message: "All Fields Are Mandatory" })

        const decodeData = jwt.verify(token, process.env.JWT_SECRET)
        if (!decodeData) {
            return res.josn({
                success: false,
                message: "Not Valid Token"
            })
        }

        const userId = decodeData?.userId

        const product = new ProductModal({
            name,
            price: parseInt(price),
            d_price: parseInt(d_price),
            image,
            category,
            userId: userId
        })

        await product.save();
        return res.json({
            success: true,
            message: "Product Added SuccessFully"
        })
    } catch (error) {
        return res.json({ success: false, error: error.message })
    }
}

export const Get_Your_Product = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.json({ success: false, message: "Token Is Required" })

        const decodeData = jwt.verify(token, process.env.JWT_SECRET)
        if (!decodeData) {
            return res.json({
                success: false,
                message: "Not Valid Token"
            })
        }

        const userId = decodeData?.userId;

        const yourProduct = await ProductModal.find({ userId: userId })

        if (yourProduct.length) {
            return res.json({ success: true, product: yourProduct })
        }
        return res.json({ success: false, message: "Not Found" })
    } catch (error) {
        return res.json({ success: false, error: error.message })
    }
}

export const Get_Men_Product = async (req, res) => {
    try {
        const men_product = await ProductModal.find({ category: 'Men' })
        if (men_product) {
            return res.json({
                success: true,
                men_product: men_product
            })
        }
        return res.json({ success: false, message: 'Not found' })
    } catch (error) {
        return res.json({ success: false, error: error.message })
    }
}

export const SingleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) return res.json({ success: false, message: "Id Is Required" })
        const product = await ProductModal.findById(productId)
        if (product) {
            return res.json({ success: true, product });
        }
    } catch (error) {
        return res.json({ success: false, error: error.message })
    }
}

export const updateyourProduct = async (req, res) => {
    try {
      const { name, price, image,d_price, category} = req.body.productData;
  
      // console.log(title, price, image, category);
  
      const { token, productId } = req.body;
  
      console.log(token, productId);
  
      const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
  
      if (!decodeToken) {
        return res.status(404).json({
          success: false,
          message: "not a valid token",
        });
      }
  
      const userId = decodeToken?.userId;
  
      if (userId) {
        const updateProduct = await ProductModal.findOneAndUpdate(
          { userId: userId, _id: productId },
          { name, price, d_price,image, category },
          { new: true }
        );
  
        // console.log(updateProduct);
  
        res.status(200).json({
          success: true,
          message: "updated success",
          updatedProduct: updateProduct,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "error from catch block",
        error: error,
      });
    }
  };

  export const GetEditProduct = async (req, res) => {
    try {
      const { productId } = req.body;
  
      console.log(productId);
  
      if (!productId)
        return res.status(404).json({
          success: false,
          message: "Id is Required",
        });
  
      const findProduct = await ProductModal.findById(productId);
  
      if (findProduct) {
        return res.status(200).json({
          success: true,
          singleProductInputData: findProduct,
        });
      }
    } catch (error) {
      res.status(505).json({
        success: false,
        message: "server error",
      });
    }
  };