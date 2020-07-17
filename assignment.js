// ----Feet to Mile-----
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
console.log(feetToMile(52620));


/*#### Wood Calculate ####*/
function woodCalculator(chair, table, cot) {
    var chair = chair * 1;
    var table = table * 3;
    var cot = cot * 5;
    var totalWood = chair + table + cot;
    return totalWood;
}
console.log(woodCalculator(5, 1, 2));


/* ##### Brick Calculate ##### */
function brickCalculator(tola){
    if (tola <= 10) {
        var totalBrick = tola * 15 * 1000;
    }
    else if(tola <= 20) {
        totalBrick = (10 * 15 * 1000) + ((tola-10) * 12 * 1000);
    }
    else {
        totalBrick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((tola-20) * 10 * 1000);
    }
    return totalBrick;
}
console.log(brickCalculator(22));

//----Find friend's tiny name-----
function tinyFriend(friends) {
    let littleName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if ( littleName.length > friends[i].length ) {
            littleName = friends[i];
        }
    }
    return littleName;
}
group = ['Shohel','Ragib','Raju','Joy','Roni','Ripon','Roki','Abdullah'];

console.log(tinyFriend(group));



 