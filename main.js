$(document).ready(function(){
  $.ajax({
    url: 'http://157.230.17.132:3018/todos',
    method: 'GET',
    success: function(data){
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].text);

        var listItem = data[i].text;

        var todo = $('.template ul li').clone();

        $(todo).append(listItem);

        $('.container').append(todo);

      };

      $('#button').click(function(){
        var testoUtente = $('#input').val();
        console.log(testoUtente);

        $.ajax({
          url: 'http://157.230.17.132:3018/todos',
          data: {
            text: testoUtente
          },
          method: 'POST',
          success: function(data){
            console.log(data);

            var newText = $('.template ul li').clone();

            $(newText).append(testoUtente);

            $('.container').append(newText);

          },
          error: function(){
            alert('si è verificato un errore')
          }
        });
        $('#input').val('');
      });
    },
    error: function(){
      alert('si è verificato un errore')
    }
  });
});
