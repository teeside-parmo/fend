function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value.trim()
    if (Client.checkForName(formText)) {
        // reset the result field when imput is emtpy
        document.getElementById('result_polarity').innerHTML = "";
        document.getElementById('result_subjectivity').innerHTML = "";
        alert("The text field cannot be empty!")
    } else {    
    console.log("::: Form Submitted :::")
    handleFetch();
    }
}

function handleFetch(){
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('result_polarity').innerHTML = res.score_tag;
            document.getElementById('result_subjectivity').innerHTML = res.subjectivity;
            console.log("::: Received score_tag :::", res.score_tag);
            console.log("::: Received subjectivity :::", res.subjectivity);
        })
}

export { handleSubmit, handleFetch }