$(document).ready(function () {
    $("label").click(function () {
        $(this).toggleClass("btn-secondary").toggleClass("btn-success");
        $("." + $(this).data("language")).toggle();
    })
});
