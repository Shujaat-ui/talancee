// api/index.js
module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).send("Backend is running!");
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
