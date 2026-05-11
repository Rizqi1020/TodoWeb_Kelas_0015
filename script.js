let todos = [];

const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function() {
    let teksTugas = inputTugas.value.trim();
    let tanggal = inputTanggal.value; 

    if(teksTugas === "" || tanggal === "") {
        alert("Tugas sama tanggal wajib diisi cuy!");
        return;
    }

    todos.push({ task: teksTugas, date: tanggal, status: 'Progress' });
    
    inputTugas.value = ""; 
    inputTanggal.value = "";
    
    renderTugas(); 

    alert("Tugas berhasil ditambahkan!");
});

function renderTugas() {
    daftarTugas.innerHTML = ""; 

    todos.forEach((todo, index) => {
        let coret = todo.status === 'Done' ? "line-through" : "none";
        let warnaStatus = todo.status === 'Done' ? "green" : "red";

        daftarTugas.innerHTML += `
            <li>
                <span style="text-decoration: ${coret}; color: ${warnaStatus};">
                    <strong>${todo.task}</strong> | Deadline: ${todo.date} | Status: <strong>${todo.status}</strong>
                </span>
                <div>
                    <button class="status" onclick="ubahStatus(${index})">Ubah Status</button>
                    <button class="edit" onclick="editTugas(${index})">Edit</button>
                    <button class="hapus" onclick="hapusTugas(${index})">Hapus</button>
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

function hapusTugas(index) {
    if(confirm("Apakah lu yakin mau ngehapus tugas ini bro?")) {
        todos.splice(index, 1);
        renderTugas();
    }
}