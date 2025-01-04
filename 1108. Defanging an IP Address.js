/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    /*
    ds: arrays

    IP address: 1.1.1.1
        return it defanged

    let arr = []

    convert address to arr
        iter thru address arr:
        if element doesnt === '.'
            push address[i] into arr

        else{
            push '[.]'
        }

        return arr
    */

    let arr = []
    let arrAddress = address.split('')
    for(let i = 0; i < arrAddress.length; i++){
        if(arrAddress[i] != '.'){
            arr.push(arrAddress[i])
        }
        else{
            arr.push('[.]')
        }
    }

    return arr.join('')

    //time = O(n)
    //space = O(n)
};