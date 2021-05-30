import { environment } from '../environment';

// Service to get base converter response
function baseToBase(value, from, to) {
    return new Promise( (resolve, reject) => {
        const url = `${environment.serverUrl}/api/v1/base?fromBase=${from}&fromValue=${value}&toBase=${to}`

        fetch(url, {method: 'GET'})
        .then(res => resolve(res.json()))
        .catch(err => reject(err))
    });
}
// Service to get numeral conversion response
function arabicToRomanNumeral(number) {
    return new Promise( (resolve, reject) => {
        const url = `${environment.serverUrl}/api/v1/numeral?numeral=${number}`

        fetch(url, {method: 'GET'})
        .then(res => resolve(res.json()))
        .catch(err => reject(err))
    });
}

export const ConverterService = {
    baseToBase,
    arabicToRomanNumeral
}