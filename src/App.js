import './App.css';
import * as math from './math.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);

export default App;
