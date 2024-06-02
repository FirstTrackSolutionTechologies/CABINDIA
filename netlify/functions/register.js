// netlify/functions/authenticate.js
const mysql = require('mysql2/promise');
require('dotenv').config();

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name,email, mobile ,password, confirmPassword } = JSON.parse(event.body);

 console.log("hello")
  if (!email || !password || !confirmPassword || !name || !mobile) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing Fields' }),
    };
  }
  if (password !== confirmPassword) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Password must be same in both fields' }),
    };
  }
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    [rows] = await connection.execute("SELECT * FROM users WHERE email = ?;", [email]);
    if (rows.length === 0) {
      await connection.execute('INSERT INTO users VALUES (?,?,?,?);', [name,email,mobile,password]);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Registered", success:true }),
    }
    }
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'User Already Exists' , success:false}),
    };
    
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message , success: false }),
    };
  }
};
