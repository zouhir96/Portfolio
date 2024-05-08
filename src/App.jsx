import { Routes, Route } from 'react-router-dom';
import { Main } from './views';
function App(){
  return(
  <>
    <Routes>
      <Route path='/*' element={<Main/>}></Route>
    </Routes>
  </>
  )
}
export default App