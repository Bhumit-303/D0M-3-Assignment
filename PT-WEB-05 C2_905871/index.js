document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let table = document.querySelector('tbody');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let doctorID = document.getElementById('docID').value;
        let specialization = document.getElementById('dept').value;
        let experience = parseInt(document.getElementById('exp').value);
        let email = document.getElementById('email').value;
        let mobile = document.getElementById('mbl').value;

        let role = 'Trainee';
        if (experience > 5) {
            role = 'Senior';
        } else if (experience >= 2 && experience <= 5) {
            role = 'Junior';
        }

        let newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${doctorID}</td>
            <td>${specialization}</td>
            <td>${experience} years</td>
            <td>${email}</td>
            <td>${mobile}</td>
            <td>${role}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>`;

        form.reset();
    });
});

function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
