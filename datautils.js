const defineDV = (obj, array, name, offset) => {
        obj.views.set(
            name, 
            new DataView(
                array.buffer,
                offset * Uint16Array.BYTES_PER_ELEMENT,
                1 * Uint16Array.BYTES_PER_ELEMENT
        ));
        Object.defineProperty(obj, name, {
            get: function() { return this.views.get(name).getUint32(0, true)},
            set: function(value) { this.views.get(name).setUint32(0, value, true)}
        });
    },
    defineDVs = (obj, array, objKV) => {
        for (let k in objKV) {
            defineDV(obj, array, k, objKV[k]);
        }
    };
