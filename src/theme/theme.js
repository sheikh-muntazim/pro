import React from "react"

import { colors, createTheme, } from "@mui/material"


const theme = createTheme({
    palette:{
        secondary:{
            main:colors.orange[500],
        },
    },
})


export default theme