import React from 'react'
import { useNavigate, NavLink} from 'react-router-dom'
import { FormControl,FormLabel,FormControlLabel,Radio,RadioGroup } from '@mui/material';
<link href = "/bootstrap/css/bootstrap.min.css" rel = "stylesheet"></link>
export default function Symptoms() {
  const navigate=useNavigate();
  const handleClick=()=>{
      navigate("/IFA")

  }
  return (
      <>
      <section className="signup">
        <div className=' container mt-5'>
          <div className='symptoms-content'> 
            <div className='symptom-form'>
              <h2 className='form-title'>SYMPTOMS</h2><br/>
              <form method="POST" className="register-form .form-inline" id="register-form" encType='multipart/form-data'>
              <div class="radioBtns">
                <label for="radio" >Did you feel weak and tired easily?</label><br/><br/>
                <input type="radio" value="Male1" name="gender1" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Female1" name="gender1" /> No
              </div><br/>
              <div class="radioBtns"> 
                <label for="radio">While climbing stairs or doing any physical activity, breathlessness occurs??</label><br/><br/>
                <input type="radio" value="Male2" name="gender2" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Female2" name="gender2" /> No
              </div><br/>
              <div class="radioBtns"> 
                <label for="radio">Do you have pain in the legs and arms?</label><br/><br/>
                <input type="radio" value="Male3" name="gender3" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Female3" name="gender3" /> No
              </div><br/>
              <div class="radioBtns"> 
                <label for="radio">Sometimes did you feel mentally exhausted?</label><br/><br/>
                <input type="radio" value="Male4" name="gender4" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Female4" name="gender4" /> No
              </div><br/>
              <div class="radioBtns"> 
                <label for="radio">Sometimes feel irritated?</label><br/><br/>
                <input type="radio" value="Male5" name="gender5" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Female5" name="gender5" /> No
              </div>
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
