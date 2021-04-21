class Calculator{
    
    constructor(prev,current){
        this.prev=prev;
        this.current=current;
        this.clearedData();
        
    }

    clearedData(){

        this.currentText='';
        this.prevText='';
        this.operation='';

    }

    Del(){
        this.currentText=this.currentText.toString().slice(0,-1)
        
    }

    appendNumber(number){

        if( number==='.' && this.currentText.includes('.') ){return}

        if( number==='0' && this.currentText.slice(0,1)=='0'){return}
        
        this.currentText=this.currentText.toString() + number.toString()

        
    }

    updateDisplay(){
        
       this.current.innerText=this.currentText;

       this.prev.innerText=`${this.prevText} ${this.operation}`;
 
    }

    chooseOperation(operation){

        if(this.currentText === ''){console.log('no current number'); return}

        

        if(operation !==null){
            this.compute()

            console.log('there is a current number')
        }
        
        
        this.operation=operation;
        this.prevText=this.currentText;
        this.currentText='';

        

    }  

    compute(){
        let computation;

        let prev = parseFloat(this.prevText);

        let current = parseFloat(this.currentText);
        
        if (isNaN(prev) || isNaN(current)) {console.log('error math')}

        switch (this.operation) {
            case '+':
              computation = prev + current
              break
            case '-':
              computation = prev - current
              break
            case '*':
              computation = prev * current
              break
            case '/':
              computation = prev / current
              break
            default:
              return
          }
          this.currentText=computation;
          this.operation=undefined;
          this.prevText=''

    }
    


}




let prev=document.querySelector('[prev]');
let current=document.querySelector('[current]');

let ac=document.querySelector('[ac]');

let del=document.querySelector('[del]');

let op=document.querySelectorAll('[op]');

let number=document.querySelectorAll('[number]');

let eq=document.querySelector('[eq]');



let calculator =new Calculator(prev,current)

number.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
       
    })
})

op.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
       
    })
})

eq.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDisplay()
})

ac.addEventListener('click',()=>{
    calculator.clearedData();
    calculator.updateDisplay();
})


del.addEventListener('click',()=>{
    calculator.Del();
    calculator.updateDisplay();
})
