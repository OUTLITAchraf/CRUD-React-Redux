import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListFilm from './Componants/ListFilm';
import AddFilm from './Componants/AddFilm';
import UpdateFilm from './Componants/UpdateFilm';

function App() {
  return (
    <div>
      <h1>CRUD REACT-REUX :</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListFilm/>} />
          <Route path='/add-film' element={<AddFilm/>} />
          <Route path='/update-film/:id' element={<UpdateFilm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
