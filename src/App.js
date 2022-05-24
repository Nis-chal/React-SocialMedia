import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Landing,Register} from './pages';
import {SharedLayout} from './pages/dashboard';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ='/' element= {<Landing/>}/>
    <Route path ='/auth/register' element= {<Register/>}/>
    <Route path ='/user/dashboard' element= {<SharedLayout/>}/>




  </Routes>
  
  </BrowserRouter>)
}

export default App;
