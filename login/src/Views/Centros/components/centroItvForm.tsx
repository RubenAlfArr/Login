import { FormEvent, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../centrosItv'
import { useSelector} from 'react-redux';
import { store } from '../../../store';

type SubmitHandler = (formData: FormData) => void;
type CancelHandler = () => void;

function CentroItvForm({ onSubmit, onCancel, isActivo=true }: { onSubmit: SubmitHandler, onCancel: CancelHandler, isActivo: boolean}) {

  const data = useSelector((state: ReturnType<typeof store.getState>) => state.centroItv.centroItv);
  

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [personaContacto, setPersonaContacto] = useState("");
  const [direccionPoblacion, setDireccionPoblacion] = useState("");
  const [direccionNumero, setDireccionNumero] = useState("");
  const [comments, setComments] = useState("");
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    //append add the fields and valors
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("PersonaContacto", personaContacto);
    formData.append("DireccionPoblacion", direccionPoblacion);
    formData.append("DireccionNumero", direccionNumero);
    formData.append("Comments", comments);

    onSubmit(formData);
  }

  const handleCancel = () => {
    onCancel()
}

return (
    <div>
    <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                 <Form.Label>Name</Form.Label>
                 <Form.Control type="text" placeholder="Name" defaultValue={isActivo ? name : data?.Name }   onChange={(event) => setName(event.target.value)} required />
                 <Form.Control.Feedback type="invalid">Please enter the Name. </Form.Control.Feedback>  
             </Form.Group>
             <br></br>
             <Form.Group  controlId="formBasicPhone">
                 <Form.Label>Phone</Form.Label>
                 <Form.Control type="phone" placeholder="Phone" defaultValue={isActivo ? phone : data?.Phone}  onChange={(event) => setPhone(event.target.value)} required />
                 <Form.Control.Feedback type="invalid">Please enter the Phone. </Form.Control.Feedback>  
             </Form.Group>
             <br></br>
             <Form.Group  controlId="formBasicEmail">
                 <Form.Label>Email</Form.Label>
                 <Form.Control type="email" placeholder="Email" defaultValue={isActivo ? email : data?.Email} onChange={(event) => setEmail(event.target.value)} required /> 
                 <Form.Control.Feedback type="invalid">Please enter the Email. </Form.Control.Feedback>  
             </Form.Group>
             <br></br>
             <Form.Group  controlId="formBasicPersonaContacto">
                 <Form.Label>Persona de Contacto</Form.Label>
                 <Form.Control type="text" placeholder="PersonaContacto" defaultValue={isActivo ? personaContacto : data?.PersonaContacto} onChange={(event) => setPersonaContacto(event.target.value)} required /> 
                 <Form.Control.Feedback type="invalid">Please enter the People of Contact. </Form.Control.Feedback>  
             </Form.Group>
             <br></br>
             <Form.Group  controlId="formBasicPopulation">
                 <Form.Label>Address Population</Form.Label>
                 <Form.Control type="text" placeholder="DireccionPoblacion" defaultValue={isActivo ? direccionPoblacion : data?.DireccionPoblacion}  onChange={(event) => setDireccionPoblacion(event.target.value)} required /> 
                 <Form.Control.Feedback type="invalid">Please enter the Address Population. </Form.Control.Feedback>  
             </Form.Group>
             <br></br>
             <Form.Group  controlId="formBasicNumber">
                 <Form.Label>Address Number</Form.Label>
                 <Form.Control type="text" placeholder="DireccionNumero" defaultValue={isActivo ? direccionNumero : data?.DireccionNumero} onChange={(event) => setDireccionNumero(event.target.value)} required /> 
                 <Form.Control.Feedback type="invalid">Please enter the Address Number. </Form.Control.Feedback>  
             </Form.Group>
             <br></br>
             <Form.Group  controlId="formBasicComment">
                 <Form.Label>Comment</Form.Label>
                 <Form.Control type="text" placeholder="Comment" defaultValue={isActivo ? comments : data?.Comments} onChange={(event) => setComments(event.target.value)}/>
             </Form.Group>
             <br></br>
             <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" type="submit">{isActivo? "Add":"Edit"} </Button>{' '}
            <Button variant="danger" type="button" onClick={handleCancel}> Cancel </Button>
            </div>
        </Form>
        </div>
  )
}

export default CentroItvForm
