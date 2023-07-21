function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value.trim()
    if (Client.checkForName(formText)) {
        // refresh the result section when input is clear
        document.getElementById('result_range').innerHTML = "";
        document.getElementById('result_influence').innerHTML = "";
        alert("Error - the text field cannot be empty")
    } else {
        console.log("::: Form Submitted :::")
        handleFetch();
    }
}
    
function handleFetch(){
    fetch('http://localhost:8082/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('result_range').innerHTML = res.score_tag;
            document.getElementById('result_influence').innerHTML = res.influence;
            console.log("::: Received score_tag :::", res.score_tag);
            console.log("::: Received influence :::", res.influence);
        })
}


export { handleSubmit, handleFetch }
