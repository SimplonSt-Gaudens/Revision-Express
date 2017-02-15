$(document).ready(function(){
	console.log('here !');
	$.ajax({
		url:'/animaux',
		success:function(data){
			var animaux = data.animaux;
			$(animaux).each(function(){
				console.log(this);
				$("#app").append('<li>'+this.espece+'</li>')
			})
		},
		error: function(xhr, status){
			console.log(status);
		}
	})
})