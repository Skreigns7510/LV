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
    static about =async(req,res)=>{
        try{
            res.render("aboutus")
        }
        catch (error) {
            console.log(error)
        }
    }
    static SoftwareDev =async(req,res)=>{
        try{
            res.render("SoftwareDev")
        }
        catch (error) {
            console.log(error)
        }
    }
    static CybersecuritySol =async(req,res)=>{
        try{
            res.render("CybersecuritySol")
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports=FrontController