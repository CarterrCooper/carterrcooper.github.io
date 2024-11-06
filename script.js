const columnToLinesAndTimes = {
    "1": {
        startUp: {
            dateRanges: [
                { start: '2024-01-08', end: '2024-03-17', time: "05:40:00", lines: ["W", "W"] },
                { start: '2024-03-18', end: '2024-03-24', time: "05:40:00", lines: ["W", "W"] },
    { start: '2024-04-01', end: '2024-06-06', time: "06:25:00", lines: ["W", "W", "V-IB"] },
    { start: '2024-06-07', end: '2024-06-13', time: "06:25:00", lines: ["W", "W"]},
    { start: '2024-06-14', end: '2024-08-04', time: "05:40:00", lines: ["W", "W"] },
    { start: '2024-08-04', end: '2024-09-24', time: "05:40:00", lines: ["W", "C", "W", "C"]},
    { start: '2024-09-25', end: '2024-12-08', time: "05:40:00", lines: ["W", "C", "W", "C"] }
            ]
        },
        day: { dateRanges: [
                { start: '2024-01-08', end: '2024-03-17', lines: ["W"] },
                { start: '2024-03-18', end: '2024-03-24', lines: ["W"] },
    { start: '2024-04-01', end: '2024-06-13', time: "13:05:00", lines: ["W", "W", "W"] },
    { start: '2024-04-01', end: '2024-06-13', time: "15:05:00", lines: ["W", "W", "W"] },
    { start: '2024-04-01', end: '2024-06-13', time: "17:05:00", lines: ["W", "W", "W"] },
    { start: '2024-04-01', end: '2024-06-06', lines: ["W"] },
    { start: '2024-06-07', end: '2024-06-13', lines: ["W"]},
    { start: '2024-06-14', end: '2024-08-04', lines: ["W"] },
    { start: '2024-08-04', end: '2024-09-24', lines: ["W", "C"]},
    { start: '2024-09-25', end: '2024-12-08', lines: ["W", "C"] }
        ] },
        night: {
            dateRanges: [
                { start: '2024-01-08', end: '2024-03-17', time: "19:05:00", lines: ["W", "W"] },
                   { start: '2024-01-08', end: '2024-03-17', time: "21:05:00", lines: ["W", "W"] },
                { start: '2024-03-18', end: '2024-03-24', time: "19:05:00", lines: ["W", "W"] },
                   { start: '2024-03-18', end: '2024-03-24', time: "21:05:00", lines: ["W", "W", "J-OB"] },
    { start: '2024-04-01', end: '2024-06-06', time: "19:05:00", lines: ["W", "W"] },
       { start: '2024-04-01', end: '2024-06-06', time: "21:05:00", lines: ["W", "W"] },
    { start: '2024-06-07', end: '2024-06-13', time: "19:05:00", lines: ["W", "W"]},
       { start: '2024-06-07', end: '2024-06-13', time: "21:05:00", lines: ["W", "W"]},
       { start: '2024-06-14', end: '2024-08-04', time: "19:05:00", lines: ["W", "W"] },
       { start: '2024-08-04', end: '2024-09-24', time: "19:05:00", lines: ["W", "C", "W"] },
    { start: '2024-09-25', end: '2024-12-8', time: "19:05:00", lines: ["W", "C", "W", "J"] },
       { start: '2024-09-25', end: '2024-12-8', time: "21:05:00", lines: ["W", "C", "W", "J"] }
            ]
        }
    },
    "2": {
        startUp: {
            dateRanges: [
                { start: '2024-01-08', end: '2024-03-17', time: "05:40:00", lines: ["WDS", "W", "W"] },
                { start: '2024-03-18', end: '2024-03-24', time: "05:40:00", lines: ["WDS", "W", "W"] },
    { start: '2024-04-01', end: '2024-06-06', time: "05:40:00", lines: ["WDS", "W", "W"] },
    { start: '2024-06-07', end: '2024-06-13', time: "05:40:00", lines: ["WDS", "W", "W"] },
    { start: '2024-06-14', end: '2024-08-04', time: "05:40:00", lines: ["WDS", "W", "W"] },
    { start: '2024-08-04', end: '2024-09-24', time: "05:40:00", lines: ["WDS", "W", "W"] },
    { start: '2024-09-25', end: '2024-12-8', time: "05:40:00", lines: ["WDS", "W", "C", "W", "C"] }
            ]
        },
        day: { dateRanges: [
                { start: '2024-01-08', end: '2024-03-17', lines: ["W"] },
                { start: '2024-03-18', end: '2024-03-24', lines: ["W"] },
    { start: '2024-04-01', end: '2024-06-13', time: "12:05:00", lines: ["W", "W", "W"] },
    { start: '2024-04-01', end: '2024-06-13', time: "14:05:00", lines: ["W", "W", "W"] },
    { start: '2024-04-01', end: '2024-06-13', time: "16:05:00", lines: ["W", "W", "W"] },
    { start: '2024-04-01', end: '2024-06-06', lines: ["W"] },
    { start: '2024-06-07', end: '2024-06-13', lines: ["W"]},
    { start: '2024-06-14', end: '2024-08-04', lines: ["W"] },
    { start: '2024-08-04', end: '2024-09-24', lines: ["W"] },
    { start: '2024-09-25', end: '2024-12-8', lines: ["C", "W"] }
        ] },
        night: {
            dateRanges: [
                { start: '2024-01-08', end: '2024-03-17', time: "19:05:00", lines: ["W", "W"] },
                   { start: '2024-01-08', end: '2024-03-17', time: "21:05:00", lines: ["W", "W"] },
                { start: '2024-03-18', end: '2024-03-24', time: "19:05:00", lines: ["W", "W"] },
                   { start: '2024-03-18', end: '2024-03-24', time: "21:05:00", lines: ["W", "W", "W-OB"] },
    { start: '2024-04-01', end: '2024-06-06', time: "19:05:00", lines: ["W", "W"] },
       { start: '2024-04-01', end: '2024-06-06', time: "21:05:00", lines: ["W", "W"] },
    { start: '2024-06-07', end: '2024-06-13', time: "19:05:00", lines: ["W", "W"]},
       { start: '2024-06-07', end: '2024-06-13', time: "21:05:00", lines: ["W", "W", "W-OB"]},
    { start: '2024-06-14', end: '2024-08-04', time: "19:05:00", lines: ["W"] },
    { start: '2024-08-04', end: '2024-09-24', time: "19:05:00", lines: ["W"] },
    { start: '2024-09-25', end: '2024-12-8', time: "19:05:00", lines: ["C", "W", "C", "W"] },
       { start: '2024-09-25', end: '2024-12-8', time: "21:05:00", lines: ["D", "W", "D", "W"] }
            ]
        }
    },


    "35": {
        startUp: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "06:00", lines: ["B11", "BX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "06:30", lines: ["B11", "BX"] },
                { start: '2024-10-14', end: '', time: "07:00", lines: ["B11", "BX"] }
            ]
        },
        day: { dateRanges: [
            { start: '2024-10-01', end: '2024-10-07', lines: ["B21", "BX"] },
            { start: '2024-10-07', end: '2024-10-14', lines: ["B21", "BX"] },
            { start: '2024-10-14', end: '', lines: ["B21", "BX"] }
        ] },
        night: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "22:05", lines: ["B31", "BX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "23:30", lines: ["B31", "BX"] },
                { start: '2024-10-14', end: '', time: "23:55", lines: ["B31", "BX"] }
            ]
        }
    },
    "71": {
        startUp: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "05:30", lines: ["C11", "CX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "06:00", lines: ["C11", "CX"] },
                { start: '2024-10-14', end: '', time: "06:30", lines: ["C11", "CX"] }
            ]
        },
        day: { dateRanges: [
            { start: '2024-10-01', end: '2024-10-07', lines: ["C21", "CX"] },
            { start: '2024-10-07', end: '2024-10-14', lines: ["C21", "CX"] },
            { start: '2024-10-14', end: '', lines: ["C21", "CX"] }
        ] },
        night: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "23:15", lines: ["C31", "CX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "23:45", lines: ["C31", "CX"] },
                { start: '2024-10-14', end: '', time: "00:15", lines: ["C31", "CX"] }
            ]
        }
    },
    "22": {
        startUp: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "06:30", lines: ["D11", "DX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "07:00", lines: ["D11", "DX"] },
                { start: '2024-10-14', end: '', time: "07:30", lines: ["D11", "DX"] }
            ]
        },
        day: { dateRanges: [
            { start: '2024-10-01', end: '2024-10-07', lines: ["D21", "DX"] },
            { start: '2024-10-07', end: '2024-10-14', lines: ["D21", "DX"] },
            { start: '2024-10-14', end: '', lines: ["D21", "DX"] }
        ] },
        night: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "22:00", lines: ["D31", "DX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "23:30", lines: ["D31", "DX"] },
                { start: '2024-10-14', end: '', time: "00:00", lines: ["D31", "DX"] }
            ]
        }
    },
    "4DD": {
        startUp: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "07:00", lines: ["E11", "EX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "07:30", lines: ["E11", "EX"] },
                { start: '2024-10-14', end: '', time: "08:00", lines: ["E11", "EX"] }
            ]
        },
        day: { dateRanges: [
            { start: '2024-10-01', end: '2024-10-07', lines: ["E21", "EX"] },
            { start: '2024-10-07', end: '2024-10-14', lines: ["E21", "EX"] },
            { start: '2024-10-14', end: '', lines: ["E21", "EX"] }
        ] },
        night: {
            dateRanges: [
                { start: '2024-10-01', end: '2024-10-07', time: "23:00", lines: ["E31", "EX"] },
                { start: '2024-10-07', end: '2024-10-14', time: "00:15", lines: ["E31", "EX"] },
                { start: '2024-10-14', end: '', time: "01:00", lines: ["E31", "EX"] }
            ]
        }
    },
    // Continue adding for other columns as needed...
};



