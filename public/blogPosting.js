// Handler for posting new Blog Posts.
const newBlogHandler = async (event) => { 
    event.preventDefault();
    //Note: All queryselector's are generic names subject to change based on actual html design.
    //Collects values from the blog post form.
    const title = document.querySelector('#blog-title').value.trim();
    const post = document.querySelector('#blog-post').value.trim();
    const tags = document.querySelector('#blog-tags').value.trim();
    const platform = document.querySelector('#blog-platform').value.trim();
    //This is for setting up the platform_id value.
    var platform_id;
    switch (platform) {
        case 'Nintendo': 
            platform_id = 1;
            break;
        case 'PCGaming':
            platform_id = 2;
            break;
        case 'PlayStat':
            platform_id = 3;
            break;
        case 'Xbox':
            platform_id = 4;
            break;
    }
    if(title && post && tags && platform_id) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({title, post, tags, platform_id}),
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
