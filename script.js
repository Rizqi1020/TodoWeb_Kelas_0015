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

 function renderTugas() {
    daftarTugas.innerHTML = "";

    todos.forEach((todo, index) => {
        let coret = todo.status === 'Done' ? 'line-through' : 'none';
        let warnaStatus = todo.status === 'Done' ? 'green' : 'red';

        daftarTugas.innerHTML += `
        <li style="text-decoration: ${coret}; color: ${warnaStatus};">
            <spanstyle="text-decoration: ${coret}; display: block; margin-bottom: 5px;">
             <strong>${todo.task}</strong> | Deadline: ${todo.date} | Status: <strong style="color:${todo.status}</strong>
            </span>
            <div>
                <button onclick="ubahStatus(${index})">Ubah Status</button>
                <button onclick="editTugas(${index})">Edit</button>
                <button onclick="hapusTugas(${index})">Hapus</button>
            </div>
        </li>
        `;
    });
}

 function ubahStatus(index) {
    if(todos[index].status === 'Progress') {
        todos[index].status = 'Done';
    } else {
        todos[index].status = 'Progress';
    }

 renderTugas();
}

 function editTugas(index) {
    let newTask = prompt("Edit tugas:", todos[index].task);
    let newDate = prompt("Edit tanggal:", todos[index].date);
    if(newTask !== null && newTask.trim() !== "") {
        todos[index].task = newTask.trim();
    }
    if(newDate !== null && newDate.trim() !== "") {
        todos[index].date = newDate.trim();
    }
    renderTugas();
}

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