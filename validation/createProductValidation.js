function createProductValidation(props) {
  if (typeof props?.title !== "string" || !props?.title?.trim())
    throw new Error(
      "Title is required. Please check if it is string and provided."
    );

  if (typeof props?.description !== "string" || !props?.description?.trim())
    throw new Error(
      "Description is required. Please check if it is string and provided."
    );
}

module.exports = { createProductValidation };
