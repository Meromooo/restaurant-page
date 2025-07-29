export const greeting = "Hello, welcome to our Bakery!";

import bakeryHeaderImage from './imgs/bakery-header.jpg';
import bakeryLocationPic from './imgs/smallPic.jpg';

export function createHomepage() {
    const contentDiv = document.getElementById('content');

    const image1 = document.createElement('img');
    image1.src = bakeryHeaderImage; 
    image1.alt = 'Bakery Image 1';
    contentDiv.appendChild(image1);


    const bakeryLocation = document.createElement('figure');

    const image2 = document.createElement('img');
    image2.src = bakeryLocationPic;
    image2.alt = 'Bakery Location';
    contentDiv.appendChild(image2);

    const picCaption = document.createElement('figcaption');
    picCaption.textContent = 'Neljäs linja 19-21, 00530 Helsinki, Finland';

    bakeryLocation.appendChild(image2);
    bakeryLocation.appendChild(picCaption);
    contentDiv.appendChild(bakeryLocation);


    const workingHoursBox = document.createElement('div');
    workingHoursBox.classList.add('whole-box');

    const workingHoursTitle = document.createElement('h2');
    workingHoursTitle.textContent = 'Working Hours';
    workingHoursBox.appendChild(workingHoursTitle);

    const hoursBox = document.createElement('div');
    hoursBox.classList.add('hours-box');

    const daysNhours = [
        { day: 'Monday', hours: 'Closed' },
        { day: 'Tuesday', hours: '10:00 - 18:00' },
        { day: 'Wednesday', hours: '10:00 - 18:00' },
        { day: 'Thursday', hours: '10:00 - 18:00' },
        { day: 'Friday', hours: '10:00 - 20:00' },
        { day: 'Saturday', hours: '10:00 - 20:00' },
        { day: 'Sunday', hours: '12:00 - 16:00' }
    ];

    daysNhours.forEach(({ day, hours }) => {
        const row = document.createElement('div');
        row.classList.add('working-hours-row');

        const daySpan = document.createElement('span');
        daySpan.classList.add('day');
        daySpan.textContent = day;

        const hoursSpan = document.createElement('span');
        hoursSpan.classList.add('hours');
        hoursSpan.textContent = hours;

        row.appendChild(daySpan);
        row.appendChild(hoursSpan);
        hoursBox.appendChild(row);
    });

    workingHoursBox.appendChild(hoursBox);
    contentDiv.appendChild(workingHoursBox);
}

