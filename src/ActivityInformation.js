import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {VerticalContainer, PRIMARY_RED, SECONDARY_PINK} from './StyledComponents'

export default function ActivityInformation({activityData, setIsFetching}) {
  return (
    <>
      <VerticalContainer>
        <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', width:'50%', bgcolor:'#FFAA92', borderRadius:'10px', p:'50px'}}>
        <Typography variant="h3" mb='60px' textAlign={'center'}>
          {activityData.activity}
        </Typography>
        <Typography variant="h5">
          Type: {activityData.type}
        </Typography>
        <Typography variant="h5">
          Participants: {activityData.participants}
        </Typography>
        <Button variant="contained" size='large' onClick={()=> setIsFetching(true)}  sx={{ bgcolor:PRIMARY_RED, "&:hover":{bgcolor:PRIMARY_RED, transform:'scale(1.1)'}, m:'50px 0 0px', textTransform:'none', fontSize:'21px' }}>Give me another Activity</Button>
        </Box>
      </VerticalContainer>
    </>
  );
}


