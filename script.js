    // moment.js current date displayed at top of page
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY"));

// setting time for each hour 
const time = parseInt(moment().format("HH00"), 10);
for (var i = 0; i < $("textarea").length; i++) {
    var hour = $($(".hour")[i]).next();
    console.log(hour);
    var actualTime = parseInt($($(".hour")[i]).data().time, 10);
    
    // check actual time
    if (actualTime === time) {
        hour.addClass("present");
    } else if (actualTime < time) {
        hour.addClass("past");
    } else {
        hour.addClass("future");
    }
}
 
// grab from local storage
$(document).ready(render());
 
// save to local storage
$(".saveBtn").on("click", function () {
    const userEvent = $(this).prev().val();
    const btn = $(this).val()
    localStorage.setItem(btn, userEvent);
    render();
})
 
// grab from local storage and place in time block
function render() {
    for (let i = 0; i < 9; i++) {
        const oneEvent = localStorage.getItem(i);
        $("#" + i).text(oneEvent);
        console.log(oneEvent);
    }
}
