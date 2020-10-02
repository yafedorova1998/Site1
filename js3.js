var parol=prompt('Выберите цвет фона'); 
function change_color(obj) {
       obj.value && (document.body.style.backgroundColor = obj.value);
       obj.src && (document.body.style.backgroundImage = 'url('+obj.src+')');
     }


