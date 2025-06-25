// IMPORTS
import type { IconProps } from "./types";
import doubleChevronLeft from "@icons/angles-left.png";
import doubleChevronRight from "@icons/angles-right.png";
import vector from "@icons/Vector.png";
import menu from "@icons/sidebar-menu-icon.png";
import user from "@icons/user-icon.png";
import gear from "@icons/gear-icon.png";
import docs from "@icons/doc-details-icon.png";
import news from "@icons/fiber-new-icon.png";
import group from "@icons/group-icon.png";
import sun from "@icons/sun-icon.png";
import download from "@icons/download-icon.png";
import chevronDown from "@icons/chevron-down-icon.png";
import search from "@icons/search-icon.png";
import edit from "@icons/edit-icon.png";
import chevronRight from "@icons/angle-right.png";

const icons: Record<IconProps["icon"], string> = {
  doubleChevronLeft,
  doubleChevronRight,
  vector,
  menu,
  user,
  gear,
  docs,
  news,
  group,
  sun,
  download,
  chevronDown,
  search,
  edit,
  chevronRight,
};

const Icon = ({ icon, alt }: IconProps) => {
  return <img src={icons[icon]} alt={alt} />;
};

export default Icon;
