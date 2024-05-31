import Header from './components/Header';
import Navbar from './components/Navbar';
import Offer from './components/offer';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Features from './components/Features';
import Banner from './components/Banner';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Carousel from './components/Carousel.jsx'
import Empty from './components/Empty';
import IntroSection from './components/IntroSection.jsx';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Navbar/>
      <IntroSection/>
      <Empty/>
      <Carousel/>
      <Collection/>
      <Shop/>
      <Banner/>
      <Features/>
      <Empty/>
      <Offer/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
