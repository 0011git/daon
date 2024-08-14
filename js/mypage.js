document.addEventListener("DOMContentLoaded", () => {
    
    //mypage tab
    const mypage_tab_btn = document.querySelectorAll('.mypage_tap_wrap .tab li');
    const mypage_tab_cont = document.querySelectorAll('.mypage_tap_wrap .tab_cont > div');

    mypage_tab_btn.forEach((btn,key)=>{
        btn.onclick = function(){
            mypage_tab_btn.forEach((v,i)=>{
                mypage_tab_btn[i].classList.remove('on');
                mypage_tab_cont[i].classList.remove('on');
            })
            mypage_tab_btn[key].classList.add('on');
            mypage_tab_cont[key].classList.add('on');
        }
    })

    //mypage session confirm
    const mypage_email = document.querySelector('.mypage_info_input .email_ul .email_box input');
    const mypage_name = document.querySelector('.mypage_info_input .name_ul .name_box input');
    
    try{
        const session_profile = JSON.parse(sessionStorage.profile);
        mypage_email.placeholder = session_profile.email;
        mypage_name.placeholder = session_profile.name;
    }
    catch{
        mypage_email.placeholder = "이메일";
        mypage_name.placeholder = "이름";
    }
    
    

})