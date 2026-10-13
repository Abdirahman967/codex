import Greeting from "./Greeting";
import Counter from "./Counter";

// Main App component
function App() {
  return (
    <div>
      <h1>React TypeScript Checkpoint</h1>

      {/* Display the Greeting component */}
      <Greeting name="Abdi" />

      {/* Display the Counter component */}
      <Counter />
    </div>
  );
}

export default App;
