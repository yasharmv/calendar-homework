const calendar_element = document.querySelector('.calendar');
const month_element = document.querySelector('.calendar .currentDate .date');
const previous_month = document.querySelector('.calendar .currentDate .fa-angle-left');
const next_month = document.querySelector('.calendar .currentDate .fa-angle-right');
const days_element = document.querySelector('.calendar .days');
const day_element = document.querySelector('.calendar .days .day')
const selected_date = document.querySelector('.selectedDate')

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

month_element.textContent = months[month] + '' + year;

// month and year 

next_month.addEventListener("click", goToNextMonth);
previous_month.addEventListener("click", goToPreviousMonth);


function goToNextMonth (e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    month_element.textContent = months[month] + '   ' + year;
    populateDates();
}
function goToPreviousMonth (e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    month_element.textContent = months[month] + '   ' + year;
    populateDates();
}


// selected date

selected_date.textContent = formatDate(date);

function formatDate (d) {
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
   
    return day + ' / ' + month + ' / ' + year;
}

function populateDates (e){
    days_element.innerHTML = '';
    let amountDays = 31;

    if (month == 1){
        amountDays = 28;
    }
    else if (month == 7){
        amountDays = 30;
    }
    else if (month == 8){
        amountDays = 30;
    }
    for (let i=0; i<amountDays; i++){
        const day_Element = document.createElement('div');
        day_Element.classList.add('day');
        day_Element.textContent = i + 1;

        if (selectedDate == (i + 1) && selectedMonth == month && selectedYear == year){
            day_Element.classList.add('.selected');
        }

        day_Element.addEventListener('click', function(){
            selectedDate = new Date (year + '-' + (month+1) + '-' + (i+1));
            selectedDay = i + 1;
            selectedMonth = month;
            selectedYear = year;

            selected_date.textContent = formatDate(selectedDate);
            selected_date.dataset.value = selectedDate;

            populateDates();
        })
        days_element.appendChild(day_Element);
    }
}
 populateDates();
