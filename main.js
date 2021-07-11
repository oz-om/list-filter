let languages = document.querySelectorAll('.langList li'),
final = document.getElementById('nothing'),
input = document.getElementById('search');

languages.forEach(li => {
  li.classList.add('hide');
})
let arr = Array.from(languages);

input.onkeyup = function () {
  let letters = input.value.toUpperCase();
  for (let i = 0; i < languages.length; i++) {
    let word = languages[i].textContent.toUpperCase();
    if (word.indexOf(letters) > -1) {
      languages[i].classList.remove('hide');
    } else {
      languages[i].classList.add('hide');
    }
    let hide = arr.filter(el => el.classList.contains('hide'));
    if (hide.length == languages.length) {
      final.classList.remove('hide');
    } else {
      final.classList.add('hide');
    }
    if (input.value == '') {
      languages[i].classList.add('hide');
      final.classList.add('hide')
    }
  }
}
