const num1Element=document.getElementById('num1') as HTMLInputElement
const num2Element=document.getElementById('num2') as HTMLInputElement
const buttonElement=document.querySelector('button')!

const numResults:Array<number>=[]
const stringResults:string[]=[]

type NumOrString=number |string
type Result={val:number;timestamp:Date}

interface ResultObj{
    val:number;
    timestamp:Date
}

function add(num1:number | string,num2:number |string){
    if(typeof num1=='number' && typeof num2==='number'){
        return num1+num2
    }else if(typeof num1=='string' && typeof num2==='string'){
        return num1+ " "+num2
    

    }
    return +num1+ +num2
}

function printResult(resultObj:Result){
    console.log(resultObj.val)
}

buttonElement.addEventListener('click',()=>{
const num1=num1Element.value
const num2=num2Element.value
const result=add(+num1,+num2)
numResults.push(result as number)
const stringresult=add(num1,num2)
stringResults.push(stringresult as string)
console.log(result)
console.log(stringresult)
printResult({val:result as number,timestamp:new Date()})
console.log(numResults,stringResults)
})

const myPromise=new Promise<string>((resolve,reject)=>{
setTimeout(()=>{
    resolve("It is worked!")
},1000)
})

myPromise.then((result)=>{
    console.log(result.split('w'))
})
