import '../index';
import Header from './Header';
import About from './About';
import Loader from './Loader';
import Standart from './Standart'
import Komfort from './Komfort';
import Komfortplus from './Komfortplus';
import Vip from './Vip'
import Footer from './Footer'
import Photo from './Photo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Game from './Game';
function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='/game' element={<Game />}></Route>
        <Route path='/photo' element={<Photo />}></Route>
        <Route path='/standart' element={<Standart />} />
        <Route path='/komfort' element={<Komfort />} />
        <Route path='/komfortplus' element={<Komfortplus />} />
        <Route path='/vip' element={<Vip />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;