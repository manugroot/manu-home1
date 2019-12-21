$(document).ready(function(){
	$.getJSON("/data",function(d){
	
	$("#name").text(d.name);
	$("#clg").text(d.clg);
	$("#regno").text(d.regno);
	})
})