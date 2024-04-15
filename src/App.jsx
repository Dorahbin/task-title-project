import './App.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import AllTasks from './pages/AllTask';
import NewTask from './pages/NewTask';
import EditTask from './pages/EditTask'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alltasks' element={<AllTasks />} />
          <Route path='/newtasks' element={<NewTask />} />
          <Route path='/edittasks' element={<EditTask />} />

        </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App;
