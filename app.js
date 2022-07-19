function copyTo(){
    navigator.clipboard.writeText("noahdj37@gmail.com").then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Email (noahdj37@gmail.com) copied to clipboard!");
    });
}