let ADMIN_PASS = "impi2026";
let isAdmin = false;

function unlockAdmin(){
  const v = document.getElementById("adminPass").value;
  if(v === ADMIN_PASS){
    isAdmin = true;
    alert("Admin unlocked");
  } else {
    alert("Wrong passcode");
  }
}

let index = 100;

const weights = {equities:1};
const returns = {equities:0.001};

function compute(){
  let r = 0;
  for(let k in weights){
    r += weights[k]*returns[k];
  }
  index = index*(1+r);
  document.getElementById("indexValue").innerText = index.toFixed(2);
}

compute();

const ctx = document.getElementById("mainChart");
if(ctx){
  new Chart(ctx,{
    type:"line",
    data:{
      labels:["T-4","T-3","T-2","T-1","Today"],
      datasets:[{label:"IMPI",data:[95,97,98,99,100]}]
    }
  });
}
