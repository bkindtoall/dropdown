
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "That you are too thin."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "That you are healthy."
}
if(finalBmi > 25){
document.bmiForm.meaning.value = "That you are overweight."
}
}
else{
alert("Please Fill in everything correctly")
}
}
function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}
/* var beverage = $("#beverage").val();  ---- Dropdown--- creates all same value, next is where each entry has it's own value
*/
<select class="form-control" id="beverage">
  <option value="1">Coffee</option>
  <option value="2">Tea</option>
  <option value="3">Kombucha</option>
  <option value="4">Water</option>
</select>

/* the above 1-4 are still strings and need to be parseInt processed to number */
/*for radio/dialogue buttons*/
var flavor = $("input:radio[name=flavor]:checked").val();

/*for calendar with dob info*/
var dob = $("#born").val();

/*to find a color*/
var favoriteColor = $("#color").val();
