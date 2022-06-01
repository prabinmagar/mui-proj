import React from "react";
import {Box, Container, Grid, Paper} from "@mui/material";
import Orders from "../../components/orders/Orders";

const OrdersMain = () => {
    return (
        <Box sx = {{
            margin: "60px 0",
        }}>
            <Container maxWidth = "lg">
                <Grid container spacing = {2}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            
        </Box>
    )
}

export default OrdersMain;