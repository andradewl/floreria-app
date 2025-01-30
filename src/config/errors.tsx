export class CalledBD extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CalledBD';
        Object.setPrototypeOf(this, CalledBD.prototype);
    }
}

export class BadRequest extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'BadRequest';
        Object.setPrototypeOf(this, BadRequest.prototype);
    }
}