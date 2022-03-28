import React from 'react'

import {
  Box
 } from '@mui/material'

import Retool from 'react-retool'

import { publicApps } from '../../../config'

const PanelEmbed = () => {
  return (
    <Box sx={{ height: "660px" }}>
      <Retool url={publicApps.panelEmbed} />
    </Box>
  )
}

export default PanelEmbed