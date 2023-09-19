// Handler for posting new Comments.
const newCommentHandler = async (event) => { 
    event.preventDefault();
    //Note: Queryselector generic names subject to change based on actual html design.
    const commentText = event.target.querySelector('#comment').value.trim();
    const blog_post_id = event.target.getAttribute("data-blog");
    if(comment && blog_post_id) {
        const response = await fetch('/api/blogs/comment', {
            method: 'POST',
            body: JSON.stringify({commentText, blog_post_id}),
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

document.querySelectorAll('.new-comment-form').forEach(commentButton => {
    commentButton.addEventListener('submit', newCommentHandler);
});