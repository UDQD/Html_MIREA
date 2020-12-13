let matrix=[[1,2,3],[4,5,6],[7,8,9]];
alert(matrix[1][0]);

let mat={js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(mat["js"][0]);

let week={ru:["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"], en:["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]};
alert(week["ru"][0]+" "+week["en"][2]);

let lang="ru", day=3;
alert(week[lang][day-1]);
