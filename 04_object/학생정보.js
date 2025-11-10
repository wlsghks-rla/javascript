console.log(JSON.parse(localStorage.getItem("students")));
let students = JSON.parse(localStorage.getItem("students"));
let sno = JSON.parse(localStorage.getItem("sno"));

for (let i = 0; i < students.length; i++) {
  if (students[i].sno == sno) {
    const data = [
      students[i].sno,
      students[i].sname,
      students[i].score,
      students[i].phone,
      students[i].email,
    ];
    let tr = makeRow(data);
    document.querySelector("#data").appendChild(tr);
    //
    function makeRow(data) {
      let tr = document.createElement("tr");
      for (let elem of data) {
        let td = document.createElement("td");
        let txt = document.createTextNode(elem);
        td.appendChild(txt);
        tr.appendChild(td);
      }
      return tr;
    }
    break;
  }
}
