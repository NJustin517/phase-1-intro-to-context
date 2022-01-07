function createEmployeeRecord(array) {
  const employee = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employee;
}

function createEmployeeRecords(arrays) {
  const records = [];
  arrays.forEach((array) => records.push(createEmployeeRecord(array)));
  return records;
}

function createTimeInEvent(record, timeDate) {
  const timeDateArray = timeDate.split(" ");
  console.log(timeDateArray);
  record.timeInEvents.push({
    type: "TimeIn",
    date: timeDateArray[0],
    hour: parseInt(timeDateArray[1]),
  });
  return record;
}

function createTimeOutEvent(record, timeDate) {
  const timeDateArray = timeDate.split(" ");
  console.log(timeDateArray);
  record.timeOutEvents.push({
    type: "TimeOut",
    date: timeDateArray[0],
    hour: parseInt(timeDateArray[1]),
  });
  return record;
}

function hoursWorkedOnDate(record, date) {
  const timeIn = record.timeInEvents.find((event) => event.date === date);
  const timeOut = record.timeOutEvents.find((event) => event.date === date);
  return (parseInt(timeOut.hour) - parseInt(timeIn.hour)) / 100;
}

function wagesEarnedOnDate(record, date) {
  return record.payPerHour * hoursWorkedOnDate(record, date);
}
