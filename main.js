let role='';
let container = document.getElementById('container');

function setRole(roleId){
  let roleText = document.createTextNode(roleId);
  container.appendChild(roleText);
  
}
