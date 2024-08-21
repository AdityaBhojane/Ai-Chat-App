/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GeminiContext = createContext();

function ContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [prompt, setPrompt] = useState([]);
  const [recentPrompt,setRecentPrompt] = useState([])
  const [prePrompt, setPrePrompt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [result, setResult] = useState(false);

  const ContextStore = {
    userInput,
    setUserInput,
    prePrompt,
    setPrePrompt,
    loading,
    setLoading,
    result,
    setResult,
    prompt,
    setPrompt,
    error, 
    setError,
    recentPrompt,
    setRecentPrompt
  };

  return (
    <GeminiContext.Provider value={ContextStore}>
      {children}
    </GeminiContext.Provider>
  );
}

export default ContextProvider;
