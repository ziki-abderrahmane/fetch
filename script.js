document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getJson').addEventListener('click',getJson);
document.getElementById('getApi').addEventListener('click',getApi);
function getText(){
    fetch("file.txt")
    .then((res)=>res.text())
    .then((data)=>document.getElementById('result').innerHTML=`<h1>${data}</h1>`)
    .catch((err)=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`);
}
function getJson(){
    fetch("users.json")
    .then((res)=>res.json())
    .then((data)=>{
        let output="";
        data.forEach(user => {
            output+=`<ul><li>Id:${user.id}</li>
            <li>Name:${user.name}</li>
            <li>Email:${user.email}</li></ul><hr>`
        });
        document.getElementById('result').innerHTML=output})
    .catch((err)=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`);
}
function getApi(){
    fetch('http://jsonplaceholder.typicode.com/posts',{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        let output="";
        data.forEach(post => {
            output+=`<div><h3>:${post.title}</h3>
            <p>${post.body}</p>
            </div><hr>`
        });
        document.getElementById('result').innerHTML=output})
    .catch((err)=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`);
}