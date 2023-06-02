import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../style.css'
import NavbarComponent from '../../components/navbarComponent';
import { Card, CardGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import store from '../../store';


function Home() {
    const navigate = useNavigate();

    const token = useSelector((state: ReturnType<typeof store.getState>) => state.user.token);
    console.log(token)

    const handleProfileClick = () => {
        navigate('/profile');
     };

    const handleCentrosItvClick = () => {
        navigate('/centrosItv');
    }

    return (
      <div className='fondo'>
        <NavbarComponent />
        <div className='containe'>
        
          <div className='marco'>
          
            <h1 style={{ marginBottom: '60px' }}>Welcome to Home</h1>
            <div>  
              <CardGroup style={{background: 'transparent' }}>
                <Card className='text-center' style={{ width: '18rem', background: 'transparent',  border: 'none'}}>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
                  <Card.Body>
                    <Card.Title>Profile</Card.Title>
                    <Card.Text>
                      View o Edit your profile
                    </Card.Text>
                    <Button variant="primary" onClick={handleProfileClick}>Go</Button>
                  </Card.Body>
                </Card>
                <Card  className='text-center' style={{ width: '18rem', background: 'transparent', border: 'none'}} >
                  <Card.Img variant="top" src="https://www.autofacil.es/wp-content/uploads/2021/05/itv-foto.jpg" />
                  <Card.Body>
                    <Card.Title>Centros Itv</Card.Title>
                    <Card.Text>
                      View, Add o Edit the Centros Itv
                    </Card.Text>
                    <Button variant="primary" onClick={handleCentrosItvClick}>Go</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Home;