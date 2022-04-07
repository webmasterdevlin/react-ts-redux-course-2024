import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {
  useAddVillainMutation,
  useFetchVillainsQuery,
  useRemoveVillainMutation,
  VillainModel,
  villainSlice,
} from "../features/villains/query";
import { createStyles, makeStyles } from "@mui/styles";
import TitleBar from "../components/TitleBar";
import UpdateUiLabel from "../components/UpdateUiLabel";
import FormSubmission from "../components/FormSubmission";
import { useAppDispatch } from "../store/configureStore";

const VillainsPage = () => {
  const dispatch = useAppDispatch();

  // local state
  const [counter, setCounter] = useState("0");

  const { data = [], isFetching, refetch } = useFetchVillainsQuery();
  const [addVillain] = useAddVillainMutation();
  const [removeVillain] = useRemoveVillainMutation();

  const softDeleteVillain = (id: string) => {
    dispatch(
      villainSlice.util.updateQueryData(
        "fetchVillains",
        undefined,
        (draft: VillainModel[]) => {
          const index = draft.findIndex((v) => v.id == id);
          draft.splice(index, 1);
        }
      )
    );
    dispatch(villainSlice.util.invalidateTags(["villains"]));
  };
  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  return (
    <div>
      <TitleBar
        title={isFetching ? "Loading.. Please wait.." : "Villains Page"}
      />
      <FormSubmission handleCreateAction={addVillain} />
      <UpdateUiLabel />
      <>
        {data.map((v) => (
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
                onClick={() => softDeleteVillain(v.id)}
              >
                Remove
              </Button>{" "}
              <Button
                className={classes.button}
                variant={"outlined"}
                color={"secondary"}
                data-testid={"delete-button"}
                onClick={async () => {
                  await removeVillain(v.id);
                }}
              >
                DELETE in DB
              </Button>
            </div>
          </Box>
        ))}
      </>
      {data.length === 0 && (
        <Button
          data-testid={"refetch-button"}
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={refetch}
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
