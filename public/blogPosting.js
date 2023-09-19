// Handler for posting new Blog Posts.
const newBlogHandler = async (event) => { 
    event.preventDefault();
    //Note: All queryselector's are generic names subject to change based on actual html design.
    //Collects values from the blog post form.
    const title = document.querySelector('#blog-title').value.trim();
    const subHeading = document.querySelector('#blog-subheading').value.trim()
    const post = document.querySelector('#blog-post').value.trim();
    const tags = document.querySelector('#blog-tags').value.trim();
    //This is for setting up the platform_id value.
    const platform_id = event.target.getAttribute('data-platform')
    if(title && post && tags && platform_id) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({title, subHeading, post, tags, platform_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok) {
            document.location.reload();
        }
        else {
            alert(response.statusText);
        }      
    }
}

document
  .querySelector('.new-blog-post-form')
  .addEventListener('submit', newBlogHandler);
