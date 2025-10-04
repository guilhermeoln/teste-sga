import Navbar from "@/components/Navbar";
import { ChildrenWrapper, LayoutWrapper, NavbarWrapper } from "./styles";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {
  return (
    <LayoutWrapper>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </LayoutWrapper>
  );
}
