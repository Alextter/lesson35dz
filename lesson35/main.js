// // let bool = 1 || 0
// // boool = 1 || 1
// // booool = 0 || 0
// // boooool = 0 || 1

// // alert(bool)
// // alert(boool)
// // alert(booool)
// // alert(boooool)

// // let x = prompt("Магазин работает?")
    
// // if (x < 10 || x > 18) {
// //     alert("Магазин не работает")
// // } 
// // else{
// //     alert("Магазин работает")
// // }

// // let bool = 1 && 0
// // boool = 1 && 1
// // booool = 0 && 1
// // boooool = 0 && 0


// // alert(bool)
// // alert(boool)
// // alert(booool)
// // alert(boooool)

// alert( 1 && 5)


// alert( null && 5)
// alert( 1 &&  "kjp")
// alert( 1 && 2 &&  "asd")



// let bool = !0
// boool = !1
// alert(bool)
// alert(boool)

// alert( !!null)
// alert ( alert (1) && 2 && alert(3))

// alert( null || 2 && 3 || 4)

let x = prompt(" Кто ты?")
if (x == "Sasha"){
    let f = prompt("Пароль?")
    if (f==12345){
        alert("Приветствую")
    }
    else if( f=="Назад"){
        alert("Отменить действие")
    }
    else{
        alert("Неверный пароль")
    }

}
else if( !x == "Sasha"){
    alert("Я вас не узнаю")
   
}
else(
    
    alert("Ваши действия не зарег. на этом сайте")
)