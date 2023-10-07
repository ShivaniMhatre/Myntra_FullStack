import UserModal from "../Modals/User.modal.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ProductModal from "../Modals/Product.modal.js";

export const Register = async (req, res) => {
    try {
        const { userData } = req.body
        const { name, email, password, role } = userData;
        if (!name || !email || !password || !role) return res.json({ success: false, message: "All fields are mandtory.." })

        const isEmailExist = await UserModal.find({ email: email })
        if (isEmailExist.length) {
            return res.json({
                success: false,
                message: "Email is exist, try diffrent email."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModal({
            name,
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        return res.json({
            success: true,
            message: "User registered Successfully.",
        })

    } catch (error) {
        return res.json({ success: false, message: error })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body.userData;
        if (!email || !password) return res.json({ success: false, message: "All fields are mandtory.." })

        const user = await UserModal.findOne({ email })
        if (!user) return res.json({ success: false, message: "User not found.." })

        if (user.isBlocked) {
            return res.status(404).json({ succes: false, message: "You Are Blocked .Contact Us" })
        }

        const isPasswordRight = await bcrypt.compare(password, user.password);
        // console.log(isPasswordRight, "isPasswordRight")
        if (isPasswordRight) {
            const userObeject = {
                name: user.name,
                email: user.email,
                _id: user._id,
                role: user.role
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
            // console.log(token, "token her")
            return res.json({ success: true, message: "Login Successfull.", userData: userObeject, token: token })
        }
        console.log(userObeject, "data")
        return res.json({ success: false, message: "Password is wrong." })
    } catch (error) {
        return res.json({ success: false, message: error })
    }
}

export const Get_CurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.json({ succes: false, message: "Token Is Required" })

        const decodeData = jwt.verify(token, process.env.JWT_SECRET)
        if (!decodeData) {
            return res.json({
                succes: false,
                message: "Token Is Not Valid"
            })
        }

        const userId = decodeData?.userId;
        const user = await UserModal.findById(userId)
        if (!user) {
            return res.json({
                success: false,
                message: "User Not Found"
            })
        }

        const userObeject = {
            name: user?.name,
            email: user?.email,
            _id: user?._id,
            role: user?.role
        }
        return res.json({ success: true, userData: userObeject })

    } catch (error) {
        return res.json({ success: false, message: error })
    }
}
