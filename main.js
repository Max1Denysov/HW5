// 1. Превращает число в слово


const numb= {0:'Ноль', 1:'Один', 2:'Два', 3:'Три', 4:'Четыре', 5:'Пять', 6:'Шесть', 7:'Семь', 8:'Восемь', 9:'Девять', 10:'Десять',
               11:'Одинадцать', 12:'Двенадцать', 13:'Тринадцать', 14:'Четырнадцать', 15:'Пятнадцать', 16:'Шестнадцать', 17:'Семнадцать', 18:'Восемнадцать', 19:'Девятнадцать',
               20:'Двадцать', 30:'Тридцать', 40:'Сорок', 50:'Пятдесят', 60:'Шестдесят', 70:'Семьдесят', 80:'Восемьдесят', 90:'Девяносто', 100:'Сто'};
const mw = {1000:'ТысячА', 1e6:'Миллион', 1e9:'Миллиард', 1e12:'Триллион', 1e15:'Квадриллион'};

function word(n,l) {
  let res = [];
  if(n>=100) {res.push(numb[n/100|0],numb[100]); n%=100;}
  if(n>=20) res.push(n%10?`${numb[n-n%10]}-${numb[n%10]}`:`${numb[n]}`);
  else if(n>0) res.push(numb[n]);
  return res.length?res.join(' ')+(l>1?' '+mw[l]:''):'';
}

function conv(n) {
  n=+n;
  if(isNaN(n)) throw new Error('ошибка');
  let sign = n<0?'минус ':'';
  n=Math.abs(n);
  if(!n) return 'ноль';
  if(n===Infinity) return sign+'Бесконечность';
  let [integral, decimal] = [Math.trunc(n), +(n-Math.trunc(n)).toFixed(5)];
  let [q,t,b,m,h,o] = [1e15,1e12,1e9,1e6,1e3,1].map(l=>word(n%(l*1e3)/l|0,l));
  return sign+([q,t,b,m,h,o].filter(s=>s).join(' ')||'ноль');
}


function numToWord(n) {
  if(n<0) return '0';
  if(n===0) return 'бесконечность';
  return conv(n);
}
alert(conv(23))

//2. статистика букв,чмсел,символов в строке


function count(input) {
 let numb = input.split``.filter(v=>/[0-9]/.test(v)).length
 let letter = input.split``.filter(v=>/[a-zA-Z]/.test(v)).length 
 let symb = input.split``.filter(v=>/[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(v)).length 
 let arr = [numb,letter,symb]
  alert('[чисел/букв/символов] = ' + arr)
}
count('Ja1vaScri!2ptCras3hCou4rse+-')


//3. Большие,маленькие буквы и замена чисел на ' _ '

function cases(str) {
  return str.split` `
    .map(v =>
      v.replace(/./gi, v => {
        if (v === v.toLowerCase()) return v.toUpperCase();
        if (v === v.toUpperCase()) return v.toLowerCase();
    
    
      })
    )
   .join` `;
   
}
alert(cases('ja4va ScRi5Pt Cr5Sh').replace(new RegExp("[0-9]", "g"), "_"))

//TASK 2 
https://max1denysov.github.io/HW5/
