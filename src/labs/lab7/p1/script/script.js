var players = [
	{
		code: 7,
		model: "Pioneer CDJ 2000",
		image: "",
		price: 1600,
		edit: false
	},
	{
		code: 777,
		model: "Pioneer CDJ 1000",
		image: "",
		price: 1000,
		edit: false
	},
	{
		code: 7777,
		model: "Pioneer CDJ 800",
		image: "",
		price: 990,
		edit: false
	}

];

var mixers = [
	{
		code: 230,
		model: "Pioneer DJM 2000",
		image: "",
		price: 2300,
		edit: false
	},
	{
		code: 420,
		model: "Pioneer DJM 1000",
		image: "",
		price: 1800,
		edit: false
	},
	{
		code: 970,
		model: "Pioneer DJM 800",
		image: "",
		price: 1600,
		edit: false
	}

];

$(function() {
	var $mixers = $('#mixers');
	var $players = $('#players');
	var $mixButton = $('#mixers_button');
	var $playersButton = $('#players_button');
	var $basketButton = $('#basket_button');
	$mixers.hide();
	$.each(players, function (i, val) {
		var model = '<span class =\'model\'>' + val.model + '</span>';
		var price = '<span>' + val.price + '</span>';
		var ul = '<li>' + model + price + '</li>';
		$('#pleeri').append(ul);
	})
	$.each(mixers, function (i, val) {
		var model = '<span class =\'model\'>' + val.model + '</span>';
		var price = '<span>' + val.price + '</span>';
		var ul = '<li>' + model + price + '</li>';
		$('#mikseri').append(ul);
	});
	$mixButton.click(function () {
		$players.hide();
		$mixers.show();
		$mixButton.addClass('active');
		$playersButton.removeClass('active');
		$basketButton.removeClass('active');
	});
	$playersButton.click(function () {
		$players.show();
		$mixers.hide();
		$playersButton.addClass('active');
		$mixButton.removeClass('active');
		$basketButton.removeClass('active');
	});
	$basketButton.click(function () {
		$players.hide();
		$mixers.hide();
		$basketButton.addClass('active');
		$mixButton.removeClass('active');
		$playersButton.removeClass('active');
	});

	$('.options').sortable({
		connectWith: "#basketUL"
	}).disableSelection();
	$('#basketUL').sortable({
		items: "li:not(.unsortable)"
	}).disableSelection();
});