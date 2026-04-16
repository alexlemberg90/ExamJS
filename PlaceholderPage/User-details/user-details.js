const user = JSON.parse(localStorage.getItem('user'));

const userDiv = document.getElementById('user');

function renderUser(user, parent) {
    for (let key in user) {
        if (typeof user[key] === 'object') {
            const div = document.createElement('div');
            div.innerHTML = `<b>${key}:</b>`;
            parent.appendChild(div);
            renderUser(user[key], div);
        } else {
            const p = document.createElement('p');
            p.innerText = key + ': ' + user[key];
            parent.appendChild(p);
        }
    }
}

renderUser(user, userDiv);

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
                    location.href = '../Post-details/post-details.html';
                };

                container.appendChild(div);
            }
        });
};
