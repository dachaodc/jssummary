// let myWeakmap = new WeakMap();
//
// myWeakmap.set(document.getElementById('logo'), {timesClicked: 0});
//
// document.getElementById('logo').addEventListener('click', function () {
//     let logoData = myWeakmap.get(document.getElementById('logo'));
//     logoData.timesClicked++;
// }, false);

const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }

    dec() {
        let counter = _counter.get(this);
        if (counter < 1) return;
        counter--;
        _counter.set(this, counter);
        if (counter === 0) {
            _action.get(this)();
        }
    }
}

const c = new Countdown(2, () => console.log('DONE'));

console.log(c);
console.log(c.__proto__);
console.log(c.__proto__.constructor);

c.dec();
c.dec();

