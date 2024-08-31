import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext.jsx';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Layout from './page/Layout.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutUs from './components/AboutUs/AbouUs.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
const title = "Titulo ejemplo";

return (
<CartContextProvider>
<BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<>
        <ItemListContainer />
        </>
        }
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  </Layout>
</BrowserRouter>
</CartContextProvider>
);
}

export default App;
