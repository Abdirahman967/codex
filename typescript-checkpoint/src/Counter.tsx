import { Component } from "react";

// Define the type of the counter state
interface CounterState {
  count: number;
}

// Create the Counter class component
class Counter extends Component<Record<string, never>, CounterState> {
  // Initialize the state
  state: CounterState = {
    count: 0,
  };

  // Function to increase the count
  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Display the counter
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
