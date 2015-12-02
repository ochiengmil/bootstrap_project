$(document).ready(function()
{
	


	//here we create an accordion ..
	$("#accordion").accordion();

	$( "#tabs" ).tabs();
	


	// var listTemplate = '';
	// listTemplate += '<ul>';
	// listTemplate += '<li>';
	// listTemplate += '<h1>'<a href="#repo_link">Repository title</a></h1>
	// listTemplate += '<p>' Description</p>
	// listTemplate += '<span>'Last updated: <time>12.00pm</time></span>
	// listTemplate += '</li>'
<<<<<<< HEAD
	// listTemplate += '</ul>'


	


	url = 'https://api.github.com/users/ochiengmil/repos';
	$.get(url, function(data){

			var listTemplate='';
			listTemplate += '<ul>';

		data.forEach(function(repository){
			listTemplate += '<li>';
			listTemplate += '<h1><a href="'+repository.html_url+'">'+repository.name+'</a></h1>';
			listTemplate += '<p>Description</p>';
			listTemplate +='<span>Last updated: <time>12:00pm</time></span>';
			listTemplate += '</li>';
		});

			listTemplate += '<ul>';
			$('#open-source-container').html(listTemplate);
	  });





	//$('#open-source-container').html(listTemplate);
=======
	// listTemplate +=	'</ul>'


	
 					




$('#open-source-container').html(listTemplate);
>>>>>>> d43e72894616fde0cc10720c44511a191e03c591


});