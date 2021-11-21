import { Box, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Field, useFormikContext } from "formik";

type Props = {
  id: string;
  label: string;
  required?: boolean;
  dataTestId?: string;
};

const SharedInput = (props: Props) => {
  const classes = useStyles();
  const formik = useFormikContext<any>();

  return (
    <Box mb={2}>
      <Field
        required={props.required}
        id={props.id}
        label={`${props.label}`}
        data-testid={props.dataTestId}
        className={classes.field}
        type={"text"}
        name={props.id}
        as={TextField}
        error={!!(formik.touched[props.id] && formik.errors[props.id])}
        helperText={formik.touched[props.id] ? formik.errors[props.id] : null}
      />
    </Box>
  );
};

export default SharedInput;

const useStyles = makeStyles(() =>
  createStyles({
    field: {
      marginBottom: "2rem",
      width: "100%",
    },
  })
);
