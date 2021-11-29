function CreateObject(arr) {
    // Write your code here

    d1= {}

    for(let i=0;i<arr.length;i=i+2){
        d1[arr[i]] = arr[i+1]
    }

    return d1

}

module.exports = CreateObject;
