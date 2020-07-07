const mysql = require('mysql');

const rootConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "example",
    port: 3306
});

rootConnection.connect();

rootConnection.query('CREATE DATABASE TavernGenerator', (error, results, fields) => {
    if (error) throw error;
    console.log('DB "TavenGenerator" created');
});

rootConnection.changeUser({database: 'TavernGenerator'}, (error) => {
    if (error) throw error;
})

rootConnection.query('CREATE TABLE Users (user_id int PRIMARY KEY NOT NULL AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), recoveryHash VARCHAR(255))',
 (error, results, fields) => {
    if (error) throw error;
    console.log('Table Users created');
});

rootConnection.query('CREATE TABLE TavernNameTemplates (ID int PRIMARY KEY NOT NULL AUTO_INCREMENT, template VARCHAR(511))',
 (error, results, fields) => {
    if (error) throw error;
    console.log('Table TavernNameTemplates created');
});

rootConnection.query('CREATE TABLE TavernNames (ID int PRIMARY KEY NOT NULL AUTO_INCREMENT, word VARCHAR(255), type ENUM("adjective", "name", "noun", "any"), goes_with VARCHAR(255), preferred_position int, prosperity_level int)',
 (error, results, fields) => {
    if (error) throw error;
    console.log('Table TavernNames created');
});

rootConnection.query('INSERT INTO Users(email, password, recoveryHash) VALUES ("slavin.jhs@gmail.com", "raspberry", null)', (err) => {
    if (err) throw err;
    console.log('updated users table');
});

rootConnection.end();