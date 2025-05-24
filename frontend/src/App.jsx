import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './product/ProductList'
import ProductForm from './product/ProductForm';
import ProductEdit from './product/ProductEdit';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/register' element={<ProductForm />} />
          <Route path='/edit/:id' element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
