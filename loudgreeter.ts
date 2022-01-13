import  Greeter from "./greeter"

export class LoudGreeter extends Greeter {

    private extra: string;
    
    
    
    

    greet(name: string) {
        
        return  `${this.greet(name)} ${this.extra}`
   
    }


} 

