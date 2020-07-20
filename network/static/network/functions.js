
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
