const smileFace = document.querySelector('.js_face');
const winkFace = document.querySelector ('.js_wink');
const buttom = document.querySelector ('.js_head');
function handleMousse (event){
    event.preventDefault();
    smileFace.classList.remove('hidden');
    winkFace.classList.add('hidden');
}
function changeFace (event){
    event.preventDefault();
    smileFace.classList.add('hidden');
    winkFace.classList.remove('hidden');
    console.log(event);
    buttom.addEventListener('mouseleave', handleMousse);
}


buttom.addEventListener('click', changeFace);