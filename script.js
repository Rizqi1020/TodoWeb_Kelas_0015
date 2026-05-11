let todos = [];

const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function() {
    
 let teksTugas = inputTugas.value.trim();
 let tanggal = inputTanggal.value; 
 
 if(teksTugas === "") {
    alert("Data harus dimasukan!");
    return;
 }

 todos.push({task: teksTugas, date: tanggal, status: 'Progress'});

 inputTugas.value = "";
 inputTanggal.value = "";

 renderTugas();
});

 let listbaru = document.createElement("li");
 let spanbaru = document.createElement("span");

 spanbaru.innerHTML = teksTugas;

 listbaru.appendChild(spanbaru);

 daftarTugas.appendChild(listbaru);

 const warnabaru = document.querySelectorAll("li");
 warnabaru.forEach((item, index) => {
    if(index % 2 === 0){
        item.style.color = "red";
    } else {
        item.style.color = "green";
    }
 });
 inputTugas.value = "";
});