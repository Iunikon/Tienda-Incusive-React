import './App.css';
import Hero from './page/Hero.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Layout from './page/Layout.jsx';


function App() {
  const title = "Titulo ejemplo";

  return (

      <Layout>
        <Hero />
        <ItemListContainer title={title} />
      </Layout>
  );
}

export default App;
