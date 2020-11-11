function sumOfMatrices(mat1, mat2) {
    let sum = [];
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
      console.log('Different amount of elements');
      return;
    }
    
    
    for (let row = 0; row < mat1.length; ++row) {
        let sumRow = [];
        for (let col = 0; col < mat1[0].length; ++col) {
            sumRow.push (mat1[row][col] += mat2[row][col]);
        }
        sum.push(sumRow)
    }
    return sum;
}


   
    
function sumOfArray(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; ++i) {
        value += arr[i];
    }
    return value;
}

function sumOfEachRow(mat) {
    let k = [];
    for (let row = 0; row < mat.length; ++row) {
        k.push(sumOfArray(mat[row]));
    }
    return k;
}

function matrixProduct(mat1, mat2) {
    let product = [];
    for (let i = 0; i < mat1.length; ++i) {
        product [i] = [];
        for (let j = 0; j < mat1[0].length; ++j) {
            let sum = 0;
            for (let k = 0; k < mat2[0].length; ++k) {
                sum += mat1[i][k] * mat2[k][j];
            }
            product[i][j] = sum;
        } 
    }    
    return product;
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
}
