// Handler for posting new Blog Posts.
const newBlogHandler = async (event) => { 
    event.preventDefault();
    //Note: All queryselector's are generic names subject to change based on actual html design.
    const title = document.querySelector('#blog-title').value.trim();
    const post = document.querySelector('#blog-post').value.trim();
    const tags = document.querySelector('#blog-tags').value.trim();
    const platform = document.querySelector('#blog-platform').value.trim();
    var platformID;
    switch (platform) {
        case 'Nintendo': 
            platformID = 1;
            break;
        case 'PCGaming':
            platformID = 2;
            break;
        case 'PlayStat':
            platformID = 3;
            break;
        case 'Xbox':
            platformID = 4;
            break;
    }
    if(title && post && tags && platformID) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({title, post, tags, platformID}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok) {
            document.location.replace('/api/user');
        }
        else {
            alert(response.statusText);
        }      
    }
}

document
  .querySelector('.new-blog-post-form')
  .addEventListener('submit', newBlogHandler);
