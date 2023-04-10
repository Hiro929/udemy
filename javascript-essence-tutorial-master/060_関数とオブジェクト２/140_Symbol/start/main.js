const s = Symbol('hello');
const s２ = Symbol('hello');
console.log(typeof s);

const str = new String('Tom');
console.log(str);

String.prototype[s] = function() {
    return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom[s]());
