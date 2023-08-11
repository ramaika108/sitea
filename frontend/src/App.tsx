import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Afonarizms from './pages/Afonarizms';
import Horoscope from './pages/Horoscope';
import HumorPump from './pages/HumorPump';
import Footer from './components/footer/Footer';
import Bloh from './pages/Bloh';
import ObNam from './pages/ObNam';
import BlohDetails from './pages/BlohDetails';

import Header from './components/header/Header';

import './styles/main.sass';


function App() {

  return (
      <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/afonarizms' element={<Afonarizms/>}/>
            <Route path='/horoscope' element={<Horoscope/>}/>
            <Route path='/humor-pump' element={<HumorPump />}/>
            <Route path='/blohs' element={<Bloh />}/>
            <Route path='/bloh/:id' element={<BlohDetails />}/>
            <Route path='/ob-nam' element={<ObNam />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
