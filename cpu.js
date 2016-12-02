//define cpu class
class CPU {
    constructor(){
        this.regs = new Uint16Array(12); //8regs,pc,sp,ex,ia = 12 items/mem-locs
        this.views = new Map(); //map, kv map (keyed array) for data views
       /* defineDVs(this, this.regs, {
            'ra': 0,       //0x00
            'rb': 1,
            'rc': 2,
            'rx': 3,
            'ry': 4,
            'rz': 5,
            'ri': 6,       //0x07
            'ra_mem': 7,   //0x08
            'rb_mem': 8,
            'rc_mem': 9,
            'rx_mem': 10,
            'ry_mem': 11,
            'rz_mem': 12,
            'ri_mem': 13,  //0x0F
            'ra_nxwd' : 14,//0x10
            'rb_nxwd' : 15,
            'rc_nxwd' : 16,
            'rx_nxwd' : 17,
            'ry_nxwd' : 18,
            'rz_nxwd' : 19,
            'ri_nxwd' : 20,//0x17


        });*/

    }
	runProgram(program) {
        let dvInstruction = new DataView(program),
            instruction;

        for (let i = 0; i <= 4; i+= Uint16Array.BYTES_PER_ELEMENT) {
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