// netlify/functions/authenticate.js
const mysql = require('mysql2/promise');
require('dotenv').config();

exports.handler = async (event, context) => {
  // if (event.httpMethod !== 'POST') {
  //   return {
  //     statusCode: 405,
  //     body: JSON.stringify({ message: 'Method Not Allowed' }),
  //   };
  // }

  // const { name,email, mobile ,password, confirmPassword } = JSON.parse(event.body);

  let name = "Aditya"
  let email = "aditya@gmail.com"
  let password = "password"
  let confirmPassword = "password"
  let mobile = "1234556678"
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

    const [rows] = await connection.execute('INSERT INTO users VALUES (?,?,?,?))', [name,email,mobile,password]);
    console.log(rows)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: rows, success:true }),
    }
    // if (rows.length === 0) {
    //   return {
    //     statusCode: 401,
    //     body: JSON.stringify({ message: 'Invalid email or password' }),
    //   };
    // }

    // const user = rows[0];

    // if (user.password === password) { // Note: In a real-world scenario, you should hash and compare passwords
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({ message: 'Authentication successful', success: true }),
    //   };
    // } else {
    //   return {
    //     statusCode: 401,
    //     body: JSON.stringify({ message: 'Invalid email or password', success: false }),
    //   };
    // }
  } catch (error) {
    console.log("hello");

    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message , success: false }),
    };
  }
};
