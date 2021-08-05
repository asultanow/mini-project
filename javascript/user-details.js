const url = new URL(location.href);
const userJson = url.searchParams.get('user');
const user = JSON.parse(userJson);

console.log(user);

document.getElementById('name').innerText = `${user.id}. ${user.name}`;
document.getElementById('username').innerText = `Username: ${user.username}`;
document.getElementById('email').innerText = `Email: ${user.email}`;
document.getElementById('phone').innerText = `Phone: ${user.phone}`;
document.getElementById('website').innerText = `Website: ${user.website}`;
document.getElementById('companyname').innerText = `Name: ${user.company.name}`;
document.getElementById('catchphrase').innerText = `Catch phrase: ${user.company.catchPhrase}`;
document.getElementById('bs').innerText = `Bs: ${user.company.bs}`;
document.getElementById('street').innerText = `Street: ${user.address.street}`;
document.getElementById('suite').innerText = `Suite: ${user.address.suite}`;
document.getElementById('city').innerText = `City: ${user.address.city}`;
document.getElementById('zipcode').innerText = `Zipcode: ${user.address.zipcode}`;
document.getElementById('lat').innerText = `Lat: ${user.address.geo.lat}`;
document.getElementById('lng').innerText = `Lng: ${user.address.geo.lng}`;

const viewPostsBtn = document.getElementById('view-posts-btn');
const hidePostsBtn = document.getElementById('hide-posts-btn');

const postsDiv = document.getElementById('posts');

let isPostsExist = false;

viewPostsBtn.onclick = () => {
    console.log(isPostsExist);

    viewPostsBtn.style.display = 'none';
    hidePostsBtn.style.display = 'block';

    if (isPostsExist) {
        postsDiv.style.display = 'flex';
        return;
    }

    renderPosts();
};

hidePostsBtn.onclick = () => {
    postsDiv.style.display = 'none';
    hidePostsBtn.style.display = 'none';
    viewPostsBtn.style.display = 'block';
};

function renderPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(posts => posts.json())
        .then(posts => {
            isPostsExist = true;

            for (const post of posts) {
                const postJson = JSON.stringify(post);

                const postDiv = document.createElement('div');
                postDiv.classList.add('post', 'd-flex');

                const title = document.createElement('div');
                title.classList.add('post_title');
                title.innerText = `${post.id}.${post.userId}. ${post.title}`;

                const postDetailsBtn = document.createElement('button');
                postDetailsBtn.classList.add('post_details-btn');
                postDetailsBtn.innerText = 'Details';

                postDetailsBtn.onclick = () => {
                    location.href = `post-details.html?post=${postJson}`;
                };

                postDiv.append(title, postDetailsBtn);

                postsDiv.append(postDiv);
            }
        });
}
