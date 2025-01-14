import { useState } from 'react'; 
import { useLocation, Route, Routes} from 'react-router-dom';
import { Home, SeriesA, SeriesB, SeriesC,Login,Cart } from './pages';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginSet(){
    setIsLoggedIn(true);
  }

  return (  
  <>
    <AnimatePresence mode="wait">
    <main>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login loginSet={loginSet}/>} />
        <Route path="/nike" element={<SeriesA />} />
        <Route path="/cyclops" element={<SeriesB />} />
        <Route path="/icarus" element={<SeriesC />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </main>
    </AnimatePresence>
  </>
);
}


export default App
