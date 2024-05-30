import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpolyeeCRUD from './Components/Emp_CRUD/Emp_CRUD';
import Header from './Components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center font m-3'>Employee Management CRUD</h1>
      <Header />
      <EmpolyeeCRUD />
    </>
  )
}

export default App
