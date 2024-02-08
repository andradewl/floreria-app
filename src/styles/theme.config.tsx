import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette{
    BG = "#ffff",
    VIOLLETE = '#6d2c6b',
    FONT_GLOBAL = '"Segoe UI"',
}


const theme = createTheme({
    palette:{
        mode:"light",
        background:{
            default:themePalette.BG
        },
        primary:{
            main: themePalette.VIOLLETE
        }
    },
    typography:{
        fontFamily:themePalette.FONT_GLOBAL
    }
})

export const ThemeConfig: React.FC<ThemeProp> =({children})=>{
    return(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
    )
}