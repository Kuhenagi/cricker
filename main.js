    var jsdoei = 0;
    var playerpower = 0;
    var enemyhp = 100;
    var playerpoint = 0;
    var ppp=100;
    var pppup=0;
    var ppppp=100;
    var pppppp=100;
    var killenemy=0;
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
        document.getElementById("400").innerHTML = pppup/10*10;
        }
    }
    function anan(){
        jsdoei=jsdoei+1+playerpower;
        if(enemyhp-jsdoei<1)
        {
            playerpoint=playerpoint+ppppp;
            ppppp=Math.trunc((ppppp+100)*pppppp/100);
            jsdoei=0;
            killenemy++;
            enemyhp=enemyhp+
            Math.trunc(killenemy/100+1)*100;
        }
        document.getElementById("0.01mm").innerHTML = enemyhp - jsdoei;
        document.getElementById("0.02mm").innerHTML = playerpoint;
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
    }
        document.getElementById("0.02mm").innerHTML = playerpoint;
        document.getElementById("0.03mm").innerHTML = ppp;
        document.getElementById("0.01mm").innerHTML = 100 - jsdoei;