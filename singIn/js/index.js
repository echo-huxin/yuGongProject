$(function(){

    userName1Check();
    userName2Check();
    passwordCheck();
    affirmPasswordCheck();
    cellPoneCheck();
    SwitchRegistrationMode();
/*选择注册模式*/
    function SwitchRegistrationMode(){
        $(".SwitchTitle>span").click(function(){
            //注册模式选中与排他
            $(this).addClass(" active").siblings().removeClass("active");

          if($(".SwitchTitle>.model1").is(".active")){
              $("#reg-phone").css("display","block");
              $("#reg-personality").css("display","none");
              $("#input-phone").css("display","none")
          }

            if($(".SwitchTitle>.model2").is(".active")){
                $("#reg-phone").css("display","none");
                $("#reg-personality").css("display","block");
                $("#input-phone").css("display","block")

            }

        })

   }

/*手机邮箱注册用户名验证*/
    function userName1Check() {
        user1_name.onfocus = function () {
            //显示提示框
            $("#uname1-tips").css("display","inline");
            //提示用户输入
            $("#uname1-tips").text("用户名要求6-16个字符,以字母开头")
            //加入提示图标
            $("#uname1-tips").get(0).className="focus"
        }
        user1_name.onblur = function () {

            var inputName = user1_name.value;
            //判断用户名是否输入真确
            if(inputName.length<6 || inputName.length>16){
                //加入错误图标
                $("#uname1-tips").get(0).className="err";
                //提示用户输入错误
                $("#uname1-tips").text("请输入合要求的用户名")
            }else{
                $("#uname1-tips").css("display","none");
            }
        }
    }


/*个性账号注册用户名验证*/
    function userName2Check() {
        user2_name.onfocus = function () {
            //显示提示框
               $("#uname2-tips").css("display","inline");
            //提示用户输入
                $("#uname2-tips").text("用户名要求6-16个字符,以字母开头")
            //加入提示图标
                $("#uname2-tips").get(0).className="focus"
        }
        user2_name.onblur = function () {
            console.log(1)
            var inputName = user2_name.value;
            //判断用户名是否输入真确
            if(inputName.length<6 || inputName.length>16){
                //加入错误图标
                $("#uname2-tips").get(0).className="err";
                //提示用户输入错误
                $("#uname2-tips").text("请输入合要求的用户名")
            }else{
                $("#uname2-tips").css("display","none");
            }
        }
    }



/*设置密码验证*/
    function passwordCheck() {
        set_pwd.onfocus = function () {
            //显示提示框
            $("#pwd1-tips").css("display","inline");
            //提示用户输入
            $("#pwd1-tips").text("密码入8-16个字符")
            //加入提示图标
            $("#pwd1-tips").get(0).className="focus"
        }
        set_pwd.onblur = function () {
            var pwd = set_pwd.value;
            //判断用户名是否输入真确
            if(pwd.length<6 || pwd.length>16){
                //加入错误图标
                $("#pwd1-tips").get(0).className="err";
                //提示用户输入错误
                $("#pwd1-tips").text("请输入合要求的密码")
            }else{
                $("#pwd1-tips").css("display","none");
            }
        }
    }
/*确认密码验证*/
    function affirmPasswordCheck() {
        affirm_pwd.onfocus = function () {
            //显示提示框
            $("#pwd2-tips").css("display","inline");
            //提示用户输入
            $("#pwd2-tips").text("密码入8-16个字符")
            //加入提示图标
            $("#pwd2-tips").get(0).className="focus"
        }
        affirm_pwd.onblur = function () {
            var  pwd= affirm_pwd.value;
            //判断是否输入真确
            if(pwd.length<6 || pwd.length>16){
                //加入错误图标
                $("#pwd2-tips").get(0).className="err";
                //提示用户输入错误
                $("#pwd2-tips").text("请输入合要求的密码")
            }else{
                $("#pwd2-tips").css("display","none");
            }
        }
    }
/*手机号码验证*/
     function cellPoneCheck(){
         cell_phone.onfocus = function () {
             //显示提示框
             $("#phone-tips").css("display", "inline");
             //提示用户输入
             $("#phone-tips").text("请输入手机号")
             //加入提示图标
             $("#phone-tips").get(0).className = "focus"
         }
         cell_phone.onblur=function(){
             var phone =cell_phone.value;
             if(phone.length<11){
                 $("#phone-tips").get(0).className="err";
                 $("#phone-tips").text("请输入手机号")
             }else{
                 $("#phone-tips").css("display","none");
             }

         }
     }
/* 短信验证 */

})