import { Button, Navbar, NavbarBrand, NavbarContent, Switch } from "@nextui-org/react";
import { SunIcon } from "../themeSwitch/SunIcon";
import { MoonIcon } from "../themeSwitch/MoonIcon";
import { useTheme } from "next-themes";

function NavigationBar() {
  const { theme, setTheme } = useTheme()

  return (
    <Navbar className="bg-[#484848] text-white">
      <NavbarContent>
        <NavbarBrand>
          <p className="  text-inherit text-xl">Gemini Ai</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button color="default" className="border border-[#ccc]">New Chat</Button>
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          onClick={()=> theme=="dark"? setTheme('light'):setTheme("dark")}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              
              <MoonIcon className={className} />
            )
          }
        >
        </Switch>
      </NavbarContent>
    </Navbar>
  );
}

export default NavigationBar;
