// func search
function search(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}
// đóng func search

// from đăng ký
function validate(){
    let u = document.getElementById("username").value;
    let pi = document.getElementById("password").value;
    let p2 = document.getElementById("password-repeat").value;
    if (u==""){
        alert("Vui lòng nhập tên");
        return false;
    }
    if(p1==""){
        alert("Vui lòng nhập mật khẩu");
        return false;
    }
    if(p2==""){
        alert("Vui lòng xác minh lại mật khẩu");
        return false;
    }
    alert("Xin hãy điền đúng thông tin");
    return true;
}
// function validate1() {
//     let msg;
//     if (document.myForm.userPass.value.length > 5) {
//         msg = "Đủ mạnh";
//     } else {
//         msg = "quá ngắn";
//     }
//     document.getElementById('mylocation').innerText = msg;
// }
// let userName=prompt("Mày là ai?","");
// if (userName=='Admin') {
//     let pass = prompt('Nhập cái mật khẩu vào đêy!');
//     if (pass == 'Admax') {
//         alert('Halo Vegan');
//     } else if (pass == 'Huy') {
//         alert('chỉ Admin');
//     } else if (Pass == 'null') {
//         alert('Hông bít nứa, hông có nhớ!');
//     } else {
//         alert('!!!!!!');
//     }
// }
// else if (userName==null){
//     alert('Hông bít nứa, hông có nhớ!')
// }
// else {alert('chỉ Admin')}
const formLogin=document.querySelectorAll(".form-tt input")
console.log(formLogin)

var slideIndex =1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByName("mySlides");
    var dots = document.getElementsByName("dot");
    if(n > slides.length) {slidesIndex = 1}
  if(n < 1){
      slideIndex = slides.length
  }
  for(i=0;i<dots.length;i++){
      dots[i].className = dots[i].className.replace("active","");
  }
  slides[slidesIndex-1].style.display = "block";
  dots[slidesIndex-1].className += "active";
    }



