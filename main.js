localStorage.clear();

let container = document.getElementById('container');
let role;

if(localStorage.role != null){
  role = JSON.parse(localstorage.role);
} else{
  role = '';
};

function setRole(roleId){
  localStorage.setItem('role',JSON.stringify(roleId));
  container.innerHTML = JSON.stringify(roleId);
  role = roleId;

}
