import React, { useState } from 'react';
import '../Lawyer/index.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import logo from '../../Assets/Lawyer/Lawyer.JPG'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div">
       Case ID:
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        12345
      </Typography>
      <Typography variant="body2">
        Description :
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem inventore aperiam, totam natus libero molestiae vel ullam ratione! Eos, fugit odio. Nobis ut accusamus magni mollitia ad sequi aliquam!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum tempora aliquam! Ut dolor doloremque non exercitationem hic nostrum eos perferendis dolorem recusandae sint. Laboriosam sapiente eum quae corporis ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum velit molestiae quod, ut, exercitationem aliquid dicta accusamus quisquam, earum nostrum repudiandae perspiciatis? Repudiandae sunt debitis fugiat corrupti unde? Cumque?
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button href='https://meet.google.com/nwe-ecrp-jhq' size="small">Join Meet</Button>
    </CardActions>
  </React.Fragment>
);

const Lawyer = () => {
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


  return (
    <>
    {/* <img src= {logo} alt="" /> */}
    <div className='lawyer'> <h1> Admin's Portal </h1></div>
    
    <div className="container">
    {/* <img className='Img' src={logo} alt="logo"/> */}
      <div className="sidebar">
        <div className={`element ${selected === 1 ? 'active' : ''}`} onClick={() => setSelected(1)}>
          Previous Cases
        </div>
        <div className={`element ${selected === 2 ? 'active' : ''}`} onClick={() => setSelected(2)}>
          Upcoming Cases
        </div><div className={`element ${selected === 0 ? 'active' : ''}`} onClick={() => setSelected(0)}>
          New cases
        </div>
        
      </div>
      <div className="content">
        {selected === 0 && <div className="block1">
        <img className='LawyerPhoto' src={logo} alt="judge Photo" />
        <h2>Name: Aman Chauhan</h2>
        <h3>Age: 55</h3>
        <h3>Gender: Male</h3>
        <h3>Location: High Court(Delhi)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, unde consequuntur saepe repellendus nemo quae quidem perspiciatis sunt assumenda reiciendis ipsa modi quos, beatae fuga provident tempore cum temporibus!</p>
        </div>}




        {selected === 1 && <div className="block2">Content for Element 2</div>}



        {selected === 2 && <div className="block3">
        <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>  


    

        
        
        </div>}




        {selected === 3 && <div className="block4">
        <div class="Select type of case">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Type of Case
          </button>
          
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Property Dispute</a></li>
            <li><a class="dropdown-item" href="#">Juvinile Misconduct</a></li>
            <li><a class="dropdown-item" href="#">Family Dispute</a></li>
            <li><a class="dropdown-item" href="#">Legal Documentation</a></li>
            <li><a class="dropdown-item" href="#">Unpaid Personal Loans</a></li>
          </ul>
          <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">Write Your Description:</label>
        <input
          type="text"
          id="description"
          value={name}
          onChange={handleNameChange}
        />
        <Button  size="medium">Submit</Button>
      </div>
    </form>
          

          
          

          
                
        </div>

          </div>}

          
    





      </div>
    </div>
    </>
  );
};


export default Lawyer;