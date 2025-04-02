import jwt from 'jsonwebtoken';


export const verifyToken = (req,res,next)=>{
const authHeader = req.headers.Authorization || req.headers.authorization;
if (authHeader && authHeader.startsWith("Bearer")) {
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({
        message: "No token, Authorization denied!"
    })
  }
  try {
     jwt.verify(token, process.env.JWT_SECRET_KEY);
    // req.user = decode
    // console.log(req.user);
    next()
  } catch (error) {
    console.log(error)
    res.status(400).json({
        message: "token is invalid!"
    })
  }
}
else{
    res.status(400).json({
        message: "Header values are invalid!"
    })
  
}

}