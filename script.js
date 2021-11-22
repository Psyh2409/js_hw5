// 5 by condition
strichkBuffer = () => {
    let strng = "";
    return (smthng) => {
        if (!smthng) {
            return confirm("CLEAR STRICHKA?\n"+strng+"\nOR PUSH CANCEL.")?strng='':strng;
            }
        strng += (smthng + " ");
    };
}
let result = strichkBuffer();
// 5 by example
makeBuffer = () => {
    let obj = {};
    obj.txt = '';
    obj.add = (smth) => obj.txt += (smth + (isNaN(smth) ? ' ' : ''));
    obj.print = () => obj.txt;
    obj.clear = () => obj.txt = '';
    return obj;
}
let buffer = makeBuffer();
buffer.add('JavaScript');
buffer.add('required');
buffer.add('learn');
console.log(buffer.print());

buffer = makeBuffer(); // buffer.clear()
buffer.add('1');
buffer.add('0');
buffer.add('1');
console.log(buffer.print()); // ;)

buffer.clear();
console.log(buffer.print());
