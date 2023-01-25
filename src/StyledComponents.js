import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';

export const PRIMARY_RED = "#CB2626";
export const SECONDARY_PINK = "#E09A8E";

export const VerticalContainer = styled(Box)(() => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    margin:"auto"
  }));