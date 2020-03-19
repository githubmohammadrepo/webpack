// In childModule2.js
let myClass = class {
    show() {
        console.log('new myclass.show chMTwo')
    }
    pTag(){
        let p = document.createElement('p')
        p.innerText = "Web Pack Is Working Very Well!.. "
        document.body.appendChild(p)
    }
};
// assign something useful to myClass
export { myClass };