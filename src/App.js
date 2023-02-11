//import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import RegistrationForm from './component/registrationform';

function App() {
  return (
    <div className="App">
      <Header/>
      <RegistrationForm/>
      <div class="last">
        <button type="submit" class ="button">Show Member</button>
      </div>
    </div>
    
  );
}

export default App;
