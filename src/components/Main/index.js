import { useState } from 'react';

function Main({ todos, setTodo }) {
const [filterText, setFilterText] = useState(false);
const [filterCompleted, setFilterCompleted] = useState(false);



		const filtered = todos.filter((todo) => {
			
          if (filterText && todo.isActive === true && todo.isCompleted === false) {
			  console.log(todo);
              return todo
          }

		  if (filterCompleted && todo.isCompleted === true) {
			  console.log(todo);
              return todo
          }

		  if (!filterText && !filterCompleted) {
			  console.log(todo);
              return todo
          }
		  
        })

		//console.log(filtered);


	

 const onChangeInput = (e) => {
		console.log(e);
		var updatedTodos = '';
            
			updatedTodos = todos.map(todo => {
          if (todo.id === parseInt(e.target.value)) {
			  
              return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
				  isActive: !todo.isActive
              }
          }
          return todo
        })
		console.log(updatedTodos);
		 
	
    setTodo(updatedTodos);
  }

  const deleteToDo = (e) => {
console.log(e.target.value);
      var newTodos = '';
            
			newTodos = todos.filter(todo => {
          if (todo.id !== parseInt(e.target.value)) {
			  
              return {
                  ...todo
              }
          }
          
        })
		console.log(newTodos);
		 
	
    setTodo(newTodos);
  }

  const clearAll = () => {
	  var allTodos = '';
            
			allTodos = todos.map(todo => {
          if (todo.isCompleted === true) {
			  
              return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
				  isActive: !todo.isActive
              }
          }
          return todo
        })
		
		 
	
    setTodo(allTodos);
  }

  const countRemain = () => {
	  var remain = filtered.filter((todo) => todo.isCompleted === false);

	  return remain.length;
  }

  return (
	  <>
	<section className="main">
		<input className="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">

		   {
			   filtered.map((todo, i) => 
			      (
				    <li key={i} className={todo.isCompleted ? 'completed': ''}>
				      <div className="view">
					    <input className="toggle" type="checkbox" onChange={onChangeInput} value={todo.id} id={todo.isCompleted ? 'done': ''}/>
					    <label>{todo.name}</label>
					    <button className="destroy" onClick={deleteToDo} value={todo.id}></button>
				      </div>
			        </li>
				  ) 
				  )
		   }

		</ul>
	</section>
	<footer className="footer">
		<span className="todo-count">
			<strong>
			{countRemain()}
			</strong>
			&nbsp;items left
		</span>

		<ul className="filters">
			<li>
				<a className={!filterText && !filterCompleted ? 'selected': ''} onClick={() => {setFilterCompleted(false); setFilterText(false);}}>All</a>
			</li>
			<li>
				<a className={filterText && !filterCompleted ? 'selected': ''} onClick={() => {setFilterText(true); setFilterCompleted(false);}}>Active</a>
			</li>
			<li>
				<a className={!filterText && filterCompleted ? 'selected': ''} onClick={() => {setFilterCompleted(true); setFilterText(false);}}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearAll}>
			Clear completed
		</button>
	</footer>
	</>
      );
}

export default Main;