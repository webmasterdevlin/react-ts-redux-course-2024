import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {
  useAddVillainMutation,
  useFetchVillainsQuery,
  useRemoveVillainMutation,
} from "../features/villains/query";
import { createStyles, makeStyles } from "@mui/styles";
import TitleBar from "../components/TitleBar";
import UpdateUiLabel from "../components/UpdateUiLabel";
import * as yup from "yup";
import SharedForm from "../components/SharedForm";
import { Formik } from "formik";

const VillainsPage = () => {
  // local state
  const [counter, setCounter] = useState("0");

  const { data = [], isFetching } = useFetchVillainsQuery();
  const [addVillain] = useAddVillainMutation();
  const [removeVillain] = useRemoveVillainMutation();

  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  return (
    <div>
      <TitleBar title={"Villains Page"} />
      <Formik
        initialValues={{
          id: "",
          firstName: "",
          lastName: "",
          house: "",
          knownAs: "",
        }}
        validationSchema={yup.object({
          firstName: yup.string().label("First Name").min(2).required(),
          lastName: yup.string().label("Last Name").min(2).required(),
          house: yup.string().label("House").required(),
          knownAs: yup.string().label("Known as"),
        })}
        onSubmit={async (values, actions) => {
          await addVillain(values);
          actions.resetForm();
        }}
      >
        {() => <SharedForm />}
      </Formik>
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
                  onClick={async () => {
                    await removeVillain(v.id);
                  }}
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
