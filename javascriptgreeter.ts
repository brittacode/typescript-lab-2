import  Greeter from "./greeter"

export class JavaScriptGreeter extends Greeter {

 greet(name: string) {
     return  `${this.greet(name)}`

 }
}




