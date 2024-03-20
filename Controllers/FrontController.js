class FrontController{

    static home =async(req,res)=>{
        try{
            res.render("home")
        }
        catch (error) {
            console.log(error)
        }
    }
    static contact =async(req,res)=>{
        try{
            res.render("contact")
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports=FrontController