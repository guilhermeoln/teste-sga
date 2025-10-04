import { IconType } from "react-icons";

export type Route = {
  id: string;
  label: string;
  path: string;
  icon: IconType;
  isActive: boolean;
};
