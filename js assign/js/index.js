//EXERCISE 1: The Fortune Teller
/*Why pay a fortune teller when you can just program your fortune yourself? 
Store the following into variables: job title, geographic location, annual salary, 
company name. Output your fortune to the screen like so: 
"You will be a X in Y, making $N for Z."*/
let job_title, geographic_location, annual_salary,company_name;
job_title="Web Developer";
geographic_location="Canada";
annual_salary=100000;
company_name="Google";
console.log("You will be a "+job_title+" in "+geographic_location+" , making $"+annual_salary+" for "+company_name);

//EXERCISE 2: The Age Calculator
/*Forgot how old someone is? Calculate it! Store the current year in a variable.
 Store their birth year in a variable. Calculate their age based on the stored 
 values. Output them to the screen like so: "They are NN years old.", substituting 
 the values.*/
let current_year=2019;
let birth_year=1994;
let age=current_year-birth_year;
console.log("They are "+age+" years old");

//EXERCISE 3: The Lifetime Supply Calculator
/*Ever wonder how much a "lifetime supply" of your favorite snack is? 
Wonder no more! Store your current age into a variable. Store a maximum age into a 
variable. Store an estimated amount per day (as a number). 
Calculate how many you would eat total for the rest of your life. 
Output the result to the screen like so: "You will need NN to last you 
until the ripe old age of X".*/
let current_age=25;
let maximum_age= 70;
let amount_per_day=2;
let supply=((maximum_age-current_age)*365)*amount_per_day;
console.log("You will need "+supply+" to last you until the ripe old age of "+maximum_age);

//EXERCISE 4: The Geometrizer
/*Calculate properties of a circle, using the definitions here. Store a radius into 
a variable. Calculate the circumference based on the radius, and output 
"The circumference is NN". Calculate the area based on the radius, and 
output "The area is NN".*/
let radius=5;
console.log("The circumference is "+ 2*3.14*radius);
console.log("The area is "+3.14*radius*radius);

//EXERCISE 5: The Temperature Converter
/*It's hot out! Let's make a converter based on the steps here. 
Store a celsius temperature into a variable. 
Convert it to fahrenheit and output "NN°C is NN°F".  
Now store a fahrenheit temperature into a variable. 
Convert it to celsius and output "NN°F is NN°C."*/
let temp_in_celcius=43;
let convert_celcius_to_fahrenheit=(temp_in_celcius*(9/5))+ 32;
let temp_in_fahrenheit=35;
let convert_fahrenheit_to_celcius=(temp_in_fahrenheit -32)*(5/9);
console.log(temp_in_celcius+" C is "+convert_celcius_to_fahrenheit+" F");
console.log(temp_in_fahrenheit+" F is "+convert_fahrenheit_to_celcius+" C");