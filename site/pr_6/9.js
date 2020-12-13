var str="я учу javascript!";
alert(str.length);

alert(str.substr(0, 1));
alert(str.substring(0, 1));
alert(str.slice(0, 1));

alert(str.indexOf("учу"));

var length=20;
if (str.length>length){
	str=str.substr(0, length);
	str+="...";
}
alert(str);
