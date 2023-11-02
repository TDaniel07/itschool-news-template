export default function transformDate(date){
    if(typeof(date) !== "string")
        return 0;

    let year, month, day;

    year = date.slice(0, 4);
    month = date.slice(5, 7);
    day = date.slice(8, 10);

    return {year: year, month: month, day: day};
}