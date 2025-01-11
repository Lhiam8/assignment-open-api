async function getRandomUser() {
    try {
        const response = await fetch('http://localhost:3000/users/random');
        const data = await response.json();
        displayUsers([data]);
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to fetch random user');
    }
}

async function getMultipleUsers() {
    const count = document.getElementById('userCount').value;
    try {
        const response = await fetch(`http://localhost:3000/users/multiple?count=${count}`);
        const data = await response.json();
        displayUsers(data);
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to fetch multiple users');
    }
}

async function getUsersByGender(gender) {
    try {
        const response = await fetch(`http://localhost:3000/users/by-gender?gender=${gender}`);
        const data = await response.json();
        displayUsers(data);
    } catch (error) {
        console.error('Error:', error);
        showError(`Failed to fetch ${gender} users`);
    }
}

function displayUsers(users) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="User photo">
            <div class="user-info">
                <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
                <p>Phone: ${user.phone}</p>
            </div>
        `;
        resultsDiv.appendChild(userCard);
    });
}

function showError(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<div class="error">${message}</div>`;
} 