// Add date to top of page
$('#currentDay').append(moment().format("dddd, MMM Do"));

// Save 9am task to local storage
$("#9a-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#9a-task").val()
    localStorage.setItem('9aTask', nineTaskEl)
});

// Load saved 9am task to page
var nineTaskGet = $("#9a-task").innerHTML;
nineTaskGet = (localStorage.getItem('9aTask'));
$("#9a-task").val(nineTaskGet)

// Save 10am task to local storage
$("#10a-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#10a-task").val()
    localStorage.setItem('10aTask', nineTaskEl)
});

// Load saved 10am task to page
var nineTaskGet = $("#10a-task").innerHTML;
nineTaskGet = (localStorage.getItem('10aTask'));
$("#10a-task").val(nineTaskGet)

// Save 11am task to local storage
$("#11a-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#11a-task").val()
    localStorage.setItem('11aTask', nineTaskEl)
});

// Load saved 11am task to page
var nineTaskGet = $("#11a-task").innerHTML;
nineTaskGet = (localStorage.getItem('11aTask'));
$("#11a-task").val(nineTaskGet)

// Save 12pm task to local storage
$("#12p-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#12p-task").val()
    localStorage.setItem('12pTask', nineTaskEl)
});

// Load saved 12pm task to page
var nineTaskGet = $("#12p-task").innerHTML;
nineTaskGet = (localStorage.getItem('12pTask'));
$("#12p-task").val(nineTaskGet)

// Save 1pm task to local storage
$("#1p-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#1p-task").val()
    localStorage.setItem('1pTask', nineTaskEl)
});

// Load saved 1pm task to page
var nineTaskGet = $("#1p-task").innerHTML;
nineTaskGet = (localStorage.getItem('1pTask'));
$("#1p-task").val(nineTaskGet)

// Save 2pm task to local storage
$("#2p-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#2p-task").val()
    localStorage.setItem('2pTask', nineTaskEl)
});

// Load saved 2pm task to page
var nineTaskGet = $("#2p-task").innerHTML;
nineTaskGet = (localStorage.getItem('2pTask'));
$("#2p-task").val(nineTaskGet)

// Save 3pm task to local storage
$("#3p-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#3p-task").val()
    localStorage.setItem('3pTask', nineTaskEl)
});

// Load saved 3pm task to page
var nineTaskGet = $("#3p-task").innerHTML;
nineTaskGet = (localStorage.getItem('3pTask'));
$("#3p-task").val(nineTaskGet)

// Save 4pm task to local storage
$("#4p-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#4p-task").val()
    localStorage.setItem('4pTask', nineTaskEl)
});

// Load saved 4pm task to page
var nineTaskGet = $("#4p-task").innerHTML;
nineTaskGet = (localStorage.getItem('4pTask'));
$("#4p-task").val(nineTaskGet)

// Save 5pm task to local storage
$("#5p-save-btn").on('click', function (e) {
    e.preventDefault();
    var nineTaskEl = $("#5p-task").val()
    localStorage.setItem('5pTask', nineTaskEl)
});

// Load saved 5pm task to page
var nineTaskGet = $("#5p-task").innerHTML;
nineTaskGet = (localStorage.getItem('5pTask'));
$("#5p-task").val(nineTaskGet)

// Clear all tasks from page and local storage
$("#delete-btn").on('click', function (e) {
    e.preventDefault();
    var confirmClear = confirm("Are you sure you want to clear your tasks? This action cannot be undone")
    if (confirmClear === true) {
        localStorage.clear();
        $(".task-input").val("")
    }
})
