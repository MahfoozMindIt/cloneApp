import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Loader from './components/Loader';
import Layout from './Layout'
import ScrollToTop from './components/Scroll';

const Blog=lazy(()=>import('./pages/Blog'));
const Contact=lazy(()=>import('./pages/Contact'));
const Home=lazy(()=>import('./pages/Home'));
const UltraHigh=lazy(()=>import('./pages/UltraHigh'));


function App() {

  return (
    <Router>
      <ScrollToTop>
      <Suspense fallback={<Loader/>}/>
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/ultra-high-net-worth-individual' element={<UltraHigh/>}/>
       
        </Route>
      </Routes></ScrollToTop>
    </Router>
  )
}

export default App
