    var jsdoei = 0;
    var playerpower = 0;
    var enemyhp = 100;
    var playerpoint = 0;
    var ppp=100;
    var pppup=0;
    var ppppp=100;
    var pppppp=100;
    var killenemy=0;
    function datareset(){
        localStorage.removeItem("a");
        localStorage.removeItem("b");
        localStorage.removeItem("c");
        localStorage.removeItem("d");
        localStorage.removeItem("e");
        localStorage.removeItem("f");
        localStorage.removeItem("g");
        localStorage.removeItem("h");
        localStorage.removeItem("i");
        localStorage.removeItem("j");
    }
    if (localStorage.getItem("j")=='true'){
        jsdoei = localStorage.getItem("a")*1;
        playerpower = localStorage.getItem("b")*1;
        enemyhp = localStorage.getItem("c")*1;
        playerpoint = localStorage.getItem("d")*1;
        ppp = localStorage.getItem("e")*1;
        pppup = localStorage.getItem("f")*1;
        ppppp = localStorage.getItem("g")*1;
        pppppp = localStorage.getItem("h")*1;
        killenemy = localStorage.getItem("i")*1;
    }
    function savedata(){
        localStorage.setItem("a",jsdoei);
        localStorage.setItem("b",playerpower);
        localStorage.setItem("c",enemyhp);
        localStorage.setItem("d",playerpoint);
        localStorage.setItem("e",ppp);
        localStorage.setItem("f",pppup);
        localStorage.setItem("g",ppppp);
        localStorage.setItem("h",pppppp);
        localStorage.setItem("i",killenemy);
        localStorage.setItem("j",true);
    }
    function handredbuy(xy){
        if(xy>0){
            if(playerpoint+1 >0.5 * xy * (ppp + ppp + 100 * xy))
            {
                playerpoint = playerpoint - 0.5 * xy * (ppp + ppp + 100 * xy)
                playerpower = playerpower + (xy)*(pppup+1);
                ppp = ppp + xy * 100
            }
            document.getElementById("0.02mm").innerHTML = playerpoint;
            document.getElementById("0.03mm").innerHTML = ppp;
            document.getElementById("200").innerHTML = playerpower;
            }
        savedata();
    }
    function handredupbuy(xy){
        if(xy>0){
            if(playerpoint+1 >0.5 * xy * (ppp + ppp + 100 * xy))
            {
                playerpoint = playerpoint - 0.5 * xy * (ppp + ppp + 100 * xy)
                pppppp = pppppp + (xy)*(pppup+1);
                ppp = ppp + xy * 100
            }
            document.getElementById("0.02mm").innerHTML = playerpoint;
            document.getElementById("0.03mm").innerHTML = ppp;
            document.getElementById("300").innerHTML = pppppp/100;
            }
        savedata();
    }
    function handredupppbuy(xy){
        if(xy>0){
        if(playerpoint+1 >0.5 * xy * (ppp + ppp + 100 * xy))
        {
            playerpoint = playerpoint - 0.5 * xy * (ppp + ppp + 100 * xy)
            pppup = pppup + xy;
            ppp = ppp + xy * 100
        }
        document.getElementById("0.02mm").innerHTML = playerpoint;
        document.getElementById("0.03mm").innerHTML = ppp;
        document.getElementById("400").innerHTML = pppup/10*10+1;
        }
        savedata();
    }
    function anan(){
        jsdoei=jsdoei+1+playerpower;
        if(enemyhp-jsdoei<1)
        {
            playerpoint=playerpoint+ppppp;
            ppppp=ppppp+pppppp;
            jsdoei=0;
            killenemy++;
            enemyhp=enemyhp+
            Math.trunc(killenemy/100+1)*100;
        }
        document.getElementById("0.01mm").innerHTML = enemyhp - jsdoei;
        document.getElementById("0.02mm").innerHTML = playerpoint;
        savedata();
    }
    function buyer(){
        if(ppp-1<playerpoint)
        {
            playerpower=playerpower+pppup+1;
            playerpoint=playerpoint-ppp;
            ppp=ppp+100;
        }
        document.getElementById("0.02mm").innerHTML = playerpoint;
        document.getElementById("0.03mm").innerHTML = ppp;
        document.getElementById("200").innerHTML = playerpower+1;
        savedata();
    }
    function upbuyer(){
        if(ppp-1<playerpoint)
        {
            pppppp=pppppp+pppup+5;
            playerpoint=playerpoint-ppp;
            ppp=ppp+100;
        }
        document.getElementById("0.02mm").innerHTML = playerpoint;
        document.getElementById("0.03mm").innerHTML = ppp;
        document.getElementById("300").innerHTML = pppppp/100;
        savedata();
    }
    function upppbuyer(){
        if(ppp-1<playerpoint)
        {
            pppup=pppup+1;
            playerpoint=playerpoint-ppp;
            ppp=ppp+100;
        }
        document.getElementById("0.02mm").innerHTML = playerpoint;
        document.getElementById("0.03mm").innerHTML = ppp;
        document.getElementById("400").innerHTML = pppup+1;
        savedata();
    }
        document.getElementById("0.02mm").innerHTML = playerpoint;
        document.getElementById("0.03mm").innerHTML = ppp;
        document.getElementById("0.01mm").innerHTML = enemyhp - jsdoei;
