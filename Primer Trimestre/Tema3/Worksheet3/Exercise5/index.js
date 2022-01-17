/*
Write a program to search for the "saddle points" in a 5 by 5 array of integers. 
A saddle point is a cell whose value is greater than or equal to any in its row, 
and less than or equal to any in its column. There may be more than one saddle point 
in the array. Print out the coordinates of any saddle points your program finds. Print 
out "No saddle points" if there are none.
*/

function saddlepoint(arr){
    let max, min;
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            let columna = [];
            max = Math.max(...arr[i]);
            for (k = 0; k<arr.length; k++){
                columna.push(arr[k][j]);
            }
            min = Math.min(...columna)

            if (arr[i][j] >= max && arr[i][j] <= min){
                console.log(i+", "+j)
            }
        }
    }
}


a = [[1,3,2,7],[1,3,2,8],[1,3,2,9],[1,3,2,7]]
saddlepoint(a);