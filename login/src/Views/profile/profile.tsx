import { useSelector} from 'react-redux';
import { store } from '../../store';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Logout from '../../components/logout';
import '../../style.css'
import NavbarComponent from '../../components/navbarComponent';
import loginImage from "../../assets/login.png";
import Exit from '../../components/exit'



function Profile() {
    const navigate = useNavigate();
    const currentUser = useSelector((state: ReturnType<typeof store.getState>) => state.user);
    console.log(currentUser)


    // //localStorage to save data
    //     // Save currentUser to localStorage when loading component if it exists and changes
    // useEffect(() => {
    //     if (currentUser) {
    //         localStorage.setItem('currentUser', JSON.stringify(currentUser));
    //     }
    // }, [currentUser]);

    //  // executed currentUser the localStorage 
    // useEffect(() => {
    //     const storedCurrentUser = localStorage.getItem('currentUser');
    //     if (storedCurrentUser) {
    //         const parsedCurrentUser = JSON.parse(storedCurrentUser);
    //         if (parsedCurrentUser) {
    //             store.dispatch(updateUser(parsedCurrentUser));
    //             console.log(parsedCurrentUser);
    //          }
    //     }
    // },[]);


    const handleEdit = () => {
        navigate('/editProfile');
    }

    return (
        <div className='fondo'>
            <NavbarComponent />
            <div className='containe'>
                <div className='marco-general'>
                    <Exit />
                    <div className='marco-imagen'>
                    <img className='img-izquierda' src={loginImage} alt="Login" />
                    <aside className='bold-text'>{currentUser.user?.Nombre}</aside>
                    <br></br>
                    <aside>{currentUser.user?.Email}</aside>
                    <p> {currentUser.user?.Rol}</p>
                    </div>

                    <div className='marco-profile'>
                        <p className='margin'>
                            <span className="bold-text">User:</span> {currentUser.user?.Usuario}
                        </p>
                        <p className='margin'>
                            <span className="bold-text">Password:</span> {currentUser.user?.Password}
                        </p>
                    </div>
                    <div className='marco-profile'>
                        <p className='margin-x'>Sign out</p>
                        <Logout />
                    </div>
                    <div>
                        <Button type="button" className='button' variant="primary" onClick={handleEdit}> Edit </Button>{' '}
                    </div>
                </div>
            </div>
        </div>

    );
}

  export default Profile;

