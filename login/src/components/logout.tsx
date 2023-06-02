import { Button } from 'react-bootstrap'
import LogOut from '../assets/logout.png'
import { useNavigate } from 'react-router-dom';


function Logout() {

    const navigate = useNavigate();
       

    const handleCancel = () => {
        navigate('/');
    }

  return (
    <Button variant="link" onClick={handleCancel}>
    <img className="logout-image" src={LogOut} alt="Logout" />
    </Button>
    
  )
}

export default Logout