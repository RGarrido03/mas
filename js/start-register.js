$('#login-signUpButton').click(function() {
    $('#title').addClass('d-none');
    $('#login').addClass('d-none');
    $('#signUp').removeClass('d-none');
});

$('#signUp-goBackButton').click(function() {
    $('#signUp').addClass('d-none');
    $('#title').removeClass('d-none');
    $('#login').removeClass('d-none');
});