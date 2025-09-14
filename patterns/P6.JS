//     *    
//    ***   
//   *****  
//  ******* 
// *********

let n = 5;

function pattern() {

      for (let i = 0; i < n; i++) {
        let str = "";

        // spaces (to center the stars)
        for (let j = 0; j < n - i - 1; j++) {
            str += " ";
        }

        // stars
        for (let k = 0; k < 2 * i + 1; k++) {
            str += "*";
        }

        // spaces (to center the stars)
        for (let j = 0; j < n - i - 1; j++) {
            str += " ";
        }

        console.log(str);
    }

    for (let i = 0; i < n; i++) {
        let str = "";

        // spaces (to center the stars)
        for (let j = 0; j < i; j++) {
            str += " ";
        }

        // stars
        for (let k = 0; k < 2*n - (2*i + 1); k++) {
            str += "*";
        }

        // spaces (to center the stars)
        for (let j = 0; j < i; j++) {
            str += " ";
        }

        console.log(str);
    }

    
}

pattern();
