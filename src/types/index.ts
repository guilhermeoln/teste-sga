import { IconType } from "react-icons";

export type Route = {
  id: string;
  label: string;
  path: string;
  icon: IconType;
  isActive: boolean;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "inProgress" | "done";
};

export enum CacheKeysEnum {
  USER = "@sga/user",
  TASKS = "@sga/tasks",
  TAGS = "@sga/tags",
}
