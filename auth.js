// Initialize users array in localStorage if it doesn't exist
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Get all users
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Register a new user
function registerUser(email, password, name = '') {
    const users = getUsers();
    
    // Check if user already exists
    if (users.some(user => user.email === email)) {
        return { success: false, message: 'Email already registered' };
    }

    // Basic validation
    if (!email || !password) {
        return { success: false, message: 'Email and password are required' };
    }

    if (password.length < 8) {
        return { success: false, message: 'Password must be at least 8 characters' };
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        email,
        password, // Note: In a real app, you would hash the password
        name,
        enrolledCourses: [],
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, user: newUser };
}

// Login user
function loginUser(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
        return { success: false, message: 'User not found' };
    }

    if (user.password !== password) {
        return { success: false, message: 'Incorrect password' };
    }

    // Set current user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    return { success: true, user };
}

// Handle login form submission
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const result = loginUser(email, password);
            
            if (result.success) {
                window.location.href = 'dashboard.html';
            } else {
                alert(result.message);
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const name = document.getElementById('name').value;
            
            const result = registerUser(email, password, name);
            
            if (result.success) {
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            } else {
                alert(result.message);
            }
        });
    }
});

// Get current user
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Check if user is authenticated
function isAuthenticated() {
    return !!getCurrentUser();
}