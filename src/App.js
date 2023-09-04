import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';
import Player from './components/Player';
import Movie from './components/pages/Movie';
import Serie from './components/pages/Serie';
import Start from './components/Start';

function App() {
  return (
    <BrowserRouter>
        <Header/>
    <Routes>
      <Route path="/">
        <Route
          index
          element={
              <Login />     
          }
        />
        <Route path="home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/serie" element={<Serie />} />
        <Route path="/start" element={<Start />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
