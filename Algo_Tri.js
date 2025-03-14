// Choix de l'élément à insérer
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

// Déplacez les éléments, qui sont plus grands que key,
       
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [5, 6, 77, 88, 99];
console.log("Tableau initial : " + arr);
let sortdArr = insertionSort(arr);
console.log("Tableau trié : " + sortdArr);
