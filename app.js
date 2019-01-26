$(document).ready(refersh);
$('#next').click(refersh);

function refersh() {
	$.ajax({
		method: 'GET',
		url: 'https://api.thecatapi.com/v1/images/search',
		success: function(data) {
			$('#image').attr('src', data[0].url);
		},
		error: function(xhr) {
			var error = $.parseJSON(xhr.responseText);
			$('#error').html(error.status + ' ' + error.message);
		}
	})
})
