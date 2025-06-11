import { useCallback, useEffect, useState } from "react";
import { useModal } from "./useModal";

export const useForm = ({ initialValues, validate, onSubmit }) => {
  const ErrorModal = useModal();

  const [formData, setFormData] = useState(initialValues);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleTouched = (event) => {
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));
  };
  const handleFormData = useCallback(
    (event) => {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    [setFormData]
  );

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const errors = validate(formData);
      setTouched(
        Object.keys(formData).reduce((touched, field) => {
          touched[field] = true;
          return touched;
        }, {})
      );
      setError(errors);
      if (Object.values(errors).some((v) => v)) {
        return;
      }

      await onSubmit(formData);
    } catch (error) {
      console.log(error);
      ErrorModal.openModal();
    }
  };

  const getFieldProps = (name) => {
    const value = formData[name];
    const onBlur = handleTouched;
    const onChange = handleFormData;
    return {
      value,
      onBlur,
      onChange,
    };
  };

  useEffect(() => {
    const runValidate = () => validate(formData);
    const error = runValidate();
    setError(error);
  }, [validate, formData]);

  return {
    formData,
    error,
    touched,
    getFieldProps,
    handleSubmit,
    ErrorModal,
  };
};
