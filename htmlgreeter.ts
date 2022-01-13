import  Greeter from "./greeter"

export class HtmlGreeter extends Greeter {
    tagName: string;

    constructor(greeting:string, tagName:string = "h1"){
        super(greeting);
    }
    
    

    greet(name: string) {
        return  ` ${this.greeting} ${this.tagName}`
   
    }

}