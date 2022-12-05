import './App.css';
import Navbar from './shared/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './components/User';
import AddEditUser from './components/AddEditUser';
import UserInfo from './components/UserInfo';
import store from './redux/store';
import {Provider} from 'react-redux'
function App() {
  return (


    
   <div>


    <Provider store={store}>
    
    <br/>
       <div className='container-sm'>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route exact path="/" element={<User />} />
       <Route path="/userinfo/:id" element={<UserInfo/>} />
       <Route path="/add" element={<AddEditUser/>} />
       <Route path="/edit/:id" element={<AddEditUser/>} />
    
      
       </Routes>
       </BrowserRouter>
       </div>
    
    </Provider>













  
  
   </div>
  );
}

export default App;
