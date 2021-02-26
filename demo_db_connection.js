var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  averages=[]
  let a=0;
  con.query("SELECT * from customers", function (err, result, fields) {
    if (err) throw err;
    result.forEach(function(list){
      a += list.id;
    });
  var average = a/result.length;
  averages.push(average);
  console.log(average)
  
    console.log("Connected!");
    console.log(averages)
    var sql = "UPDATE customers SET average ='"+average+ "'WHERE id = '4'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  })
})
// con.connect(function(err) {
//     if (err) throw err;
//     let a=0;
//     con.query("SELECT id from customers ", function (err, result) {
//       if (err) throw err;


//SELECT * FROM (SELECT user_id,name,email, CAST(SUBSTRING_INDEX(pick_up_time, ',',1) AS time) AS Start_time,
//		CAST(SUBSTRING_INDEX(pick_up_time, ',', -1) AS time) AS End_time 
 //       from t_user) as t_user  LEFT JOIN test_1 ON t_user.user_id=test_1.t_id WHERE t_user.Start_time>='1:00 PM' AND t_user.End_time<='4:00 PM' && t_user.name="jatin"
//       console.log(result)
//      a = result + a
//       console.log(a,"average");
//     });
//   });
 // SELECT customers.name,ordersin.OrderNumber,ordersin.PersonID FROM customers LEFT JOIN ordersin ON ordersin.PersonID = customers.id WHERE ordersin.PersonID ='3'"
 // SELECT customers.name,ordersin.OrderNumber,ordersin.PersonID FROM ((customers INNER JOIN ordersin ON ordersin.PersonID = customers.id ))", function (err, result) {
    // if (err) throw err;
    // console.log(result);
    //SELECT customers.name,ordersin.OrderNumber,ordersin.PersonID FROM customers LEFT JOIN ordersin ON ordersin.PersonID = customers.id;
    //SELECT customers.name,ordersin.OrderNumber,ordersin.PersonID FROM customers INNER JOIN ordersin ON ordersin.PersonID = customers.id WHERE ordersin.PersonID ='3'

//SELECT * FROM (SELECT user_id,name,email, CAST(SUBSTRING_INDEX(pick_up_time, ',',1) AS time) AS A, CAST(SUBSTRING_INDEX(pick_up_time, ',', -1) AS time) AS B from t_user) as C LEFT JOIN test_1 ON C.user_id = test_1.t_id WHERE c.A>='1:00 PM' AND C.B<='4:00 PM'
