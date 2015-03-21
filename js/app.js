$(document).ready(function() {
//actions that happen immediately after document is loaded

	console.log("ready");
	$(".trigger").click(function() {
		console.log("Let the fizBuzz Games begin");
		for (contador=1;contador<=100;contador++) 
			{
				console.log(contador);
				if (contador%3===0 && contador%7===0)
					{
						$(".examplelist").append("<li>fizzBuzz</li>");
					}
				else if (contador%3===0)
					{
						$(".examplelist").append("<li>fizz</li>");
					}
				else if (contador%7===0)
					{
						$(".examplelist").append("<li>Buzz</li>");
					}
				else
					{
						$(".examplelist").append("<li>"+contador+"</li>");
					}
				
			}
	})
})