const mongoose=require('mongoose')
mongoose
.connect('mongodb+srv://hemanthpandya2001_db_user:hemanth@fullstack-blog.u6rszcp.mongodb.net/scatch')
.then(function(){
    console.log('connected')
})
.catch(function(err){
    console.log(err)
})
module.exports=mongoose.connection