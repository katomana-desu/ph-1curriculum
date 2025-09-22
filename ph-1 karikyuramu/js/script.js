/*/*week9-問題1
console.log("こんにちは")
/*let hello = こんにちは
console.log("I am learning JavaScript")



/*問題2
console.log(5*7)
console.log("2+5")
console.log(9%4)
console.log(3**4)
console.log(4*8/2+4-10)
console.log(4*40/2-65+5)
console.log(8+2-5*12/2+50)



/*問題3
let variable = "POSSE"
console.log(variable)



/*問題4-1
let user = "POSSE太郎";

if (user == "POSSE太郎") {
    console.log("正解です！！");
} else if (user==POSSE次郎) {
        console.log("いまいちです！");
    } else {
        console.log("不正解です！")
    }

let age = 17;
let isStudent = true;



/*問題4-2
if (age < 18 && isStudent) {
    console.log("学生割引が適用されます。")
} else if (isStudent) {
    console.log("学生割引は適用されません。")
} else {
    console.log("学生割引は適用されません。")
}



/*問題5-1
for (let number = 5; number <= 15; number ++) {
    console.log(number);
}



/*問題5-2
for (let number = 1; number <= 20; number ++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}



/*問題6-1
const introduce = function() {
    console.log("こんにちは！");
    console.log("POSSE太郎です!");
}

introduce();



/*問題6-2
const calculateTotalPrice = function(price, quantity) {
    const totalPrice = price * quantity;
    console.log(totalPrice)
}

calculateTotalPrice(200, 3)



/*問題6-3
const calculateDiscountedPrice = function(price, discountRate) {
    const discountAmount = price * discountRate;
    const discountedPrice = price - discountAmount;
    console.log(discountedPrice)
}

calculateDiscountedPrice(500, 0.2)




/*week10-問題1

let aboutJa = document.getElementById('aboutJa');
aboutJa.innerHTML = 'POSSEとは - Edited';

/*問題2*/
/*const text = document.querySelector(‘.aboutposse‘).innerHTML
console.log(About POSSE-Edited)*/

/*
let document.querySelector('.aboutposse').innerHTML = 'About POSSE-Edited';
*/

    /* let aboutEn = document.querySelector('.aboutposse');
    aboutEn.innerHTML = 'About POSSE - Edited';

    /*問題3
    let aboutEv = document.getElementsByClassName('h_1event');
    aboutEv[0].style.color = "#FF0000"

    /*問題4
    /*let aboutDr = document.querySelectorAll('.dailylife_english_daily_record');
    aboutDr[0].style.font size = "10px"*/

    /*let text = document.getElementsByClassName('dailylife_english_daily_record');
    text[0].style.fontSize = "10px";

    /*問題5
    let testH2 = document.createElement('h2');
    let testTitle = document.createElement('span');
    testH2.className = 'title';
    testTitle.innerHTML = 'テスト見出し';
    testTitle.className = 'title-ja';

    let test_parents = document.getElementById('test_parents');
    testH2.appendChild(testTitle)
    test_parents.appendChild(testH2)

        /*問題6
        const btn = document.getElementById('btn');
        btn.addEventListener('click', function(){console.log('ハンバーガーメニューが開きます。')})*/


    const header = document.getElementById('js-header');
    const btn = document.getElementById('btn');

    btn.addEventListener('click',  function () {
        console.log('ハンバーガーメニューが開きます。')
        header.classList.toggle("is-open");
    }) 

    const mainSection = document.getElementById('main-section')


    window.addEventListener("scroll", function(){
        const scroll = window.scrollY
        const mainHeight = mainSection.clientHeight
        const headerHeight = header.clientHeight
        if (scroll > mainHeight - headerHeight){
            header.classList.remove('transparent')
        }else{
            header.classList.add('transparent')
        }
    })

    // const eventSplideOptions = {
    //     type: 'loop',
    //     gap: 40,
    //     perPage: 3,
    //     perMove: 1,
    //     padding: {
    //         left: '28px',
    //         right: '28px'
    //     },
    //     pagination: {
    //         type: 'bullets',
    //         clickable: true,
    //     }
    // }

    // new Splide('#event_slider', eventSplideOptions).mount();

    document.addEventListener('DOMContentLoaded', function () {
    new Splide('#event_slider', {
    type: 'loop',
    gap: 40,
    perPage: 3,
    perMove: 1,
    padding: {
        left: '28px',
        right: '28px'
    },
    pagination: true,
    breakpoints: {
        767: {
        perPage: 1
        }
    }
    }).mount();
  // 日常生活セクションのスライダー（スマホのみ）
    if (window.matchMedia('(max-width: 767px)').matches) {
    new Splide('#daily_slider', {
        type: 'loop',
        gap: 40,
        perPage: 1,
        perMove: 1,
        padding: {
        left: '28px',
        right: '28px'
        },
        pagination: true
    }).mount();
    } else {
        
    }
    });

//     document.addEventListener('DOMContentLoaded', function () {
//     new Splide('#daily_slider', {
//     type: 'loop',
//     gap: 40,
//     perPage: 3,
//     perMove: 1,
//     padding: {
//         left: '28px',
//         right: '28px'
//     },
//     pagination: true,
//     breakpoints: {
//         767: {
//         perPage: 1
//         }
//     }
//     }).mount();
// });

