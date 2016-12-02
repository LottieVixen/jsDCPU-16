//just stuck all this in anon function just so it doesn't run 
//but (still wanted the highlighting)
() => {function h2b(hexin){
	return parseInt(hexin, 16).toString(2);
	}

	//from http://stackoverflow.com/a/12987042
	function d2h(n){return n.toString(16).toUpperCase()}
	function b2h(n){return parseInt(n,2).toString(16)}
	function h2bnew(n){
	var out = '';
	for(i=0;i<n.length-1;i+=2){
	  out += h2b(n[i]+n[i+1]);
	}
	return out;
	}

	function conv(hexin){
	console.log('0x'+d2h(hexin)+':'+h2b(hexin));
	}


  //basic opcode set
  /*

  */

	//conv(0x1c);
	/*MEM
	O    B    A
	0x01 0x00 0x21 SET regA 0
	0x01 0x00 0x21 SET regA 0
	0x01 0x00 0x21 SET regA 0
	0x01 0x1C 0x21 SET PC   0
	##Actual mem aaaaaabbbbbooooo = 6-5-5 * a-b-o
	100001-00000-00001 //literal 0 - regA - SET
	100001-11100-00001 //literal 0 - PC - SET
	Binary
	1000010000000001
	1000010000000001
	1000010000000001
	1000011110000001
	single line
	1000010000000001100001000000000110000100000000011000011110000001
	as hex (needed for working with it in JS)
	8401840184018800 // incorrect! below is using line 48
  hex split by instruction
  8401
  8401
  8401
  8781
  removed indent two lines down to keep to 80 char long lines
	manual working out as that's incorrect above. 
1000 0100 0000 0001 1000 0100 0000 0001 1000 0100 0000 0001 1000 0111 1000 0001
8    4    0    1    8    4    0    1    8    4    0    1    8    7    8    1
	*/
	//tests pass
	console.log('Actual: '+b2h('1000010000000001')+b2h('1000010000000001')
                        +b2h('1000010000000001')+b2h('1000011110000001'));
	console.log('Expect: 8401840184018781\n');
	console.log('Actual: '+h2b('84018401')+h2b('84018781')); //outputs string below
	console.log('Expect: 1000010000000001100001000000000110000100000000011000011110000001');
}
//Testing/Proving grounds of concepts!
var partInst = (inst) => {
  let o = inst&31;
  let b = (inst>>5)&31;
  let a = (inst>>10)&63;
  return [a,b,o];
};
var main = () => {
  var PC = 0;// program counter
  //I know it should be a pointer but I need to work out how to impliment
  //the registers
  //RAM = 65536(0x10000) 16bit words SO
  //                         2bytes * ram size
  var RAMbuffer = new ArrayBuffer(2 * 0x10000);
  var RAMdv = new DataView(RAMbuffer);

  var setA  = 0x8401,
      setPC = 0x8781;

  var array = [0x8401, //program above in hex (16bit) values as can't (easily)
               0x8401, //input binary...well i guess this is haha.
               0x8401,
               0x8781];

  //Changed to move program into ram
  //var instructionBuffer = new ArrayBuffer(array);
  //For some reason that didn't work so the long way around for the next 7 lines
  //var instructionBuffer = new ArrayBuffer(8); //4 Elements at 2 bytes each 4*2
  //var instructiondv = new DataView(instructionBuffer); //make data view
  
  RAMdv.setUint16(0,0x8401,true);
  RAMdv.setUint16(2,0x8401,true);
  RAMdv.setUint16(4,0x8401,true);
  RAMdv.setUint16(6,0x8781,true);
  //console.log(instructiondv.getUint16(0,true));
  //console.log(instructiondv.getUint16(6,true));


  while(inst in array){ //incomplete, need to rewrite cond
    console.log(partInst(array[inst]));
  }
  //Get number of instructions
  //console.log(instructiondv.byteLength/Uint16Array.BYTES_PER_ELEMENT);
};

//start main!
main();