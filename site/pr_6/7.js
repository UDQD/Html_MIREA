var arr=[12, 15, 20, 25, 59, 79], result=0;
for (var i=0; i<arr.length; i++)
	result+=arr[i];
alert(result/arr.length);

var num=5;
result=1;
while(num>=1)
{
	result*=num;
	num--;;
}
alert(result);
