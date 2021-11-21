import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { delay } from "cypress/types/bluebird";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSubmission from "../components/FormSubmission";
import TitleBar from "../components/TitleBar";
import UpdateUiLabel from "../components/UpdateUiLabel";

import {
  deleteHeroAction,
  getHeroesAction,
  postHeroAction,
} from "../features/heroes/heroAsyncActions";
import { softDeleteHeroAction } from "../features/heroes/heroSlice";
import { RootState } from "../store/reducers";

const HeroesPage = () => {
  const dispatch = useDispatch();
  const { heroes, loading } = useSelector((state: RootState) => state.hero);

  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  // local state
  const [counter, setCounter] = useState("0");

  useEffect(() => {
    // dispatch with action
    if (heroes.length === 0) {
      dispatch(getHeroesAction());
    }
  }, [dispatch]);

  return (
    <div>
      <TitleBar title={"Super Heroes Page"} />
      <FormSubmission handleCreateAction={postHeroAction} />
      <UpdateUiLabel />
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
                {counter === h.id && <span> - marked</span>}
              </Typography>
              <div>
                <Button
                  className={classes.button}
                  variant={"contained"}
                  data-testid={"mark-button"}
                  onClick={() => setCounter(h.id)}
                >
                  Mark
                </Button>{" "}
                <Button
                  className={classes.button}
                  variant={"contained"}
                  color={"secondary"}
                  data-testid={"remove-button"}
                  onClick={() => dispatch(softDeleteHeroAction(h.id))}
                >
                  Remove
                </Button>{" "}
                <Button
                  className={classes.button}
                  variant={"outlined"}
                  color={"secondary"}
                  data-testid={"delete-button"}
                  onClick={() => dispatch(deleteHeroAction(h.id))}
                >
                  DELETE in DB
                </Button>
              </div>
            </Box>
          ))
        )}
      </>
      {heroes.length === 0 && !loading && (
        <Button
          data-testid={"refetch-button"}
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={() => dispatch(getHeroesAction())}
        >
          Re-fetch
        </Button>
      )}
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
