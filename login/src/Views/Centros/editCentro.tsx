import { useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { store } from '../../store';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import {setCentroItv,} from '../../slice/centroItvSlice';
import { useEffect } from 'react';
import '../../style.css'
import CentroItvForm from './components/centroItvForm';
import NavbarComponent from '../../components/navbarComponent';


function EditCentro() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.data
  const token = useSelector((state: ReturnType<typeof store.getState>) => state.user.token);
  const activo = false;

  useEffect(() => {
    axios.get(`http://localhost:4040/centrositv/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      const centro = response.data;
      // Set the initial state of the form with the data retrieved from the server
      store.dispatch(setCentroItv(centro));
      console.log(centro)
    })
    .catch(error => {
      console.log(error);
    });
  }, [id, token]);
    

  


  // useEffect(() => {
  //   if (data) {
  //     setName(data.Name);
  //     setPhone(data.Phone);
  //     setEmail(data.Email);
  //     setDireccionPoblacion(data.DireccionPoblacion);
  //     setDireccionNumero(data.DireccionNumero);
  //     setComments(data.Comments);
  //   }
  // }, [data]);

  const onCancel = () => {
    navigate('/centrosItv');
    cleanInput();
  }

  const cleanInput = () =>{
    store.dispatch(setCentroItv(""));
}

   
  const handleSubmit = (formData: FormData) => {

    // // Validar que todos los campos estén llenos antes de enviar el formulario
    // if (!name || !phone || !email || !direccionPoblacion || !direccionNumero) {
    //   // Mostrar un mensaje de error si algún campo está vacío
    //   Swal.fire({
    //     title: 'Error',
    //     text: 'Por favor, completa todos los campos que tengan * en su nombre',
    //     icon: 'error',
    //   });
    //   return;
    // }

    const options = {
      method: 'POST',
      url: `http://localhost:4040/centrositv/${id}`,
  
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
              title: 'Editado!',
              text: 'El centro ha sido editado',
              icon: 'success',
          });

          navigate("/centrosItv");
          cleanInput();
      
      })
        
      .catch(function () {
          console.log("An error happened");
      });
    }


    return (
      <div className='fondo'>
        <NavbarComponent />
        <div className='containe'>
        <div className='marco'>
          <CentroItvForm  onSubmit={handleSubmit} onCancel={onCancel} isActivo={activo}/>
        </div>
      </div>
      </div>
    ) 
}

export default EditCentro