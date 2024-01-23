// accessing the query parameters and headers also path parameters.
const getingData = (req, res) => {
  // accessing the path parameters
  const id = req.params.id;

  // accessing the headers keys
  const headers = req.headers.authorization;

  // accessing the query parameters.
  const queryParameters = req.query;
  console.log("Query parameters", queryParameters);

  console.log(id, headers);
  res.status(200).json({ id: id, headers: headers, query: queryParameters });
};

module.exports = getingData;
