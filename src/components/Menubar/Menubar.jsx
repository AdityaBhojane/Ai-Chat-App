import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Chip,
} from "@nextui-org/react";
import { useGeminiContext } from "../../Context/Context";

export default function Menubar() {
  const {
    previousResults,
    setPreviousResults,
    history,
    setHistory,
    result,
    setResult,
    showPreviousResult,
    setShowPreviousResult,
    preIndex,
    setPreIndex,
    setShowResult
  } = useGeminiContext();
  // console.log(result[0].prompt.slice(0,10))
  // console.log(previousResults)
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize border border-[#ccc] text-white"
        >
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        className=""
      >
        <DropdownItem
          onClick={() => {
            if (!showPreviousResult) {
              if(preIndex == 0 || preIndex){
              previousResults[preIndex] = result;
              setResult([]);
              setHistory(true);
            }else 
              setPreviousResults((pre)=>[...pre,result])
              setResult([]);
              setHistory(true);
            } else {
              alert("Please Start Chat");
            }
          }}
          key="text"
          className="mb-1"
        >
          New Chat
        </DropdownItem>
        {history &&
          previousResults.map((items, index) => {
            return (
              <DropdownItem
                key={index}
                textValue="title"
                color="warning"
                variant="dot"
              >
                <Chip 
                onClick={()=>{
                  if(preIndex == 0 || preIndex){
                    previousResults[preIndex] = result;
                    setResult([]);
                    setHistory(true);
                  }
                  setShowPreviousResult(false)
                  setResult(items)
                  setPreIndex(index)
                }}
                className="min-w-[200px]" 
                color="warning" 
                variant="dot">
                  {items[0].prompt.slice(0, 20)}
                </Chip>
              </DropdownItem>
            );
          })}
        <DropdownItem
          onClick={() => {
            setPreviousResults([]);
            setResult([]),
            setShowResult(false);
          }}
          key="delete"
          color="danger"
          className="border border-red-700 mt-3"
        >
          Clear All Chat
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
