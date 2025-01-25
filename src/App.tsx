import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Input label="First Name" id="first-name" type="text" />
      <Input label="Age" id="last-name" type="number" />
      <p>
        <Button el="button">A Button</Button>
      </p>
    </main>
  );
}

export default App;
