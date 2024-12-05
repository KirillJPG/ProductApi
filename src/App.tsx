import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route index element={<Layout/>}>

      </Route>
    </Routes>
  )
}

export default App
