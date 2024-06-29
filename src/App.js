import { BrowserRouter as Router, Route,Routes, Form } from 'react-router-dom';
import MainPage from './components/MainPage'
import Loginpage from './components/loginpage'
import Signup from './components/signup'
import HomePage from './components/homepage'
import AddProduct from './components/AddProduct'
import DeleteProduct from './components/deleteProduct'
import UpdateProduct from './components/updateProduct'
import ViewProducts from './components/viewProduct';
function App() {
  return (
    <Router>
        <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/loginpage" element={<Loginpage/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/homepage" element={<HomePage/>}/>
              <Route path="/AddProduct" element={<AddProduct/>}/>
              <Route path="/deleteProduct" element={<DeleteProduct/>}/>
              <Route path="/updateProduct" element={<UpdateProduct/>}/>
              <Route path="/viewProducts" element={<ViewProducts/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
