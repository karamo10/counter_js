
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLebel = document.getElementById("Count-label");

let count = 0;
// decrese button
decreaseBtn.onclick = function() {
    count--;
    countLebel.innerHTML = count;
    if(count <= -1){
        countLebel.style.color = "red";
    }
}
// increase button
increaseBtn.onclick = function() {
    count++;
    countLebel.innerHTML = `${count}`;
    if(count >= 1){
        countLebel.style.color = "green";
    }
}
// reset button
resetBtn.onclick = function() {
    count = 0;
    countLebel.innerHTML = `${count}`;
    if(count == 0){
        countLebel.style.color = "black";
    }
}



// decreaseBtn.addEventListener("click", function() {
//     count--;
//     document.getElementById("Count-label").innerHTML = count;
// })