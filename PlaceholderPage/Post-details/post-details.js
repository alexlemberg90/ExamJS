const post = JSON.parse(localStorage.getItem('post'));

const postDiv = document.getElementById('post');

function renderPost(post, parent) {
    for (let key in post) {
        if (typeof post[key] === 'object') {
            const div = document.createElement('div');
            div.innerHTML = `<b>${key}:</b>`;
            parent.appendChild(div);
            renderUser(post[key], div);
        } else {
            const p = document.createElement('p');
            p.innerText = key + ': ' + post[key];
            parent.appendChild(p);
        }
    }
}

renderPost(post, postDiv);

document.getElementById('loadComments').onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(res => res.json())
        .then(comments => {
            const container = document.getElementById('comments');
            container.innerHTML = '';

            for (let {body} of comments) {
                const div = document.createElement('div');
                div.className = 'comment';

                div.innerHTML = `
                    <p>${body}</p>
                `;



                container.appendChild(div);
            }
        });
};