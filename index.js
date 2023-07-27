// Function to add table
function registerform() {
    // checks if the feilds are blank
    if ($("#name").val() != '' && $("#email").val() != '' && $("#website").val() != '' && $("#imageLink").val() != '') {
        addinfo();
        formClear();
    }
    else {
        document.getElementById("errorMsg").innerHTML="Every feild is required in the form"
    }
}

let count=0;
function addinfo() { 

    var genderOutput = genderChoice();
    var skillOutput = skillChoices();
    if ($("#tableId tbody").length == 0) {
        $("#tableId").append("<tbody></tbody>");
    }
        $("#tableId tbody").append("<tr>" + "<td id='newData' class='animated fadeIn' style='height:100px'>" + "<b>" + $("#name").val() + "</b>" + "<br>" +
            genderOutput + "<br>" + $("#email").val() + "<br>" + '<a style="color:blue">' + $("#website").val() + "</a>" + "<br>" + skillOutput
            + "</td>" + "<td id='newData' >" + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'
            + $("#imageLink").val() + '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' + "</td>" + "</tr>");
    count +=1;
}
// This function gives checked radio keys for gender selection
function genderChoice() {
    const choices = document.querySelectorAll('input[name="genderchoice"]');
    let selectedValue;
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue = choice.value;
            break;
        }
    }
    return selectedValue;
}
// This function gives the Skill choices made by user and user can select multiple choices also
function skillChoices() {
    const choices = document.querySelectorAll('input[name="skillchoice"]');
    let selectedValue = [];
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue.push(choice.value);
        }
    }
    return selectedValue.toString();
}
// this function clears the form feild
function formClear() {
    $("#name").val("");
    $("#email").val("");
    $("#website").val("");
    $("#imageLink").val("");
    document.getElementById("male").checked = false;
    document.getElementById("java").checked = false;
    document.getElementById("html").checked = false;
    document.getElementById("css").checked = false;
    document.getElementById("errorMsg").innerHTML = "<br>";

}
