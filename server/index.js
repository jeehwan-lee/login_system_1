const express =require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

const corsOptions = {
    origin : '*',
    credential : 'true',
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql.createConnection({
    user:'root',
    host: "localhost",
    password: "123456",
    database : "LoginSystem",
});

app.post('/createRoom', (req, res) => {
    const roonName = req.body.roomname;

    console.log(req.body.roomname);

    db.query (
        "Insert into rooms (roomname) values (?)",
        [roonName],
        (err, result) => {
            console.log(err);
        }
    )
});

app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    db.query(
        "Insert into users (username, password, email) values (?, ?, ?)",
        [username, password, email],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * from users where username = ? and password = ?",
        [username, password],
        (err, result) => {
            if(err) {
                res.send({err : err});
            }

            if(result.length > 0) {
                 res.send(result);
            }
            else {
                res.send({message : "Please Check Username or Password!"});
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running server");
});