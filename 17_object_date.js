// date = new Date();
// console.log(date);
//
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.toISOString())
// console.log(date.toUTCString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleTimeString())
//
// console.log("==========================================================")
// console.log(date.toLocaleString(undefined,{dateStyle: 'long'}))
// console.log(date.toLocaleString(undefined,{dateStyle: 'long', timeStyle: 'long'}))
// console.log(date.toLocaleString(undefined,{dateStyle: 'medium', timeStyle: 'long'}))
//
// console.log("==========================================================")

// function addDays(date, days) {
//     date.setDate(date.getDate() + days);
//     return date
// }

function addDays(date, days) {
    const newDate = new Date(date.getTime())
    newDate.setDate(newDate.getDate() + days);
    return newDate
}

const MONTHS = 1
const DAYS = 2
const HOURS = 3
const MINUTES = 4
const SECONDS = 5
const YEARS = 0

// function addInterval(date, n, unit){
//     const parts = [
//         date.getFullYear(),
//         date.getMonth(),
//         date.getDate(),
//         date.getHours(),
//         date.getMinutes(),
//         date.getSeconds(),
//         date.getMilliseconds()
//     ]
//
//     parts[unit] += n
//     return new Date(...parts)
// }

function addInterval(date, interval) {
    const parts = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ]

    for (const [unit, value] of Object.entries(interval)) {
        parts[unit] += value
    }
    return new Date(...parts)
}

// const today = new Date();
// const tomorrow = addDays(today, 1);
//
// console.log(today);
// console.log(tomorrow);

// const today = new Date();
// const future = addInterval(today, 1, MONTHS);

const today = new Date();
const future = addInterval(today, {
    [MONTHS]: 2,
    [DAYS]: 1,
    [MINUTES]: 3,
    [HOURS]: 5,
});

console.log(today);
console.log(future);