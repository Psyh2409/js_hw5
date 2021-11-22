// 5.1 by condition
strichkBuffer = () => {
    let strng = "";
    return (smthng) => {
        if (!smthng)
            return alert("print:\n" + strng);
        strng += (smthng + " ");
    };
}
let result = strichkBuffer();
// 5.1 by discrepant example
makeBuffer = () => {
    let obj = {};
    obj.txt = '';
    obj.add = (smth) => obj.txt += (smth + (isNaN(smth) ? ' ' : ''));
    obj.print = () => obj.txt;
    return obj;
}
let buffer = makeBuffer();
buffer.add('JavaScript');
buffer.add('is');
buffer.add('required');
buffer.add('to');
buffer.add('learn');
console.log(buffer.print());

buffer = makeBuffer();
buffer.add('1');
buffer.add('0');
buffer.add('1');
console.log(buffer.print());