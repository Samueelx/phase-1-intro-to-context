const createEmployeeRecord = (array) => {
    const record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return record;
}

const createEmployeeRecords = (twoRows) => {
    const employeeRecords = [];
    twoRows.forEach((array) => {
        employeeRecords.push(createEmployeeRecord(array));
    });
    return employeeRecords;
}
const createTimeInEvent = function(employeeRecord, datestamp) {
    const timeIn = {
        type: "TimeIn",
        date: datestamp.slice(0, 10),
        hour: parseInt(datestamp.slice(11))
    };
    employeeRecord.timeInEvents.push(timeIn);
    return employeeRecord;
}

// const Thor = createEmployeeRecord(["Thor", "Odinsson", "Electrical Engineer", 45]);
// const updatedThor = createTimeInEvent(Thor, "2014-02-28 1400");
// console.log(updatedThor);