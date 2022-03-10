/*------------------preloader start--------------*/
function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').delay(2000).fadeOut(500);
    }
}
$(window).on('load', function () {
   handlePreloader();
    //enableMasonry();
});
/*------------------preloader end--------------*/
