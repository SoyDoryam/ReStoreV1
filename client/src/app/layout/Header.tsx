import React from 'react'
import { AppBar, Switch, Toolbar, Typography } from '@mui/material'

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
};

const Header = ({darkMode, handleThemeChange}: Props) => {
  return (
    <AppBar position='static' sx={{marginBottom: '20px'}}>
        <Toolbar>
            <Typography variant="h6" >
                Re-Store V1
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}/>
        </Toolbar>
    </AppBar>
  )
}

export default Header