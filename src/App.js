import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Landing,Register,ProtectedRoute} from './pages';
import {SharedLayout} from './pages/dashboard';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ='/' element= {<Landing/>}/>
    <Route path ='/auth/register' element= {<Register/>}/>
    <Route path ='/user/dashboard' element= {<SharedLayout/>}/>

    <Route path="/user" element={

        <ProtectedRoute>
          <SharedLayout/>
        </ProtectedRoute>
          
          }>
        <Route index   element={<Register/>}/>
        <Route path="all-jobs" element={<Register/>}/>
        <Route path="add-job" element={<Landing/>}/>
        <Route path="profile" element={<Landing/>}/>
    </Route>




  </Routes>
  
  </BrowserRouter>)
}

export default App;
