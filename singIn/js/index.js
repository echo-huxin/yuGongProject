$(function(){

    userName1Check();
    userName2Check();
    passwordCheck();
    affirmPasswordCheck();
    cellPoneCheck();
    SwitchRegistrationMode();
    checkRegister();
    isClauseRemind()





    //封装用户手机验证和邮箱验证方法
    function checkUserName(phoneNum){

        //手机号码验证规则
        var reg1 =/^1(3|4|5|7|8)\d{9}$/;
        //邮箱验证规则
        var reg2 =/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(reg1.test(phoneNum)){
            return true;
        }else if(reg2.test(phoneNum)){
            return true;
        }
        return  false;
    }
    //检验两次密码是否相同
    function check_cPwd(){
            var pwd = set_pwd.value;
            var cpwd= affirm_pwd.value;
            //判断是否输入真确
            if(!cpwd){
                $("#pwd2-tips").get(0).className="err";
                $("#pwd2-tips").text("输入的内容不能为空")
                //标记该行错误
                $("#pwd2-tips").attr("flag","err")

            }else if(!(pwd==cpwd)){
                //加入错误图标
                $("#pwd2-tips").get(0).className="err";
                //提示用户输入错误
                $("#pwd2-tips").text("2次密码不一致,请确认")
                $("#pwd2-tips").css("display","inline");
                //标记该行错误
                $("#pwd2-tips").attr("flag","err")
            }
            else{
                //隐藏提示信息
                $("#pwd2-tips").css("display","none");
                //标记该行正确
                $("#pwd2-tips").attr("flag","right")
                console.log(23);
            }
        }


/*选择注册模式*/
    function SwitchRegistrationMode(){
        $(".SwitchTitle>span").click(function(){
            //注册模式选中与排他
            $(this).addClass(" active").siblings().removeClass("active");

          if($(".SwitchTitle>.model1").is(".active")){
              $("#reg-phone").css("display","block");
              $("#reg-personality").css("display","none");
              $("#input-phone").css("display","none")
              $("#user2_name").removeAttr("name");
              $("#user1_name").attr("name","uName");
          }

          if($(".SwitchTitle>.model2").is(".active")){
                $("#reg-phone").css("display","none");
                $("#reg-personality").css("display","block");
                $("#input-phone").css("display","block");
                $("#user1_name").removeAttr("name");
                $("#user2_name").attr("name","uName");

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
            //获取用户输入的数据
            var phoneNum = user1_name.value;
            //获取检验结果
            var flag=checkUserName(phoneNum);
            //判断用户名是否输入真确
            if(!flag){
                //加入错误图标
                $("#uname1-tips").get(0).className="err";
                //提示用户输入错误
                $("#uname1-tips").text("用户名格式不正确")
                //标记该行错误
                $("#uname1-tips").attr("flag","err")
            }else{
                //1.创建异步对象
                var xhr = new XMLHttpRequest();
                //4接收响应
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var r = xhr.responseText
                        if (r == 1) {
                            $("#uname1-tips").text("用户名以被占用")
                            //标记该行错误
                            $("#uname1-tips").attr("flag","err")
                        } else {
                            //隐藏提示信息
                            $("#uname1-tips").css("display","none");
                            //标记该行正确
                            $("#uname1-tips").attr("flag","right")
                        }
                    }
                }
                //2.打开链接,创建请求
                xhr.open("get",`/v1/singIn/selectUname/${phoneNum}`,true);
                //3.发送请求
                xhr.send();
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
            //标记该行错误
                $("#uname2-tips").attr("flag","err")
        }
        user2_name.onblur = function () {
            var inputName = user2_name.value;
            //判断用户名是否输入真确
            if (inputName.length < 6 || inputName.length > 16) {
                //加入错误图标
                $("#uname2-tips").get(0).className = "err";
                //提示用户输入错误
                $("#uname2-tips").text("请输入合要求的用户名")
                //标记该行错误
                $("#uname2-tips").attr("flag","err")
            }
            else {
                console.log(inputName);
                //1.创建异步对象
                var xhr = new XMLHttpRequest();
                //4接收响应
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var r = xhr.responseText
                        console.log(r);
                        if (r == 1) {
                            $("#uname2-tips").text("用户名以被占用")
                        } else {
                            //隐藏提示信息
                            $("#uname2-tips").css("display", "none");
                            //标记该行正确
                            $("#uname2-tips").attr("flag","right")
                        }
                    }
                }

                //2.打开链接,创建请求
                xhr.open("get", `/v1/singIn/selectUname/${inputName}`, true);

                //3.发送请求
                xhr.send();

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
            //标记该行错误
            $("#pwd1-tips").attr("flag","err")
        }
        set_pwd.onblur = function () {


            var pwd = set_pwd.value;
            //判断用户名是否输入真确
            if(pwd.length<6 || pwd.length>16){
                //加入错误图标
                $("#pwd1-tips").get(0).className="err";
                //提示用户输入错误
                $("#pwd1-tips").text("请输入合要求的密码")
                //标记该行错误
                $("#pwd1-tips").attr("flag","err")
            }else{
                //隐藏提示信息
                $("#pwd1-tips").css("display","none");
                //标记该行正确
                $("#pwd1-tips").attr("flag","right")
            }

            check_cPwd();//回调检验两次密码是否真确函数

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
            //标记该行错误
            $("#pwd2-tips").attr("flag","err")
        }
        affirm_pwd.onblur = check_cPwd;

    }
/*手机号码验证*/
     function cellPoneCheck(){
         cell_phone.onfocus = function () {
             //显示提示框
             $("#phone-tips").css("display", "inline");
             //提示用户输入
             $("#phone-tips").text("请输入手机号");
             //加入提示图标
             $("#phone-tips").get(0).className = "focus";

             //标记该行错误
             $("#phone-tips").attr("flag","err")

         }
         cell_phone.onblur=function(){
             var phone =cell_phone.value;
             var flag = checkUserName(phone);
             if(flag){
                 //标记该行正确
                 $("#phone-tips").attr("flag","right")
                 //隐藏提示信息
                 $("#phone-tips").css("display","none");
             }else{
                 //标记该行错误
                 $("#phone-tips").attr("flag","err")
                 $("#phone-tips").get(0).className="err";
                 $("#phone-tips").text("请输入正确的手机号")
             }

         }
     }
/* 短信验证 */

/*验证注册信息是否都输入真确*/

    function checkRegister(){
        //记录输入的注册信息是否正确
        var isGxUserName=$("#uname2-tips").attr("flag");
        var isUserName=$("#uname1-tips").attr("flag");
        var ispwd=$("#pwd1-tips").attr("flag");
        var iscpwd=$("#pwd2-tips").attr("flag");
        var isPhone=$("#phone-tips").attr("flag");


        //判断注册是否成功
        if(isGxUserName=="right" && ispwd=='right' && iscpwd=="right" && isPhone=="right" &&
            $("input[type=checkbox]").prop("checked"))
        {
            return true
        }else if( isUserName=="right" && ispwd=='right' && iscpwd=="right" &&  $("input[type=checkbox]").prop("checked")){
            return true
        }else{
            return  false
        }


    }

    function isClauseRemind(){
        $(".register").click(function(){
            console.log(1)
            /*判断是否勾选了条款条约*/
            if(!$("input[type=checkbox]").prop("checked")){
                //如果没有勾选显示提示
                $(".clauseRemind").css("display","block");
                setTimeout(function (){
                    $(".clauseRemind").css("display","none");
                },3000)
            }
        })

    }



    window.checkRegister=checkRegister;

})