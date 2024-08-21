// import { useState } from "react";
import Cards from "./components/Cards/Cards";
import GeminiResult from "./components/GeminiResult/GeminiResult";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import UserInput from "./components/UserInput/UserInput";
import { useGeminiContext } from "./Context/Context";

function App() {
  const {result} = useGeminiContext();
  


  return (
    <>  
        <NavigationBar/>
        {result? <GeminiResult/>: <Cards />}
        <UserInput />
    </>
  );
}

export default App;
