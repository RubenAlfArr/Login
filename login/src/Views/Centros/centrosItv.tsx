import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { store } from '../../store';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Search from '../../components/search';

import '../../style.css'
import { Card, ListGroup } from 'react-bootstrap';
import NavbarComponent from '../../components/navbarComponent';


interface CentroItv {
    ID: number;
    Name: string;
    Phone: string;
    Email: string;
    Usos: string;
    PersonaContacto: string;
    DireccionCp: string;
    DireccionPoblacion: string;
    DireccionCalle: string;
    DireccionNumero: string;
    MoreInformation: string;
    DireccionLong: string;
    DireccionLat: string;
    Active: boolean;
    Comments: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
  }


function CentrosItv() {
    const navigate = useNavigate();
    const [centrosItv, setCentrosItv] = useState<CentroItv[]>([]);

    const [searchName, setSearchName] = useState('');
    const [filteredCentrosItv, setFilteredCentrosItv] = useState<CentroItv[]>([]);

    const token = useSelector((state: ReturnType<typeof store.getState>) => state.user.token);
    const [isMobile, setIsMobile] = useState(true);
    
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      //listener event ,When the  window "resize" happens that executed function "handleResize"
      window.addEventListener('resize', handleResize);
      handleResize();
    }, []);


    

    
    //Effect controller when the page opens or there is some change in the centroItv Api
    useEffect(() => {
        axios.get('http://localhost:4040/centrositv/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })
          .then(response => {
            setCentrosItv(response.data);

          })
          .catch(error => {
            console.log(error);
          });
      },[token]);

      console.log(centrosItv)

  //Function Edit Centro
  const handleEditCentro= (id: number) => {
    const idString = JSON.stringify(id);
    navigate(`/editCentro/`, { state: { data: idString } } )
  }

  
    //Function Delete Centro
    const handleDeleteCentro = (id: number) => {

      Swal.fire({
        title: '¿Estas Seguro?',
        text: "Estas apunto de eliminarlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Estoy Seguro'
      }).then((result) => {
        if (result.isConfirmed) {

          axios.delete(`http://localhost:4040/centrositv/${id}`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
            })
          .then(() => {

              //Delete the Centro from the list of centrosItv
              setCentrosItv(centrosItv.filter(centro => centro.ID !== id));

              Swal.fire({
                  title: 'Eliminado!',
                  text: 'El centro ha sido eliminado.',
                  icon: 'success',
               });
            })
          .catch(error => {
              console.log(error);
          });
        }
      }) 
     };

    
     //Controladores de Boton
  const handleAddCentroClick = () => {
        navigate('/addCentro');
    }

  const handleCancel = () => {
      navigate('/home');
  }

  const handleSearch = (search: string) => {
    setSearchName(search);
    console.log(searchName)
//La cadena de search la convierto en minuscula(toLowerCase) y verifico si el  centro.Name(tambien convertida a minuscula) contiene la cadena search 
    const filteredCentros = centrosItv.filter(centro => centro.Name.toLowerCase().includes(search.toLowerCase()));
    setFilteredCentrosItv(filteredCentros);
  };

  
  return (
    <div className='fondo' >
      <NavbarComponent />
      <div className='containe' >
      <div className='marco'>
        <Search onSearch={handleSearch}/>
        <br></br>
        {isMobile ? (
          <Card style={{ background: 'transparent',  border: 'none', maxWidth: '100%', overflowX: 'auto'}}>
            <ListGroup variant="flush" >
    
            {filteredCentrosItv.length > 0 ? (
              filteredCentrosItv.map(centro => (
                <ListGroup.Item style={{ background: 'transparent' }} key={centro.ID}>
                  <strong>Name:</strong> {centro.Name}<br />
                  <strong>Phone:</strong> {centro.Phone}<br />
                  <strong>Email:</strong> {centro.Email}<br />
                  <strong>Persona Contacto:</strong> {centro.PersonaContacto}<br />
                  <strong>Address Population:</strong> {centro.DireccionPoblacion}<br />
                  <strong>Address Number:</strong> {centro.DireccionNumero}<br />
                  <strong>Comments:</strong> {centro.Comments}<br />
                  <Button variant="primary" className='centro-button' onClick={() => handleEditCentro(centro.ID)}>Edit</Button>
                  <Button variant="danger" className='centro-button' onClick={() => handleDeleteCentro(centro.ID)}>Delete</Button>
                </ListGroup.Item>
              ))
            ) : (
              centrosItv.map(centro => (
                <ListGroup.Item  style={{ background: 'transparent'}} key={centro.ID}>
                  <strong>Name:</strong> {centro.Name}<br />
                  <strong>Phone:</strong> {centro.Phone}<br />
                  <strong>Email:</strong> {centro.Email}<br />
                  <strong>Persona Contacto:</strong> {centro.PersonaContacto}<br />
                  <strong>Address Population:</strong> {centro.DireccionPoblacion}<br />
                  <strong>Address Number:</strong> {centro.DireccionNumero}<br />
                  <strong>Comments:</strong> {centro.Comments}<br />
                  <Button variant="primary" className='centro-button' onClick={() => handleEditCentro(centro.ID)}>Edit</Button>
                  <Button variant="danger" className='centro-button' onClick={() => handleDeleteCentro(centro.ID)}>Delete</Button>
                </ListGroup.Item>
              ))
            )}
            </ListGroup>
          </Card>
         ) : (
          <Table responsive="md" striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Persona de Contacto</th>
                    <th>Address Population</th>
                    <th>Address Number</th>
                    <th>Comments</th>
                    <th></th>
                  </tr>
            </thead>
            <tbody>
            {filteredCentrosItv.length > 0 ? (
              filteredCentrosItv.map(centro => (
                    <tr key={centro.ID}>
                        <td>{centro.Name}</td>
                        <td>{centro.Phone}</td>
                        <td>{centro.Email}</td>
                        <td>{centro.PersonaContacto}</td>
                        <td>{centro.DireccionPoblacion}</td>
                        <td>{centro.DireccionNumero}</td>
                        <td>{centro.Comments}</td>
                        <td>
                        <Button variant="primary" className='centro-button' onClick={() => handleEditCentro(centro.ID)}> Edit </Button>
                        <Button variant="danger" className='centro-button' onClick={() => handleDeleteCentro(centro.ID)}>Delete</Button>
                        </td>
                    </tr>
                 ))
                ):(
                 centrosItv.map(centro => (
                    <tr key={centro.ID}>
                        <td>{centro.Name}</td>
                        <td>{centro.Phone}</td>
                        <td>{centro.Email}</td>
                        <td>{centro.PersonaContacto}</td>
                        <td>{centro.DireccionPoblacion}</td>
                        <td>{centro.DireccionNumero}</td>
                        <td>{centro.Comments}</td>
                        <td>
                        <Button variant="primary" className='centro-button' onClick={() => handleEditCentro(centro.ID)}> Edit </Button>
                        <Button variant="danger" className='centro-button' onClick={() => handleDeleteCentro(centro.ID)}>Delete</Button>
                        </td>
                    </tr>
                 ))
                )}
            </tbody>
          </Table>
        )}
        <div className="d-flex justify-content-center">
          <Button  className="btn btn-primary mr-3" onClick={handleAddCentroClick}>Add Centro</Button>{' '}
          <Button  className="btn btn-danger" onClick={handleCancel}> Salir </Button>
        </div>
      </div>
    </div>  
    </div>
  );
}


export default CentrosItv;

