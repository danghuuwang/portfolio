function profileBoxMouseOver() {
    document.getElementById('myVideo').style.visibility = 'hidden';
    document.getElementById('myVideo').style.opacity = '0';
    document.getElementById('myVideo').style.transition = "0.2s ease";

    document.getElementById('myProgress').style.opacity = 0.2;
    document.getElementById('myProgress').style.transition = "0.2s ease";

    document.getElementsByClassName('imageSlide-box')[0].style.opacity = 0.2;
}

function profileBoxMouseLeave() {
    document.getElementById('myVideo').style.visibility = 'visible';
    document.getElementById('myVideo').style.opacity = '1';
    document.getElementById('myVideo').style.transition = "0.2s ease";

    document.getElementById('myProgress').style.opacity = 1;
    document.getElementById('myProgress').style.transition = "0.2s ease";

    document.getElementsByClassName('imageSlide-box')[0].style.opacity = 1;
}

function progressMouseOver() {
    document.getElementById('pb1').style.backgroundColor = "#70a2ff8a";
    document.getElementById('pb2').style.backgroundColor = "#7bed9f";
    document.getElementById('pb3').style.backgroundColor = "#eccc68";

    document.getElementById('myProfile').style.opacity = 0.2;

    document.getElementsByClassName('waiting-layer-1')[0].style.transform = 'translateY(1000px)';
    document.getElementsByClassName('main-experience')[0].style.opacity = 1;
    document.getElementsByClassName('waiting-layer-1')[0].style.transition = "2s ease";

    document.getElementsByClassName('imageSlide-box')[0].style.opacity = 0.2;
}

function progressMouseLeave() {
    document.getElementById('myProfile').style.opacity = 1;

    document.getElementsByClassName('imageSlide-box')[0].style.opacity = 1;
}

function countJob() {
    document.getElementById('count').style.opacity = 1;
    var end = document.getElementById('count').getAttribute('soluongjob');
    var i = 0;
    var countJob = function() {
        if (i == end) clearInterval(this);
        else { i++; document.getElementById('count').innerHTML = i; }
    };
    setInterval(countJob, 70);
    countJob();
}

function slideMouseOver() {
    document.getElementById('myProfile').style.opacity = 0.2;
    document.getElementById('myProgress').style.opacity = 0.2;
}

function slideMouseLeave() {
    document.getElementById('myProfile').style.opacity = 1;
    document.getElementById('myProgress').style.opacity = 1;
}