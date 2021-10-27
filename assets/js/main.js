var opposite_word = [
{
  title :'Identify the following picture',
  ans : 'wo',
  img : './assets/images/1.png'
},
{
  title : 'Identify the following picture',
  ans : 'ye',
  img : './assets/images/mouse.gif'
},
{
  title : 'Identify the following picture',
  ans : 'ji',
  img : './assets/images/cpu.jpg'
},
{
  title : 'Identify the following picture',
  ans : 'le',
  img : './assets/images/keyboard-removebg-preview.png'
}
]
let x=0;
let audio = document.getElementById("audio");
let img1 = document.getElementById('img1')
let bottom = document.querySelector('.bottom')
let drop = document.querySelector('.drop')
let title = document.querySelector('.title h2');
$(function() {
  $('.drag').draggable();
  $('.dragdrop').draggable({
    revert: true,
    placeholder: true,
    droptarget: '.drop',
    drop: function(evt, droptarget) {

     var drag_id = $(this)[0].id
      var drop_id = droptarget.getAttribute('ans')
      var img = $(this)
      console.log(drop_id)
      console.log(drag_id)
      console.log(img)
      if(drop_id === drag_id ){
        x++;
        audio.play();
        if ( x == opposite_word.length){
          x = 0 ;
        }else{
          document.getElementById('gif2').style.display = 'none';
          document.getElementById('gif').style.display = 'block';
          if(drop_id.includes('ye')){
            img.appendTo(droptarget);
          }else{
          img.appendTo(droptarget);
      
        }
          window.setTimeout(function(){
            ondropTarget(img)
          },2000)
        }
    }else {
     document.getElementById('gif2').style.display = 'block'
    }

    }
  });

});
function ondropTarget( img ){

  document.getElementById('gif').style.display = 'none'
  img1.src = opposite_word[x].img
  title.innerText = opposite_word[x].title
  drop.setAttribute('ans',opposite_word[x].ans)
  img.appendTo(bottom)
  

}