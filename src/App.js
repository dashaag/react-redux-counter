import './App.css';
import Counter from './components/counter/counter';

function App() {
  
  //store.subscribe( () => {consolle.log(store.getState())})
  //store.dispatch(increment())

  return (
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>
  );
}

export default App;
