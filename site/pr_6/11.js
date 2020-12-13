var str="я учу javascript!";
alert(str.split(' '));

alert(str.split(''));

str="2020-11-18";
var temp, result;
temp=str.substr(8);
result=temp+".";
temp=str.substr(5,2);
result+=temp+".";
temp=str.substr(0,4);
result+=temp;
alert(result);
