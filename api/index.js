import express, { query } from "express"
import cors from "cors"
import mysql from 'mysql'
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express()

export const db = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'password',
    database:'sport'
})

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    let q = "SELECT * FROM users WHERE email = ?";

    db.query(q,[req.body.email], (err,data)=>{
        if (err) return res.json("ERROR");
        if(data.length) return res.status(409).json("User already exist")
        //if(data.length==0) return res.status(409).json("Fill in all the fields")
        
        const {email} = req.body;
        const {password} = req.body;
        const {firstName} = req.body;
        const {lastName} = req.body;
        const {role} = req.body;

        let sql = "INSERT INTO users (email, password, firstName, lastName, role) VALUES (?,?,?,?,?)"
        db.query(sql, [email, password, firstName, lastName, role], (err, result) => {
            if(err){
                console.log(err);
            }else{
                return res.status(200).json("User has been created.");
            }
        })
    });
});

app.post("/login", (req, res) => {
  
    let q = "SELECT * FROM users WHERE email = ? and password = ?";
  
    db.query(q, [req.body.email, req.body.password], (err, data) => {
      if (err) return res.json("ERROR");
      if (data.length > 0) 
        return res.json("Success");
       else 
        return res.json("Failed");
      
      
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
      res
        .cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json(other);
      
    });

});

app.get("/clubs", (req, res) => {
  
    let q = "SELECT * FROM clubs";
  
    db.query(q, (err, data) => {
      if (err) return res.json("ERROR");
      
      return res.status(200).json(data);
  
      
    });
});

app.get("/players", (req, res) => {
  
    let q = "SELECT * FROM players";
  
    db.query(q, (err, data) => {
      if (err) return res.json("ERROR");
      
      return res.status(200).json(data);
  
      
    });
});

app.get("/clubs/players", (req, res) => {

  let q = "SELECT * FROM players WHERE players.clubId IN (SELECT id from clubs)";

  db.query(q, (err, data) => {
    if (err) return res.json("ERROR");
    
    return res.status(200).json(data);

    
  });
});

app.delete("/players/delete/:index", (req, res) => {
  const { index } = req.params
  let q = "DELETE FROM players WHERE playerId = ?"

  db.query(q, [index], (err, data) => {
    if (err) return res.json("ERROR");
    
    return res.status(200).json(data);

  });
});

app.delete("/clubs/delete/:index", (req, res) => {
  const { index } = req.params
  let q = "DELETE FROM clubs WHERE id = ?"

  db.query(q, [index], (err, data) => {
    if (err) return res.json("ERROR");
    
    return res.status(200).json(data);

  });
});

app.post("/clubs/add-club", (req, res) => {
  const {name} = req.body;
  let q = "INSERT INTO clubs (name) VALUES (?)"

  db.query(q,[name],(err, data) => {
    if (err) return res.json("ERROR");
    
    return res.status(200).json(data);

    
  });
});

app.post("/players/add-player", (req, res) => {
  const {playerImg} = req.body;
  const {playerName}= req.body;
  const {plata} = req.body;
  const {clubId} = req.body;
  let q = "INSERT INTO players (playerImg, playerName, plata, clubId) VALUES (?)"

  db.query(q,[playerImg, playerName, plata, clubId],(err, data) => {
    if (err) return res.json("ERROR");
    
    return res.status(200).json(data);

    
  });
});
  

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to db!");
  });

app.listen(8800, ()=> {
    console.log("Connected");
});