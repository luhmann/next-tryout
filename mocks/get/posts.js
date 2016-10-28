const path = require('path')
const fs = require('fs')

const FIXTURE_PATH = path.resolve(__dirname, '../__fixtures')

module.exports = {
  method: 'GET',
  path: '/api/posts/:id',
  delay: 250,
  render: (req, res) => {
    fs.stat(path.resolve(FIXTURE_PATH, `post${req.params.id}.json`), (err, stat) => {
      if (err || stat.isFile() === false) {
        res.status(404).json({'message': 'File not Found'});
      } else {
        res.json(require(path.resolve(FIXTURE_PATH, `post${req.params.id}.json`)));
      }
    })
  }
}
