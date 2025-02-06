const rooms = ['devops', 'cloud computing', 'covid19', 'sports', 'nodeJS'];

const getRooms = (req, res) => {
  res.status(200).json({ rooms });
};

module.exports = { getRooms };
