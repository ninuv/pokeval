

let main = document.getElementById('main');
let side = document.getElementById('side');

console.log(main.offsetWidth)

if (main.offsetWidth <= 640){
    main.style.display = 'grid';
    main.style.gridTemplateColumns = '0 1fr 0';
    console.log("Small");
}