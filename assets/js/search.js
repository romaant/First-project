// document.getElementById("search").onclick = function search() {    
//     var x = document.getElementById('search-form');
//     if (x.style.display === 'block') {
//       x.style.display = 'none';
//     } else {
//       x.classList.toggle("search-active");
//     }
      
// }

document.getElementById("search").onclick = function showMenu() {
    document.getElementById("search-form").classList.toggle("search-active");
}
