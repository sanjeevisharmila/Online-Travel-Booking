import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home';
import List from "./lists/list";
import Hotel from "./hotels/hotels";
import RegistrationForm from "./components/registration/registration";
import LoginPage from "./components/login/login";
function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage/>} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
