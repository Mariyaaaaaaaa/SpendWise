/* =================================
   PASSWORD TOGGLE
================================= */

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    const icon = button.querySelector("i");

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

}



/* =================================
   REGISTER VALIDATION
================================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }


        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}



/* =================================
   LOGIN
================================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        window.location.href = "dashboard.html";

    });

}



/* =================================
   DASHBOARD CHARTS
================================= */

const incomeExpenseChart =
    document.getElementById("incomeExpenseChart");

if (incomeExpenseChart) {

    new Chart(incomeExpenseChart, {

        type: "bar",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug"
            ],

            datasets: [

                {
                    label: "Income",

                    data: [
                        42000,
                        45000,
                        48000,
                        50000,
                        55000,
                        60000,
                        62000,
                        65000
                    ],

                    backgroundColor: "#16a34a",

                    borderRadius: 5

                },

                {
                    label: "Expenses",

                    data: [
                        18000,
                        21000,
                        16000,
                        22000,
                        19000,
                        17000,
                        18000,
                        16750
                    ],

                    backgroundColor: "#2563eb",

                    borderRadius: 5

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {

                        usePointStyle: true

                    }

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    grid: {

                        color: "#f1f5f9"

                    }

                },

                x: {

                    grid: {

                        display: false

                    }

                }

            }

        }

    });

}



/* =================================
   EXPENSE CHART
================================= */

const expenseChart =
    document.getElementById("expenseChart");

if (expenseChart) {

    new Chart(expenseChart, {

        type: "doughnut",

        data: {

            labels: [
                "Food",
                "Shopping",
                "Travel",
                "Others"
            ],

            datasets: [

                {

                    data: [
                        32,
                        24,
                        18,
                        26
                    ],

                    backgroundColor: [
                        "#2563eb",
                        "#7c3aed",
                        "#16a34a",
                        "#f97316"
                    ],

                    borderWidth: 0

                }

            ]

        },

        options: {

            cutout: "72%",

            plugins: {

                legend: {
                    display: false
                }

            }

        }

    });

}