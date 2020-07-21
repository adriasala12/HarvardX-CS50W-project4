
function newPost() {

    var newPostForm = document.getElementById('newpost');
    var newPostButton = document.getElementById('newButton')

    if (newPostForm.style.display === "none") {
        newPostForm.style.display = "block";
        newPostButton.style.display = "none";
    } else {
        newPostForm.style.display = "none";
        newPostButton.style.display = "block";
    }
}

function like(id) {

    fetch(`like/${id}`)
    .then(response => response.json())
    .then(result => {
        console.log(result.result.html);
        document.getElementById(`heart-${id}`).innerHTML = result.result.html
        document.getElementById(`likes-${id}`).innerHTML = result.result.likes
    });

}
