// import logo from './logo.svg';
import './App.css';
import ExampleComponent from './ExampleComponent';
import imageComponent from './ImageComponent';
function App() {
  return (
    <div className="App">
      <h1 className='Trial'>Trying Out React</h1>
      <p> I'm practicing JSX and importing components.</p>
      <ExampleComponent />
      <imageComponent /> 
    </div>
    
  );
}

export default App;
