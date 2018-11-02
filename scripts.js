var a = ['Петров','Иванов','Сидоров'];
console.log(a);
a.unshift('Давиденко'); 
a.push('Тирса');
console.log(a);
delete a[3];
console.log(a);
var students = {'Петров':98,'Иванов':2,'Сидоров':50};
console.log(students);
var k = [];
for (var student in students) {
    k.push([student, students[student]]);
}


k.sort(function(a, b) {
    return a[1] - b[1];
});
console.log(k);
var max = 0;
for (var key in students){
    if(students[key]>max){
        max = students[key];
    }
}
var min = 100;
for (var key in students){
    if(students[key]<min){
        min = students[key];
    }
}
console.log('max:'+max+'min: '+min)