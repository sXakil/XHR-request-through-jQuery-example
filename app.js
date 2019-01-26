$(document).ready(function() {
	$('#next').click(refersh);
})

const url = 'https://api.thecatapi.com/v1/images/search';
let downloadingImage = new Image();
function refersh() {
	$("#image").fadeTo("slow", 0.2);
	$("#next").text("Loading...");
	$.ajax({
		method: 'GET',
		url,
		success(data) {
			downloadingImage.src = data[0].url;
			downloadingImage.onload = function(){
    			$('#image').attr('src', this.src).fadeTo("slow", 1);
    			$('#next').text('Next');
			};
		},
		error(xhr) {
			var error = $.parseJSON(xhr.responseText);
			$('#error').html(error.status + ' ' + error.message);
		}
	});
}
