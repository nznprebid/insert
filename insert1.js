const script2 = parent.document.createElement('script');
script2.src =  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js';
script2.async = true;
script2.onload = () => {
  window.parent.$("body").append("<div id='ad-anchor-leaderboard' style='position: fixed; bottom: 0px; z-index: 130; margin-left: 50%; left: -364px;'><iframe src='https://pubads.g.doubleclick.net/gampad/adx?iu=/1010728/passbacks&sz=728x90&c=[TIMESTAMP]' style='height: 90px; width: 728px; margin-top: -10px; margin-left: -10px; border: 0px;' scrolling='no'><\/iframe><\/div>");
};
parent.document.body.appendChild(script2);
