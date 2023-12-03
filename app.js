const client = require("./database");
// client.connect();
// client.query(`select * from demo_table where id=$1`, [1], (err, result) => {
//   if (!err) {
//     console.log(result.rows);
//   } else {
//     console.log(err);
//   }
//   client.end();
// });

//using async await
// const query = async () => {
//   await client.connect();
//   client.query(`select * from demo_table where id=$1`, [1], (err, result) => {
//     if (!err) {
//       console.log(result.rows);
//     } else {
//       console.log(err);
//     }
//     client.end();
//   });
// };
// query();

//async await self called fn
// (async () => {
//   await client.connect();
//   const result = await client.query(`select * from demo_table where id=$1`, [1]);
//   console.log(result.rows);
//   client.end();
// })();

(async () => {
  await client.connect();
  const result = await client.query(
    `insert into demo_table(name,address) values($1,$2) RETURNING *`,
    ["Rocky", "123 charlie street"]
  );
  console.log(result.rows);
  console.log(result.rowCount);
  client.end();
})();
