// IMPORTS
import { Link } from "react-router-dom";
import type { ReactElement } from "react";
import { cloneElement } from "react";

type Props = {
  to: string;
  icon: ReactElement<{ color?: string }>;
  label: string;
  active: boolean;
};

const SidebarMenuItem = ({ to, icon, label, active }: Props) => {
  const color = active ? "#dddddd" : "#555555";

  // CONTENT
  const content = (
    <li>
      <Link to={to} className="sidebar__link" title={label}>
        {cloneElement(icon, { color })}
      </Link>
    </li>
  );

  return content;
};

export default SidebarMenuItem;
