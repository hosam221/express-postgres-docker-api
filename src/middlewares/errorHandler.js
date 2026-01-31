//Centralized error handling middleware
const errorhandler=(err,req,res,next)=>{
    console.log(err.stack);
    try{
    res.status(500).json({
        status:500,
        message:"Something went wrong",
        error:err.message
    })}catch (err) {
  console.error('POST ERROR:', err);
  throw err;
}

}

export default errorhandler;