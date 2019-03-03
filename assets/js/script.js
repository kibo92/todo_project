//Check off Specific Todos by Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
//.click() will only add listeners to existing elements so every new element in todo list wont work to be crossed or deleted
//.on() adds listeners for all potential future elements and current ones but we must select element that already exists on page (<ul>)
// and then just listen for <li> or <span>
$("ul").on("click", "span", function(event) {
    //.parent so we remove <li> tags along with span that is triggered
    //.fadeOut with remove in function so it fades out first and then its removed from the page
    //this is element x in span we clicked on in list
    $(this).parent().fadeOut(500, function() {
        //this refers to the <li>
        $(this).remove();
    });
    //stops bubble event so it ends at <li><span>
    event.stopPropagation();

});

//Creation of new Todos
$("input[type='text']").keypress(function(event) {
    //check if the character code is 13 which is "enter" key
    if(event.which === 13) {
        //grabbing new todo text from input and saving it to var todoText
        //this refers to the input that keypress accrued
        var todoText = $(this).val();
        //clear input after we press enter
        $(this).val("");
        //create a new li and add to ul 
        //.appent method takes a string of html element and append (add) those elements to whatever we selected
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});
//Toggle on and off on plus icon the input text box
$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
})
