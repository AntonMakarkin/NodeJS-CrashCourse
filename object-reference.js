const obj1 = {
    name: 'Bruce Wayne'
};

const obj2 = obj1;
obj2.name = 'Clark Kent';

console.log(obj1);


// this is why you should use module.exports, not just exports (with exports you assign a new (empty) object)
const obj3 = {
    name: 'Bruce Wayne'
};

let obj4 = obj3;
obj4 = {
    name: 'Clark Kent'
};

console.log(obj1);