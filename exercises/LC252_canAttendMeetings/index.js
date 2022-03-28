// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true
//[0, 5, 15]

const canAttendMeetings = intervals => {
    const start = [];
    const end = [];

    for (let i = 0; i < intervals.length; i++) {
        const subArray = intervals[i];
        start.push(subArray[0]);
        end.push(subArray[1]);
    }
    //sort them
    start.sort((a,b) => a - b);
    end.sort((a,b) => a - b);

    //start comparision
    for (let i = 0; i < start.length; i++) {
        if(start[i+1] < end[i]) return false;
    }
    return true;

};

module.exports = canAttendMeetings;
