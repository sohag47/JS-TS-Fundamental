
// ANSI Color Codes
const Reset = "\x1b[0m";
const Red = "\x1b[31m";
const Green = "\x1b[32m";
const Yellow = "\x1b[33m";
const Blue = "\x1b[34m";

export default class LOG {
    private static print(color: string, data: any[]) {
        console.log(color, ...data, Reset);
    }

    static INFO(...data: any[]) {
        this.print(Blue, data);
    }

    static ERROR(...data: any[]) {
        this.print(Red, data);
    }

    static SUCCESS(...data: any[]) {
        this.print(Green, data);
    }

    static WARNING(...data: any[]) {
        this.print(Yellow, data);
    }
}