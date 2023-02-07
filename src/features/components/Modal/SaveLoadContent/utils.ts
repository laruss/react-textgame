import * as CryptoJS from "crypto-js";
import ifid from '../../../../engine/system/ifid.json';
import settings from "../../../../Story/settings";

export const getDate = (datetime: number) => {
    const dt = new Date(datetime);
    const addZero = (num: number) => `0${num}`.slice(-2);
    return `${dt.getFullYear()}-${addZero(dt.getMonth()+1)}-${addZero(dt.getDate())} ${addZero(dt.getHours())}:${addZero(dt.getMinutes())}`;
};

export const getEncryptKey = () => ifid.ifid.length > 10 ? ifid.ifid : "debugMode";
export const fileFormat = '.sgx';
export const getFileName = () => `${settings.project.name}.v${settings.project.version}.${fileFormat}`;

export const convertWordArrayToUint8Array = (wordArray: CryptoJS.lib.WordArray) => {
    const arrayOfWords = wordArray.hasOwnProperty('words')
        ? wordArray.words
        : [];

    const length = wordArray.hasOwnProperty('sigBytes')
        ? wordArray.sigBytes
        : arrayOfWords.length * 4;

    const uInt8Array = new Uint8Array(length);
    let index = 0;
    let word;
    let i;

    for (i = 0; i < length; i++) {
        word = arrayOfWords[i];
        uInt8Array[index++] = word >> 24;
        uInt8Array[index++] = (word >> 16) & 0xff;
        uInt8Array[index++] = (word >> 8) & 0xff;
        uInt8Array[index++] = word & 0xff;
    }
    return uInt8Array;
}

export const download = (data: Uint8Array|string, filename: string, type: any) => {
    const file = new Blob([data], { type: type });
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);

    a.href = url;
    a.download = filename;
    document.body.appendChild(a);

    a.click();

    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
};