// Function to map shifts to lines based on time and column data
function mapColumnsToLinesAndTimes(item) {


    const column = item.shift_group__column;
    const date = new Date(item.start_date);
    const time = item.shift_group__start_time;




    let lines = [];
    let period = '';

    if(!columnToLinesAndTimes[column]){
	return{};	
}
    // Check for the correct date range and apply corresponding start time and lines for Start-Up shifts
    const dateRanges = columnToLinesAndTimes[column]?.startUp?.dateRanges;
    for (const range of dateRanges) {
        const rangeStart = new Date(range.start);
        const rangeEnd = range.end ? new Date(range.end) : new Date();
        if (date >= rangeStart && date <= rangeEnd) {
            if (time === range.time) {
                lines.push(...range.lines);
                period = 'Start-Up shift';
                break;
            }
        }
    }


    if (!lines.length) {
        // Apply logic for Night shift based on specific start time
        const nightRanges = columnToLinesAndTimes[column]?.night?.dateRanges;
        for (const range of nightRanges) {
            const rangeStart = new Date(range.start);
            const rangeEnd = range.end ? new Date(range.end) : new Date();
            if (date >= rangeStart && date <= rangeEnd && time === range.time) {
                lines.push(...range.lines);
                period = 'Night shift';
                break;
            }
        }
    }


    // Apply similar logic for Day and Night shifts
    if (!lines.length) {
        // Apply logic for Day shift (no specific time)
        const dayRanges = columnToLinesAndTimes[column]?.day?.dateRanges;
        for (const range of dayRanges) {
            const rangeStart = new Date(range.start);
            const rangeEnd = range.end ? new Date(range.end) : new Date();
            if (date >= rangeStart && date <= rangeEnd) {
		if ( range.hasOwnProperty('time') ){
			if(time === range.time){
			lines.push(...range.lines);
              		period = 'Day shift';
               		break;
			}
		} else{
                lines.push(...range.lines);
                period = 'Day shift';
                break;
		}

            }
        }
    }


    // Return the corresponding lines and period
    return { column, lines, period };
}

// Handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const jsonData = JSON.parse(e.target.result);
            const shifts = jsonData.root || [];

            const columnCounts = {};
            const periodCounts = {};

            shifts.forEach(item => {
                const { lines, period } = mapColumnsToLinesAndTimes(item);
		
			if(!lines){
				return;
			}
                // Count each line based on the shift's time
                lines.forEach(line => {
                    columnCounts[line] = (columnCounts[line] || 0) + 1;
                });

                // Add counting for morning/evening (Start-Up shift and Night shift)
                //if (period === "Start-Up shift" || period === "Night shift") {
                //    lines.forEach(line => {
                 //       columnCounts[line] = (columnCounts[line] || 0) + 1; // Count twice for Start-Up and Night shifts
                //    });
               // }

                periodCounts[period] = (periodCounts[period] || 0) + 1;  // Count periods like "Start-Up shift", "Day shift", etc.
            });

            // Display results in table
            displayTable(columnCounts);
            displayChart(columnCounts, periodCounts);

        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    };
    reader.readAsText(file);
}

// Display table of column counts and period counts
function displayTable(columnCounts) {
    let tableHTML = '<table border="1"><tr><th>Shift Line</th><th>Count</th></tr>';
    for (let line in columnCounts) {
        tableHTML += `<tr><td>${line}</td><td>${columnCounts[line]}</td></tr>`;
    }
    tableHTML += '</table>';


    document.getElementById('tableContainer').innerHTML = tableHTML;
}

// Display pie chart of line breakdown
function displayChart(columnCounts, periodCounts) {
    const ctx = document.getElementById('myChart');
    if (!ctx) {
        console.error('Canvas element for myChart not found.');
        return;
    }

    new Chart(ctx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: Object.keys(columnCounts),
            datasets: [{
                label: 'Shift Line Breakdown',
                data: Object.values(columnCounts),
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw} shifts`;
                        }
                    }
                }
            }
        }
    })

}

// Add event listener for file input
document.getElementById('jsonFileInput').addEventListener('change', handleFileUpload);