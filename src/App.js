// import logo from './logo.svg';
import './App.css';
import Booklet from './components/booklet/Booklet';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Booklet/>
    </div>
  );
}

export default App;
