// let name= prompt('Тебя как зовут?', );
// alert(`Тебя зовут ${name}`);
// let friend=prompt('А как зовут твоего другa?', );
// friend=prompt(` о точно это ${friend} Рублевский?`);
// if(friend=='да'||friend=='Да'){
// 	alert('Как хорошо, что я не забыл))')}
// 	else{
// 	let question=prompt(`Тю еб твою мать а как его зовут?`,);
// 	alert(`ОТ СПАСИБО теперь буду знать что его зовут ${question}`);
// }



// let question=prompt('выберите число и напишите его сюда', );
// if (question>0) {alert('1');
// } 
// 	else if (question<0) {alert(-1);
// }
// 		else {alert(0);
// 	}
// let result;
// result = (a + b < 4) ? 'Мало' : 'Много';

// let message;

//  message = (login == 'Сотрудник')? 
//   'Привет':
// (login == 'Директор')? 'Здравствуйте':
// (login == '')? 'Нет логина':
// '';

// let age=16;
// if (!(age>=14&&age<=90)) {alert('hello');
// }


// let userName = prompt('how are you?','' );
// if (userName == 'admin') {
// 	let pass = prompt('Your password?','');
// 	if (pass == 'qwerty') {
// 		alert('Wow it good');
// 	} else if (pass == '' || pass == null) {
// 		alert('Canceled Pass');
// 	} else {
// 		alert('No right');
// 	}
// }else if (userName == '' || userName == null){
// 	alert('Canceled');
// } else {
// 	alert('no search');
// }
	




// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }



// 	let question=prompt(`Тю еб твою мать а как его зовут?`,);
// 	alert(`ОТ СПАСИБО теперь буду знать что его зовут ${question}`);
// }
// let x = 99;

// while (x<100) {

//   let x = prompt("Введите число больше 100", '');

//   if (x>100 || x == null) break; 

//   alert(x);

// }


nextPrime:
 for (let n = 2; n <= 19; n++) {
 	for (let j = 2; j < n; ++j){
  if (n % j == 0) continue nextPrime;
   
  }
   alert( n );}
















