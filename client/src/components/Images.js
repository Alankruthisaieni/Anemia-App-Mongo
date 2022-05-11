import React,{useState} from 'react'
import { MDBRadio } from 'mdb-react-ui-kit';
import { MDBFormInline, MDBInput } from "mdbreact";
import axios from 'axios';
// import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { useNavigate, NavLink} from 'react-router-dom'
import { FormControl,FormLabel,FormControlLabel,Radio,RadioGroup } from '@mui/material';
const Images = () => {
  const [user,setUser]=useState({
    leftNail:"",rightNail:"",leftPalm:"",rightPalm:"",tongue:"",leftEyelid:"",rightEyelid:""
  })
  let name;
  const onFileChange=(e)=>{
    name=e.target.name;
    setUser({...user,[name]:e.target.files[0]})
    console.log(e.target.files[0]);
  }
const navigate=useNavigate();
// const handleClick=()=>{
//   navigate("/")
// }
const onSubmit=async(e) =>{
  e.preventDefault()
  console.log("user",user);
  const formData = new FormData();
  formData.append('leftNail', user.leftNail)
  formData.append('rightNail', user.rightNail)
  formData.append('leftPalm', user.leftPalm)
  formData.append('rightPalm', user.rightPalm)
  formData.append('tongue', user.tongue)
  formData.append('leftEyelid', user.leftEyelid)
  formData.append('rightEyelid', user.rightEyelid)
  console.log("trying th reach backend");
  await axios.post("http://localhost:5000/images", formData).then(res => {
      console.log(res);
      window.alert("Uploaded images  Successfully");
      navigate("/");
  }).catch((err)=>{
    console.log("Hello world");
    console.log(err);
  })
}
  return (
    <>
    <section className="signup">
      <div className=' container mt-5'>
        <div className='signup-content'> 
          <div className='signup-form'>
          <h2 className='form-title'>IMAGES</h2>
            <form method="POST" className="register-form" id="register-form" encType='multipart/form-data'>
            <div className='form-group'>
                <p> Upload the picture of left hand nails
                </p>
               {/* <br/> */}
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="leftNail" id="leftNail" autoComplete='off'  onChange={onFileChange} ></input>
            </div><br/>
            <div className='form-group'>
                <p> Upload the picture of right hand nails
                </p>
               {/* <br/> */}
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="rightNail" id="rightNail" autoComplete='off' 
                onChange={onFileChange}  ></input>
            </div><br/>
            <div className='form-group'>
                <p>Upload the picture of left hand palms
                </p>
               {/* <br/> */}
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="leftPalm" id="leftPalm" autoComplete='off' onChange={onFileChange}  ></input>
            </div><br/>
            <div className='form-group'>
                <p>Upload the picture of right hand palms
                </p>
               {/* <br/> */}
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="rightPalm" id="rightPalm" autoComplete='off'  onChange={onFileChange}  ></input>
            </div><br/>
            {/* <hr style={{ color: "#8B008B", backgroundColor: "grey", height: 1,width:400}}/> */}
            <div className='form-group'>
                <p> Upload the picture of tongue
                </p>
                {/* <br/> */}
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="tongue" id="tongue" autoComplete='off' onChange={onFileChange}  ></input>
                
            </div><br/>
            {/* <hr style={{ color: "#8B008B", backgroundColor: "grey", height: 1,width:400}}/> */}
            <div className='form-group'>
                <p> Upload the picture of left eyelids
                
                </p>
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="leftEyelid" id="leftEyelid" autoComplete='off'  
                onChange={onFileChange} ></input>
            </div><br/>
            <div className='form-group'>
                <p> Upload the picture of right eyelids
                
                </p>
                <i class="zmdi zmdi-upload"></i>
                <input type="file" name="rightEyelid" id="rightEyelid" autoComplete='off'  onChange={onFileChange} ></input>
            </div><br/>
            <div className='form-group form-button'>
                <input type="submit" name="register" id="Submit" className='form-submit' value="Submit" onClick={onSubmit} />
              </div> 
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Images