import logo from './logo.svg';
import './App.css';
import Todos from './Components/todos';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">ToDo App in React</h1>
      <Todos></Todos>
    </div>
  );
}

export default App;
