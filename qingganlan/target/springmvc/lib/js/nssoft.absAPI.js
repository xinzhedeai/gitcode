/**
 * Created by shkim on 2014-07-16.
 */

/**
 * Durin onm override */
(function() {
    $class('nssoft.absAPI').extend($d.api.ajaxAPI).define({

        onBlockUIPopup:function(){
           /* this.blockUI = document.createElement('DIV');
//            this.blockUI.style.backgroundColor = '#D3D3D3';
            this.blockUI.style.backgroundColor = 'white';
            this.blockUI.style.border = '0px solid white';
            this.blockUI.style.position = 'absolute';
            this.blockUI.style.left = '700px';
            this.blockUI.style.top = '400px';
            if(window.innerHeight == undefined){
                this.blockUI.style.height = (1 * document.documentElement.clientHeight / 10) + 'px';
                this.blockUI.style.width = (1 * document.documentElement.clientWidth / 10) + 'px';
            }else{
                this.blockUI.style.height = (1 * window.innerHeight / 10) + 'px';
                this.blockUI.style.width = (1 * window.innerWidth / 10) + 'px';
            }
            this.blockUI.style.zIndex = '10000';
//            this.blockUI.style.filter = 'alpha(opacity=60);';
//            this.blockUI.style.MozOpacity = 0.6;
//            this.blockUI.style.opacity = 0.6;
//            this.blockUI.style.KhtmlOpacity = 0.6;
            this.blockUI.style.filter = 'alpha(opacity=50);';
            this.blockUI.style.MozOpacity = 0.5;
            this.blockUI.style.opacity = 0.5;
            this.blockUI.style.KhtmlOpacity = 0.5;
            document.body.appendChild(this.blockUI);*/

            this.popupUI=document.createElement('DIV');
            this.popupUI.style.backgroundColor = 'white';
            this.popupUI.style.filter = 'alpha(opacity=70);';
            this.popupUI.style.MozOpacity = 0.7;
            this.popupUI.style.opacity = 0.7;
            this.popupUI.style.KhtmlOpacity = 0.7;
            this.popupUI.style.border = '3px solid white';
            this.popupUI.style.position = 'absolute';
            this.popupUI.style.height = '0px';
            this.popupUI.style.lineHeight = '50px';
            this.popupUI.style.paddingBottom='40px';
            this.popupUI.style.width ='400px';
            this.popupUI.style.top ='50%';
            this.popupUI.style.left = '50%';
            this.popupUI.style.zIndex = '11000';
            this.popupUI.style.cursor='wait';
            var divHeight=this.popupUI.style.height.replace('px','');
            var divWidth=this.popupUI.style.width.replace('px','');
            this.popupUI.style.margin='-'+divHeight/2+'px 0 0 -'+divWidth/2+'px';
            this.popupUI.style.textAlign='center';

            var errorMsg = '正在处理中...<img src="/lib/img/images/loading.gif" width="20" height="20" />';
            /*var errorMsg = '正在处理中...';*/
            this.popupUI.innerHTML=errorMsg;
            
           
            document.body.appendChild(this.popupUI);
        }
    });
}());

