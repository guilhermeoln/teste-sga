"use client";

import { Route } from "@/types";
import { usePathname } from "next/navigation";
import { FaList } from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";

const getRouteIsActiveByPathname = (
  currentPathname: string,
  routePathname: string
) => {
  return currentPathname === routePathname;
};

export default function useRoutes() {
  const pathname = usePathname();

  const routes: Route[] = [
    {
      id: "tasks",
      label: "Tarefas",
      path: "/tasks",
      isActive: getRouteIsActiveByPathname(pathname, "/tasks"),
      icon: FaList,
    },
    {
      id: "logs",
      label: "Logs",
      path: "/logs",
      isActive: getRouteIsActiveByPathname(pathname, "/logs"),
      icon: RiFileListLine,
    },
  ];

  return {
    routes,
    currentRoute: routes.find(({ path }) => path === pathname),
  };
}
