import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import FooterInfo from './components/FooterInfo';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Learn Javascript", isActive: false, isCompleted: true},
    { id: 2, name: "Learn React", isActive: true, isCompleted: false},
    { id: 3, name: "Have a life!", isActive: true, isCompleted: false}
  ]);
  return (
    <div className="App">
      <section className="todoapp">
	      <Header todos={todos} addTodo={setTodos}/>
	      <Main todos={todos} setTodo={setTodos}/>
      </section>
      <FooterInfo />
    </div>
  );
}

export default App;
