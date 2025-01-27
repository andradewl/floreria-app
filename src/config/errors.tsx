export class CalledBD extends Error{
    constructor (message:string){
        super(message);
        this.name='CalledBD';
    }
}

export class BadRequest extends Error{
    constructor (message:string){
        super(message);
        this.name='BadRequest';
    }
}