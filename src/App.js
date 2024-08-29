//import logo from './logo.svg';
import './App.css';
import {ClassComponent, ClassComponent2} from './Components/ClassComponent'
import FC from './Components/FunctionalComp'
import Click from './Components/Click';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
      <FC />
      <ClassComponent />
      <ClassComponent2 />
      <Click />
      <Counter/>
    </div>
  );
}

export default App;
