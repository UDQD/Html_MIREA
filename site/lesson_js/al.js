// var d = 
//     [
//     "din1",
//     "din2",
//     "din3",
//     "din4",
//     "din5",
//     "din6",
//     "din7"]
// var d2 = []    
// d2[30]=d
// // alert(d2.length)
// var animals = ["cat", "dog", "rat"]
// animals.unshift("me")
// e = animals.pop()
// // alert(e)

// var m1 = ["qwd","efs","sfef"]
// var m2 = [4,5,6]

// var m3 = m1.concat(m2)
// alert(m3[Math.floor(Math.random()*m3.length)])

var words = ["уродливый","вонючий","грязный","тупой","шизанутый"]
var gl = ["говнюк","урод","хрен","мудак","слизняк","пёс"]

for(i = 0; i<10; i++){
var n1 = Math.floor(Math.random()*words.length)
var n2 = Math.floor(Math.random()*words.length)
while(n2==n1){
    n2 = Math.floor(Math.random()*words.length)
}

alert(
words[n1]+" "+
words[n2]+" "+
gl[Math.floor(Math.random()*gl.length)]
)
}