var chosen = 'none';

function goToLogin(chosenActor) {
    console.log(chosenActor);
    chosen = chosenActor;
    $('#actor').addClass('d-none');
    $('#login').removeClass('d-none');
}

function backToActor() {
    console.log('back to actor')
    chosen = 'none';
    $('#login').addClass('d-none');
    $('#actor').removeClass('d-none');
}

function login(chosen) {
    console.log('login');
    if (chosen === 'none') {
        alert('Please choose an actor');
        return;
    }
    window.location.href = chosen;
}

$('#actor-clientButton').click(function() {
    goToLogin('client');
});

$('#actor-ptButton').click(function() {
    goToLogin('pt');
});

$('#login-goBackButton').click(function() {
    backToActor();
});

$('#login-loginButton').click(function() {
    login(chosen);
});