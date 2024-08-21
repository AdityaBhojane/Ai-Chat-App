
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Menubar() {

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
        <DropdownItem key="text">New Chat</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
