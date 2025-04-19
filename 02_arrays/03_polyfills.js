// General structure of a polyfill

if (!Array.prototype.fill) {
    // fallback - Polyfill - Backup Function
    Array.prototype.fill = function () {

    }
}

// Error : .map function does not exist on arr variable

if (!Array.prototype.mep) {
    // fallback - Polyfill - Backup Function
    Array.prototype.mep = function (userFn) {
        let newArray = this
        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = userFn(newArray[i])
        }
        return newArray;
    }
}

let a = [1, 2, 3, 4, 54, 67, 7, 8, 9000, 100000]

// let res = a.mep(a=>a+5);

// console.log(res)


// Error : .map function does not exist on arr variable

if (!Array.prototype.filtr) {
    // fallback - Polyfilter - Backup Function
    Array.prototype.filtr = function (userFn) {
        let newArr = this
        let a = []
        for (let i = 0; i < newArr.length; i++) {
            if ((userFn(newArr[i]))) a.push(newArr[i])
        }
        return a
    }

}

// let res = a.filtr(k=>k>2)
// console.log(res)

// Error : .reduc function does not exist on arr variable

if (!Array.prototype.reduc) {
    // fallback - Polyfilter - Backup Function
    Array.prototype.reduc = function (userFn) {
        let newArr = this
        let sum = 0
        for (let i = 0; i < newArr.length; i++) {
            sum = userFn(sum, newArr[i]);
        }
        return sum
    }

}

// let res = a.reduc((acc,res)=>acc+res)
// console.log(res)

// Error : .sor function does not exist on arr variable

if (!Array.prototype.sor) {
    // fallback - Polyfill - Backup Function
    Array.prototype.sor = function (userFn) {
        let arr = this
        for (let i = 0; i < arr.length; i++) {
            let j=i;

            while (arr[j]!==undefined) {
                if (userFn(arr[j], arr[j + 1]) > 0) {
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
                j--;
            }
        }
        return arr
    }
}

// let arr = a.sor((a, b) => b - a)
// console.log(arr)