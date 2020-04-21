const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const employees = [
    {
    EmployeeID: "EM001",
    Name: "Maxwell Owusu",
    Position: "sales manager",
    Age: "34",
    },
    {
    EmployeeID: "EM002",
    Name: "Dennis Tetteh",
    Position: "Account manager",
    Age: "30"
    },
    {
    EmployeeID: "EM003",
    Name: "Nana Forson",
    Position: "Marketing manager",
    Age: "29"
    }
    ]





app.get('/', function (req, res) {
  res.render('landing', {
      employees
  } );

  app.get('/employeelist',(req, res)=>{
      res.render('employeelist')

  })

  app.get('/todolist',(req, res)=>{
      res.render('todolist')
      
})
  
})



const port= 3030
app.listen(port, ()=>{
    console.log(`server has started on port ${port}`);
})



