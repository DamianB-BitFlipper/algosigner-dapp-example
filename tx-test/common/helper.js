// Helper used with JSON.stringify that replaces Uint8Array data with ascii text for display
function toJsonReplace(key, value) {    
    // Return value immediately if null or undefined
    if(value === undefined || value === null){
        return value;
    }

    // Check for uint8 arrays to get buffer for print
    if(value instanceof Uint8Array || (typeof(value)==='object' && value instanceof Array && value.length > 0 && typeof(value[0]) === 'number')){
        // We have a key that is an address type then use the sdk base 58 method, otherwise use base64
        const addressKeys = ['rcv','snd','to','from','manager','reserve','freeze','clawback','c','f','r','m','asnd','arcv','aclose','fadd'];
        if(key && addressKeys.includes(key)) {
            return algosdk.encodeAddress(value);
        }
        return btoa(value);
    }

    // Check for literal string match on object type to cycle further into the recursive replace
    if(typeof(value) === '[object Object]'){
        return JSON.stringify(value,_toJsonReplace,2);
    } 

    // Return without modification
    return value;
}

// https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
