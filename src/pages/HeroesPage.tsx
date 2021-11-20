import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroesAction } from "../features/heroes/heroAsyncActions";
import { RootState } from "../store/reducers";

const HeroesPage = () => {
  const dispatch = useDispatch();
  const { heroes, loading } = useSelector((state: RootState) => state.hero);

  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  useEffect(() => {
    // dispatch with action
    dispatch(getHeroesAction());
  }, []);

  return (
    <div>
      <>
        {loading ? (
          <Typography data-testid={"loading"} variant={"h2"}>
            Loading.. Please wait..
          </Typography>
        ) : (
          heroes.map((h) => (
            <Box
              key={h.id}
              mb={2}
              display={"flex"}
              flexDirection={smallScreen ? "column" : "row"}
              justifyContent={"space-between"}
              data-testid={"card"}
            >
              <Typography>
                <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
                <span> - marked</span>
              </Typography>
              <div>
                <Button
                  className={classes.button}
                  variant={"contained"}
                  color={"default"}
                  data-testid={"mark-button"}
                >
                  Mark
                </Button>{" "}
                <Button
                  className={classes.button}
                  variant={"contained"}
                  color={"secondary"}
                  data-testid={"remove-button"}
                >
                  Remove
                </Button>{" "}
                <Button
                  className={classes.button}
                  variant={"outlined"}
                  color={"secondary"}
                  data-testid={"delete-button"}
                >
                  DELETE in DB
                </Button>
              </div>
            </Box>
          ))
        )}
      </>
    </div>
  );
};

export default HeroesPage;

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
