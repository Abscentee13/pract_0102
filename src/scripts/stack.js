

console.log("hello");

let stack1 = "";


function PushOur() {
    a = document.getElementById("pushValue").value;
     stack1 = stack1 + ", " + a;
    console.log(stack1);
    document.getElementById("displayStack").textContent = stack1;
}

function PopOur() {
    let tmpStack = "";
    for (let i=0; i< stack1.split(', ').length - 1; i++)
    {

        tmpStack += stack1.split(', ')[i];
    }

    alert(stack1.split(', ') [stack1.split(', ') - 2]);
    stack1 = tmpStack;
    console.log(stack1);
    document.getElementById("displayStack").textContent = stack1;
}