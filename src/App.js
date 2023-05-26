import './App.css';
import Chat from './chat';
import SideBar from './sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>


    </div>
  );
}

export default App;
