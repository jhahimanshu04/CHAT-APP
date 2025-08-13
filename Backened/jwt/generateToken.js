import jwt  from "jsonwebtoken";


const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1od' // Token expiration time

    })
    res.cookies("jwt", token, {
        httpOnly: true,
    })
}

export default createTokenAndSaveCookie;