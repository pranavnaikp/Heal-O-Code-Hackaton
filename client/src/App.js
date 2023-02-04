import logo from './logo.svg';
import './App.css';
import Client_home from './pages/client_home/client_home';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";



function App() {

  
  return (
<div className="App">
   <Router>
    <Routes>
      <Route path="/" element = {<Client_home/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;