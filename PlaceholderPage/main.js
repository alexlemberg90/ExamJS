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
            location.href = 'User-details/user-details.html';
        };

        usersDiv.appendChild(userDiv);

    }
})

const user = JSON.parse(localStorage.getItem('user'));

const userDiv = document.getElementById('user');

function renderObject(obj, parent) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            const div = document.createElement('div');
            div.innerHTML = `<b>${key}:</b>`;
            parent.appendChild(div);
            renderObject(obj[key], div);
        } else {
            const p = document.createElement('p');
            p.innerText = key + ': ' + obj[key];
            parent.appendChild(p);
        }
    }
}

renderObject(user, userDiv);

// кнопка постів
document.getElementById('loadPosts').onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(res => res.json())
        .then(posts => {
            const container = document.getElementById('posts');
            container.innerHTML = '';

            for (let post of posts) {
                const div = document.createElement('div');
                div.className = 'post';

                div.innerHTML = `
                    <p>${post.title}</p>
                    <button>Details</button>
                `;

                div.querySelector('button').onclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                    location.href = 'post-details.html';
                };

                container.appendChild(div);
            }
        });
};