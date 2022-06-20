import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import Header from './components/Header';
import AddTask from './components/task/AddTask';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen';
import TeamScreen from './components/team/TeamScreen';
import Details from './components/home/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="tasks" element={<AddTask />} />
        <Route path="team/*" element={<TeamScreen />} />
        <Route path="details/:pokemon" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
