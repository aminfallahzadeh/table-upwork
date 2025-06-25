// IMPORTS
import SidebarMenuItem from "./SidebarMenuItem";
import { MenuIcon } from "@/assets/svg/menu-icon";
import { UserIcon } from "@/assets/svg/user-icon";
import { GearIcon } from "@/assets/svg/gear-icon";
import { GroupIcon } from "@/assets/svg/group-icon";
import { NewsIcon } from "@/assets/svg/news-icon";
import { BookingsIcon } from "@/assets/svg/bookings-icon";
import { StatsIcon } from "@/assets/svg/stats-icon";
import { GraphIcon } from "@/assets/svg/graph-icon";
import {
  BASE_URL,
  BOOKINGS_URL,
  PROFILE_URL,
  SETTINGS_URL,
  GROUP_URL,
  GRAPH_URL,
  STATS_URL,
  NEWS_URL,
} from "@/constants/urls";

type Props = {
  currentPath: string;
};

const menuItems = [
  { to: BASE_URL, icon: <MenuIcon />, label: "Dashboard" },
  { to: PROFILE_URL, icon: <UserIcon />, label: "User" },
  { to: SETTINGS_URL, icon: <GearIcon />, label: "Settings" },
  { to: GROUP_URL, icon: <GroupIcon />, label: "Group" },
  { to: NEWS_URL, icon: <NewsIcon />, label: "News" },
  { to: BOOKINGS_URL, icon: <BookingsIcon />, label: "Bookings" },
  { to: STATS_URL, icon: <StatsIcon />, label: "Stats" },
  { to: GRAPH_URL, icon: <GraphIcon />, label: "Graph" },
];

const SidebarMenu = ({ currentPath }: Props) => {
  return (
    <ul className="sidebar__menu">
      {menuItems.map(({ to, icon, label }) => (
        <SidebarMenuItem
          key={to}
          to={to}
          icon={icon}
          label={label}
          active={currentPath === to}
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;
