import {Formik, Form, Field,} from 'formik'
import Button from 'react-bootstrap/Button';

import { useSelector} from 'react-redux';
import { store } from '../../../store';

interface FormValues {
    name: string;
    email: string;
    user: string;
    password: string;
  }

  interface ProfileFormProps {
    handleSubmit: (id: number, name: string, email: string, user: string, password: string) => void;
  }
   
function ProfileForm(props:ProfileFormProps) {

const { handleSubmit} = props;


const data = useSelector((state: ReturnType<typeof store.getState>) => state.user.user);
const id = data?.ID || 0
  

  const initialValues: FormValues = {
    name: data?.Nombre || '',
    email: data?.Email ||'',
    user: data?.Usuario ||'',
    password: data?.Password || '',
  };

  // const updatedData = {
  //   ...data, // Copia los valores actuales
  //   Nombre: initialValues.name,
  // };

  const onSubmit = (values: FormValues) => {
    handleSubmit(id,values.name, values.email, values.user, values.password);
  }

  
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div>
             <label htmlFor="name">Name</label>
            </div>
            <div>
              <Field id="name" name="name" type="text"/>
          </div>
          <div style={{ marginTop: '16px' }}>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <Field id="email" name="email" type="email" />
          </div>
          <div style={{ marginTop: '16px' }}>
              <label htmlFor="user">User</label>
            </div>
            <div>
              <Field id="user" name="user" type="text" />
          </div>
          <div style={{ marginTop: '16px' }}>
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <Field id="password" name="password" type="password" />
          </div>
          
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" type="submit" style={{ marginRight: '8px' }}> Edit </Button>
            
          </div>

        </Form>
      </Formik>
    </div>
  )
}

export default ProfileForm