$(document).ready(function() {
  $.getJSON('json/exercise.json', function(data) {
    $.each(data, function(key, val) {
      if (val['done'] == false && val['actual'] == true) {
        $('#exerciseHomeInsight-Text').html('Hoje é dia de ' + val['focus'] + '. Vamos lá?');
      }
    });
  });
});