import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';

import { VerticalContainer } from "./StyledComponents";

export default function NotBored() {
  return (
    <>
    <VerticalContainer>
    <Typography variant="h3" mb='80px'>
        Then go work!
      </Typography>
    </VerticalContainer>
    </>
  );
}


