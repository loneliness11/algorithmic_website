const swiper1 = new Swiper(".prices__swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return `<span class="${className}" style="margin-right: 20px;"></span>`;
    },
  },
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

const swiper2 = new Swiper(".teachers__swiper", {
  loop: true,
  spaceBetween: 15,
  navigation: {
    nextEl: ".slider2-button-next",
    prevEl: ".slider2-button-prev",
  },
});
const swiper3 = new Swiper(".reviews__swiper", {
  loop: true,
  // spaceBetween: 15,
  navigation: {
    nextEl: ".slider3-button-next",
    prevEl: ".slider3-button-prev",
  },
});
$(document).ready(function () {
  $(".reviews-item3").each(function () {
    var $reviewItem = $(this);
    var $descrBlock = $reviewItem.find(".reviews-item3__descr");
    var $readMoreLink = $reviewItem.find(".reviews-item3__link");

    // Проверяем, нужно ли показывать ссылку "дочитать"
    if ($descrBlock[0].scrollHeight > $descrBlock.innerHeight()) {
      $readMoreLink.show();
    }

    // Обработчик клика по ссылке "дочитать"
    $readMoreLink.click(function (event) {
      event.preventDefault();
      $descrBlock.css({
        "-webkit-line-clamp": "unset",
        "max-height": "none",
        overflow: "visible",
      });
      $readMoreLink.hide();
    });
  });
});
function toggleButton(buttonId) {
  var button = document.getElementById(buttonId);
  var otherButton =
    buttonId === "button1"
      ? document.getElementById("button2")
      : document.getElementById("button1");

  if (button.classList.contains("inactive-button")) {
    button.classList.remove("inactive-button");
    button.classList.add("active-button");

    otherButton.classList.remove("active-button");
    otherButton.classList.add("inactive-button");
  }
}
