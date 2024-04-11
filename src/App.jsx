// * Components
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import List from './components/List/List';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <List />
      </main>
      <Footer />
    </>
  );
};
export default App;
