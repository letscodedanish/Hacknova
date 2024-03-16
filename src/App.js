import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Toolbar from './Components/Toolbar'

import Dashboard from './Pages/Dashboard'
import Community from './Pages/Community'
import Consult from './Pages/Consult'
import Support from './Pages/Support'
import Exercise from './Pages/Exercise'
import ChooseSpeciality from './Pages/ChooseSpeciality'
import ChooseDoc from './Pages/ChooseDoctor'
import BookAppointments from './Pages/BookAppointments'
import Medicines from './Pages/Medicines'
import SignIn from './Pages/SignIn'
import Alan from './Components/Alan'

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Consult />} />
          <Route path="/chooseSpeciality" element={<ChooseSpeciality />} />
          <Route path="/chooseDoc" element={<ChooseDoc />} />
          <Route path="/bookAppt" element={<BookAppointments />} />
          <Route path="/myAccount" element={<Dashboard />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/community" element={<Community />} />
          <Route path="/support" element={<Support />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/signIn" element={<SignIn />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
