// IMPORTS
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarToggle from "./components/SidebarToggle";
import SidebarHeader from "./components/SidebarHeader";
import SidebarMenu from "./components/SidebarMenu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <SidebarToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <SidebarHeader />
      <SidebarMenu currentPath={location.pathname} />
    </aside>
  );
};

export default Sidebar;
