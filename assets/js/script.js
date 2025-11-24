alert(`Futbol Sual Oyununa xoş gəlmisiniz!`);
let score = 0;
let totalQuestions = 5;
let q1 = prompt("Qapıçı ənənəvi olaraq hansı nömrəli forma geyinir?");
if (q1 === `1`) {
  alert(`Düzgündür!`);
  score = score + 1;
} else {
  alert(`Səhv. Doğru cavab: 1`);
}
let q2 = prompt(`Bir futbol komandasının meydanda neçə oyunçusu olur?`);
if (q2 === "11") {
  alert(`Düzgündür!`);
  score = score + 1;
} else {
  alert(`Səhv. Doğru cavab: 11`);
}
let q3 = prompt(`Dünya Kubokunu ən çox qazanan ölkə hansıdır?`);
if (q3.toLowerCase() === `braziliya`) {
  alert(`Düzgündür!`);
  score = score + 1;
} else {
  alert(`Səhv. Doğru cavab: Braziliya`);
}
let q4 = prompt(`Barcelona klubunun stadionunun adı nədir?`);
if (q4.toLowerCase() === `camp nou`) {
  alert(`Düzgündür!`);
  score = score + 1;
} else {
  alert(`Səhv. Doğru cavab: Camp Nou`);
}
let q5 = prompt(`Cristiano Ronaldo ən çox hansı klubda forma geyinib?`);
if (q5.toLowerCase() === `real madrid`) {
  alert(`Düzgündür`);
  score = score + 1;
} else {
  alert(`Səhv. Doğru cavab: Real Madrid`);
}
alert(`Oyun bitdi! Sənin nəticən: ${score} / ${totalQuestions}`);
