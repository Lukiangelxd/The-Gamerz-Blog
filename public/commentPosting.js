// Handler for posting new Comments.
const newCommentHandler = async (event) => { 
    event.preventDefault();
    //Note: Queryselector are generic names subject to change based on actual html design.
    const comment = document.querySelector('#comment').value.trim();
    if(comment) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({comment}),
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
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);