import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TableWrapper = styled(Box)({
  width: "100%",
  overflowX: "auto",
});

export const PaginationWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "16px",
  gap: "8px",
});

export const PageNumberBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 16px",
  borderRadius: 8,
});
