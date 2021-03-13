const Artists = require('../models/authors');

exports.all =  (req, res) => {
    Artists.all( (err, docs) => {
        if (err) {
            console.log(err, 'Error');
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};
