let container = document.getElementById('container');
let role;

if(localStorage.role != null){
  role = JSON.parse(localstorage.role);
  container.innerHTML = role;
} else{
  role = '';
};

function setRole(roleId){
  role = roleId;
  localStorage.setItem('role',JSON.stringify(role));
  container.innerHTML = role;
  

}
