function ajax() {
    console.log('removed');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState==4 && this.status==200) {
            var response = JSON.parse(this.responseText);
            for(var i = 0; i<5; i++)
            {
                var text = response[i].title;
                if(text != '') {
                    $(".todo-list").append('<li><div class="left-cont"><input type="checkbox" id="check-'+i+'"><label for="check-'+i+'"></label><span>'+text+'</span></div><div class="remove"><i class="material-icons">delete</i></div></li>');
                }
            }
        }
    }
    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhttp.send();
}
$(document).on('click','.load-items', function() {
    $(this).fadeOut(500);
    ajax();
});
$(document).on('change','input[type="checkbox"]',function(){
    if ($(this).is(':checked')) {
        $(this).closest("li").children(".remove").addClass("active");
    }
    else {
        $(this).closest("li").children(".remove").removeClass("active");
    }
})
$(document).on('click','.remove',function(){
    if($(this).parent().siblings().length == 0) {
        $(this).parent().remove();
        alert("Congrats! You cleared all tasks!");
        $('.load-items').fadeIn(500);
    }
    else {
        $(this).parent().remove();
    }
})
