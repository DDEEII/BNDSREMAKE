
function addMeta(name,content){//手动添加mate标签
    let meta = document.createElement('meta');
    meta.content=content;
    meta.name=name;
    document.getElementsByTagName('head')[0].appendChild(meta);
}
addMeta('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');



(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth >= 1440){
              docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
            } else if (clientWidth >= 1024) {
                docEl.style.fontSize = 90 * (clientWidth / 1504) + 'px';
            } else{
                docEl.style.fontSize = 120 * (clientWidth / 750) + 'px';
             }



            //  if(clientWidth >= 1440){
            //     docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
            //   } else if (clientWidth >= 1024) {
            //       docEl.style.fontSize = 60 * (clientWidth / 1024) + 'px';
            //   } else if (clientWidth >= 750) {
            //       docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            //   }else{
            //       docEl.style.fontSize = 120 * (clientWidth / 750) + 'px';
            //    }
            
            // else{
            //     docEl.style.fontSize = 130 * (clientWidth / 750) + 'px';
            //     // docEl.style.fontSize = '100px';
            // }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);