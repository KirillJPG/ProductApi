import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout/Layout'
import { links } from './constant/links'
import { lazy} from 'react'
import { CreateProductPage } from './components/Pages/CreateProductPage/CreateProductPage'


export const HomePage = lazy(()=>import("./components/Pages/HomePage/HomePage"))
export const NotFoundPage = lazy(()=>import("./components/Pages/NotFound/NotFound"))
export const ProductsPage = lazy(()=>import("./components/Pages/ProductsPage/ProductsPage"))
export const ProductPage = lazy(()=>import("./components/Pages/ProductPage/ProductPage"))

function App() {
  return (
    <Routes >
      <Route path={links.home} element={<Layout/>}>
        <Route  path={links.home}       element={<HomePage />}/>
        <Route  path={links.products}   element={<ProductsPage />}/>
        <Route  path='*'                element={<NotFoundPage />}/>
        <Route  path={links.product()}  element={<ProductPage />}/>
        <Route  path={links.create}  element={<CreateProductPage />}/>
      </Route>
    </Routes>
  )
}

export default App
