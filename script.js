/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperswithMap() {
    //Write your code here
    let dev= arr.map(function(a){
        return `${a.id} ${a.name}${a.age}${a.profession="developer"}`
    })
    return dev;
  }
  console.log(PrintDeveloperswithMap());
  
  function PrintDeveloperbyForEach() {
    //Write your code here
    let s =arr.forEach(function(value,key,a){
        if(a[key].profession==="developer")
        console.log(`${a[key].id}${a[key].name}${a[key].age}`);
    })
  }
  
  function addData() {
    //Write your code here
    let employee = {
         id: 1,
         name: "john",
         age: "18",
         profession: "developer" 
        }
        let h =[{id:4,name:"susan",age:"20",profession:"intern"}];

        h.push(employee);
        return h;
  }
  console.log(addData());
  
  function removeAdmin() {
    //Write your code here
    arr.splice(2);
  }
  removeAdmin();
  console.log(arr);
  
  function concatenateArray() {
    //Write your code here
    let arr1 =[
        {
            id: 6, name: "john", age: "18", profession: "developer"
        },
        {
            id: 7, name: "jack", age: "20", profession: "developer" 
        },
        {
             id: 8, name: "karen", age: "19", profession: "admin" 
        }

    ];
    return arr.concat(arr1);
  }
  console.log(concatenateArray());
