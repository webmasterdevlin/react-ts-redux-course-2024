import {
  AppBar,
  Box,
  Button,
  createStyles,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pathNames } from "../LazyRoutes";
import { RootState } from "../store/reducers";
import TotalOfCharacters from "./TotalOfCharacters";

const NavigationBar = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const store = useSelector((state: RootState) => state);

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
          <TotalOfCharacters
            collection={store.hero.heroes}
            dataTestId={"total-heroes"}
          />
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
