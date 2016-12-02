const image = 'mem-bin';
//define debug
const divDebug = document.querySelector('#debug'),
    debug = (text) => {
        divDebug.innerHTML += text+'<br/>';
    };
/*program in 16bit lines
  1000010000000001
  1000010000000001
  1000010000000001
  1000011110000001
*/

var ab2str = (buf) => {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

//fetch init-memory
fetch(image)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
    	debug(`Loaded memory from ${image}, starting CPU.`);
    	cpu = new CPU();
        console.log(ab2str(arrayBuffer));
        debug('Started CPU, running from memory.');
        cpu.runProgram(arrayBuffer);
    }).catch((err) => console.log(err));