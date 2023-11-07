let firstName: string = "Jake";

firstName = "Jim";

const myBool: boolean = true;
const myNum: number = 3;
const myNull: null = null;
const myUndefined: undefined = undefined;
const mySymbol: symbol = Symbol("unique symbol");
const myBigInt: bigint = BigInt(123);

// inference

let myName = "Jake";
// myName = 3;

const age = 38;

// unions

let user: string | null;
// user = "Jake"

// user.charAt(3);

// any

let myVar: any;

// promise

// promise.then(() => {}).catch((err: any) => {});
