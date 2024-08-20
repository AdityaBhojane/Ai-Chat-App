import { useState } from "react";
import DenseAppBar from "./components/DenseAppBar/DenseAppBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DenseAppBar/>
    </>
  );
}

export default App;
