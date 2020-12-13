var arr1=[1, 2, 3, 4, 5];
arr1.splice(1, 2);
alert(arr1);

arr1=[1, 2, 3, 4, 5];
arr1.splice(0, 1);
arr1.splice(3, 1);
alert(arr1);

arr1=[1, 2, 3, 4, 5];
arr1.splice(3,0,'a');
arr1.splice(4,0,'b');
arr1.splice(5,0,'c');
alert(arr1);

arr1=[1, 2, 3, 4, 5];
arr1.splice(1,0,'a');
arr1.splice(2,0,'b');
arr1.splice(6,0,'c');
arr1.splice(8,0,'e');
alert(arr1);
