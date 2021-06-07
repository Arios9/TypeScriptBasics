let reviews: number[] = [2, 6, 3, 7];

let sum: number = 0;

for(let i=0; i<reviews.length; i++){
    sum += reviews[i];
}

console.log(sum);

if(sum > 10){
    console.log("good job");
}else{
    console.log("bad job");
}