//this is the middleware for restricting routes
module.exports = function(req,res,next){
    if(req.user){
        return next();
    }
    //if the user isn't logged in go to login
    return res.redirect("/");
}