import React from 'react'
import { AppBar, Switch, Toolbar, Typography } from '@mui/material'


const Header = () => {
  return (
    <AppBar position='static' sx={{marginBottom: '20px'}}>
        <Toolbar>
            <Typography variant="h6" >
                Re-Store V1
            </Typography>
            <Switch />
        </Toolbar>
    </AppBar>
  )
}

export default Header