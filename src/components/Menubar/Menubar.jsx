import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useGeminiContext } from "../../Context/Context";

export default function Menubar() {
  const {setPrompt,setResult} = useGeminiContext()
  return (
    <Dropdown >
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
      >
        <DropdownItem onClick={()=>{
          setPrompt([]);
          setResult(false)
          }} key="text">New Chat</DropdownItem>
        <DropdownItem
         onClick={()=>setPrompt([])}  
         className="border border-red-500"
         >Clear All Chat</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
