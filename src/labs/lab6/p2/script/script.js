function jsonFlickrFeed(text){
	$.ajax({
		url: "http://www.flickr.com/services/feeds/photos_public.gne?tags=test&format=json#",
		dataType: "jsonp",

		success: function (data) {
			$.each(data.items, function (i,item) {
				// var title = item.title;
				// var link = item.link;
				// (item.media.m).replace("_m.jpg", "_s.jpg")
				// var thumb = item.media.m;
				// var published = item.published;
				$('#test').append("<li>test</li>");
			});
		},
		error: function (e) {
			console.log("Error: " + e.responseText);
		}
	});
}

$(function() {
	var email = "";
	var $email = $('.email_insert');
	var $dialog = $('.share_dialog');
	var $shareInterface = $('#share_interface');

	$email.hide();
	$dialog.hide();
	$shareInterface.hide();
	
	$('#search').click(function () {
		var text = $('#searchTerm').val();
		jsonFlickrFeed(text);
		$('#searchTerm').val("");
	})
});