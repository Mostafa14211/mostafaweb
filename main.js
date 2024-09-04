let container = document.getElementById('container');

function setRole(roleId){
  let roleText = document.createTextNode(roleId);
  localStorage.setItem('role',roleText);
  container.appendChild(roleText);
  
}
