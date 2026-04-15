fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => {
        let usersDiv = document.getElementById(`users`)
        for (const user of users) {
            let userDiv = document.createElement(`div`);
            userDiv.classList.add("user");
            userDiv.innerHTML =
                `<p><b>ID:</b> ${user.id}</p>
                <p><b>Name:</b> ${user.name}</p>
                <button>Details</button>`;

            userDiv.querySelector('button').onclick = () => {
                localStorage.setItem('user', JSON.stringify(user));
                location.href = '../User-details/user-details.html';
            };

            usersDiv.appendChild(userDiv);

        }
    })
