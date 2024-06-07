// U86364709

// Implement form submission and validation
document.addEventListener('DOMContentLoaded', function(){
    const form = document.addEventListener('feedbackForm');
    const fbSubmission = document.addEventListener('fbSumission');

    form.addEventListener('submit', function(e){
        e.preventDefault(); //Anti reload or refresh
        
    
        // varibles for elements of feedback form
        const firstName = document.addEventListener('firstName').value;
        const lastName = document.addEventListener('lastName').value;
        const ratingFB = document.addEventListener('ratiingFB').value;
        const comments = document.addEventListener('comments').value;
    })
})