let students = [
  {id:1,name:'ram',address:'ktm'},
  {id:2,name:'sita',address:'lalitpur'},
  {id:3,name:'hari',address:'bhaktapur'},
  {id:4,name:'gopal',address:'lalitpur'},
]
//<tr> = table row   <td> = table data
function display()
{
  let outPut="";
  students.map((student,index)=>{ 
    outPut+=`<tr>  
              <td>${index+1}</td>
              <td>${student.name}</td>
              <td>${student.address}</td>
              <td>
               <button>Edit</button>
               <button onclick="deleteData(${student.id})">Delete</button>
              </td>
            </tr>`
  })
  document.getElementById("result").innerHTML=outPut;
}
display(); 

function deleteData(id)
{
  students = students.filter(student => student.id !== id);
  display();
}

// let numbers = [5, 3, 8, 1, 2];
// let x = numbers.sort((a, b) => a - b)
// console.log(x);