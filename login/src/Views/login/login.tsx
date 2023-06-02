import { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { setAuth} from '../../slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { store } from '../../store';
import Swal from 'sweetalert2'
import '../../style.css';
import loginImage from "../../assets/login.png";

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();
  
  const options = {
    method: 'POST',
    url: `http://localhost:4040/authenticate`,

    headers: {
      'Content-Type': 'application/json'
    },

    data: {
      login,
      password
    }
  };

 
//---------------------
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    //Prevent the form from submitting and reloading the page when the "Login" button is clicked.
    event.preventDefault();
    
   

    axios.request(options)
    .then(function (response) {

      const data = response.data;
      console.log(data)

      store.dispatch(setAuth(data))//Save all data
     
      navigate('/home');
      
      
    })
      
    .catch(function () {
      console.log("An error happened");
      Swal.fire('User or Password incorrect')
    });
  }

  //ves todo los cambios que te digo
  
  return (
    <div className='fondo'>
      <div className='containe'>
        <div className='marco'>
        <img className='image' src={loginImage} alt="Login" />

          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label className="form-label">User</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="Enter User" onChange={(event) => setLogin(event.target.value)} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control className="form-control" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
          </Form.Group>
          
          <Button className="login-button" variant="primary" type="submit" style={{ border: 'none', borderRadius: '8px', backgroundColor: 'rgba(241, 39, 39, 0.781)', }}>Login</Button>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login