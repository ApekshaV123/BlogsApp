import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';

import AddAndEditBlogs from '../AddAndEditBlogs/AddAndEditBlogs';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='logout' element={<Logout/>}/>
        <Route path='addAndEditBlogs' element={<AddAndEditBlogs/>} />
      </Routes>
    </Router>  
  );
}
export default App;
