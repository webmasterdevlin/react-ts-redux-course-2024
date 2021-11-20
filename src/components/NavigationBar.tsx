import {
  AppBar,
  Box,
  Button,
  createStyles,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { pathNames } from "../LazyRoutes";

const NavigationBar = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <Box>
          <Button
            className={classes.button}
            color="inherit"
            onClick={() => navigate(pathNames.home)}
          >
            HOME
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.button}
            color="inherit"
            onClick={() => navigate(pathNames.heroes)}
          >
            HEROES
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.button}
            color="inherit"
            onClick={() => navigate(pathNames.villains)}
          >
            VILLAINS
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: "0 0.5rem",
      "&:focus": {
        outline: "none",
      },
    },
  })
);
