$(document).ready(function()
{
	


	//here we create an accordion ..
	$("#accordion").accordion();

	$( "#tabs" ).tabs();
	


	


	url = 'https://api.github.com/users/ochiengmil/repos';
	$.get(url, function(data){

			var listTemplate='';
			listTemplate += '<ul>';

		data.forEach(function(repository){
			listTemplate += '<li>';
			listTemplate += '<h1><a href="'+repository.html_url+'">'+repository.name+'</a></h1>';
			listTemplate += '<p>'+repository.description+'</p>';
			listTemplate +='<span>'+repository.updated_at+'</time></span>';
			listTemplate += '</li>';
		});

			listTemplate += '<ul>';
			$('#open-source-container').html(listTemplate);
	  });

});



	//$('#open-source-container').html(listTemplate)
	// listTemplate +=	'</ul>'


	
 					




//$('#open-source-container').html(listTemplate);


//});