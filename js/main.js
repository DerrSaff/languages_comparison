$(document).ready(function () {
  $("th").not("th.service-cell, th.no-language-selected").toggle();
  $("td").not("td.language-feature, td.no-language-selected").toggle();

  $("label").click(function () {
    $(this).toggleClass("btn-secondary").toggleClass("btn-success");
    $("." + $(this).data("language")).toggle();

    if ($("label.btn-success")) {
      $(".no-language-selected").hide();
    }
  })
});
