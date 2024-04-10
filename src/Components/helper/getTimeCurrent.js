function getTimeCurrent(){
    let date=new Date();
    let second=date.getSeconds();
    second=second>9?second:`0${second}`;

    let minute=date.getMinutes();
    minute=minute>9?minute:`0${minute}`;

    let hour=date.getHours();
    hour=hour>9?hour:`0${hour}`;

    let day=date.getDate();
    day=day>9?day:`0${day}`;

    let month=date.getMonth();
    month=month+1;
    month=month>9?month:`0${month}`;

    let year=date.getFullYear();
   
    
    console.log(`${day}-${month}-${year} ${hour}:${minute}:${second}`)
    return (`${day}-${month}-${year} ${hour}:${minute}:${second}`)
}

export default getTimeCurrent;