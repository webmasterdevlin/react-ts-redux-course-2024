import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useFetchVillainsQuery } from "../features/villains/query";
import { createStyles, makeStyles } from "@mui/styles";
import TitleBar from "../components/TitleBar";
import UpdateUiLabel from "../components/UpdateUiLabel";

const VillainsPage = () => {
  // local state
  const [counter, setCounter] = useState("0");

  const { data = [], isFetching } = useFetchVillainsQuery();
  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  return (
    <div>
      <TitleBar title={"Villains Page"} />
      <UpdateUiLabel />
      <>
        {isFetching ? (
          <Typography data-testid={"loading"} variant={"h2"}>
            Loading.. Please wait..
          </Typography>
        ) : (
          data.map((v) => (
            <Box
              key={v.id}
              mb={2}
              display={"flex"}
              flexDirection={smallScreen ? "column" : "row"}
              justifyContent={"space-between"}
              data-testid={"card"}
            >
              <Typography>
                <span>{`${v.firstName} ${v.lastName} is ${v.knownAs}`}</span>
                {counter === v.id && <span> - marked</span>}
              </Typography>
              <div>
                <Button
                  className={classes.button}
                  variant={"contained"}
                  data-testid={"mark-button"}
                  onClick={() => setCounter(v.id)}
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
      {data.length === 0 && !isFetching && (
        <Button
          data-testid={"refetch-button"}
          className={classes.button}
          variant={"contained"}
          color={"primary"}
        >
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default VillainsPage;

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
