const getArguments = () => {
  const args = process.argv;

  const url = args[2];
  const path = args[3];

  return {
    url,
    path,
  };
};

module.exports = {
  getArguments
};