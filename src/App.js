import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert variant="success">This is a button</Alert>
        <Button>Start Adventure!</Button>
      </header>
    </div>
  );
}

export default App;
