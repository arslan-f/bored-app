import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

import ActivityInformation from './ActivityInformation';
import {VerticalContainer, PRIMARY_RED, SECONDARY_PINK} from './StyledComponents'

export default function ActivitySelection({setIsFetching}) {
  
  
  return (
    <>
      <VerticalContainer>
      
        <Link to='/activity_information' style={{textDecoration:'none'}}>        
          <Button variant="contained" size='large' onClick={()=> setIsFetching(true)}  sx={{ bgcolor:PRIMARY_RED, "&:hover":{bgcolor:PRIMARY_RED, transform:'scale(1.1)'},textTransform:'none', fontSize:'21px' }}>Give me one Activity</Button>
        </Link>
      </VerticalContainer>
      
    </>
  );
}


