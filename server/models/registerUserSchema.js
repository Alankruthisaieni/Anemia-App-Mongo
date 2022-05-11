const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const registerUserSchema=new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  gender: {
    type: String,
    required:true
  },
  age: {
    type: Number,
    required:true
  },
  pregStatus: {
    type: String,
    required:false
  },
  months: {
    type: String,
    required:false
  },
  bloodGroup: {
    type: String,
    required:false
  },
  address:{
    type:String
  },
  haemoglobin: {
    type: Number,
    required:false
  },
  haemoImg: {
    type: String,
    required:false
  },
  phone: {
    type: Number,
    required:true
  },
  email: {
    type: String,
    required:false
  },
  password: {
    type: String,
    required:false
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
registerUserSchema.pre("save",async function(next){
  if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,12)//12 is count
  }
  next();
})

registerUserSchema.methods.generateAuthToken=async function(){
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
const registerUser=mongoose.model('registerUser',registerUserSchema);
module.exports=registerUser;