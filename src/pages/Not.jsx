import Main from '../components/section/Main'
import { usePageTitle } from '../utils/usePageTitle'

const Not = () => {
  usePageTitle('Not Found');
  
  return (
    <Main>
      Not Found
    </Main>
  )
}

export default Not
