import React,{useState} from 'react'
import { useNavigate, NavLink} from 'react-router-dom'
import { MDBRadio } from 'mdb-react-ui-kit';
import { FormControl ,FormGroup,FormLabel,FormControlLabel,Checkbox,FormHelperText} from '@mui/material';
export default function IFA() {
  const handleClick=()=>{
      navigate("/images")
  }
  const navigate=useNavigate();
  const [no,setNo]=useState(false);
  return (
    <>
    <section className="signup">
      <div className=' container mt-5'>
        <div className='signup-content'> 
          <div className='signup-form'>
          
            <form method="POST" className="register-form" id="register-form" encType='multipart/form-data'>
            <div className="radioBtns"> 
               <p> Are you currently consuming IFA Tablets?</p>
                <input type="radio" value="Male" name="gender" onClick={()=>setNo(false)}/> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Female" name="gender"  onClick={()=>setNo(true)}/> No
              </div><br/>
              {no && <div className="IFA">
                <p>Causes for not consuming IFA Tablets</p>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  color="secondary" name="gilad" />
            }
            label="Nobody advised or not brought IFA Tablets"
          />
          <FormControlLabel
            control={
              <Checkbox  color="secondary" name="jason" />
            }
            label="Not required"
          />
          <FormControlLabel
            control={
              <Checkbox  color="secondary" name="antoine" />
            }
            label="Side Effects"
          />
          <FormControlLabel
            control={
              <Checkbox  color="secondary" name="antoine" />
            }
            label="Don't remember"
          />
          <FormControlLabel
            control={
              <Checkbox  color="secondary" name="antoine" />
            }
            label="Fear of Medications"
          />
          <FormControlLabel
            control={
              <Checkbox  color="secondary" name="antoine" />
            }
            label="Other reasons"
          />
        </FormGroup>
      </FormControl>
      
      </div>}     
      <div className='form-group form-button'>
                <input type="submit" name="register" id="register" className='form-submit' value="Submit" onClick={handleClick} />
              </div>   
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
