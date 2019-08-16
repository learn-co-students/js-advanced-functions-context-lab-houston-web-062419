/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) {
	return {
		firstName: array[0],
	    familyName: array[1],
	    title: array[2],
	    payPerHour: array[3],
		timeInEvents: [],
		timeOutEvents: []
	}
}

function createEmployees(array) {
	let ar_obj = []
	array.forEach(emp => ar_obj.push(createEmployeeRecord(emp)))
	return ar_obj
}

function createTimeInEvent(datestamp) {
	  this.timeInEvents.push({type: "TimeIn", hour: parseInt(datestamp.split(" ")[1]), date: datestamp.split(" ")[0]})
	  return this
}

function createTimeOutEvent(datestamp) {
	 this.timeOutEvents.push({type: "TimeOut", hour: parseInt(datestamp.split(" ")[1]), date: datestamp.split(" ")[0]})
	 return this
	 
}

function hoursWorkedOnDate(date) {
	let inTime = this.timeInEvents.find(d => (d.type == "TimeIn" && d.date === date)).hour
	let outTime = this.timeOutEvents.find(d => d.type == "TimeOut" && d.date === date).hour
	return (outTime/100 - inTime/100)
}

function wagesEarnedOnDate( date) {
	return hoursWorkedOnDate.bind(this).call(this, date) * this.payPerHour
}

function allWagesFor() {
	return this.timeInEvents.reduce((sum, day) => sum + wagesEarnedOnDate.bind(this)(day.date), 0)
}

function calculatePayroll(array) {
	debugger
	return array.reduce((sum, emp) => sum + allWagesFor.bind(emp)(), 0)
}

function createEmployeeRecords(array) {
	return array.map(ar_obj => createEmployeeRecord(ar_obj))
}

function findEmployeebyFirstName(srcArray, firstName) {
	return srcArray.find(obj => obj.firstName == firstName)
}

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

const csvDataEmployees = [
        ["Thor", "Odinsson", "Electrical Engineer", 45],
        ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
        ["Natalia", "Romanov", "CEO", 150],
        ["Darcey", "Lewis", "Intern", 15],
        ["Jarvis", "Stark", "CIO", 125],
        ["Anthony", "Stark", "Angel Investor", 300]
      ]

      const csvTimesIn = [
        ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
        ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
        ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
        ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
        ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
        ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
      ]

      const csvTimesOut = [
        ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
        ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
        ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
      ]


let employeeRecords = createEmployees(csvDataEmployees)
            employeeRecords.forEach(function (rec) {
              let timesInRecordRow = csvTimesIn.find(function (row) {
                return rec.firstName === row[0]
              })

              let timesOutRecordRow = csvTimesOut.find(function (row) {
                return rec.firstName === row[0]
              })

              timesInRecordRow[1].forEach(function(timeInStamp){
                createTimeInEvent.call(rec, timeInStamp)
              })

              timesOutRecordRow[1].forEach(function(timeOutStamp){
                createTimeOutEvent.call(rec, timeOutStamp)
              })
            }) 
           calculatePayroll(employeeRecords)











