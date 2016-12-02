//define cpu class
class CPU {
    constructor(){
        this.regs = new Uint16Array(12); //8regs,pc,sp,ex,ia = 12 items/mem-locs
        this.views = new Map(); //map, kv map (keyed array) for data views

    }
	runProgram(program) {
        let dvInstruction = new DataView(program),
            instruction;

        for (let i = 0; i <= 11; i+= Uint16Array.BYTES_PER_ELEMENT) {
            instruction = dvInstruction.getUint16(i * Uint16Array.BYTES_PER_ELEMENT, true);
            //instruction = 	33793;

            debug(instruction.toString(2));
            //debug((instruction&31).toString(2)); //get first 5 bits
            //debug(((instruction>>5)&31).toString(2)); //get second 5 bits
            //debug(((instruction>>10)&63).toString(2)); //get last 6 bits

            //let type = 'invalid';
            /* Not yet implimented
            for (let ins in INSTRUCTIONS) {
                //debug('checking for '+ins)
                let bm0 = INSTRUCTIONS[ins][0],
                    bm1 = INSTRUCTIONS[ins][1],
                    onesmatch = bm1 == (instruction & bm1),
                    zeroesmatch = bm0 == (~instruction & bm0);
                //debug('Ones match: '+bm1.toString(2)+' == ' + instruction.toString(2) + ' & ' + bm1.toString(2) + ' : ' + onesmatch.toString());
                //debug('zeroes match: '+(bm0>>>0).toString(2)+' == ' + (~instruction>>>0).toString(2) + ' & ' + (bm0>>>0).toString(2) + ' : ' + zeroesmatch.toString());

                if (onesmatch && zeroesmatch) {
                    type = ins;
                    break;
                }
            }

            let cond = COND[instruction >> 28];

            if ('undefined' == typeof this[cond])
                throw new Error(cond + ' is an unimplemented condition');

            if ('undefined' == typeof this[type])
                throw new Error(type + ' is an unimplemented instruction type');

            //if (this[cond]())
                this[type](instruction);

            debug(type + ' ' + cond);
            */
        }
    }
};