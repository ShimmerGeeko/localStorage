import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from './views/LoginForm';
import displayTable from './views/displayTable';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginForm} />
        <Route path="/table" component={displayTable} />
      </BrowserRouter>
    </div>
  );
}

export default App;
