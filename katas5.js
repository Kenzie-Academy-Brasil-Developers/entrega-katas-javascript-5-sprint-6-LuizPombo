// 1
function testReverseString1(){
    let result = reverseString("Nicholas")
    let expected = "salohciN"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testReverseString2(){
    let result = reverseString("Katas 5")
    let expected = "5 sataKs"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function  reverseString(str){
    let result = "";
    let j = str.length - 1
    for (let i = j; i >= 0; i--) {
        result = result + str[i]
    }
    return result
}




//2
function testReverseSentence1(){
    let result = reverseSentence("Nicholas é um otimo facilitador")
    let expected = "facilitador otimo um é Nicholas"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testReverseSentence2(){
    let result = reverseSentence("Katas 5 esta sendo uma boa entrega")
    let expected = "entrega boa uma sendo esta 5 Katas"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function reverseSentence(str){
    let result = []
    let array = str.split(" ")
    let j = array.length - 1

    for(let i = j; i >= 0; i--){
        result.push(array[i])
    }
    result = result.join(" ")
    return result
}



//3
function testMinimumValue1(){
    let result = minimumValue([2,3,4])
    let expected = 2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMinimumValue2(){
    let result = minimumValue([9,8,5,-1,10,11])
    let expected = -1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function minimumValue(arr){
    let result = arr[0]
    for(let i = 1; i <= arr.length; i++){
        if(result > arr[i]){
            result = arr[i]
        }
    }
    return result
}



//4
function testMaximumValue1(){
    let result = maximumValue([2,3,4])
    let expected = 4
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMaximumValue2(){
    let result = maximumValue([9,8,5,-1,10,11])
    let expected = 11
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function maximumValue(arr){
    let result = arr[0]
    for(let i = 1; i <= arr.length; i++){
        if(result < arr[i]){
            result = arr[i]
        }
    }
    return result
}



//5
function testCalculateRemainder1(){
    let result = calculateRemainder(15 ,3)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCalculateRemainder2(){
    let result = calculateRemainder(3 ,2)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function calculateRemainder(n1 ,n2){
    let result = n1 % n2
    return result
}



//6
function testDistinctValues1(){
    let result = distinctValues("1 1 1 1 1 1 1 1")
    let expected = "1"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testDistinctValues2(){
    let result = distinctValues("1 1 2 2 3 3 2 2 1 ")
    let expected = "1 2 3"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function distinctValues(str) {
    let result = []
    let num = str.split(" ")
    result.push(num[0])
    for(let i = 1; i < num.length; i++){
        if (!result.includes(num[i])){
            result.push(num[i])
        }
    }
    result = result.join(" ")
    return result.trim()
}



//7
function testCountValues1(){
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCountValues2(){
    let result = countValues("3 4 5 3 2 4 5 3 1")
    let expected = "1(1) 2(1) 3(3) 4(2) 5(2)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function countValues(str){
    let numb = str.split(" ")
    const numbersCounts = {}
    let result = ""
    for(let i = 0; i < numb.length; i++){
        let currentNumber = numb[i];
        if(numbersCounts[currentNumber] === undefined) {
            numbersCounts[currentNumber] = 1
        } else {
            numbersCounts[currentNumber]++
        }
    }
    for (let number in numbersCounts) {
        result = result + `${number}(${numbersCounts[number]}) `
    }
    result = result.trim()
    return result
}