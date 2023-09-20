import { useState, useCallback } from 'react';

const useFormWithValidation = () => {
  const [enteredValues, setEnteredInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEnteredInputValues({
      ...enteredValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });
    setIsFormValid(event.target.closest('#register-login-form').checkValidity());
  };

  const rebootForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setEnteredInputValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setEnteredInputValues, setErrors, setIsFormValid]
  );

  return {
    enteredValues,
    handleInputChange,
    isFormValid,
    errors,
    rebootForm,
  };
};

export default useFormWithValidation;
