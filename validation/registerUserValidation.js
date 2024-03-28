function registerUserValidation(user) {
  if (typeof user?.username !== "string" || !user?.username?.trim())
    throw new Error(
      "Username is required. Please check if it is string and provided."
    );

  if (typeof user?.password !== "string" || !user?.password?.trim())
    throw new Error(
      "Password is required. Please check if it is string and provided."
    );
}

module.exports = { registerUserValidation }; //registerUserValidation;
