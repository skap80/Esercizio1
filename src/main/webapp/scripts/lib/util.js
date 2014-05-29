/**
 * 
 */
$(document).ready(function() {
	on_list();
});

function on_scan(){
	var codice = $('#prod').val();
	$.ajax({
		url: '/scan',
		method:'post',
		data:{
			code: codice
		},
		success: on_scan_success,
		error: on_scan_failure,
	})

}


function on_scan_success(data){
	$('#display').text("Costo unitario: " + data.price);
}

function on_scan_failure(data){
	$('#display').text('ERROR \n' + JSON.stringify(data, null, 2));
}

$('body').on('click', '#btn_total', function(){
	on_total();
});

function on_total(){
	$.ajax({
		url: '/total',
		method:'get',
		success: on_total_success,
		error: on_failure,
	})
}

function on_reset(){
	$.ajax({
		url: '/reset',
		method:'post',
		success: on_total_success,
		error: on_failure,
	})
}

function on_list(){
	$.ajax({
		url: '/list',
		method:'get',
		success: on_list_success,
		error: on_failure,
	})
}


function on_total_success(data){
	$('#display').text("totale: " + data.total);
}

function on_list_success(json){
	var item = new Array (json.data.length);
	$.each(json.data, function(index, value) {
		item[index] =
			'<option value="'+value.prod+'">'+value.prod+'</option>';
	})
	$('#prod').html(item.join(''));
	
}

function on_failure(data){
	$('#display').text('ERROR \n' + JSON.stringify(data, null, 2));
}

$('body').on('click', '#btn_reset', function(){
	on_reset();
});