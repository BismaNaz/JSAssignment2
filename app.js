////////////////////   Chapter 21 - 25   /////////////////////////////////////////////////////////////////

// 1.
// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");
// var fullName = firstName+" "+lastName;
// alert("welcome "+fullName);
  

// 2.
// var mobile = prompt("enter your Favourite mobile model");
// document.write("My favourite phone is: "+mobile);
// document.write("<br>Length of string: "+mobile.length);


// 3.
// var string = "Pakistani";
// document.write("String: "+string);
// document.write("<br> Index of 'n': "+string.indexOf("n"));


// 4.
// var string = "Hello World";
// document.write("String: "+string);
// document.write("<br> Index of 'n': "+string.lastIndexOf("l"));


// 5.
// var string = "Pakistani";
// document.write("String: "+string);
// document.write("<br>  character at Index 3: "+string.charAt(3));


// 6.
// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");
// var fullName = firstName.concat(lastName);
// alert("welcome "+fullName);


// 7.
// var str = "Hyderabad";
// document.write("city: "+str);
// for (var i=0; i<str.length;i++){

//     if (str.slice(i,i+9) === "Hyderabad"){
//         str2 = "Islam"+str.slice(i+5);
//         document.write("<br>After replacement: "+str2);
//     }
// }


// 8. 
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var msg = message.replace(/and/g,"&"); 
// document.write(msg);


// 9.
// var value = "472";
// document.write("Value: "+value+"<br> Type: String");
// document.write("<br>Value: "+Number(value)+"<br> Type: number");


// 10.
// var x = prompt("enter any string");
// var y= x.toUpperCase();
// document.write("user input: "+x);
// document.write("<br>Upper case: "+y);


// 11. 
// var str = prompt("enter any string");
// document.write("user input: "+str);
// var str1 = str.slice(0,1);
// var str2 = str.slice(1);
// document.write("<br>Title case: "+str1.toUpperCase()+""+str2.toLocaleLowerCase())


// 12. 
// var num = 35.36;
// var x = num.toString().replace(".","");
// document.write("Number:"+num);
// document.write("<br>Result:"+x);


// 13. 
// var string = prompt("Enter username");
// var matchfound = true;
// for (var i=0; i<string.length;i++)
// {
// var checkChar = string.charCodeAt(i)
// if (checkChar>=33 && checkChar<=64){
//     matchfound=false;
//     alert("Please enter a valid username")
// break;
// }
// }
// if (matchfound===true){
//     alert("hello "+string)
// }


// 14.
// var arr = ["cake", "applepie", "cookie","chips","patties"];
// var str = prompt("Welcome to ABC Bakery, what do you want to order");
// var strcon = str.toLowerCase();
// var matchfound = false;
// for (var i = 0; i<arr.length; i++){
//     if (arr[i]===strcon){
//         matchfound= true;
//         document.write(strcon+" is available at index "+i+" in our bakery");
//     }
// }
// if (matchfound===false){
//     document.write("We are sorry . "+strcon+" is not available in our bakery");
// }


// 15. 
// var input = prompt("Enter password");
// document.write("Enter password: "+input)
// if (isNaN(parseInt(input[0]))) {

//   if (input.length>=6){
                
//                     var passw1= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//                     if(input.match(passw1)) 
//                     { 
//                     document.write('<br>Correct , Hello World! ')
                
//                     }
//                     else{
//                         document.write("<br>your password should contain alphabets and numbers")
//                     }
                
//             }
//             else{
//                 document.write("<br>Your password alteast 6 character long")
//             }
//         }

// else {
//     document.write("<br> Password cannot begin with a number")
//  document.write("<br>Please enter a valid password")
// }



// 16. 
// var str = "University of Karachi";
// var arr = str.split("");
// var text = "";
// var i;
// for (i = 0; i < arr.length; i++) {
//   text += arr[i] + "<br>"
// }
// document.write(text);


// 17. 
// var string = prompt("user input");
// document.write("user input: "+string);
// var x = string.charAt(string.length-1);
// document.write("<br> Last character of input: "+x);


// 18.
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';
//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }
//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
// document.write("Text: The quick brown fox jumps over the lazy dog")
// var result = count("The quick brown fox jumps over the lazy dog","the");
// document.write("<br>There are "+result+" occurence(s) of word 'the'");



//////////////    Chapter 26 - 30    //////////////////////////////////////////////////////////////////////////////////////

