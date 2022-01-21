import {useState, useEffect} from 'react';
const initialValues = {id:1, name: "", isActive: true, isCompleted: false};

function Header({todos, addTodo}) {


	const [form, setForm] = useState(initialValues);

    useEffect(() => {
    setForm(initialValues);
  }, [todos]);


  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value, id: todos[todos.length - 1].id + 1});
  }

  const onSubmit = (e) => {

    e.preventDefault();
    if(form.name === "") {
      return false;
      
    }
    console.log(form);
    addTodo([...todos, form]);
    
  };

  return (
      <header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input name="name" className="new-todo" placeholder="What needs to be done?" autofocus onChange={onChangeInput} value={form.name}/>
		</form>
	</header>
      );
}

export default Header;
