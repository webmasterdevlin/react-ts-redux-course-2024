import { Formik } from "formik";
import * as yup from "yup";
import SharedForm from "../components/SharedForm";
import { useAppDispatch } from "../store/configureStore";

type Props = {
  handleCreateAction: (values: any) => any;
  hasDispatch?: boolean;
};

const FormSubmission = ({ handleCreateAction, hasDispatch = false }: Props) => {
  const dispatch = useAppDispatch();
  return (
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
      onSubmit={(values, actions) => {
        if (hasDispatch) {
          dispatch(handleCreateAction(values));
        } else {
          handleCreateAction(values);
        }
        actions.resetForm();
      }}
    >
      {() => <SharedForm />}
    </Formik>
  );
};

export default FormSubmission;