// 1.
// var num = +prompt("enter postive integer");
// document.write("number: "+num);
// document.write("<br>rounf off value: "+Math.round(num));
// document.write("<br>floor value: "+Math.floor(num));
// document.write("<br>ceil value: "+Math.ceil(num));


// 2.
// var num = +prompt("enter negative integer");
// document.write("number: "+num);
// document.write("<br>rounf off value: "+Math.round(num));
// document.write("<br>floor value: "+Math.floor(num));
// document.write("<br>ceil value: "+Math.ceil(num));


// 3.
// var num = +prompt("enter integer");
// document.write("the absolute value of "+num+" is "+Math.abs(num));


// 4.
// var num = Math.random() *6;
// var num1 = Math.floor(num);
// var num2 = Math.ceil(num);
// document.write("random dice value: "+num1);
// document.write("<br>random dice value: "+num2)


// 5.
// var toss = Math.random()*2;
// var floor = Math.ceil(toss);
// if (floor===2){
//     document.write(floor+"<br> random coin value: Heads")
// }
// else{
//     document.write(floor+"<br> random coin value: Tails")
// }


// 6.
// var rand = Math.random()*100;
// var num = Math.ceil(rand);
// document.write("random number between 1 and 100 : "+num);


// 7.
// var wegt = prompt("Enter your weight in kilograms");
// document.write("the weight of user is "+parseInt(wegt)+" kilograms")


// 8.
// var num = +prompt("Enter a number between 1 and 10");
// var rand = Math.random()*10;
// var rand2 = Math.ceil(rand);
// if (rand2===num){
//     alert("Congraulate");
// }
// else{
//     alert("Try again!");
// }


////////////// Chapter 31 - 34   //////////////////////////////////////////////////////////////////////////////

// 1.
// var a = new Date();
// document.write(a);


// 2.
// var months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = months[theMonth];
// document.write("Current month: "+nameOfMonth);


// 3.
// var a = new Date();
// var b = a.toString();
// var  c = b.slice(0,3);
// document.write("Today is "+c);


// 4.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  if (nameOfToday==="Sat"|| nameOfToday==="Sun"){
//      document.write("It’s Fun day")
//  }
// else{
//     document.write("Busy day")
// }


// 5.
// var a = new Date();
// var b = a.getDate();

// if (b<16){
//     document.write("first fifteen days of the month")
// }
// else{
//     document.write("last days of the month");
// }


// 6.
// var today = new Date();
// document.write("Current Date: "+today);
// var msToday = today.getTime();
// document.write("<br>Elapsed miliseconds since January 1, 1970: "+msToday);
// var minToday = msToday /(1000*60*60);
// document.write("<br>Elapsed minutes since January 1, 1970: "+minToday); 


// 7.
// var today = new Date();
// var x = today.getHours();
// if (x<=12){
// document.write("Its AM ")
// }
// else{
//     document.write("Its PM ")   
// }


// 8.
// var LaterDate = new Date();
// var x = LaterDate.setMonth(11);
// var y = LaterDate.setFullYear(2020);
// var z = LaterDate.setDate(31);
// document.write("Later Date: "+LaterDate);


// 9.
// var ramadan = new Date("Jun 18, 2015");
// var today = new Date();
// var ramadanMs = ramadan.getTime();
// var todayMs = today.getTime();
// var diff = todayMs-ramadanMs;
// var days = diff /(1000*60*60*24);
// var daysFloor = Math.floor(days);
// document.write(""+daysFloor+" days have passed since 1st ramadan 2015");


// 10.
// var x = new Date("Dec 05, 2015");
// var TodayDate = new Date();
// var xMs = x.getTime();
// var TodayMs = TodayDate.getTime();
// var diff = TodayMs- xMs;
// var sec = diff /(1000*60);
// var secfl = Math.floor(sec);
// document.write("On reference date: "+TodayDate+", "+secfl+" seconds had passed since begining of 2015");


// 11.
// var TodayDate = new Date();
// document.write("current date: "+TodayDate);
// var hr = TodayDate.getHours();
// var x= hr -1;
// var y = TodayDate.setHours(x);
// document.write("<br>1 hour ago it was : "+TodayDate);


// 12.
// var TodayDate = new Date();
// document.write("current date: "+TodayDate);
// var y = TodayDate.setFullYear(1920);
// document.write("<br>100 years back it was : "+TodayDate);


// 13.
// var age = +prompt("enter age");
// var today = new Date();
// var currYear = today.getFullYear();
// var diff = currYear - age;
// document.write("your age is:"+age);
// document.write("<br>your birth year is:"+diff);


