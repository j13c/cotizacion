/**
 *@param ttc total tiempo conversacion
 *@param ttce tiempo total cliente en espera
 *@param acw after call work
 *@param tla total llamadas atendidas
 */
function calcular_TMO(ttc,ttce,tla,acw=0){
   var calculo = new Array(); 
        calculo["v"] = "0";
        calculo["v_show"] = "";
        calculo["v_format"] = "";

    if (tla == 0) {
        calculo["v"] = 0;
        calculo["v_show"] = "N/A";
        calculo["v_format"] = secondsToHms(0);
    } else {
        var tmo = (ttc+acw)/tla
        calculo["v"]= tmo;
        calculo["v_show"]= secondsToHms(tmo);
        calculo["v_format"]=secondsToHms(tmo);
    }
    return calculo;
}

function secondsToHms(d) { 
    d = Number(d); 
    var h = Math.floor(d / 3600); 
    var m = Math.floor(d % 3600/60); 
    var s = Math.floor(d % 3600 % 60); 

    var hDisplay = h > 0 ? (h < 10 ? "0" + h : h ) : "00"; 
    var mDisplay = m > 0 ? (m < 10 ? "0" + m : m ) : "00"; 
    var sDisplay = s > 0 ? (s < 10 ? "0" + s : s ) : "00"; 
    return hDisplay + ':' + mDisplay + ':' + sDisplay; 
} 

function hmsToSecond(hora){
    var tiempo = hora.split(':');
    var seg = Number(tiempo[0]) * 60 + Number(tiempo[1] * 60 + Number(tiempo[2]) );
    return seg; 
}
