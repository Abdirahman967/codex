// Define the type for the name prop
interface GreetingProps {
  name: string;
}

// Create the Greeting component
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

// Export the component
export default Greeting;
