// IMPORTS
import type { IconNames } from "@/shared/types/icons";

type ButtonVariants = "primary" | "secondary";
type ButtonPaginationStatus = "active" | "inactive";

export interface ButtonPrimaryProps {
  title?: string;
  variant?: ButtonVariants;
}

export interface ButtonSecondaryProps {
  title: string;
  icon: IconNames;
}

export interface ButtonTertiaryProps {
  title: string;
  icon: IconNames;
}

export interface ButtonActionProps {
  icon: IconNames;
  variant?: ButtonVariants;
}

export interface ButtonPaginationProps {
  num: string;
  status: ButtonPaginationStatus;
}
