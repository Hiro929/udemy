// 'use strict'
function fn() {
    // 'use strict'
    // a = 0;
    return this;
}
console.log(fn.call(2));
// fn();
// console.log(a)