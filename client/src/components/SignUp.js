import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate, NavLink} from 'react-router-dom'
// import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { FormControl,FormLabel,FormControlLabel,Radio,RadioGroup } from '@mui/material';
const Register = () => {
  const [user,setUser]=useState({
    name:"",gender:"",age:"",pregStatus:"",months:"",bloodGroup:"",address:"",haemoglobin:"",haemoImg:"",phone:"",email:"",password:"",
  })
  let name,value;
  const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  }
  const onFileChange=((e) =>{
    if(e!=""){
      setUser({...user, haemoImg: e.target.files[0] })
    }
})
  const navigate=useNavigate();
//   const onFileChange=((e) =>{
//     setUser({...user, profileImg: e.target.files[0] })
// })
const [visible,setVisible]=useState(false);
const [visiblePreg,setVisiblePreg]=useState(false);
const [preg,setPreg]=useState(false);
const handleClick=async (e)=>{
  e.preventDefault();
  console.log("user",user);
  const formData = new FormData();
  formData.append('name', user.name)
  formData.append('gender', user.gender)
  formData.append('age', user.age)
  formData.append('pregStatus', user.pregStatus)
  formData.append('months', user.months)
  formData.append('bloodGroup', user.bloodGroup)
  formData.append('address', user.address)
  formData.append('haemoglobin', user.haemoglobin)
  formData.append('haemoImg', user.haemoImg)
  formData.append('phone', user.phone)
  formData.append('email', user.email)
  formData.append('password', user.password)
  console.log("hemo",formData.get('haemoImg'),"!");
  console.log(formData);
  console.log("trying th reach backend");
  await axios.post("http://localhost:5000/register", formData).then(res => {
      console.log(res);
      window.alert("Uploaded register form  Successfully");
  }).catch((err)=>{
    console.log("Hello world for register");
    console.log(err);
  })
  if(user.haemoglobin<11){
    navigate("/Symptoms");
  }
  else{
    navigate("/images")
  }
}
const handle=()=>{
  navigate("/");
}
function Func1() {
  setPreg(false); 
  handleInput();
}
function Func2() {
  setVisiblePreg(true);
  handleInput();
}
 var message = 'Do you want to accept consent form?\n ';
  return (
    <>
    <section className="signup">
    <div className='consent'>
          <label><div><br/>{message}</div></label>
          <div className='radio'>
          <input type="radio" name="myRadios"  value="1" onClick={()=>setVisible(true)}/>&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="myRadios"  value="2" onClick={()=>{setVisible(false);
          handle()}}  />&nbsp;No
          </div>
      </div>
      {visible &&
      <div className=' container mt-5'>
        <div className='signup-content'> 
          <div className='signup-form'>
            <h2 className='form-title'>PATIENT DETAILS</h2>
            <form method="POST" className="register-form" id="register-form" encType='multipart/form-data'>
              <div className='form-group'>
               <p > Enter your Name:<br/></p>
                {/* <label htmlFor='name'>
                <i class="zmdi zmdi-account material-icons-name"></i>
                </label> */}
                <input type="text" name="name" id="name" autoComplete='off'   placeholder='Your name' value={user.name} onChange={handleInput} ></input>
              </div>
              <div className='form-group'>
              <p > Enter your gender:<br/></p>
                {/* <label htmlFor='gender'>
                <i class="zmdi zmdi-male-female material-icons-gender"></i>
                </label> */}
                <FormControl>
      
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel name="gender" value="female" control={<Radio color="secondary" />} label="Female" onClick={(e)=>{handleInput(e);setVisiblePreg(true)}}/>
                    <FormControlLabel name="gender" value="male" control={<Radio color="secondary" />}  label="Male" onClick={handleInput}/>
                    <FormControlLabel name="gender" value="other" control={<Radio color="secondary" />}  label="Other" onClick={handleInput}/>

                  </RadioGroup>
                </FormControl>
                </div>
              <div className='form-group'>
              <p > Enter your age:<br/></p>
                {/* <label htmlFor='age'> 
                <i class="zmdi zmdi-account-calendar material-icons-phone"></i>
                </label> */}
                <input type="number" name="age" id="age" autoComplete='off'   placeholder='Your age' value={user.age} onChange={handleInput}></input>
              </div>
              {visiblePreg && user.age>=13 &&user.age<=49 &&
              <div className='form-group'>
              <p > Are you currently pregnant:<br/></p>
                {/* <label htmlFor='gender'>
                <i class="zmdi zmdi-male-female material-icons-gender"></i>
                </label> */}
                <FormControl>
      
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel name="pregStatus" value="female" control={<Radio color="secondary" />} label="Yes" onClick={()=>{setPreg(false); handleInput();}}/>
                    <FormControlLabel name="pregStatus" value="male" control={<Radio color="secondary" />} label="No" onClick={()=>{setPreg(false); handleInput();}}/>
                  </RadioGroup>
                </FormControl>
                </div>
                
              }
              {visiblePreg && user.age>=13 &&user.age<=49 && preg &&
              <div className='form-group'>
              <p >When were you pregnant last in months:<br/></p>
               {/* <label htmlFor='name'>
               <i class="zmdi zmdi-account material-icons-name"></i>
               </label> */}
               <input type="text" name="months" id="name" autoComplete='off'   placeholder='1 month' value={user.name} onChange={handleInput} ></input>
             </div>
              }
              <div className='form-group'>
                {/* <i class='fa-solid fa-droplet '></i> */}
                <p > Enter your Blood Group:<br/></p>
                <input type="text" name="bloodGroup" id="bloodGroup" autoComplete='off'   placeholder='Your bloodGroup' value={user.bloodGroup} onChange={handleInput} ></input>
              </div>
              <div className='form-group'>
              <p > Enter your Address:<br/></p>
                {/* <label htmlFor='address'>
                <i class="zmdi zmdi-pin material-icons-address"></i>
                </label> */}
                <input type="text" name="address" id="address" autoComplete='off'   placeholder='Your address' value={user.address} onChange={handleInput} ></input>
              </div>
              <div className='form-group'>
              <p > Enter your Haemoglobin:<br/></p>
                {/* <label htmlFor='age'> 
                <i class="zmdi zmdi-account-calendar material-icons-phone"></i>
                </label> */}
                <input type="number" name="haemoglobin" id="haemoglobin" autoComplete='off'   placeholder='Your haemoglobin' value={user.haemoglobin} onChange={handleInput}></input>
              </div>
              <div className='form-group'>
                <p> Upload the picture of haemoglobin report
                
                </p>
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="haemoImg" id="haemoImg" autoComplete='off'  onChange={onFileChange} ></ input>
              </div>
              <div className='form-group'>
              <p > Enter your Phone Number:<br/></p>
                {/* <label htmlFor='phone'>
                <i class="zmdi zmdi-phone material-icons-phone"></i>
                </label> */}
                <input type="number" name="phone" id="phone" autoComplete='off'   placeholder='Your phone' value={user.phone} onChange={handleInput}></input>
              </div>
              <div className='form-group'>
              <p > Enter your Email:<br/></p>
                {/* <label htmlFor='email'>
                <i class="zmdi zmdi-email material-icons-email"></i>
                </label> */}
                <input type="email" name="email" id="email" autoComplete='off'   placeholder='Your email' value={user.email} onChange={handleInput}></input>
              </div>
              <div className='form-group'>
              <p > Enter your Password:<br/></p>
                {/* <label htmlFor='password'>
                <i class="zmdi zmdi-lock material-icons-password"></i>
                </label> */}
                <input type="password" name="password" id="password" autoComplete='off'   placeholder='Your password' value={user.password} onChange={handleInput}></input>
              </div>
              {/* <div className='form-group'>
                <label htmlFor='profileImg'>
                <i class="zmdi zmdi-upload"></i>
                </label>
                <input type="file" name="profileImg" id="profileImg" autoComplete='off'  onChange={onFileChange} ></input>
              </div> */}
              {/* {user.age} */}
              
              <div className='form-group form-button'>
                <input type="submit" name="register" id="register" className='form-submit' value="Register" onClick={handleClick} />
              </div>
            </form>
            <NavLink to="/login" className="signup-image-link"> Already Registered</NavLink>
          </div>
        </div>
      </div>
}
    </section>
    </>
  )
}

export default Register