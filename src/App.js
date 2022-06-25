import logo from './logo.svg';
import './App.css';
import CreateContents from './Contents/CreateContents';
import ReadContents from './Contents/ReadContents';
import ReadLocalData from './Contents/ReadLocalData';

function App() {
  return (
    <div className="App">
      <ReadLocalData />
    </div>
  );
}

export default App;
