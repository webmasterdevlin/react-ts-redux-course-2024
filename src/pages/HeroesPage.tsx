import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import FormSubmission from "../components/FormSubmission";
import TitleBar from "../components/TitleBar";
import UpdateUiLabel from "../components/UpdateUiLabel";

import { deleteAxios, getAxios } from "../axios/generic-api-calls";
import { EndPoints } from "../axios/api-config";

const HeroesPage = () => {
  // TODO: use Redux to replace the heroes and loading
  const [heroes, setHeroes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  // local state
  const [counter, setCounter] = useState("0");

  useEffect(() => {}, []);

  return (
    <div>
      <TitleBar
        title={loading ? "Loading.. Please wait.." : "Super Heroes Page"}
      />
      <FormSubmission handleCreateAction={() => {}} />
      <UpdateUiLabel />
      <>
        {heroes.map((h) => (
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
                onClick={() => {}}
              >
                Remove
              </Button>{" "}
              <Button
                className={classes.button}
                variant={"outlined"}
                color={"secondary"}
                data-testid={"delete-button"}
                onClick={async () => {}}
              >
                DELETE in DB
              </Button>
            </div>
          </Box>
        ))}
      </>
      {heroes.length === 0 && (
        <Button
          data-testid={"refetch-button"}
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={() => {}}
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
