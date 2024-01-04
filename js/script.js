

// capturing all the anchor href tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // applying scroll behavior for every tags under href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const handleFormSubmission = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if(!(name&&email&&subject&&message)){
        console.log('Fill all the inputs');
    }
    else{
        console.log('Ready to send Email');
    }
}

const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    handleFormSubmission();

    // clear the form
    document.getElementById('form').reset();
})

