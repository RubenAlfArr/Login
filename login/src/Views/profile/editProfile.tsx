import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ProfileForm from './components/profileForm';
import axios from 'axios';
import { useSelector } from 'react-redux';
import store from '../../store';
import {updateUser} from '../../slice/userSlice';
import Exit from '../../components/exit'
import '../../style.css'
import NavbarComponent from '../../components/navbarComponent';


function EditProfile() {

  const navigate = useNavigate();
  const token = useSelector((state: ReturnType<typeof store.getState>) => state.user.token);
  const id = useSelector((state: ReturnType<typeof store.getState>) => state.user.user?.ID);
  console.log(id)


  const handleSubmit = (id: number, name: string, email: string, user: string, password: string) => {

    const options = {
      method: 'POST',
      url: `http://localhost:4040/administradores/${id}`,
  
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: {
        ID:id,
        Nombre: name,
        Email: email,
        Usuario: user,
        Password: password,
        
      }
    };

    axios.request(options)
    .then(function (response) {

      const {ID, Nombre, Email, Rol, Usuario, Password } = response.data;
      const userData = {ID, Nombre, Email, Rol, Usuario, Password };

        
       Swal.fire({
          title: 'Editado!',
          text: 'El perfil ha sido editado',
          icon: 'success',
      });

        store.dispatch(updateUser(userData))//Save all data
        console.log(userData)
        navigate("/profile");
        
    })
      
    .catch(function () {
      console.log("An error happened");
      Swal.fire('Could not Edit Profile ')
    });
  }

  return (
    <div className='fondo'>
      <NavbarComponent />
      <div className='containe'>
        <div className='marco'>
          <Exit />
          <h1>EDIT THE PROFILE</h1>
          <ProfileForm handleSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default EditProfile