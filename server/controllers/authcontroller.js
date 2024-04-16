const bcrypt = require("bcrypt");
const con = require("../db/db");


const signUp =async()=>{
    const saltRounds = 10; // Number of salt rounds
    const passwordHash = await bcrypt.hash(
      password,
      saltRounds,
      (err, passwordHash) => {
        if (err) {
          console.error("Error hashing password:", err);
          return;
        }
        // Store the hash in your database
        console.log("Hashed password:", passwordHash);
  
        const userData = {
          firstName,
          lastName,
          emailAddress,
          passwordHash,
          country,
        };
        con.query(query, userData, (err, result) => {
          if (err) throw err;
          console.log(result);
        });
      }
    );
    const query = "INSERT INTO users SET ?";
  
    console.log(passwordHash);
  
    console.log(req.body);
}