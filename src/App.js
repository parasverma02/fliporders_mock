import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.cmp';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
