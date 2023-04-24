
import './App.css';
import Navigation from "./components/Navigation"
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer';
import MissionPage from './components/MissionPage/MissionPage';
import MeetOurTeamPage from './components/MeetOurTeamPage/MeetOurTeamPage';
import VeteransPage from './components/VeteransPage/VeteransPage';
import EmployeePortalSignin from './components/EmployeePortal/EmployeePortalSignIn';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import BoardPortalSignIn from './components/BoardPortalPage/BoardPortalSignIn';
import Contact from './components/ContactPage/Contact';
import VAPartner from './components/VAPartner/VAPartner';

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index  element={<HomePage />} />
      <Route path='/employeeportalsignin' element={<EmployeePortalSignin />} />
      <Route path='/missionpage' element={<MissionPage />} />
      <Route path='/meetourteampage' element={<MeetOurTeamPage />} />
      <Route path='/veteranspage' element={<VeteransPage />} />
      <Route path='/boardportalsignin' element={<BoardPortalSignIn />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/vapartners' element={<VAPartner />} />
      


    </Route>
  )
)

  return (
    <div className="App">
      
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return <>
  <Navigation />
  <Outlet />
  <Footer />

  </>
}
