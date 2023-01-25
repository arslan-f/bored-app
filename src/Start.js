import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {VerticalContainer, PRIMARY_RED, SECONDARY_PINK} from './StyledComponents'




export default function Start() {
  return (
    <>
      <VerticalContainer maxWidth="lg">
      <Typography variant="h3" mb='80px'>
        Are you bored?
      </Typography>
      <Box sx={{width:'20%', display:'flex', justifyContent:'space-between'}}>
        <Link to='not_bored' style={{textDecoration:'none'}}>        
          <Button variant="contained" size='large' sx={{ bgcolor:PRIMARY_RED, "&:hover":{bgcolor:PRIMARY_RED, transform:'scale(1.1)'} }}>No</Button>
        </Link>

        <Link to='activity_selection' style={{textDecoration:'none'}}>        
          <Button variant="contained" size='large' sx={{bgcolor:PRIMARY_RED, "&:hover":{bgcolor:PRIMARY_RED, transform:'scale(1.1)'}}}>Yes</Button>
        </Link>
      </Box>
      </VerticalContainer>
    </>
  );
}


