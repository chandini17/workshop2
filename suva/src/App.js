import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Reg from './Reg';
import Employee from './Employee';
import Hook from './Hook';
import Home from './Home';
function App(){

  
   return (
   <div>
     {/* <Reg name="suvarna"/> */}
     {/* <Login name="chinnu" />  */}
     <Employee />  
     <Hook/> 
     <Home/>  
   </div> 
  );
   }

export default App;



