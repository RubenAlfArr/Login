import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector} from 'react-redux';
import { store } from '../../store';
import '../../style.css'
import CentroItvForm from './components/centroItvForm';
import NavbarComponent from '../../components/navbarComponent';


function AddCentro() {
    
    const navigate = useNavigate();
    const token = useSelector((state: ReturnType<typeof store.getState>) => state.user.token);
    const activo = true
    const handleSubmit = (formData: FormData) => {

      
      const options = {
        method: 'POST',
        url: `http://localhost:4040/centrositv`,
    
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: formData 
      };

    axios
    .request(options)
    .then(function (response) {

      const data = response.data;
      console.log(data)

      Swal.fire({
        title: 'Añadido!',
        text: 'Datos insertados',
        icon: 'success',
       });
      
      navigate("/centrosItv");

    })
      
    .catch(function () {
      console.log("An error happened");
    });
  }


  const onCancel = () => {
    navigate('/centrosItv');
}

 
  return (
      <div className='fondo'>
        <NavbarComponent />
        <div className='containe'>
        <div className='marco'>
         <CentroItvForm onSubmit={handleSubmit} onCancel={onCancel} isActivo={activo}/>
         </div>
      </div>
      </div>
  )
}

export default AddCentro