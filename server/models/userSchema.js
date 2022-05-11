const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
  leftNail: {
    type: String,
    required:true
  },
  rightNail: {
    type: String,
    required:true
  },
  leftPalm: {
    type: String,
    required:true
  },
  rightPalm: {
    type: String,
    required:true
  },
  tongue: {
    type: String,
    required:true
  },
  leftEyelid: {
    type: String,
    required:true
  },
  rightEyelid: {
    type: String,
    required:true
  },
  tokens:[
    {
      token:{
        type:String,
        required:true
      }
    }
  ]
})
userSchema.pre("save",async function(next){
  if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,12)//12 is count
  }
  next();
})

userSchema.methods.generateAuthToken=async function(){
  try{
    let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:token});
    await this.save();
    return token;
  }
  catch(err){
    console.log(err);
  }
}
const User=mongoose.model('USER',userSchema);
module.exports=User;