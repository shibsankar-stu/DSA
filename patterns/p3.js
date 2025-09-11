//  1
//  22
//  333
//  4444
//  55555

let n = 5

function pattern(n){
    for(let i=1; i<=n; i++){
        let str = " "
        for(let j = 1; j<= i; j++){
            str += i
        }
        console.log(str);
        
    }
}
pattern(n);