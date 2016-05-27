
function myFunctions() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
function numbers(){
    window.location = "numbers.html";

}
function Average(){
    window.location = "mean.html";
    nums.sort();
    var total = 0;
    var length = 0;

    for(var i = 0; i < nums.length; i++){
        total += nums[i];
        console.log(nums);
    }
    length = total/nums.length
    document.write(length);
}

function median() {
    window.location = "median.html";
    var half = Math.floor(nums.length/2);
    //document.write(half);
    if(nums.length % 2)
    {
        document.write(nums[half]);

    }
    else{
      document.write((nums[half-1] + nums[half]) / 2.0);
    }
}
function mode(){
    window.location = "mode.html";
}
  var numMapping = {};
    for(var i = 0; i < nums.length; i++){
        if(numMapping[nums[i]] === undefined){
            numMapping[nums[i]] = 0;
        }
            numMapping[nums[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for(var prop in numMapping){
        if(numMapping[prop] > greatestFreq){
            greatestFreq = numMapping[prop];
            mode = prop;
        }
    }
    document.write(parseInt(mode));

