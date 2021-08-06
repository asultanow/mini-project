fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        const usersDiv = document.getElementById('users');

        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            const name = document.createElement('div');
            name.classList.add('user_name');
            name.innerText = `${user.id}. ${user.name}`;

            const detailsBtn = document.createElement('button');
            detailsBtn.classList.add('user_details-btn');
            detailsBtn.innerText = 'Details';

            detailsBtn.onclick = () => {
                location.href = `user-details.html?user=${JSON.stringify(user)}`
            };

            userDiv.append(name, detailsBtn);
            usersDiv.append(userDiv);
        }
    });
