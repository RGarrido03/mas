function hideOtherTabs(active_id) {
    $('.tab').each(function() {
        if (!($(this).attr('class').includes('d-none')) && $(this).attr('id') != active_id) {
            $(this).addClass('d-none');
        }
        else {
            if ($(this).attr('id') == active_id) {
                $(this).removeClass('d-none');
            }
        }
    }
)};

function changeFontAwesomeStyle(active_id) {
    $('.tabIcon').each(function() {
        if ($(this).attr('class').includes('fa-solid') && $(this).attr('id') != active_id + 'Button') {
            $(this).removeClass('fa-solid');
            $(this).addClass('fa-regular');
            $(this).removeClass('dark-gray');
        }
        else {
            if ($(this).attr('id') == active_id + 'Button') {
                $(this).addClass('fa-solid');
                $(this).removeClass('fa-regular');
                $(this).addClass('dark-gray');
            }
        }
    }
)}

$('#homeButton').click(function() {
    hideOtherTabs('home');
    changeFontAwesomeStyle('home');
});

$('#exerciseButton').click(function() {
    hideOtherTabs('exercise');
    changeFontAwesomeStyle('exercise');
});