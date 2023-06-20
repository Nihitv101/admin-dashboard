import React, { useContext } from 'react'
import { useTheme , Box, IconButton, } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import { InputBase } from '@mui/material';


import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search'


const TopBar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);




  return (
    <Box display='flex' justifyContent='space-between' p={2}>
        <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px' >
            <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </Box>

        {/* Icons */}

        <Box display={'flex'} >
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                ): (
                    <LightModeOutlinedIcon />
                ) }
            </IconButton>


            <IconButton>
            <NotificationsActiveOutlinedIcon />
            </IconButton>


            <IconButton>
            <SettingsOutlinedIcon />

            </IconButton>


            <IconButton>

            <PersonOutlineOutlinedIcon />
            </IconButton>

        </Box>



    </Box>
  )
}

export default TopBar