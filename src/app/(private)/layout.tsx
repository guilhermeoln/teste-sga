"use client";

import Navbar from "@/components/Navbar";
import {
  ChildrenWrapper,
  LayoutHeader,
  LayoutWrapper,
  NavbarWrapper,
  RootWrapper,
} from "./styles";
import React from "react";
import { Divider, Typography } from "@mui/material";
import useRoutes from "@/hooks/useRoutes";

type Props = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {
  const { currentRoute } = useRoutes();

  return (
    <LayoutWrapper>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <RootWrapper>
        <LayoutHeader>
          <Typography variant="h1">{currentRoute?.label ?? "-"}</Typography>
        </LayoutHeader>
        <Divider />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </RootWrapper>
    </LayoutWrapper>
  );
}
