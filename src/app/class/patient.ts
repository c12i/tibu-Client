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

    constructor(
        public name: string,
        public age: number,
        public mobile: number,
        public address: string,
        public symptoms: string,
        public investigations: string,
        public specimen: string
    ){

    }
}
