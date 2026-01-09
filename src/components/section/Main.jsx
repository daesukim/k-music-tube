import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import ScrollTo from '../../utils/scrollTo'

const Main = ({children}) => {
  return (
    <>
      <ScrollTo />
      <Header />
      <main id="main" role="main">
        <Search />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Main
