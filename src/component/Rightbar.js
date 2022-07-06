import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flexGrow={1} p={2} sx={{display:{xs:"none",sm:"block"},border:"1px solid red"}}>
      rightbar
    </Box>
  )
}

export default Rightbar
