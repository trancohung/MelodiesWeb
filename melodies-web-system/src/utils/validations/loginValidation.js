export const loginValidation = (form) => {
  const errors = {};
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // more complex email regex
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.password.trim()) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  return errors;
};
