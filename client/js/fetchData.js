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
    var onlineStateHtml = (data.assigned.online==true) ? '<span class="text-success">&#8226;</span> Online agora' : '<span class="text-danger">&#8226;</span> Offline';
    $("#messagesAssignedPT-online").html(onlineStateHtml)
    $("#messagesAssignedPT-photo").attr('src', data.assigned.photoPath)

    $.each(data.available, function(key, val) {
        var onlineStateHtml = (val.online==true) ? '<span class="text-success">&#8226;</span> Online agora' : '<span class="text-danger">&#8226;</span> Offline';
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

    $.getJSON('json/exercise.json', function(data) {
        var doneCount = 0;
        var lengthCount = 0;
        $.each(data, function(key, val) {
            lengthCount++;
            if (val.done == true) {
                doneCount++;
                $("#exercise-Plan").html($("#exercise-Plan").html() +
                '<p class="mt-3 mb-0"><span class="fw-semibold text-success">' + key + 'º dia</span>&nbsp; ' + val.focus + '</p>')
            }
            else if (val.actual == true) {
                var locationIcon = (val.isOnline == true) ? 'play' : 'building';
                $("#exercise-Plan").html($("#exercise-Plan").html() +
                '<div class="row">'+
                  '<div class="col">'+
                    '<p class="dark-gray mt-3 mb-0">'+
                      '<span class="fw-semibold dark-gray">' + key + 'º dia</span>&nbsp;' + val.focus + '<br>'+
                      val.duration + ' minutos | ' + val.calories + ' kcal | ' + val.difficulty +
                    '</p>'+
                  '</div>'+
                  '<div class="col-auto">'+
                    '<div class="float-end">'+
                      '<i class="fa-solid fa-' + locationIcon + ' dark-gray mt-3 mb-0"></i>'+
                    '</div>'+
                  '</div>'+
                '</div>')
            }
            else {
                $("#exercise-Plan").html($("#exercise-Plan").html() +
                '<p class="mt-3 mb-0"><span class="fw-semibold">' + key + 'º dia</span>&nbsp; ' + val.focus + '</p>')
            }
        });
        
        $("#exercise-workoutInsight-SVGtext").text(doneCount + '/' + lengthCount);
        
        var ratio = doneCount / lengthCount;
        if (ratio == 1) {
            $("#exercise-workoutInsight-content").text("Tudo feito por esta semana.")
            $("#exercise-workoutInsight-title").text("Parabéns!")
        }
        else if (ratio > 0.5) {
            $("#exercise-workoutInsight-content").text("Metade já está!")
            $("#exercise-workoutInsight-title").text("Continua o bom trabalho.")
        }
        else {
            $("#exercise-workoutInsight-content").text("O esforço é o primeiro passo.")
            $("#exercise-workoutInsight-title").text("Vamos lá!")
        }

        $("#exercise-workoutInsight-SVGpath").attr('stroke-dasharray', ratio * 222.2222 + ", 222.2222")
    })
});