import React from "react";
import {Box, Container, Grid, Stack, IconButton} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    {
        field: 'id', 
        headerName: "ID", 
        width: 90
    },
    {
        field: "firstName",
        headerName: "First Name",
        width: 200,
        editable: false
    },
    {
        field: "lastName",
        headerName: "Last Name",
        width: 200,
        editable: false
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 110,
        editable: false,
    },
    {
        field: "email",
        headerName: "Email",
        width: 200,
        editable: false
    },
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <Stack direction="row" spacing={1}>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            )
        }
    }
];

const rows = [
    {
        id: 1, 
        lastName: 'Show', 
        firstName: "John", 
        age: 35, 
        email: "john@gmail.com",
    }
]

const UsersMain = () => {
    return (
        <Box sx = {{
            margin: "60px 0",
        }}>
            <Container maxWidth = "lg">
                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                        <div style = {{
                            height: 600, 
                            width: "100%", 
                            background: "white"}}>
                            <DataGrid 
                            columns = {columns} 
                            rows = {rows} 
                            pageSize = {5}
                            rowsPerPageOptions = {[5]}
                            disableSelectionOnClick
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default UsersMain;