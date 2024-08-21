import { Button, Input } from "@nextui-org/react";
import { useGeminiContext } from "../../Context/Context";
import run from "../../config/geminiConfig";

function UserInput() {
  const {
    userInput,
    setUserInput,
    // prePrompt,
    // setPrePrompt,
    setLoading,
    setResult,
    // prompt,
    setPrompt,
    setError,
    setRecentPrompt,
    // recentPrompt,
  } = useGeminiContext();

  const Response = async () => {
    try {
      setLoading(true);
      setResult(true);
      setRecentPrompt(userInput)
      const response = await run(userInput);
      setPrompt((pre)=>[...pre,response]);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };


  // run("what is react ?");
  return (
    <>
      <div className="fixed left-[50%] bottom-10 w-1/2 max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] -translate-x-[50%] flex items-center">
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="Text"
          label="Search"
          className="w-full"
        />
        <Button
          onClick={() => Response()}
          radius="md"
          className="h-14 min-w-24 relative right-4 z-10"
        >
          Find
        </Button>
      </div>
    </>
  );
}

export default UserInput;
