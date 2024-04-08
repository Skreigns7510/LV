class FrontController{

    static index =async(req,res)=>{
        try{
            res.render("index")
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
    static careers =async(req,res)=>{
        try{
            res.render("careers")
        }
        catch (error) {
            console.log(error)
        }
    }
    static portfolio =async(req,res)=>{
        try{
            res.render("portfolio")
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
    static DataAnalytics =async(req,res)=>{
        try{
            res.render("DataAnalytics")
        }
        catch (error) {
            console.log(error)
        }
    }
    static CloudComputing =async(req,res)=>{
        try{
            res.render("CloudComputing")
        }
        catch (error) {
            console.log(error)
        }
    }
    static ITConsulting =async(req,res)=>{
        try{
            res.render("ITConsulting")
        }
        catch (error) {
            console.log(error)
        }
    }
    static ManageITServices =async(req,res)=>{
        try{
            res.render("ManageITServices")
        }
        catch (error) {
            console.log(error)
        }
    }
    static DigitalTransformation =async(req,res)=>{
        try{
            res.render("DigitalTransformation")
        }
        catch (error) {
            console.log(error)
        }
    }
    static TrainingandWorkshops =async(req,res)=>{
        try{
            res.render("TrainingandWorkshops")
        }
        catch (error) {
            console.log(error)
        }
    }
    static ResearchAndInnovatiion =async(req,res)=>{
        try{
            res.render("ResearchAndInnovatiion")
        }
        catch (error) {
            console.log(error)
        }
    }
    static NewsAndEvents =async(req,res)=>{
        try{
            res.render("NewsAndEvents")
        }
        catch (error) {
            console.log(error)
        }
    }
    static PrivacyAndPolicy =async(req,res)=>{
        try{
            res.render("PrivacyAndPolicy")
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports=FrontController