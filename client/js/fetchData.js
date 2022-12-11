$(document).ready(function() {
  $.getJSON('json/exercise.json', function(data) {
    $.each(data, function(key, val) {
        if (val.done == false && val.actual == true) {
            $('#exerciseHomeInsight-Text').html('Hoje é dia de ' + val['focus'] + '. Vamos lá?');
        }
    });
  });

  $.getJSON('json/ptsAvailable.json', function(data) {
    $("#messagesAssignedPT-name").html(data.assigned.name)
    if (data.assigned.online == true) {
        $("#messagesAssignedPT-online").html('<span class="text-success">&#8226;</span> Online agora')
    }
    else {
        $("#messagesAssignedPT-online").html('<span class="text-danger">&#8226;</span> Offline')
    }
    $("#messagesAssignedPT-photo").attr('src', data.assigned.photoPath)

    $.each(data.available, function(key, val) {
        var onlineStateHtml = (val.online==true)?'<span class="text-success">&#8226;</span> Online agora':'<span class="text-danger">&#8226;</span> Offline';
        $("#messagesAvailablePTs").html($("#messagesAvailablePTs").html() + '<div class="card off-white-background mb-3">'+
        '<div class="card-body">'+
          '<div class="row d-flex align-items-center">'+
            '<div class="col-auto">'+
              '<img src=' + val.photoPath + ' style="height:3em" class="border border-primary-blue rounded-circle">'+
            '</div>'+
            '<div class="col ps-0">'+
              '<p class="card-title bold mb-0">'+ val.name + '</p>'+
              '<p class="card-text">' + onlineStateHtml + '</p>'+
            '</div>'+
            '<div class="col-auto">'+
              '<div class="float-end">'+
                '<i class="fa-regular fa-chevron-right"></i>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>')
    });
  });
});