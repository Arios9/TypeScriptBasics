let sports: string[] = ["basket", "tennis", "volley", "chess"];
//arrays in ts are dynamic
sports.push("football");

for (let sport of sports){
    console.log(sport);
}

sports.forEach(s => console.log(s));