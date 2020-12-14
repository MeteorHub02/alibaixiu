$('#logout').on('click',function () {
   var isConfirm= confirm('是否确认退出')
    if (isConfirm){
        $.ajax({
            type:'post',
            url:'/logout',
            success:function () {
                location.href='login.html'
            },
            error:function () {
                alert('退出失败')
            }
        })
    }
})
//向服务器端发送请求 索要用户登录信息
$.ajax({
    type:'get',
    url:'/users/'+userId,
    success:function (response) {
        $('.avatar').attr('src',response.avatar)
        $('.profile .name').html(response.nickName)
    }
})