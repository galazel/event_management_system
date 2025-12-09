import {Routes, Route} from 'react-router-dom'
import SetupAccount from './layouts/SetupAccount'
import UserDashboard from './layouts/UserDashboard'
function App() {
  return <Routes>
    <Route path='' element={<SetupAccount/>}></Route>
    <Route path='/user-dashboard' element={<UserDashboard/>}></Route>
  </Routes>
}

export default App
