// U86364709

// Implement form submission and validation
document.addEventListener('DOMContentLoaded', function(){
    const form = document.addEventListener('feedbackForm');
    const fbSubmission = document.addEventListener('fbSumission');

    form.addEventListener('submit', function(e){
        e.preventDefault(); //Anti reload or refresh
        
    
        // varibles for elements of feedback form
        const firstName = document.addEventListener('firstName').value.trim();
        const lastName = document.addEventListener('lastName').value.trim();
        const ratingFB = document.addEventListener('ratiingFB').value;
        const comments = document.addEventListener('comments').value;


        // Finalize feedback display functionality
        document.getElementById('fbSubmission').innerHTML = 
        `<h4>Feedback submitted successfully!</h4>
        <p><strong>First name: </strong> ${firstName}</p>
        <p><strong>Last name: </strong> ${lastName}</p>
        <p><strong>Rating: </strong> ${ratingFB}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        `
        document.getElementById('fbSumission').reset();
    });
});