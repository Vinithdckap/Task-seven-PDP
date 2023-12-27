

// let addIcon = document.querySelector(".add");
// let decription = document.querySelector(".description-details");
// let cancelIcon = document.querySelector(".remove");
// let border = document.querySelector(".description-div");


// cancelIcon.addEventListener("click", () => {
//     // alert("hello world").

//     decription.classList.toggle("toggle");
//     border.style.border = "unset";


//     addIcon.style.display = "block";
//     cancelIcon.style.display = "none";

// })

// addIcon.addEventListener('click', () => {
//     decription.classList.toggle("toggle");
//     cancelIcon.style.display = "block";
//     addIcon.style.display="none"



// $(document).ready(function(){
//   // $('.add').click(function(){
//   //   $('.description-details').slideToggle(500);
//   // })

//   $("#plus-btn").on("click",(e)=>{
//     // console.log(e.target);
//     $("#plus-btn").text().remove()
//   })
// })  

// const btn = document.querySelectorAll("#plus-btn");
// const description =   document.querySelectorAll(".description-details")
// for (let i = 0; i < btn.length; i++) {

//     btn[i].addEventListener("click",(e)=>{

//       const element = e.target;

//       for (let j = 0; j < description.length; j++) {
//         console.log(description[j]);    
//         if(j !== i){
//           description[j].classList.remove("show")
//           btn[j].innerText = "add";
//         }
//       }
//       element.parentElement.nextElementSibling.classList.toggle("show")
//       element.innerText =element.parentElement.nextElementSibling.classList.contains("show") ? "remove" : "add";

//     })  


// }


$(document).ready(function () {
  $("[id^=plus-btn]").click(function () {
    const element = $(this);

    const index = element.index("[id^=plus-btn]");

    $(".description-details").each(function (i) {
      const description = $(this);

      if (i !== index) {
        description.removeClass("show");
        $("[id^=plus-btn]").eq(i).text("add");
      }
    });

    element.parent().next().toggleClass("show");
    element.text(element.parent().next().hasClass("show") ? "remove" : "add");
  });
});



// add cart

$(document).ready(function () {
  let counts = 0;
  $(".cart").click(function () {

    counts += +1;
    $(".cart-count").animate({
    }, function () {
      $(this).text(counts);
    });
  });
});


// mini cart open 


$(document).ready(function () {
  // Open Mini Cart
  $('.cart-div').click(function () {
    $('.miniCart-section').show(750);
  })


  // Close Mini Cart
  $('.close').click(function () {
    $('.miniCart-section').hide(750);
  })
});


// cart deleting 
$('.delete').click(function () {
  $(this).closest('.cart-details').hide(750);
});
 