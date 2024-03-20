import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gasp from '../components/contents/Gasp'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'


const Home = () => {
  return (
    <Main title = "Home" description = "Welcome to Home">
      <Today />
      <Developer />
      <Webd />
      <Website />
      <Gasp />
      <Portfolio />
      <Youtube />
    </Main>
  )
}

export default Home
