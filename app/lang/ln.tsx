import parse from 'html-react-parser';

import lang from "./bg.json"

export default function ln( key:string ) {
    let value: string = (lang as any)[key];
    return value ? parse( value ) : key;
}