const url = new URL(location.href);

const postJson = url.searchParams.get('post');
const post = JSON.parse(postJson);

console.log(post);

document.getElementById('title').innerText = `${post.id}.${post.userId}. ${post.title}`;
document.getElementById('body').innerText = post.body.replaceAll('\n', ' ');

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(comments => comments.json())
    .then(comments => {
        const commentsDiv = document.getElementById('comments');

        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const name = document.createElement('div');
            name.innerText = `${comment.id}.${comment.postId}. ${comment.name}`;
            name.classList.add('comment_name');

            const email = document.createElement('div');
            email.innerText = comment.email;
            email.classList.add('comment_email');

            const body = document.createElement('div');
            body.innerText = comment.body;
            body.classList.add('comment_body');

            commentDiv.append(name, email, body);
            commentsDiv.append(commentDiv);
        }
    });
