import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Ex from '../assets/x.png'


function Exit() {

    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    const handleCancel = () => {
      if (currentPath === '/profile') {
        navigate('/home');
      } else {
        navigate('/profile');
      }
    }
  return (
    <div>
        <Button variant="link" onClick={handleCancel} className="x-button">
        <img className="x-image" src={Ex} alt="X" />
        </Button>
       
    </div>
  )
}

export default Exit