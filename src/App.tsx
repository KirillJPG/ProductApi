import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout/Layout'
import { HomePage } from './components/Pages/HomePage/HomePage'
import { NotFound } from './components/Pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App
