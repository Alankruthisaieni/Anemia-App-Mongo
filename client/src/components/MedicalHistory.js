import React,{useState} from 'react'
import { NavLink} from 'react-router-dom'
import { MDBRadio } from 'mdb-react-ui-kit';
import { MDBFormInline, MDBInput } from "mdbreact";
// import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { FormControl,FormLabel,FormControlLabel,Radio,RadioGroup } from '@mui/material';
const MedicalHistory = () => {
  // const [user,setUser]=useState({
  //   name:"",gender:"",age:"",address:"",phone:"",email:"",password:"",profileImg:""
  // })
  // let name,value;
  // const handleInput=(e)=>{
  //   name=e.target.name;
  //   value=e.target.value;
  //   setUser({...user,[name]:value})
  // }
  
//   const onFileChange=((e) =>{
//     setUser({...user, profileImg: e.target.files[0] })
// })

 var message = 'Are you currently pregnant?\n ';
  return (
    <>
    <section className="signup">
    <div className='consent'>
          <label><div>{message}</div></label>
          <div className='radio'><MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline /></div>
      </div>
      <div className=' container mt-5'>
        <div className='signup-content'> 
          <div className='signup-form'>
          
            <form method="POST" className="register-form" id="register-form" encType='multipart/form-data'>
              <div className='form-group'>
                <label htmlFor='name'>When were you pregnant last in months?
                </label><br/><br/>
                <input type="text" name="months" id="months" autoComplete='off'   placeholder='2 Months' ></input>
              </div>
              
              
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default MedicalHistory