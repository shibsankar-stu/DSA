//  1
//  12
//  123
//  1234
//  12345


let n = 5

function pattern(n){
    for(let i=1; i<=n; i++){
        let str = " "
        for(let j = 1; j<= i; j++){
            str += j
        }
        console.log(str);
        
    }
}
pattern(n);
