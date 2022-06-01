import React from "react";
import { makeStyles } from "@mui/styles";
import { ListItemButton, ListItemIcon,  ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';

const useStyles = makeStyles(() => ({
    linkItem: {
        textDecoration: "none!important",
        color: "#000000DE",
    }
}))

// const ListItemButtonStyles = makeStyles({
//     root:{
//         "&:hover" : {
//             transition: "all 300ms ease-in-out",
//             backgroundColor: "#534F5A!important",
//             color: "white"
//         }
//     },
// });

// function ListItemButtonOver({children}){
//     const listItemButtonClasses = ListItemButtonStyles();
//     return (
//         <>
//             <ListItemButton className = {listItemButtonClasses.root}>
//                     {children}
//             </ListItemButton>
//         </>
//     )
// }

// export {ListItemButtonOver};