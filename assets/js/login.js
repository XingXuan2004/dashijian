$(function(){
    $('#link_reg').click(function(){
        $('.reg-box').show();
        $('.login-box').hide();
        console.log($('.login-box'));
        console.log($('.reg-box'));
    })

    $('#link_login').click(function(){
        $('.login-box').show();
        $('.reg-box').hide();
    })


    var form = layui.form;
    form.verify({
        regpwd: [/^[\5]{6,15}$/,'密码长度必须是6-15的非空字符串'],
        
        samepwd: function(value,item){
            if(value != $('#pwd').val()){
                return '两次密码不一致';
            }
        }
    })
    $('#form_reg').on('submit',function(){
        e.preventDefult();

        var data = {
            username:$('#form_reg input[name=username').val(),
            username:$('#form_reg input[name=password').val(),
            username:$('#form_reg input[name=repassword').val()
        }

        // 发起ajax请求
        $.post('http://www.liulongbin.top:3008/api/login',data,function(){
            if(res.code != 0){
                return layer.msg(res.message);
            }
            layer.msg('注册成功，请登录！');
            // 自动触发点击事件 去登陆
            $('#login_reg').click();
        })

        $.ajax({
            type:'post',
            url:'http://www.liulongbin.top:3008/api/login',
            data:$(this).serialize(),
            success:function(res){
                if(res.code != 0){
                    return layer.msg('登陆失败！');
                }
                layer.msg('登陆成功');
                location.href = './index.html';
            }
        })
    })  
})