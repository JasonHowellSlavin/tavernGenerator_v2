const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_SECRET,
    database: 'TavernGenerator',
});

// exports.stats = (req, res) => {
//     connection.query('SELECT * FROM ApexStats ORDER BY ID DESC', (error, results, fields) => {
//         if (error) throw error;
//         res.send((JSON.stringify(results)));
//     })
// };

// exports.dailyStats = (req, res) => {
//     connection.query('SELECT * FROM ApexStats WHERE date = ?', req.body.date, (err, response) => {
//         if (err) throw err;(
//         res.send(JSON.stringify(response)));
//     })
// }

function updateTavernNames(reqObj) {
    let reqArray = Object.values(reqObj);
    console.log(reqObj, reqArray);

    connection.query('INSERT INTO TavernNames(type, goes_with, word, preferred_position, prosperity_level) VALUES (?, ?, ?, ?, ?)',
    reqArray,
    (err) => {
        if (err) throw err;
        console.log('Updated tavern names with values in request');
        reqArray.forEach(value => console.log(value));
    });
}

exports.base = (req, res) => {
        connection.query('SELECT * FROM TavernNames ORDER BY ID ASC', (error, results, fields) => {
        if (error) throw error;
        res.send((JSON.stringify(results)));
    });
}

exports.update = (req, res) => {
    console.log('req', req.body);
    updateTavernNames(req.body)
    res.send("updated");
}
