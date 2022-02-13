import { Form, useFormikContext } from "formik";
import SharedInput from "./SharedInput";
import { Box, Paper, Button } from "@mui/material";

const SharedForm = () => {
  const formik = useFormikContext<any>();

  return (
    <Box mb={4}>
      <Paper>
        <Form style={{ padding: "1rem" }}>
          <div>
            <SharedInput
              required={true}
              id={"firstName"}
              label={"First Name"}
              dataTestId={"firstName"}
            />
            <SharedInput
              required={true}
              id={"lastName"}
              label={"Last Name"}
              dataTestId={"lastName"}
            />
            <SharedInput
              required={true}
              id={"house"}
              label={"House"}
              dataTestId={"house"}
            />
            <SharedInput
              id={"knownAs"}
              label={"Known As"}
              dataTestId={"knownAs"}
            />
          </div>

          <Button
            disabled={!formik.dirty || !formik.isValid}
            type="submit"
            color={"primary"}
            variant={"outlined"}
            data-testid={"save-character"}
          >
            Save Character
          </Button>
        </Form>
        {/* {process.env.NODE_ENV !== "production" && (
          <pre>{JSON.stringify(formik, null, 2)}</pre>
        )} */}
      </Paper>
    </Box>
  );
};

export default SharedForm;
