// 5.1, 5.2 by condition
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
// 5.1 by example
makeBuffer = () => {
    this.txt = '';
    this.add = (smth) => this.txt += (smth + (isNaN(smth) ? ' ' : ''));
    this.print = () => this.txt;
    return this;
}
//5.2
Object.setPrototypeOf(makeBuffer ,clear = () => {this.txt=''})
//main
let buffer = makeBuffer();
buffer.add('JavaScript');
buffer.add('required');
buffer.add('learn');
console.log(buffer.print());
buffer = makeBuffer(); // alternative of buffer.clear() 
buffer.add('1');
buffer.add('0');
buffer.add('1');
console.log(buffer.print()); // ;)
buffer.clear();
console.log(buffer.print());
