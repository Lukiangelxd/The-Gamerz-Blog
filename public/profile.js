//delete rquest to remove post
const deletePost = async (event) => {
    event.preventDefault();
    //gets the id number from the data attribute for the request
    const params = event.target.getAttribute('data-blog_id')
    const url ='/api/blogs/'+params
    const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }

}
//delete request for the comments
const deleteComment = async (event) => {
    event.preventDefault();
    //gets id number from data attribute
    const params = event.target.getAttribute('data-comment_id')
    const url ='/api/blogs/comment/'+params
    const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }

}

document.querySelectorAll('.btn-delete-post').forEach(deleteBtn => {
    deleteBtn.addEventListener('click', deletePost);
});
document.querySelectorAll('.btn-delete-comment').forEach(deleteBtn => {
    deleteBtn.addEventListener('click', deleteComment);
});
