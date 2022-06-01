import { Typography, Link } from "@mui/material";
import {makeStyles} from "@mui/styles";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles(() => ({
    box: {
      height: "200px",
      width: "100%",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 8px!important",
      padding: 30,
      position: "relative",
    },
    boxTitle: {
      color: "white",
      fontSize: 18
    },
    boxImage: {
      width: "90px",
      display: "block",
      position: "absolute",
      right: 20,
      bottom: 0
    }
}));

export {useStyles, Copyright};