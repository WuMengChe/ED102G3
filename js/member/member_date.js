$(function () {
    setInterval(findClannder, 500)
    function findClannder(){
        $("#pickdate").dateDropper({
            animate: false,
            format: 'Y-m-d',
            maxYear: '2025',
            minYear: '1950',
            lang: 'zh',
            fxMobile: true,
            large: true,
            lock: 'from',
        });
    }
});