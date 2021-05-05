import './App.css';

function App() {
  return (
    <div className="hello world">
      Hello World
      <p>
        It is
        <br />
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}

export default App;
