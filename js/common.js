document.addEventListener("DOMContentLoaded", () => {

    fetch('./component/common.html')
    .then((data)=>{ return data.text()})
    .then((data)=>{ 
        
        const login = document.querySelector(".login_common")
        const footer = document.querySelector(".footer")
        if (!login) {
            // chatbot
            (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
            ChannelIO('boot', {
                "pluginKey": "dbf51d87-0b32-4469-b099-572fefb331ca"
            });
            
            // [↓] header, footer 제어
            let createHeader = document.createElement('header')
            let createFooter = document.createElement('footer')
            createHeader.className = 'header'
            createFooter.className = 'footer'
            createHeader.innerHTML = data.split('/nn')[0];
            createFooter.innerHTML = data.split('/nn')[1];
            document.body.prepend(createHeader)
            document.body.append(createFooter)
            
            const footerVideo = document.querySelector(".footer .video_wrap")
            const main = document.querySelector(".main")
            const footer = document.querySelector(".footer")
            
            if (main) {
                footer.classList.add("main")
            } else {
                footerVideo.remove();
            }
            
            // [↓] gnb
            const body = document.querySelector("body")
            const header = document.querySelector(".header")
            const navBg = document.querySelector(".nav_bg")
            const navLi = document.querySelectorAll(".nav .sub > li")
            const depth1 = document.querySelectorAll(".nav .sub > li > a:not(.solo)")
            const mbBtn = document.querySelector(".mb_menu")
            
            const handleMbBtnClick = () => {
                header.classList.toggle("on");
                body.classList.toggle("prevent_scroll");
            };
            
            const handleHeaderMouseOver = () => {
                // body.classList.add("prevent_scroll");
                header.classList.add("on");
            };
            
            const handleNavBgMouseOver = () => {
                header.classList.add("on");
            };
            
            const handleNavBgMouseLeave = () => {
                // body.classList.remove("prevent_scroll");
                header.classList.remove("on");
            };
            
            const handleGnb = () => {
                if (header) {
                    header.removeEventListener("mouseover", handleHeaderMouseOver);
                }
                if (navBg) {
                    navBg.removeEventListener("mouseover", handleNavBgMouseOver);
                    navBg.removeEventListener("mouseleave", handleNavBgMouseLeave);
                }
                if (mbBtn) {
                    mbBtn.removeEventListener("click", handleMbBtnClick);
                }
                if (body.offsetWidth > 1280) {
                    // pc
                    if (header) {
                        header.addEventListener("mouseover", handleHeaderMouseOver);
                    }
                    if (navBg) {
                        navBg.addEventListener("mouseover", handleNavBgMouseOver);
                        navBg.addEventListener("mouseleave", handleNavBgMouseLeave);
                    }
                } else {
                    // mb
                    depth1.forEach((depth) => {
                        depth.addEventListener("click", (e) => {
                            navLi.forEach((v) => v.classList.remove("on"));
                            e.preventDefault();
                            e.target.parentNode.classList.toggle("on");
                        });
                    });
                    if (mbBtn) {
                        mbBtn.addEventListener("click", handleMbBtnClick);
                    }
                }
            }
            
            handleGnb();
            window.addEventListener("resize", handleGnb);

            
        } else if (login) {
            footer.classList.add("login")
        }

    })

    // [↓] popup
    const popupBtn = document.querySelectorAll("[name='pop_btn']"),
    popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup_close_btn'),
    body = document.body;

    if (popup) {
        popupBtn.forEach((v)=>{  
            v.addEventListener('click', function(){
                popup.classList.add("active");
                body.classList.add("prevent_scroll");
            })
        })
        popupClose.onclick = function(){
            popup.classList.remove("active");
            body.classList.remove("prevent_scroll");
        }
        popup.addEventListener('click', function(e){
            if(e.target == popup){
                popup.classList.remove("active");
                body.classList.remove("prevent_scroll");
            }
        })
    }

    // [↓] chekcbox
    const chkWrap = document.querySelector(".checkbox_wrap")
    const chkAll = document.querySelector(".checkbox_wrap #all_chk")
    const chk = document.querySelectorAll(".checkbox_wrap input[name='chk']")
    const chkBtn = document.querySelector(".checkbox_wrap .toggle_btn")
    chk.forEach((v,i)=>{
        chkAll.addEventListener("click", ()=>{
            if (chkAll.checked) {
                chk[i].checked = true;
            } else {
                chk[i].checked = false;
            }
        })
        chk[i].addEventListener("change", ()=>{
            const chkLength = chk.length;
            const chkCheckedLength = document.querySelectorAll(".checkbox_wrap input[name='chk']:checked").length
            if (chkCheckedLength === chkLength) {
                chkAll.checked = true;
            } else {
                chkAll.checked = false;
            }
        })
        chkBtn.addEventListener("click", ()=>{
            chkWrap.classList.toggle("fold")
        })
    })

    // [↓] tab
    const tabCont = document.querySelectorAll(".tab_cont > *")
    const tabLi = document.querySelectorAll(".tab li")
    tabLi.forEach((v,i)=>{
        v.addEventListener("click", (e)=>{
            e.preventDefault();
            for(let i=0;i<tabLi.length;i++){
                tabLi[i].classList.remove("on")
                tabCont[i].classList.remove("on")
            }
            v.classList.add("on")
            tabCont[i].classList.add("on")
        })
    })
    
    // [↓] select
    const select = document.querySelectorAll("select")
    const option = document.querySelectorAll("select option")
    const main = document.querySelector(".main")
    select.forEach((v,i)=>{
        const defaultOption = document.querySelector("select option.default")
        for(let i=0;i<option.length;i++){
            if(option[i].classList.contains('default')){
                defaultOption.style.cssText = 'display:none;'
                v.style.cssText = 'color:#afafaf;'
            }
        }
        if(!main){
            v.addEventListener("input", ()=>{
                v.style.cssText = 'color:#2f2f2f;'
            })
        }
    })
})