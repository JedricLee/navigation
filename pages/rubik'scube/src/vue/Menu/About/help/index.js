
window.onload= function(){
    var imgs = document.getElementsByClassName("pic");
    imgs[0].onclick = function(e){
        e.target.classList.toggle("show");
    }
}

















































// window.onload= function(){
//     var imgs = document.getElementsByClassName("pic");
//     for (const img of imgs) {
//         img.onclick = function(e){
//             e.target.classList.toggle("show");
//         }
//     }
// }


// window.onload= function(){
//     var imgs = document.querySelectorAll(".pic");
//     for (let i=0;i<imgs.length;i++) {
//         imgs[i].onclick = function(e){
//             e.target.classList.toggle("show");
//         }
//     }
// }

// window.onload= function(){
//     var imgs = document.querySelectorAll(".pic");
//     for (let i=0;i<imgs.length;i++) {
//         imgs[i].onclick = function(e){
//             let img = e.target;
//             if(img.classList.contains("show")){
//                 img.classList.remove("show");
//             }else{
//                 img.classList.add("show");
//             } 
//         }
//     }
// }


// window.onload = function () {
//     var imgs = document.getElementsByClassName("pic");
//     for (var i = 0; i < imgs.length; i++) {
//         (function (index) {
//             imgs[index].onclick = function (e) {
//                 e.target.classList.toggle("show");
//             }
//         })(i);
//     }
// }
