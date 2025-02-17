import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" elements={<HomePage/>}/>
      <Route path="/beers" element= {<Beers/>}/>
      <Route path="/random-beer" element={<RandomBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>
      
    </Routes>
   
    </div>
  );
}

export default App;
