import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Landing,Register} from './pages';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ='/' element= {<Landing/>}/>
    <Route path ='/auth/register' element= {<Register/>}/>



  </Routes>
  
  </BrowserRouter>)
}

export default App;
