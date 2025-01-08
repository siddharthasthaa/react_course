
let students=[
  {id:1,name:'ram',address:'ktm'},
  {id:2,name:'shyam',address:'bkt'},
  {id:3,name:'hari',address:'lalitpur'},
  {id:4,name:'gopal',address:'lalitpur'},
]


function display(){
  let outPut=""; //Starts with an empty string to build the HTML table rows
  students.map((student,index)=>{ //Loops through each student in the students array.
  outPut+=`<tr>
              <td>${index+1}</td>
              <td>${student.name}</td>
              <td>${student.address}</td>
              <td>
              <button onclick="editData(${student.id})">Edit</button>
                <button onclick="deleteData(${student.id})">Delete</button>
              </td>
          </tr>`
  }) //Adds a row (<tr>) for each student,

  document.getElementById("result").innerHTML=outPut;
}
//Updates the HTML table (<tbody> with id="result") with the rows created.
display();
 //Calls the display function to initially render the table when the page loads.
function deleteData(id){
  let filterData=students.filter((student)=>student.id!=id);// != id: Compares the student.id to the id passed to the deleteData function. If they are not equal, the student remains in the array. If they are equal, that student is excluded.
  students=filterData;
  display();
}


function editData(id){
  let findData = students.find((student)=>student.id==id);
  document.getElementById("name").value=findData.name  // holds the value that user types in input
  document.getElementById("address").value=findData.address
  document.getElementById("criteria").value=findData.id
  document.getElementById("btn_name").innerHTML="Update Record";
  
}


let sId=5;
function addRecord(){
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let criteria = document.getElementById("criteria").value;
  if(criteria){ //update
      let findData = students.find((student)=>student.id==criteria);
      findData.name = name;
      findData.address = address;
      display();
      document.getElementById("name").value="";
      document.getElementById("address").value="";
      document.getElementById("criteria").value="";
      document.getElementById("btn_name").innerHTML="Add Record";
  }else{
     let storeData={
          id:sId,
          name:name,
          address:address
      }

      students.push(storeData);

      display();

      document.getElementById("name").value=""; //CLEAR THE VALUE
      document.getElementById("address").value="";
      sId++;
  }
 
}