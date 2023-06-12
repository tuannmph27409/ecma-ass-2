// ES5
// Global scope
// let global = 10s

function localFunction() {
    // Local scope
    let local = 20
    console.log(global + local);
}

console.log(global + local);

// localFunction()
// ES6
// let
// Block - Code được định nghĩa bên trong {}

const global = 10
const local = 20
{
    const local = 30
}
console.log(global + local);

// Const
// const a = 10
// a = 20;

