const validate = (values) => {
  let errors = {};

  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) errors.email = "Email address required";
  if (values.email && !emailRegex.test(values.email))
    errors.email = "Invalid email address";
  if (!values.name) errors.name = "Name is required";
  if (values.name && values.name.length < 2)
    errors.name = "Name must be a minimum of 2 characters";
  if (!values.business_name) errors.business_name = "Business name is required";
  if (values.business_name && values.business_name.length < 2)
    errors.business_name = "Business name must be a minumum of 2 characters";
  if (values.phone && values.phone.length !== 13)
    errors.phone =
      "Invalid phone number. Phone number must be formatted as (555)555-5555";
  return errors;
};

export default validate;
