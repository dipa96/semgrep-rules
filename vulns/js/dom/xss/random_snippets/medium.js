function saveRegion(regionId, forceReload) {//Save selection
    customer_RegionId = regionId;

    $.ajax({
        type: 'POST',
        url: "/Unauthenticated/SaveRegion",
        data: {
            regionId: regionId
        },
        success: function (response) {
            setCookie('RegionId', regionId, 1);
            $('#select-region-modal').modal('hide');
            var url = getParameterByName('url');
            if (url != null && url != '') {
                createCookie('UAPathway', 'Start', 1);
                setTimeout(function () {
                    window.open(url, '_self');
                }, 1000);

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}