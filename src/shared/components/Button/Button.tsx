// IMPORTS
import Icon from "../Icon/Icon";
import type {
  ButtonPrimaryProps,
  ButtonSecondaryProps,
  ButtonTertiaryProps,
  ButtonActionProps,
  ButtonPaginationProps,
} from "./types";

export const Button = () => {};

Button.Primary = ({ title, variant = "primary" }: ButtonPrimaryProps) => {
  return <button className={`btn btn--primary ${variant}`}>{title}</button>;
};

Button.Secondary = ({ title, icon }: ButtonSecondaryProps) => {
  return (
    <button className="btn btn--secondary">
      <span>{title}</span>
      <Icon icon={icon} alt={title} />
    </button>
  );
};

Button.Tertiary = ({ title, icon }: ButtonTertiaryProps) => {
  return (
    <button className="btn btn--tertiary">
      <Icon icon={icon} alt={title} />
      <span>{title}</span>
    </button>
  );
};

Button.Action = ({ icon, variant = "primary" }: ButtonActionProps) => {
  return (
    <button className={`btn btn--action ${variant}`}>
      <Icon icon={icon} alt={icon} />
    </button>
  );
};

Button.Pagination = ({ num, status }: ButtonPaginationProps) => {
  return <button className={`btn btn--pagination ${status}`}>{num}</button>;
};
