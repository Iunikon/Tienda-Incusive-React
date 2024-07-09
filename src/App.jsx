import './App.css';
import Hero from './Page/Hero';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  const title = "Titulo ejemplo"; 

  return (
    <div>
      <Navbar />
      <Hero />
      <ItemListContainer title={title} />
    </div>
  );
}

export default App;
