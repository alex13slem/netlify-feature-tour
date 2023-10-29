exports.handler = async () => {
  const a = process.env.MY_SECRET;
  return {
    statusCode: 200,
    body: `asd ${a}`,
  };
};
