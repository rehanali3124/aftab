import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box flexGrow={1} p={2} sx={{display:{xs:"none",sm:"block"},border:"1px solid red"}}>Sidebar</Box>
  )
}

export default Sidebar