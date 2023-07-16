import {Route, Routes} from 'react-router-dom';
import Disclaimer from './components/Disclaimer';
import Topline from './components/Topline'
import Home from './pages/Home'
import Afonarizms from './pages/Afonarizms'
import {useState} from 'react';
import Footer from './components/Footer';
import Bloh from './pages/Bloh';
import Vsyaka from './pages/Vsyaka';
import ObNam from './pages/ObNam';
import BlohDetails from './pages/BlohDetails';

function App() {
    const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
      <div>
        <div className='container'>
            <Topline />
        </div>

      {showDisclaimer && <Disclaimer setter={setShowDisclaimer} />}

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/afonarizms' element={<Afonarizms/>}/>
            <Route path='/blohs/:page' element={<Bloh />}/>
            <Route path='/blohs' element={<Bloh />}/>
            <Route path='/bloh/:id' element={<BlohDetails />}/>
            <Route path='/vsyaka' element={<Vsyaka />}/>
            <Route path='/ob-nam' element={<ObNam />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
