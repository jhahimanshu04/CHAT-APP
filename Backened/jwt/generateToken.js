import jwt  from "jsonwebtoken";


const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '10d' // Token expiration time

    })
    res.cookie("jwt", token, {
        httpOnly: true,//xss
        secure: true,

        sameSite: "Strict"//csrf
    })
}

export default createTokenAndSaveCookie;