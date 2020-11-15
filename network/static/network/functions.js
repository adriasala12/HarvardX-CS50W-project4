
// Shows and hides the form to add a new post
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

// Toggles the state of the like button and the likes counter
function like(id) {

    fetch(`like/${id}`)
    .then(response => response.json())
    .then(result => {
        console.log(result.result.html);
        document.getElementById(`heart-${id}`).innerHTML = result.result.html
        document.getElementById(`likes-${id}`).innerHTML = result.result.likes
    });
}

// Toggles the Follow/Unfollow button and updates the following & followers counter
function follow(id) {

    fetch(`follow/${id}`)
    .then(response => response.json())
    .then(result => {
        document.getElementById('follow_button').innerHTML = result.result.button;
        document.getElementById('following').innerHTML = `Following: &nbsp&nbsp ${result.result.following}`;
        document.getElementById('followers').innerHTML = `Followers: &nbsp&nbsp ${result.result.followers}`;
    });

}
