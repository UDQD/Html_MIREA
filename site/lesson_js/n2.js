
var words = ["ананас","корабль","лук","суп","капибара","борщ","креветка","чебупеля","нож","человек"]
var word = words[Math.floor(Math.random()*words.length)]
var n = word.length
var word_out = []
for(var i=0; i<word.length; i++){
    word_out.push("_")
}

var rem = word.length

while(rem>0){
    var t = false
    alert(word_out.join(" "))
    var ansv = prompt("Буква: ")
    if(ansv === NaN){
        break
    }else if(ansv.length !== 1){
        alert("Введите только одну букву")
    }else{
        for(var j=0; j<word.length; j++){
            if(word[j]===ansv){
                word_out[j] = ansv
                rem--
                t = true
            }
        }
        if(t){
            alert("угадал!")
        }else{
            alert("не угадал"+"Осталось "+n+" попыток")
            n--
            
        }
    }
    if(n<=0){
        alert("Ты проиграл")
        break
    }
}
if(n>0){
alert("Молодец, ты угадал слово "+ word)
// alert(word_out)
}