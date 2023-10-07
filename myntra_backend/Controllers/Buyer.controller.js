import jwt from 'jsonwebtoken'
import UserModal from '../Modals/User.modal.js';
import ProductModal from '../Modals/Product.modal.js';

export const AddToCart = async (req, res) => {
    try {
        const { token, productId } = req.body;
        if (!token || !productId) return res.json({ success: false, message: "All Fields are Required" })

        const decodeData = jwt.verify(token, process.env.JWT_SECRET)
        if (!decodeData) {
            return res.json({
                success: false,
                message: "Token Is Not valid"
            })
        }

        const userId = decodeData?.userId
        const user = await UserModal.findById(userId)
        for (let i = 0; i < user?.cart?.length; i++) {
            if (user.cart[i] == productId) {
                return res
                    .status(404)
                    .json({ success: false, message: "Product already added" });
            }
        }
        user?.cart.push(productId)
        await user.save();
        return res.json({ success: true, user: user })
    } catch (error) {
        return res.json({ success: false, error: error.message })
    }
}

export const GetCartProduct = async (req, res) => {
    try {
        const { token } = req.body;
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodeToken?.userId;

        const user = await UserModal.findById(userId);

        if (user) {
            let finalProduct = [];
            for (let i = 0; i < user.cart.length; i++) {
                const product = await ProductModal.findById(user.cart[i]);

                if (product) {
                    finalProduct.push(product);
                }
            }
            return res.status(200).json({ success: true, product: finalProduct });
        }

        throw new Error("User not Found");
    } catch (error) {
        return res.status(500).json({
            status: "error",
            error: error.message
            // message: "Catch block Error",
        });
    }
};

export const RemoveCartData = async (req, res) => {
    try {
        const { productId, token } = req.body;
        if (!token || !productId)
            throw new Error("Token and productId is required");

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodeToken?.userId;

        const user = await UserModal.findById({ _id: userId });

        const ourCartProduct = user.cart;

        // console.log(ourCartProduct);

        // const removeProduct = ourCartProduct.indexOf(productId);

        // ourCartProduct.splice(removeProduct, 1);

        const filterCartProduct = ourCartProduct.filter((e) => e !== productId);

        user.cart = filterCartProduct;

        await user.save();

        const refreshCart = await UserModal.findById({ _id: userId });

        if (refreshCart) {
            let finalProduct = [];
            for (let i = 0; i < refreshCart.cart.length; i++) {
                const product = await ProductModal.findById(refreshCart.cart[i]);

                if (product) {
                    finalProduct.push(product);
                }
            }
            return res.status(200).json({
                success: true,
                product: finalProduct,
                message: "product removed Success",
            });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "internal server error" });
    }
};


export const placeOrder = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.json({ success: false, message: "Token Is Required" })
        const decodeData = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decodeData?.userId;
        const user = await UserModal.findById(userId)
        if (user) {
            user.cart = [];
            await user.save();
            return res.json({
                success: true,
                message: "Product Will Deliver soon...."
            })
        }

    } catch (error) {
        return res.josn({ success: false, error: error.message })
    }
}