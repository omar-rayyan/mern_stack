import AuthorForm from './components/AuthorForm.jsx';
import AuthorList from './components/AuthorList.jsx';
import AuthorDetails from "./components/AuthorDetails.jsx";
import NotFound from "./components/NotFound.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
            <div>
                <AuthorForm/>
                <AuthorList/>
            </div>
        } />
        <Route path="/authors/:id" element={<AuthorDetails />} />
        <Route path="/authors/:id/update" element={<AuthorForm />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}

export default App
