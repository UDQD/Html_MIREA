var m=[2, 5, 9, 15, 0, 4];
for (var i=0; i<m.length; i++)
	if (m[i]>3 && m[i]<10)
		alert(m[i]);

var res=0;
for (var i=0; i<m.length; i++)
	if (m[i]>0)
		res+=m[i];
alert(res);

var m2=[1, 2, 5, 9, 4, 13, 4, 10];
for (var i=0; i<m2.length; i++)
	if (m2[i]==4)
	{
		alert("Есть!");
		break;
	}
	
var m3=[10, 20, 30, 50, 235, 3000];
for (var i=0; i<m3.length; i++)
	if (((m3[i].toString())[0]==1) || ((m3[i].toString())[0]==2) || ((m3[i].toString())[0]==5))
		alert(m3[i]);

var str="-";
var m4=[1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i=0; i<m4.length; i++)
		str+=m4[i]+"-";
alert(str);

var m5=["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];
for (var i=0; i<m5.length; i++)
	if (i==5 || i==6)
		alert(m5[i].bold());
	else alert(m5[i]);
	
var m6=["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];
for (var i=0; i<m6.length; i++)
	if (i==5)
	{
		var day=m6[i];
		alert(m6[i].italics());
	}
	else alert(m6[i]);
	
var n=1000, num=0;
while(n>50)
{
	n/=2;
	num++;
}
alert(n+" "+num);
