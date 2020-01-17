export class Patient {
    // public name: string
    // public age: number
    // public mobile: number
    // public address: string
    // public symptoms: string
    // public investigations: string
    // public specimen: string
    // constructor() {
    //     this.name = "";
    //     this.age = 0;
    //     this.mobile = 0;
    //     this.symptoms = "";
    //     this.investigations = "";
    //     this.specimen = "";
    // }

    // "created_at": "2020-01-15T04:22:26+03:00",
    // "picked_at": "2020-01-15T04:23:31+03:00",
    constructor(
        public name: string,
        public age: number,
        public mobile: number,
        public address: string,
        public symptoms: string,
        public investigations: string,
        public specimen: string,
        public timerequested:string,
        public timearrived:string,
    ){

    }
}
