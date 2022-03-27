
import './App.css';
import {BrowserRouter as router,Switch,Route, } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <div className="App">
     
     {/* Login */}
     <Login />
        
    </div>
  );
}

export default App;
