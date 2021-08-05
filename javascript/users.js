fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        console.log(users);

        const usersDiv = document.getElementById('users');

        for (const user of users) {
            const userJson = JSON.stringify(user);

            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            const userName = document.createElement('div');
            userName.classList.add('user_name');
            userName.innerText = `${user.id}. ${user.name}`;

            const userDetailsBtn = document.createElement('button');
            userDetailsBtn.classList.add('user_details-btn');
            userDetailsBtn.innerText = 'Details';

            userDetailsBtn.onclick = () => {
                location.href = `user-details.html?user=${userJson}`
            };

            userDiv.append(userName, userDetailsBtn);

            usersDiv.append(userDiv);
        }
    });

console.log(window.innerWidth);