// // 14.
// var CustomerName = prompt("Enter customer name");
// var CurrentMonth = prompt("Enter month");
// var  NumberofUnits = +prompt("Enter units");
// var ChargesPerUnit = +prompt("Enter per unit charges");
// var NetAmountPayable = NumberofUnits*ChargesPerUnit;
// var LatePaymentSurcharge = 350;
// var GrossAmountPayable = NetAmountPayable +LatePaymentSurcharge;
// document.write("<br>Customer Name: <b>"+CustomerName+"</b>");
// document.write("<br>Month: <b>"+CurrentMonth+"</b>");
// document.write("<br>Number of units: <b>"+NumberofUnits+"</b>");
// document.write("<br>Charges per units: <b>"+ChargesPerUnit+"</b>");
// document.write("<br><br> Net Amount Payable (within Due Date): <b>"+NetAmountPayable+"</b>");
// document.write("<br> Late Payment Surcharge: <b>"+LatePaymentSurcharge+"</b>");
// document.write("<br> gross Amount Payable (after Due Date): <b>"+GrossAmountPayable+"</b>");





////////////////////   Chapter 35 - 38   /////////////////////////////////////////////////////////////////////////

// 1.
// function date(){
//     var a = new Date()
//     return a
// }
// var b = date();
// document.write(""+b);


// 2.
// function greet(firstName,lastName){
//     alert("hello "+firstName+" "+lastName)
// }
// greet(prompt("enter your first name"),prompt("enter your last name"))


// 3.
// function add(a,b){
//     return a+b
// }
// var result = add(+prompt("enter first number"),+prompt("enter second number"))
// document.write(" ",result)


// 4.
// function calc(num1,opr,num2){
//     if (opr==="+"){
//         return num1+num2
//     }
//     else if (opr==="-"){
//         return num1-num2
//     }

//     else if (opr==="*"){
//         return num1*num2
//     }
//     else if (opr==="/"){
//         return num1/num2
//     }
// }
// var result = calc(+prompt("enter first number"),prompt("enter operator"),+prompt("enter second number"));
// document.write(" "+result);


// 5.
// function square(a){
//     return a*a
// }
// var result = square(4);
// document.write(" "+result);


// // 6.
// function factorial(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorial(num - 1));
//     }
//   }
// var result = factorial(4);
// document.write(" "+result);


// 7. 
// function counting(a,b){
//     document.write(""+a)
//     for(var i=a;i<b;i++){
        
//         var x =i+1;
//         document.write(" <br> "+x)
//     }
// }
// counting(+prompt("enter start number"),+prompt("enter end number"));


// 8. 
// var x , y;
// function hypotenuse(base,perpendicular){
     
//     function square(base,perpendicular){
//      return   (Math.pow(base, 2) + Math.pow(perpendicular, 2))
//     }
// res= square(x,y)
//    return  Math.sqrt(res);
// }
// x= +prompt("enter base");
// y= +prompt("enter perpendicular");
// var z = hypotenuse(x,y);
// document.write("hypotenuse of a right angle triangle: "+z);


// 9.
// function area(width,height){
//     return width*height
// }
// // i.
// var result = area(4,4);
// document.write(" "+result);
// // ii.
// var a=4;
// var b=4;
// var result1 = area(a,b);
// document.write(" <br>"+result1);


// 10.
// function palindrome(word){
//     var check = "";
//     for (var i= word.length - 1; i>=0; i--){
//         check += word[i]
//     }
//    if( word===check) {
//         document.write(word+" is palindrme word");}
// }
// palindrome( prompt("Enter your word "));


// 11.
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("Example string: the quick brown fox")
// document.write("<br>Expected Output: "+uppercase("the quick brown fox"));


// 12.
// function find_longest_word(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var result = arr[0];

//   for(var i = 1 ; i< arr.length ; i++)
//   {
//     if(result.length < arr[i].length)
//     {
//     result = arr[i];
//     } 
//   }
//   return result;
// }
// document.write("Example String: Web Development Tutorial")
// document.write("<br>Expected output: "+find_longest_word('Web Development Tutorial'));


// 13.
// function characterCount(str, letter) 
// {
//  var letterCount = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }
// document.write(" "+characterCount( 'JSResourceS.com', 'o'));


// 14.
// const pi = 3.14;
// function  calcCircumference(radius){
//     return 2*pi*radius
// }

// document.write("The circumference is : "+calcCircumference(4));

// function calcArea(radius){
//     return pi*radius*radius
// }

// document.write("<br>the Area is : "+calcArea(4));

