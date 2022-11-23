/*import $ from 'Jquery';

$(function() {

	sendForm(id);

	function sendForm(id) {

    $(id).submit(function () {
    var form = $(this);
    var error = false;
    if (!error) {
      var data = form.serialize();
      $.ajax({
        type: 'POST',
        url: 'send.php',
        dataType: 'html',
        data: data,
        beforeSend: function (data) {
          form.find('input[type="submit"]').attr('disabled', 'disabled');
        },
        success: function (data) {
          if (data['error']) {
            alert(data['error']);
          } else {
            form.find('input, textarea').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]').val('');
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
        },
        complete: function (data) {
          form.find('input[type="submit"]').prop('disabled', false);
        }
      });
    }
    return false;
  });

 }
});*/