import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './page/Hero.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Layout from './page/Layout.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutUs from './components/AboutUs/AbouUs.jsx';

function App() {
  const title = "Titulo ejemplo";

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"  element={<>
                <Hero />
                <ItemListContainer title={title} />
              </>
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
