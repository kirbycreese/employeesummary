var inquirer = require ("inquirer");
var mysql = require ("mysql");
var consoletable = require ("console.table");
const { start } = require("repl");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "cosmo120",
    database: "employees_db"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    view();
    console.log("connected as id " + connection.threadId);
  });

  //add function for view, add, update, add department, add role, add employee, update department, update role, update employee, reference readme
  function view() {
    inquirer
      .prompt({
        name: "viewoptions",
        type: "list",
        message: "Would you like to view, add, or update an employee or exit?",
        choices: ["VIEW", "ADD", "UPDATE", "EXIT"]
      })
      .then(function(answer) {
        // based on their answer, either 
        if (answer.viewoptions === "VIEW") {
          viewEmployee();
        }
        else if(answer.viewoptions === "ADD") {
          addEmployee();
        } 
        else if (answer.viewoptions === "UPDATE") {
            updateEmployee();
          }
          else{
          connection.end();
        }
      });
  }