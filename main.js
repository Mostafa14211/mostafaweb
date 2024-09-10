let container = document.getElementById('container');
let role;

if(localStorage.role != null){
  role = localStorage.role;
  container.innerHTML = role;
} else{
  role = '';
};

function setRole(roleId){
  role = roleId;
  localStorage.setItem('role',role);
  container.innerHTML = role;
  

}
