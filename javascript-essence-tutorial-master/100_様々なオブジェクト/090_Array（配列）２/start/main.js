const arry = [1, 2, 3, 4, 5];

arry.forEach((v, i, arry) => {
    console.log(v);
});

const newArry = arry.map((v, i, arry) => {
    console.log(v);
    return v * 2;
});

// console.log(newArry)

const filterArry = arry.filter((v, i, arry) => {
    return arry;
});

console.log(filterArry)
