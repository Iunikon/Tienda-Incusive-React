import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Layout from './page/Layout.jsx';
import Main from './components/Main/Main.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutUs from './components/AboutUs/AbouUs.jsx';
import Error404 from './components/Error404/Error404.jsx';

function App() {
const title = "Titulo ejemplo";

return (
<BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<>
        <Main />
        <ItemListContainer title={title} />
        </>
        }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  </Layout>
</BrowserRouter>
);
}

export default App;
