import ProductForm from './components/ProductForm.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetails from "./components/ProductDetails.jsx";
import NotFound from "./components/NotFound.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
            <div>
                <ProductForm/>
                <ProductList/>
            </div>
        } />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/:id/update" element={<ProductForm />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}

export default App
