// U86364709

// Implement form submission and validation
document.getElementById("feedbackForm").addEventListener("submit", (e)=>{
    e.preventDefault(); // Anti reload or refresh of screen

    // varibles for elements of feedback form
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const ratingFB = document.getElementById("ratingFB").value;
    const comments = document.getElementById("comments").value;

    // if statement alert output
   if(!firstName || !lastName || !ratingFB || !comments){
    alert('Opps! You may not have finished all required fields. Please fill out all fields.');
    return;
   }
   

    // Finalize feedback display functionality
    document.getElementById("fbSubmission").innerHTML = `
    <h3>Feedback submitted successfully!</h3><br>
    <p><strong>First name: </strong> ${firstName}</p>
    <p><strong>Last name: </strong> ${lastName}</p>
    <p><strong>Rating: </strong> ${ratingFB}</p>
    <p><strong>Comments:</strong> ${comments}</p>
    `
    document.getElementById("feedbackForm").reset();
});