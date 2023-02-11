import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {
    const [Name, setName] = useState(null);
    const [email, setemail] = useState(null);
    const [phoneNumber,setphoneNumber] = useState(null);
    const [address,setAddress] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "email"){
            setemail(value);
        }
        if(id === "phoneNumber"){
            setphoneNumber(value);
        }
        if(id === "address"){
            setAddress(value);
        }

    }

    const handleSubmit  = () => {
        console.log(Name,email,phoneNumber,address);
        alert('Usser Added');
        //event.preventDefault();
        setName('');
        setemail('');
        setphoneNumber('');
        setAddress('')
    }

    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="Name"></label>
                  <input className="form__input" type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder="Name" required/>
              </div>
              <div className="email">
                  <label className="form__label" for="email"></label>
                  <input  type="email" value={email} onChange = {(e) => handleInputChange(e)}id="email" className="form__input"  placeholder="Email" required/>
              </div>
              <div className="phoneNumber">
                  <label className="form__label" for="phoneNumber"></label>
                  <input className="form__input" type="text"  value={phoneNumber} onChange = {(e) => handleInputChange(e)} id="phoneNumber" placeholder="PhoneNumber" required/>
              </div>
              <div className="address">
                  <label className="form__label" for="address"></label>
                  <input className="form__input" type="test"  value={address} onChange = {(e) => handleInputChange(e)}id="address" placeholder="Address" required/>
              </div>
          </div>
          <div class="footer">
          <button onClick={()=>handleSubmit()} type="submit" class="btn">Add Member</button>
          </div>
          
      </div>  
          
    )       
}
export default RegistrationForm;