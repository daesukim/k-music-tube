import React, { Suspense, lazy } from 'react'
import {BrowserRouter, Route, Routes}  from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Trad = lazy(() => import('./pages/Trad'));
const Kpop = lazy(() => import('./pages/Kpop'));
const Rnb = lazy(() => import('./pages/Rnb'));
const Ballard = lazy(() => import('./pages/Ballard'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path = '/' element={<Home/>} />
          <Route path = '/today' element={<Today/>} />
          <Route path = '/developer' element={<Developer/>} />
          <Route path = '/trad' element={<Trad/>} />
          <Route path = '/kpop' element={<Kpop/>} />
          <Route path = '/rnb' element={<Rnb/>} />
          <Route path = '/ballard' element={<Ballard/>} />
          <Route path = '/channel/:channelID' element={<Channel/>} />
          <Route path = '/video/:videoID' element={<Video/>} />
          <Route path = '/search/:searchID' element={<Search/>} />
          <Route path = '/*' element={<Not/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  )
}

export default App
