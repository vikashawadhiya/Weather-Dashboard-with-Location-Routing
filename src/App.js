import { Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import WeatherPage from './WeatherPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/weather/:city" element={<WeatherPage />} />
      </Routes>
    </>
  );
}

export default App;
