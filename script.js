// Sample student data (700 admitted + 200 pending)
let students = [];

// Function to generate random student data
function generateRandomStudentData(num) {
    const names = ["Liam", "Noah", "Oliver", "Elijah", "James", "William", "Benjamin", "Lucas", "Henry", "Alexander"];
    const countries = ["USA", "UK", "Canada", "Germany", "France", "Spain", "Italy", "India", "China", "Japan"];

    for (let i = 0; i < num; i++) {
        const firstName = names[Math.floor(Math.random() * names.length)];
        const lastName = `${firstName}son`; // Random last name generation
        const country = countries[Math.floor(Math.random() * countries.length)];
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@adhzuniversity.com`;
        const status = i < 700 ? "admitted" : "pending"; // First 700 are admitted
        students.push({
            student_id: `AD${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
            first_name: firstName,
            last_name: lastName,
            country: country,
            email: email,
            status: status,
            class: "Freshman"
        });
    }
}

// Generate random student data
generateRandomStudentData(900);

// Function to handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'LAL84624' && password === 'LKumar212') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboardPage').style.display = 'block';
        updateDashboard();
    } else {
        document.getElementById('loginError').innerText = 'Invalid username or password';
    }
});

// Update the dashboard statistics
function updateDashboard() {
    document.getElementById('totalStudents').innerText = students.length;
    document.getElementById('admittedStudents').innerText = students.filter(s => s.status === 'admitted').length;
    document.getElementById('pendingStudents').innerText = students.filter(s => s.status === 'pending').length;
}

// Function to display students
function displayStudents() {
    const container = document.getElementById('studentTableContainer');
    container.innerHTML = ''; // Clear previous data

    let table = `<table>
                    <thead>
                        <tr>
                            <th>Student
