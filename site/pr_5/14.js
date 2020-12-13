var aW=1, strW="";
while (aW<101)
{
	strW+=aW+"\n";
	aW++;
}
alert(strW);
var strF="";
for (var i=1; i<101; i++){
	strF+=i+"\n";
}
alert(strF);

var aW=11, strW="";
while (aW<34)
{
	strW+=aW+"\n";
	aW++;
}
alert(strW);
var strF="";
for (var i=11; i<34; i++){
	strF+=i+"\n";
}
alert(strF);

var aW=0, strW="";
while (aW<101)
{
	strW+=aW+"\n";
	aW+=2;
}
alert(strW);
var strF="";
for (var i=0; i<101; i+=2){
	strF+=i+"\n";
}
alert(strF);

var aW=1, result=0;
while (aW<101)
{
	result+=aW;
	aW++;
}
alert(result);
result=0;
for (var i=1; i<101; i++){
	result+=i;
}
alert(result);
