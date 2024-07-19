document.addEventListener('DOMContentLoaded', async function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list of users
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear existing content
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
});
