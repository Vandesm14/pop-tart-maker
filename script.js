$(document).ready(function () {
	$('#input-crust').on('change', (e) => $('#crust, #crust_2').css('color', $(e.target).val()));
	$('#input-icing').on('change', (e) => $('#icing_2').css('color', $(e.target).val()));
	$('#input-drizzle-color').on('change', (e) => $('#drizzle').css('color', $(e.target).val()));
	$('#input-sprinkles-color').on('change', (e) => $('#sprinkles > path').css('color', $(e.target).val()));
	$('#input-filling').on('change', (e) => $('#main').css('color', $(e.target).val()));
	$('#input-extra-color').on('change', (e) => $('#secondary').css('color', $(e.target).val()));
});