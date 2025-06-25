// IMPORTS
import Icon from "../../Icon/Icon";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

const SidebarToggle = ({ isOpen, onToggle }: Props) => {
  return (
    <div className="sidebar__toggle-btn" onClick={onToggle}>
      <Icon
        icon={isOpen ? "doubleChevronLeft" : "doubleChevronRight"}
        alt="toggle"
      />
    </div>
  );
};

export default SidebarToggle;
