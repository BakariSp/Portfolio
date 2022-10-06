window.onload = function() {
const thumbs = document.querySelectorAll('.small-view');
console.log(thumbs);

thumbs.forEach(function(item,index){
    item.onclick = function(){
    img = document.getElementById('big-image');
    img.src = this.src;

    this.className = "current-image";
    }
   });
}