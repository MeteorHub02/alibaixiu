$ ('#file').on ('change', function () {
    // console.log (123)
    var file = this.files[0];
    var formData = new FormData ();
    formData.append ('image', file);
    $.ajax ({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {

            $ ('#image').val (response[0].image)
            console.log (response[0].image)
        }
    })
})
//当轮播图表单发生提价行为的时候
$ ('#slidesForm').on ('submit', function () {
    var formData = $ (this).serialize ();
    $.ajax ({
        type: 'post',
        url: '/slides',
        data: formData,
        success: function () {
            location.reload ();
        }
    })
    return false;
})

$.ajax({
    type:'get',
    url:'/slides',
    success:function (response) {
        // console.log (response)
        var html=template('slidesTpl',{data:response})
        $('#slidesBox').html(html)
        // console.log (html)
    }
})
//删除
$ ('#slidesBox').on ('click', '.delete', function () {
    if (confirm ('确认删除')) {
        var id = $ (this).attr ('data-id')
        $.ajax ({
            type: 'delete',
            url: '/slides/' + id,
            success: function () {
                location.reload ()
            }
        })
    }
})