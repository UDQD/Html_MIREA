var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for (let key in obj){
	alert(key+" "+obj[key]+'\n');
}

var obj = {Коля: 200, Вася: 300, Петя: 400};

for (let key in obj){
	alert(key+" - зарплата "+obj[key]+" долларов\n");
}
