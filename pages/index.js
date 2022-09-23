import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'





// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Bus'
});

// simple query
connection.query(
  'SELECT * FROM `show`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );



export default function Home() {
  return (
    <div className={styles.container}>
      <h1>ji</h1>
    </div>
  )
}
