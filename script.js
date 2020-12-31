jscolor.presets.default = {
	palette: '#FFDCA3 #FFFFFF #845100 #523912',
}

$(document).ready(function () {
	$('#input-crust').on('change', (e) => $('#crust, #crust_2').css('color', $(e.target).val()));
	$('#input-icing').on('change', (e) => $('#icing_2').css('color', $(e.target).val()));
	$('#input-drizzle-color').on('change', (e) => $('#drizzle').css('color', $(e.target).val()));
	$('#input-sprinkles-color').on('change', (e) => $('#sprinkles > path').css('color', $(e.target).val()));
	$('#input-filling').on('change', (e) => $('#main').css('color', $(e.target).val()));
	$('#input-extra-color').on('change', (e) => $('#secondary').css('color', $(e.target).val()));
	
	$('#input-extra').on('change', (e) => $(e.target).prop('checked') ? $('#secondary').show() : $('#secondary').hide());
	$('#input-drizzle').on('change', (e) => $(e.target).prop('checked') ? $('#drizzle').show() : $('#drizzle').hide());
	$('#input-sprinkles').on('change', (e) => $(e.target).prop('checked') ? $('#sprinkles > path').show() : $('#sprinkles > path').hide());

	$('#input-save').on('click', () => saveAs(new Blob([new XMLSerializer().serializeToString($('#tart')[0])], {type: 'image/svg+xml'}), 'pop-tart.svg'));
});