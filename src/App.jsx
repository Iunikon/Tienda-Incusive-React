import './App.css';
import Hero from './page/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { items } from './mock/mockData.js';

function App() {
  const title = "Titulo ejemplo"; 

  return (
    <>
      <Navbar />
      <Hero />
      <ItemListContainer title={title} />
    </>
  );
}

export default App;
