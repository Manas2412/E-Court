import React, { useState } from 'react';
import '../Lawyer/index.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Dropdown } from 'react-bootstrap';
// import { db } from '../../firebase';



function uploadDocuments() {
    window.open("https://digilocker.gov.in/", "_blank");
  }



const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});




const SignUP = () => {
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await db.collection('users').add({
//         name,
//         age,
//         gender,
//         state: selectedState,
//       });

//       alert('Form submitted successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error submitting form. Please try again.');
//     }
//   };


  const states = [
    'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  ];

  const [selectedState, setSelectedState] = React.useState(states[0]);
  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  


  return (
    <>
    {/* <img src= {logo} alt="" /> */}
    <div className='lawyer'> <h1> Registration Form </h1></div>
    
    <div className="container">
    {/* <img className='Img' src={logo} alt="logo"/> */}
      <div className="sidebar">
        <div className={`element ${selected === 0 ? 'active' : ''}`} onClick={() => setSelected(0)}>
          Advocate
        </div>
        <div className={`element ${selected === 2 ? 'active' : ''}`} onClick={() => setSelected(2)}>
           Litigant
        </div>
        <div className={`element ${selected === 3 ? 'active' : ''}`} onClick={() => setSelected(3)}>
          Clerk
        </div>
      </div>
      <div className="content">
        {selected === 0 && <div className="block1">
        <h1 style={{ fontSize: "25px" }}>Personal Details</h1>
        <div class="Select type of case">
          
          
          {/* <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Property Dispute</a></li>
            <li><a class="dropdown-item" href="#">Juvinile Misconduct</a></li>
            <li><a class="dropdown-item" href="#">Family Dispute</a></li>
            <li><a class="dropdown-item" href="#">Legal Documentation</a></li>
            <li><a class="dropdown-item" href="#">Unpaid Personal Loans</a></li>
          </ul> */}

          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedState}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {states.map((state) => (
          <Dropdown.Item key={state} onClick={() => handleChange(state)}>
            {state}
          </Dropdown.Item>
           ))}
          </Dropdown.Menu>
          </Dropdown>
          <form>
      <div>
        <label htmlFor="name">*Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="age">*Date Of Birth:</label>
        <input 
        type="date" 
        id="age" 
        value={age}
         onChange={handleAgeChange} />

        
      </div>
      <div>
        <label htmlFor="gender">*Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
      <h1 style={{ fontSize: "25px" }}>Contact Details</h1>
      <div>
        <label htmlFor="age">*Mobile Number:</label>
        <input
        //   type="number"
        //   id="age"
        //   value={age}
        //   onChange={handleAgeChange}
        />
      </div>

      <div>
        <label htmlFor="email">*Email:</label>
        <input
        //   type="text"
        //   id="email"
        // //   value={}
        //   onChange={handleNameChange}
        />
      </div>
      <div>
      <h2>Upload Documents to DigiLocker</h2>
      <button onClick={uploadDocuments}>Upload Documents</button>
    </div>
        <Button  size="medium" background-colour="blue">Submit</Button>
      </div>
    </form>
          

          
          

          
                
        </div>

          </div>}

        




        {selected === 1 && <div className="block2">Content for Element 2</div>}



        {selected === 2 && <div className="block3">
        <h1 style={{ fontSize: "25px" }}>Personal Details</h1>
        <div class="Select type of case">
          
          
          {/* <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Property Dispute</a></li>
            <li><a class="dropdown-item" href="#">Juvinile Misconduct</a></li>
            <li><a class="dropdown-item" href="#">Family Dispute</a></li>
            <li><a class="dropdown-item" href="#">Legal Documentation</a></li>
            <li><a class="dropdown-item" href="#">Unpaid Personal Loans</a></li>
          </ul> */}

          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedState}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {states.map((state) => (
          <Dropdown.Item key={state} onClick={() => handleChange(state)}>
            {state}
          </Dropdown.Item>
           ))}
          </Dropdown.Menu>
          </Dropdown>
          <form>
      <div>
        <label htmlFor="name">*Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="age">*Date Of Birth:</label>
        <input 
        type="date" 
        id="age" 
        value={age}
         onChange={handleAgeChange} />

        
      </div>
      <div>
        <label htmlFor="gender">*Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
      <h1 style={{ fontSize: "25px" }}>Contact Details</h1>
      <div>
        <label htmlFor="age">*Mobile Number:</label>
        <input
        //   type="number"
        //   id="age"
        //   value={age}
        //   onChange={handleAgeChange}
        />
      </div>

      <div>
        <label htmlFor="email">*Email:</label>
        <input
        //   type="text"
        //   id="email"
        // //   value={}
        //   onChange={handleNameChange}
        />
      </div>
      <div>
      <h2>Upload Documents to DigiLocker</h2>
      <button onClick={uploadDocuments}>Upload Documents</button>
    </div>
        <Button  size="medium" background-colour="blue">Submit</Button>
      </div>
    </form>
          

          
          

          
                
        </div>

          </div>}



    

        
        
        




        {selected === 3 && <div className="block4">
        <h1 style={{ fontSize: "25px" }}>Personal Details</h1>
        <div class="Select type of case">
          
          
          {/* <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Property Dispute</a></li>
            <li><a class="dropdown-item" href="#">Juvinile Misconduct</a></li>
            <li><a class="dropdown-item" href="#">Family Dispute</a></li>
            <li><a class="dropdown-item" href="#">Legal Documentation</a></li>
            <li><a class="dropdown-item" href="#">Unpaid Personal Loans</a></li>
          </ul> */}

          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedState}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {states.map((state) => (
          <Dropdown.Item key={state} onClick={() => handleChange(state)}>
            {state}
          </Dropdown.Item>
           ))}
          </Dropdown.Menu>
          </Dropdown>
          <form>
      <div>
        <label htmlFor="name">*Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="age">*Date Of Birth:</label>
        <input 
        type="date" 
        id="age" 
        value={age}
         onChange={handleAgeChange} />

        
      </div>
      <div>
        <label htmlFor="gender">*Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
      <h1 style={{ fontSize: "25px" }}>Contact Details</h1>
      <div>
        <label htmlFor="age">*Mobile Number:</label>
        <input
        //   type="number"
        //   id="age"
        //   value={age}
        //   onChange={handleAgeChange}
        />
      </div>

      <div>
        <label htmlFor="email">*Email:</label>
        <input
        //   type="text"
        //   id="email"
        // //   value={}
        //   onChange={handleNameChange}
        />
      </div>
      <div>
      <h2>Upload Documents to DigiLocker</h2>
      <button onClick={uploadDocuments}>Upload Documents</button>
    </div>
        <Button  size="medium" background-colour="blue">Submit</Button>
      </div>
    </form>
          

          
          

          
                
        </div>

          </div>}

          
    





      </div>
    </div>
    </>
  );
};





export default SignUP;