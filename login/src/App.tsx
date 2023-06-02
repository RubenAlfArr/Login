import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './style.css'
import Login from "./Views/login/login";
import Profile from "./Views/profile/profile"
import Home from "./Views/home/home"
import CentrosItv from "./Views/Centros/centrosItv"
import AddCentro from "./Views/Centros/addCentro";
import EditCentro from "./Views/Centros/editCentro";
import EditProfile from "./Views/profile/editProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/centrosItv",
    element: <CentrosItv />,
  },
  {
    path: "/addCentro",
    element: <AddCentro />,
  },
  {
    path: "/editCentro",
    element: <EditCentro />,
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },
]);

//comentario

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
