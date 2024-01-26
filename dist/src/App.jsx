import React from 'react'
import Dash from './pages/Dash'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
  
<Routes>
    <Route index element={<Dash/>}/>
</Routes>
  
  )
}

export default App