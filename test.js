  //start of DCPU16
  function h2b(hexin){
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
  8401840184018800
  
  manual working out as that's incorrect above.
  1000 0100 0000 0001 1000 0100 0000 0001 1000 0100 0000 0001 1000 0111 1000 0001
  8    4    0    1    8    4    0    1    8    4    0    1    8    7    8    1
  */
  // Wrong console.log(b2h('1000010000000001100001000000000110000100000000011000011110000001'));
  console.log('Actual: '+b2h('1000010000000001')+b2h('1000010000000001')+b2h('1000010000000001')+b2h('1000011110000001'));
  console.log('Expect: 8401840184018781\n');
  console.log('Actual: '+h2b('84018401')+h2b('84018781')); //outputs string below
  console.log('Expect: 1000010000000001100001000000000110000100000000011000011110000001');