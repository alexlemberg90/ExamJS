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
