import React from 'react'

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Header from './Components/Header';
import MovieDetails from './movieDe/MovieDetails';
import Movielist from './MovieList/Movielist';
import Home from './Pages/Home/Home';



const App = () => {
  return (
   <>
  
    <Router>
      <Header/>
      
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/movies/:type" element={<Movielist/>} />
          <Route path="*" element={<h2>error page</h2>} />
      </Routes>
    </Router>
   </>
  )
}

export default App;