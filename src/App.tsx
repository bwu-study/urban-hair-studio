import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Header />
      {element}
      <Footer />
    </>
  );
}

export default App;
