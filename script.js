    document.addEventListener("DOMContentLoaded", () => {

        const tbody = document.querySelector("#expenseTable tbody");

        document.getElementById("addExpense").addEventListener("click", () => {
            const date = document.getElementById("date").value;
            const category = document.getElementById("category").value;
            const item = document.getElementById("item").value;
            const amount = document.getElementById("amount").value;
            const price = document.getElementById("price").value;

            const row = tbody.insertRow();

            row.insertCell(0).innerText = date;
            row.insertCell(1).innerText = category;
            row.insertCell(2).innerText = item;
            row.insertCell(3).innerText = amount;
            row.insertCell(4).innerText = price;
        });

        document.getElementById("clearExpenses").addEventListener("click", () => {
            tbody.innerHTML = "";
        });

        document.getElementById("submit").addEventListener("click", async () => {

        const expenses = [];
        const rows = tbody.querySelectorAll("tr");

        rows.forEach(row => {
            const cells = row.querySelectorAll("td");

            expenses.push([
                cells[0].textContent,
                cells[1].textContent,
                cells[2].textContent,
                cells[3].textContent,
                cells[4].textContent
            ]);
        });

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbz5BC39PMtKgZRE6T6nY61UFIu9ciDGnH-jKQga8EgX_qZtrLWjdOGOM547UFVMtIvm/exec",
            {
                method: "POST",
                redirect: "follow",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(expenses)
            }
        );

            const result = await response.text();
            alert(result);
        });
    })
