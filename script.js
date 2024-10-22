document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials (for demo purpose only)
    if (username === 'LAL84624' && password === 'LKumar212') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('login-message').innerText = 'Invalid credentials. Please try again.';
    }
});

// Example function to load student data on the profile page
function loadProfile() {
    const profileInfo = document.getElementById('profile-info');
    // Fetch data from JSON (simulated)
    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            const student = data[0]; // Get the first student for demo
            profileInfo.innerHTML = `
                <h3>${student.name}</h3>
                <p>Email: ${student.email}</p>
                <p>Courses Enrolled: ${student.courses.join(', ')}</p>
            `;
        });
}

// Load profile data when on profile page
if (document.getElementById('profile-info')) {
    loadProfile();
}

// Example function to view transcripts (simulated)
function loadTranscript() {
    const transcriptInfo = document.getElementById('transcript-info');
    // Fetch data from JSON (simulated)
    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            const student = data[0]; // Get the first student for demo
            transcriptInfo.innerHTML = `
                <h3>Transcript for ${student.name}</h3>
                <p>Courses: ${student.courses.join(', ')}</p>
            `;
        });
}

// Load transcript data when on transcript page
if (document.getElementById('transcript-info')) {
    loadTranscript();
}
