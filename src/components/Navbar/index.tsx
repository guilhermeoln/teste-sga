"use client";

import Image from "next/image";
import { NavItemLabel, NavItemWrapper, Wrapper } from "./styles";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import useRoutes from "@/hooks/useRoutes";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { CiLogout } from "react-icons/ci";
import logout from "@/services/serverActions/logout";

type NavItemProps = {
  id: string;
  label: string;
  isActive: boolean;
  icon: IconType;
  path: string;
};

function NavItem({ label, isActive, icon: Icon, path }: NavItemProps) {
  const router = useRouter();

  return (
    <NavItemWrapper isActive={isActive} onClick={() => router.push(path)}>
      <Icon size={20} color={isActive ? "white" : "black"} />
      <NavItemLabel isActive={isActive}>{label}</NavItemLabel>
    </NavItemWrapper>
  );
}

export default function Navbar() {
  const { routes } = useRoutes();
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        <Wrapper padding="15px">
          <Image src="/images/logo.png" alt="logo" width={60} height={50} />
        </Wrapper>
        <Divider />
        <Wrapper padding="15px">
          {routes.map((route) => (
            <NavItem key={route.id} {...route} />
          ))}
        </Wrapper>
      </div>
      <Box display="flex" padding="15px" justifyContent="center" width="100%">
        <IconButton
          sx={{ gap: "10px" }}
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          <CiLogout size={22} />
          <Typography>Sair</Typography>
        </IconButton>
      </Box>
    </Wrapper>
  );
}
