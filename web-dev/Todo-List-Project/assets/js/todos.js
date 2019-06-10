//Check off specific todos by clicking
$("ul").on("click", "li", function(){ //on() is valuable because generated content can be accounted for.
	$(this).toggleClass("completed");
});

$("ul").on("click", ".delete", function(e){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	e.stopPropagation(); // prevents bubbling to other html elements.
});

$("input[type = 'text']").keypress(function(e){
	if(e.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").fadeIn(500, function(){
			$(this).append("<li>" + todoText + "<span class=\"delete\"><i class=\"fa fa-trash-alt\"></i></span></li>");
	});
	}
});

$(".fa-pen-square").click(function() {
	$("input[type='text']").fadeToggle(500)
});