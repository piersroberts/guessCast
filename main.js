const guessCast = (value) => {
  const lowerCaseValue = value.toLowerCase(value);
  const numericValue = parseFloat(value);
  const justNumbers = value.match(/^-*\d+(\.\d+)?$/g) != null;

  const castValue = justNumbers
    ? numericValue
    : ["true", "false"].includes(lowerCaseValue)
    ? lowerCaseValue === "true"
    : value;
  return castValue;
};

module.exports = guessCast;
