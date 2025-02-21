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
const DAO=lazy(()=>import('./pages/DAO'));
const Institutional=lazy(()=>import('./pages/Institutional'));
const RealEstate=lazy(()=>import('./pages/RealEstate'));
const Platform=lazy(()=>import('./pages/Platform'));
const Cookies=lazy(()=>import('./pages/Cookies'));
const Terms=lazy(()=>import('./pages/Terms'));
const PrivacyPolicy=lazy(()=>import('./pages/PrivacyPolicy'));
const Blog1=lazy(()=>import('./pages/Blog1'));


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
        <Route path='/daos-and-organizations' element={<DAO/>}/>
        <Route path='/institutional' element={<Institutional/>}/>
        <Route path='/real-estate' element={<RealEstate/>}/>
        <Route path='/platform' element={<Platform/>}/>
        <Route path='/cookies' element={<Cookies/>}/>
        <Route path='/terms-of-use' element={<Terms/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/how-to-manage-a-fully-decentralized-operation' element={<Blog1/>}/>
       
        </Route>
      </Routes></ScrollToTop>
    </Router>
  )
}

export default App
