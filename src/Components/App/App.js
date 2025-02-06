import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Register from '../Register/Register';
import Login from '../Login/Login';


import AddAndEditBlogs from '../AddAndEditBlogs/AddAndEditBlogs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BlogsList from '../BlogsList/BlogsList';
function App() {
  return (
   
    <Router>
       <Header/>
      <Routes>
       
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blogsList' element={<BlogsList/>}/>
        <Route path='/addAndEditBlogs' element={<AddAndEditBlogs/>} />
        
      </Routes>
      <Footer/>
    </Router>  
  );
}
export default App;
