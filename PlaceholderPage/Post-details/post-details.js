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