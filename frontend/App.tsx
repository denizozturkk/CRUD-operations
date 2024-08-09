import React, { Children } from 'react';
import './App.css';
import ListGroups from './Components/ListGroups';
import Form from './Components/Form';
import ListToDo from './Components/ListToDo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoComponent from './Components/ToDoComponent';

function App() {

  let items: string[] = ["New York", "Tokyo", "Taipei", "Ankara", "London"];

  const handleSelectItem = (item:string) =>
  {
    console.log(item);
  }
    


  return (

    <div className="App">
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<a className='btn btn-outline-warning'>uyarı</a> */}

<BrowserRouter>

      <div>
      <Routes>
          <Route path='/' element={<ListToDo></ListToDo>}></Route>        
          <Route path='/add-TODO' element={<ToDoComponent/>}></Route>
          <Route path='/edit-TODO/:id' element={<ToDoComponent></ToDoComponent>}></Route>
      </Routes>
      </div>
</BrowserRouter>
  </div>
  );
}

export default App;