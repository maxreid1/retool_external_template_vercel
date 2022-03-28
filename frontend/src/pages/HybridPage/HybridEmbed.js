import React from 'react'

import {
  Box,
  ToggleButton,
  ToggleButtonGroup
 } from '@mui/material'

import Retool from 'react-retool'

import { publicApps } from '../../../config'

const HybridEmbed = () => {
  const [selected, setSelected] = React.useState({ currentTab: 0 });
  const handleChange = (_, data) => {
    setSelected({ currentTab: data });
  };

  return (
    <Box sx={{ height: "640px" }}>
      <Box sx={{ width: "100%" }}>
        <ToggleButtonGroup
          color="primary"
          size="small"
          fullWidth
          variant="text"
          exclusive
          onChange={handleChange}
          value={selected}
        >
          <ToggleButton value={0}>Map</ToggleButton>
          <ToggleButton value={1}>Driving Directions</ToggleButton>
          <ToggleButton value={2}>Origin</ToggleButton>
          <ToggleButton value={3}>Destination</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Retool url={publicApps.hybridPage} data={selected} />
    </Box>
  )
}

export default HybridEmbed