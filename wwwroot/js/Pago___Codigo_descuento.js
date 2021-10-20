$("#industrylist").change(function () {
    var industry = $("#industrylist").val();
    var url = "GetSubIndustrias";

    $.getJSON(url, { industria: industry }, function (data) {
        var item = "";
        $("#subindustry").empty();
        $.each(data, function (i, subindustria) {
            item += '<option value="' + subindustria.value + '">' + subindustria.text + '</option>'
        });
        $("#subindustry").html(item);
    });
});