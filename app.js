var city=prompt("Enter your City Name");
if (city==="Karachi"){document.write("Welcome to the city of lights")}

var gender=prompt("Enter your Gender");
if (gender==="Male"){document.write("<br\>Good Morning Sir")}
if(gender==="Female"){document.write("<br\>Good Morning Ma'am")}

var signalColor=prompt("Enter signal Color");
if (signalColor==="Red"){document.write("<br\>Must Stop")}
if(signalColor==="Yellow"){document.write("<br\>Ready to move")}
if(signalColor==="Green"){document.write("<br\>Move Now")}

var fuelLit=+prompt("How much fuel remaining in your Car");
if (fuelLit<0.25){document.write("<br\>Please Refuel the Car")}
 else {document.write("<br/>you can continue driving");}

 var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
 var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
if (true){ alert("True"); } if (false){ alert("False"); }
if("car" < "cat"){ alert("car is smaller than cat"); }


var math=+prompt("Enter your Marks in Mathematics");
var physics=+prompt("Enter your marks in physics");
var chemistry=+prompt("Enter your marks in chemistry");
var obtained=math+physics+chemistry;
var grade,remarks,percent;
percent=(obtained/300)*100;
if (percent>=80){grade="A-One",remarks="Excellent"}
if (percent>=70 && percent<80){grade="A",remarks="Good"}
if (percent>=60 && percent<70){grade="B",remarks="you need to improve"}
else if(percent<60) {grade="Fail",remarks="Sorry"}

 document.write("<br/><h1>Marks Sheet</h1>")
 document.write("<br/><br/><br/><h3>Total Marks: ",300)
 document.write("<h3>Marks Obtained: ",obtained)
 document.write("<h3>Percentage: ",percent)
 document.write("<h3>Grade: ",grade)
 document.write("<h3>Remarks: ",remarks)