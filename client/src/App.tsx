import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/LoginPage';

const App: React.FC = () => (
  <Router>
    {/* <Nav /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={<ProfilePage points={0} completedTasks={[]} />} />
    </Routes>
  </Router>
);

export default App;

