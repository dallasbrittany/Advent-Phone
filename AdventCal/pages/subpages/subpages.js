function stringInfo(dayToDisplay)
{
	retString = "Need to display day " + dayToDisplay;
    return retString;
}

function getMonth() {
    var curdate = new Date();
    var month = curdate.getMonth() + 1;
    return month;
}

function getDay() {
    var curdate = new Date();
    var day = curdate.getDate() + 1;
    return day;
}

function checkDate(dateNeeded) {
    var currentMonth = getMonth();
    var currentDay = getDay();
    var responseStr = " ";
    if (currentMonth == 12) {
        if (currentDay >= 1) {
            responseStr = stringInfo(dateNeeded);
        }
        else {
            responseStr = "It's December, but you'll have to wait a little longer for this date.";
        }
    }
    else {
        responseStr = "Hey, it's not even December yet!";
    }

    document.getElementById("response").innerHTML = responseStr;
}