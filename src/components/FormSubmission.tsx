import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import SharedForm from "../components/SharedForm";

type Props = {
  handleCreateAction: (values: any) => void;
};

const FormSubmission = ({ handleCreateAction }: Props) => {
  const dispatch = useDispatch();
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
        dispatch(handleCreateAction(values));
        actions.resetForm();
      }}
    >
      {() => <SharedForm />}
    </Formik>
  );
};

export default FormSubmission;
