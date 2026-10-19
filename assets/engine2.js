const BIT_SPRITE="\u003csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\" id=\"bitSprite\">\u003csymbol id=\"b-sq-base\">\u003crect class=\"b-foot\" x=\"64\" y=\"260\" width=\"28\" height=\"18\"/>\u003crect class=\"b-foot\" x=\"148\" y=\"260\" width=\"28\" height=\"18\"/>\u003crect class=\"b-body\" x=\"20\" y=\"60\" width=\"200\" height=\"200\" rx=\"32\"/>\u003c/symbol>\u003csymbol id=\"b-sq-hi\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-sq-base\"/>\u003ccircle class=\"b-eye\" cx=\"85\" cy=\"140\" r=\"28\"/>\u003ccircle class=\"b-eye\" cx=\"155\" cy=\"140\" r=\"28\"/>\u003ccircle class=\"b-pupil\" cx=\"90\" cy=\"144\" r=\"12\"/>\u003ccircle class=\"b-pupil\" cx=\"160\" cy=\"144\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"58\" cy=\"186\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"182\" cy=\"186\" r=\"12\"/>\u003cpath class=\"b-mouth\" d=\"M96 196Q120 216 144 196\" stroke-width=\"8\"/>\u003c/symbol>\u003csymbol id=\"b-sq-think\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-sq-base\"/>\u003ccircle class=\"b-eye\" cx=\"85\" cy=\"140\" r=\"28\"/>\u003ccircle class=\"b-eye\" cx=\"155\" cy=\"140\" r=\"28\"/>\u003ccircle class=\"b-pupil\" cx=\"96\" cy=\"128\" r=\"12\"/>\u003ccircle class=\"b-pupil\" cx=\"166\" cy=\"128\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"58\" cy=\"186\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"182\" cy=\"186\" r=\"12\"/>\u003cpath class=\"b-stroke\" d=\"M100 204L140 198\" stroke-width=\"8\"/>\u003c/symbol>\u003csymbol id=\"b-sq-happy\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-sq-base\"/>\u003cpath class=\"b-stroke\" d=\"M62 146Q85 116 108 146\" stroke-width=\"9\"/>\u003cpath class=\"b-stroke\" d=\"M132 146Q155 116 178 146\" stroke-width=\"9\"/>\u003ccircle class=\"b-cheek\" cx=\"58\" cy=\"186\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"182\" cy=\"186\" r=\"12\"/>\u003cpath class=\"b-mouth\" d=\"M88 188Q120 236 152 188Z\" stroke-width=\"6\"/>\u003c/symbol>\u003csymbol id=\"b-sq-oops\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-sq-base\"/>\u003ccircle class=\"b-eye\" cx=\"85\" cy=\"140\" r=\"30\"/>\u003ccircle class=\"b-eye\" cx=\"155\" cy=\"140\" r=\"30\"/>\u003ccircle class=\"b-pupil\" cx=\"85\" cy=\"140\" r=\"8\"/>\u003ccircle class=\"b-pupil\" cx=\"155\" cy=\"140\" r=\"8\"/>\u003ccircle class=\"b-cheek\" cx=\"58\" cy=\"186\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"182\" cy=\"186\" r=\"12\"/>\u003ccircle class=\"b-stroke\" cx=\"120\" cy=\"204\" r=\"14\" stroke-width=\"8\"/>\u003c/symbol>\u003csymbol id=\"b-sq-g6\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M120 62V30\" stroke-width=\"8\"/>\u003ccircle class=\"b-ball\" cx=\"120\" cy=\"22\" r=\"18\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-sq-g7\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M18 150V112Q18 26 120 26Q222 26 222 112V150\" stroke-width=\"12\"/>\u003crect class=\"b-pad\" x=\"2\" y=\"118\" width=\"34\" height=\"72\" rx=\"10\" stroke-width=\"4\"/>\u003crect class=\"b-pad\" x=\"204\" y=\"118\" width=\"34\" height=\"72\" rx=\"10\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-sq-g8\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M120 62V30\" stroke-width=\"8\"/>\u003ccircle class=\"b-ball\" cx=\"120\" cy=\"22\" r=\"18\" stroke-width=\"4\"/>\u003crect class=\"b-frame\" x=\"52\" y=\"106\" width=\"68\" height=\"68\" rx=\"10\" stroke-width=\"7\"/>\u003crect class=\"b-frame\" x=\"122\" y=\"106\" width=\"68\" height=\"68\" rx=\"10\" stroke-width=\"7\"/>\u003c/symbol>\u003csymbol id=\"b-sq-g9\" viewBox=\"0 0 240 280\">\u003crect class=\"b-ant\" x=\"66\" y=\"40\" width=\"108\" height=\"30\"/>\u003cpolygon class=\"b-ant\" points=\"120,2 236,34 120,66 4,34\"/>\u003cpath class=\"b-tassel\" d=\"M120 34L214 44L214 92\" stroke-width=\"6\"/>\u003ccircle class=\"b-ball\" cx=\"214\" cy=\"100\" r=\"11\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-hd-base\">\u003cellipse class=\"b-foot\" cx=\"86\" cy=\"266\" rx=\"20\" ry=\"10\"/>\u003cellipse class=\"b-foot\" cx=\"154\" cy=\"266\" rx=\"20\" ry=\"10\"/>\u003cpath class=\"b-body\" stroke-width=\"6\" stroke-linejoin=\"round\" d=\"M42 66C80 58 160 58 200 64C214 66 220 76 220 92C222 136 222 190 218 232C216 248 206 256 190 257C150 260 92 260 52 257C34 256 24 246 22 230C18 188 18 132 22 92C24 76 30 68 42 66Z\"/>\u003cpath class=\"b-hatch\" stroke-width=\"3\" d=\"M178 238L202 214M162 248L206 204M150 252L208 194\"/>\u003c/symbol>\u003csymbol id=\"b-hd-hi\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-hd-base\"/>\u003cellipse class=\"b-pupil\" cx=\"88\" cy=\"140\" rx=\"11\" ry=\"14\"/>\u003cellipse class=\"b-pupil\" cx=\"152\" cy=\"140\" rx=\"11\" ry=\"14\"/>\u003ccircle class=\"b-shine\" cx=\"92\" cy=\"135\" r=\"4\"/>\u003ccircle class=\"b-shine\" cx=\"156\" cy=\"135\" r=\"4\"/>\u003ccircle class=\"b-cheek\" cx=\"62\" cy=\"182\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"178\" cy=\"182\" r=\"12\"/>\u003cpath class=\"b-stroke\" d=\"M100 190Q120 208 140 190\" stroke-width=\"7\"/>\u003c/symbol>\u003csymbol id=\"b-hd-think\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-hd-base\"/>\u003cellipse class=\"b-pupil\" cx=\"94\" cy=\"132\" rx=\"11\" ry=\"14\"/>\u003cellipse class=\"b-pupil\" cx=\"158\" cy=\"132\" rx=\"11\" ry=\"14\"/>\u003ccircle class=\"b-shine\" cx=\"98\" cy=\"127\" r=\"4\"/>\u003ccircle class=\"b-shine\" cx=\"162\" cy=\"127\" r=\"4\"/>\u003ccircle class=\"b-cheek\" cx=\"62\" cy=\"182\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"178\" cy=\"182\" r=\"12\"/>\u003cpath class=\"b-stroke\" d=\"M104 198L138 192\" stroke-width=\"7\"/>\u003c/symbol>\u003csymbol id=\"b-hd-happy\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-hd-base\"/>\u003cpath class=\"b-stroke\" d=\"M74 146Q88 126 102 146\" stroke-width=\"7\"/>\u003cpath class=\"b-stroke\" d=\"M138 146Q152 126 166 146\" stroke-width=\"7\"/>\u003ccircle class=\"b-cheek\" cx=\"62\" cy=\"182\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"178\" cy=\"182\" r=\"12\"/>\u003cpath class=\"b-mouth\" d=\"M96 182Q120 222 144 182Z\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-hd-oops\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-hd-base\"/>\u003ccircle class=\"b-eye\" cx=\"88\" cy=\"140\" r=\"20\" stroke-width=\"5\"/>\u003ccircle class=\"b-eye\" cx=\"152\" cy=\"140\" r=\"20\" stroke-width=\"5\"/>\u003ccircle class=\"b-pupil\" cx=\"88\" cy=\"140\" r=\"7\"/>\u003ccircle class=\"b-pupil\" cx=\"152\" cy=\"140\" r=\"7\"/>\u003ccircle class=\"b-cheek\" cx=\"62\" cy=\"182\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"178\" cy=\"182\" r=\"12\"/>\u003ccircle class=\"b-stroke\" cx=\"120\" cy=\"200\" r=\"11\" stroke-width=\"6\"/>\u003c/symbol>\u003csymbol id=\"b-hd-g6\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M120 60C114 48 126 42 120 32\" stroke-width=\"6\"/>\u003ccircle class=\"b-ball\" cx=\"120\" cy=\"22\" r=\"14\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-hd-g7\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M20 150V114Q20 28 120 28Q220 28 220 114V150\" stroke-width=\"10\"/>\u003crect class=\"b-pad\" x=\"6\" y=\"112\" width=\"30\" height=\"70\" rx=\"12\" stroke-width=\"4\"/>\u003crect class=\"b-pad\" x=\"204\" y=\"112\" width=\"30\" height=\"70\" rx=\"12\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-hd-g8\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M120 60C114 48 126 42 120 32\" stroke-width=\"6\"/>\u003ccircle class=\"b-ball\" cx=\"120\" cy=\"22\" r=\"14\" stroke-width=\"4\"/>\u003ccircle class=\"b-frame\" cx=\"88\" cy=\"140\" r=\"26\" stroke-width=\"6\"/>\u003ccircle class=\"b-frame\" cx=\"152\" cy=\"140\" r=\"26\" stroke-width=\"6\"/>\u003cpath class=\"b-frame\" d=\"M114 136Q120 130 126 136\" stroke-width=\"6\"/>\u003c/symbol>\u003csymbol id=\"b-hd-g9\" viewBox=\"0 0 240 280\">\u003crect class=\"b-ant\" x=\"70\" y=\"44\" width=\"100\" height=\"26\" rx=\"6\"/>\u003cpolygon class=\"b-ant\" points=\"120,6 232,38 120,70 8,38\"/>\u003cpath class=\"b-tassel\" d=\"M120 38L210 50L210 94\" stroke-width=\"6\"/>\u003ccircle class=\"b-ball\" cx=\"210\" cy=\"102\" r=\"11\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-ab-base\">\u003cellipse class=\"b-foot\" cx=\"88\" cy=\"264\" rx=\"20\" ry=\"11\"/>\u003cellipse class=\"b-foot\" cx=\"152\" cy=\"264\" rx=\"20\" ry=\"11\"/>\u003cpath class=\"b-body\" stroke-width=\"6\" d=\"M120 60C178 58 220 96 218 158C216 222 178 260 120 258C62 256 22 222 24 160C26 98 62 62 120 60Z\"/>\u003c/symbol>\u003csymbol id=\"b-ab-hi\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-ab-base\"/>\u003ccircle class=\"b-eye\" cx=\"92\" cy=\"146\" r=\"24\" stroke-width=\"5\"/>\u003ccircle class=\"b-eye\" cx=\"148\" cy=\"146\" r=\"24\" stroke-width=\"5\"/>\u003ccircle class=\"b-pupil\" cx=\"96\" cy=\"150\" r=\"10\"/>\u003ccircle class=\"b-pupil\" cx=\"152\" cy=\"150\" r=\"10\"/>\u003ccircle class=\"b-cheek\" cx=\"60\" cy=\"190\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"180\" cy=\"190\" r=\"12\"/>\u003cpath class=\"b-stroke\" d=\"M100 198Q120 216 140 198\" stroke-width=\"7\"/>\u003c/symbol>\u003csymbol id=\"b-ab-think\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-ab-base\"/>\u003ccircle class=\"b-eye\" cx=\"92\" cy=\"146\" r=\"24\" stroke-width=\"5\"/>\u003ccircle class=\"b-eye\" cx=\"148\" cy=\"146\" r=\"24\" stroke-width=\"5\"/>\u003ccircle class=\"b-pupil\" cx=\"102\" cy=\"138\" r=\"10\"/>\u003ccircle class=\"b-pupil\" cx=\"158\" cy=\"138\" r=\"10\"/>\u003ccircle class=\"b-cheek\" cx=\"60\" cy=\"190\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"180\" cy=\"190\" r=\"12\"/>\u003cpath class=\"b-stroke\" d=\"M104 206L138 199\" stroke-width=\"7\"/>\u003c/symbol>\u003csymbol id=\"b-ab-happy\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-ab-base\"/>\u003cpath class=\"b-stroke\" d=\"M70 152Q92 124 114 152\" stroke-width=\"8\"/>\u003cpath class=\"b-stroke\" d=\"M126 152Q148 124 170 152\" stroke-width=\"8\"/>\u003ccircle class=\"b-cheek\" cx=\"60\" cy=\"190\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"180\" cy=\"190\" r=\"12\"/>\u003cpath class=\"b-mouth\" d=\"M94 190Q120 234 146 190Z\" stroke-width=\"5\"/>\u003c/symbol>\u003csymbol id=\"b-ab-oops\" viewBox=\"0 0 240 280\">\u003cuse href=\"#b-ab-base\"/>\u003ccircle class=\"b-eye\" cx=\"92\" cy=\"146\" r=\"26\" stroke-width=\"5\"/>\u003ccircle class=\"b-eye\" cx=\"148\" cy=\"146\" r=\"26\" stroke-width=\"5\"/>\u003ccircle class=\"b-pupil\" cx=\"92\" cy=\"146\" r=\"7\"/>\u003ccircle class=\"b-pupil\" cx=\"148\" cy=\"146\" r=\"7\"/>\u003ccircle class=\"b-cheek\" cx=\"60\" cy=\"190\" r=\"12\"/>\u003ccircle class=\"b-cheek\" cx=\"180\" cy=\"190\" r=\"12\"/>\u003ccircle class=\"b-stroke\" cx=\"120\" cy=\"208\" r=\"13\" stroke-width=\"7\"/>\u003c/symbol>\u003csymbol id=\"b-ab-g6\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M120 62C106 50 134 42 122 32\" stroke-width=\"6\"/>\u003ccircle class=\"b-ball\" cx=\"122\" cy=\"22\" r=\"14\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-ab-g7\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M26 156V120Q26 30 120 30Q214 30 214 120V156\" stroke-width=\"12\"/>\u003crect class=\"b-pad\" x=\"8\" y=\"118\" width=\"34\" height=\"74\" rx=\"16\" stroke-width=\"5\"/>\u003crect class=\"b-pad\" x=\"198\" y=\"118\" width=\"34\" height=\"74\" rx=\"16\" stroke-width=\"5\"/>\u003c/symbol>\u003csymbol id=\"b-ab-g8\" viewBox=\"0 0 240 280\">\u003cpath class=\"b-band\" d=\"M120 62C106 50 134 42 122 32\" stroke-width=\"6\"/>\u003ccircle class=\"b-ball\" cx=\"122\" cy=\"22\" r=\"14\" stroke-width=\"4\"/>\u003ccircle class=\"b-frame\" cx=\"92\" cy=\"146\" r=\"31\" stroke-width=\"7\"/>\u003ccircle class=\"b-frame\" cx=\"148\" cy=\"146\" r=\"31\" stroke-width=\"7\"/>\u003c/symbol>\u003csymbol id=\"b-ab-g9\" viewBox=\"0 0 240 280\">\u003crect class=\"b-ant\" x=\"70\" y=\"44\" width=\"100\" height=\"30\" rx=\"8\"/>\u003cpolygon class=\"b-ant\" points=\"120,8 232,38 120,68 8,38\"/>\u003cpath class=\"b-tassel\" d=\"M120 38L210 48L210 94\" stroke-width=\"6\"/>\u003ccircle class=\"b-ball\" cx=\"210\" cy=\"102\" r=\"11\" stroke-width=\"4\"/>\u003c/symbol>\u003csymbol id=\"b-pose-wave-back\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-arm\" d=\"M30 176Q2 196 4 232\"/>\u003cpath class=\"b-arm-in\" d=\"M30 176Q2 196 4 232\"/>\u003ccircle class=\"b-hand\" cx=\"4\" cy=\"236\" r=\"11\"/>\u003cpath class=\"b-arm\" d=\"M206 170Q252 150 246 100\"/>\u003cpath class=\"b-arm-in\" d=\"M206 170Q252 150 246 100\"/>\u003ccircle class=\"b-hand\" cx=\"246\" cy=\"94\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-wave-front\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-motion\" d=\"M262 74q8 10 2 22\"/>\u003cpath class=\"b-motion\" d=\"M230 62q-6-10 2-20\"/>\u003c/symbol>\u003csymbol id=\"b-pose-point-back\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-arm\" d=\"M34 170Q-2 162 -6 132\"/>\u003cpath class=\"b-arm-in\" d=\"M34 170Q-2 162 -6 132\"/>\u003ccircle class=\"b-hand\" cx=\"-6\" cy=\"126\" r=\"11\"/>\u003cpath class=\"b-finger\" d=\"M-7 117L-11 101\"/>\u003cpath class=\"b-arm\" d=\"M210 176Q238 196 236 232\"/>\u003cpath class=\"b-arm-in\" d=\"M210 176Q238 196 236 232\"/>\u003ccircle class=\"b-hand\" cx=\"236\" cy=\"236\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-point-front\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003c/symbol>\u003csymbol id=\"b-pose-think-back\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-arm\" d=\"M210 176Q238 196 236 232\"/>\u003cpath class=\"b-arm-in\" d=\"M210 176Q238 196 236 232\"/>\u003ccircle class=\"b-hand\" cx=\"236\" cy=\"236\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-think-front\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-arm\" d=\"M30 188Q40 236 92 214\"/>\u003cpath class=\"b-arm-in\" d=\"M30 188Q40 236 92 214\"/>\u003ccircle class=\"b-hand\" cx=\"96\" cy=\"212\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-cheer-back\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-arm\" d=\"M34 168Q-8 136 2 92\"/>\u003cpath class=\"b-arm-in\" d=\"M34 168Q-8 136 2 92\"/>\u003ccircle class=\"b-hand\" cx=\"2\" cy=\"86\" r=\"11\"/>\u003cpath class=\"b-arm\" d=\"M206 168Q248 136 238 92\"/>\u003cpath class=\"b-arm-in\" d=\"M206 168Q248 136 238 92\"/>\u003ccircle class=\"b-hand\" cx=\"238\" cy=\"86\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-cheer-front\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-motion\" d=\"M40 44l-12-12M200 44l12-12\"/>\u003c/symbol>\u003csymbol id=\"b-pose-pencil-back\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-arm\" d=\"M30 176Q2 196 4 232\"/>\u003cpath class=\"b-arm-in\" d=\"M30 176Q2 196 4 232\"/>\u003ccircle class=\"b-hand\" cx=\"4\" cy=\"236\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-pencil-front\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-prop\" d=\"M162 248L218 186L230 198L174 260Z\"/>\u003cpath class=\"b-ant\" d=\"M162 248L156 268L174 260Z\"/>\u003cpath class=\"b-prop2\" d=\"M218 186L226 178L238 190L230 198Z\"/>\u003cpath class=\"b-arm\" d=\"M206 178Q244 204 206 224\"/>\u003cpath class=\"b-arm-in\" d=\"M206 178Q244 204 206 224\"/>\u003ccircle class=\"b-hand\" cx=\"202\" cy=\"224\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-laptop-back\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003c/symbol>\u003csymbol id=\"b-pose-laptop-front\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003cpath class=\"b-prop2\" d=\"M66 204H174V240H66Z\"/>\u003ccircle class=\"b-prop\" cx=\"120\" cy=\"222\" r=\"7\"/>\u003cpath class=\"b-prop2\" d=\"M52 240H188L200 256H40Z\"/>\u003cpath class=\"b-arm\" d=\"M28 180Q18 216 60 226\"/>\u003cpath class=\"b-arm-in\" d=\"M28 180Q18 216 60 226\"/>\u003ccircle class=\"b-hand\" cx=\"62\" cy=\"226\" r=\"11\"/>\u003cpath class=\"b-arm\" d=\"M212 180Q222 216 180 226\"/>\u003cpath class=\"b-arm-in\" d=\"M212 180Q222 216 180 226\"/>\u003ccircle class=\"b-hand\" cx=\"178\" cy=\"226\" r=\"11\"/>\u003c/symbol>\u003csymbol id=\"b-pose-peek-back\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003c/symbol>\u003csymbol id=\"b-pose-peek-front\" viewBox=\"0 0 240 280\" overflow=\"visible\">\u003ccircle class=\"b-hand\" cx=\"64\" cy=\"196\" r=\"13\"/>\u003ccircle class=\"b-hand\" cx=\"176\" cy=\"196\" r=\"13\"/>\u003c/symbol>\u003c/svg>";
/* ===== Рушій v2: показ уроку на дошці =====
   Сторінка дає дані: LESSON (урок), IMG (картинки), QR (коди тестів), SITE (посилання, теми).
   Розмітку робить render.js, віджети — engine/src/widgets.js без змін.
   Керування (кроки, стрілки, пульт, олівець, нотатки, огляд, підказка, повний екран)
   перенесено з engine.js: для вчителя нічого не змінюється. */

const $=id=>document.getElementById(id);
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const img=(k,c,alt)=>'<img class="'+(c||'')+'" src="'+(IMG[k]||'')+'" alt="'+(alt||'')+'">';
const fmt=(n,d=0)=>(+n).toLocaleString('uk-UA',{maximumFractionDigits:d}).replace(/\u202f|\u00a0/g,' ');
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const W={};               // віджети: W.name={html(d), mount(root,d,api)}

/* Іконки панелі керування (лінійні, 24×24) — як у engine.js */
const IC={
  first:'<path d="M18 6l-8 6 8 6zM6 6v12"/>',
  last:'<path d="M6 6l8 6-8 6zM18 6v12"/>',
  back:'<path d="M15 6l-6 6 6 6"/>',
  fwd:'<path d="M9 6l6 6-6 6"/>',
  pen:'<path d="M16 3l5 5L8 21H3v-5z"/><path d="M13 6l5 5"/>',
  marker:'<path d="M9 14l-4 4v3h3l4-4"/><path d="M9 14l6-11 6 6-11 6z"/>',
  undo:'<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
  clear:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  blank:'<rect x="3" y="5" width="18" height="14" fill="currentColor"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01"/>',
  fs:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  lessons:'<path d="M9 6h12M9 12h12M9 18h12"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  test:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12l3 3 5-6"/>',
  prak:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M2 20h20M9 16v4M15 16v4"/>',
  notes:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>',
  theme:'<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>'};
const icon=k=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+IC[k]+'</svg>';
const KEYS=[['→','наступний слайд'],['←','попередній слайд (повністю розкритий)'],['Пробіл, клік по слайду, PgDn','наступний крок (анімація)'],
  ['Shift+Пробіл, Backspace, PgUp','крок назад'],['номер + Enter','перейти на слайд'],['Home / End','перший / останній слайд'],
  ['F','на весь екран'],['F5 / Shift+F5','на весь екран з початку / з цього слайда'],['P','олівець; C — стерти, Z — скасувати штрих'],
  ['G','усі слайди'],['B / W','чорний / білий екран'],['N','нотатки вчителя'],['T','інша тема'],['?','ця підказка'],['Esc','закрити вікно, вимкнути олівець']];

const CFG=(typeof SITE!=='undefined'&&SITE)||{};
const THEMES=CFG.themes||[];
let L=null,cur=0,S=[];    // урок, слайд, кроки слайдів

/* ===== Побудова сторінки уроку ===== */
function buildLesson(){
  L=LESSON;document.documentElement.dataset.grade=L.grade;
  const hb=(a,k,t)=>'<button data-a="'+a+'" title="'+t+'" aria-label="'+t+'">'+icon(k)+'</button>';
  const lessons=CFG.lessons||[];
  const test=CFG.testUrl&&(CFG.tests||[]).indexOf(L.id)>=0?CFG.testUrl+'?t='+L.id:'';
  // кнопки смуги — лише іконки, назва в підказці; смуга завжди в один рядок, довгий заголовок обрізається «…»
  const ib=(k,t,attr)=>'<button class="pill barico" '+attr+' title="'+t+'" aria-label="'+t+'">'+icon(k)+'</button>';
  const il=(k,t,href,blank)=>'<a class="pill barico" href="'+href+'"'+(blank?' target="_blank" rel="noopener"':'')+' title="'+t+'" aria-label="'+t+'">'+icon(k)+'</a>';
  app.innerHTML='<header class="bar">'+
   (CFG.homeUrl?il('home','Усі класи',CFG.homeUrl):'')+
   (CFG.classUrl?il('lessons','Уроки класу',CFG.classUrl):'')+
   (lessons.length>1?'<select class="pill" id="lsel" aria-label="Інший урок">'+lessons.map(x=>
     '<option value="'+x.url+'"'+(x.id===L.id?' selected':'')+'>Урок '+x.num+'. '+x.title+'</option>').join('')+'</select>':'')+
   '<span class="ttl" title="Урок '+L.num+'. '+L.title.replace(/"/g,'&quot;')+'">Урок '+L.num+'. '+L.title+'</span>'+
   (test?il('test','Тест (відкриється в новій вкладці)',test,1):'')+
   (CFG.praktychnaUrl?il('prak','Практична (відкриється в новій вкладці)',CFG.praktychnaUrl,1):'')+
   ib('pen','Олівець (P)','id="penBtn" aria-pressed="false"')+
   ib('grid','Усі слайди (G)','id="gridBtn"')+
   ib('notes','Нотатки (N)','id="notesBtn" aria-pressed="false"')+
   ib('help','Клавіші (?)','id="helpBtn"')+
   (THEMES.length>1?ib('theme','Інша тема (T)','id="themeBtn"'):'')+'</header>'+
   '<main id="deck"><div class="viewport" id="vp"><div class="stage" id="stage"></div><canvas class="pen" id="pen"></canvas><div class="blank" id="blank"></div>'+
     '<div class="hud" id="hud" role="toolbar" aria-label="Керування показом">'+
       hb('prevSlide','first','Попередній слайд (←)')+hb('stepBack','back','Крок назад (PgUp)')+'<span class="hud-pos" id="hpos"></span>'+
       hb('stepFwd','fwd','Наступний крок (пробіл, клік)')+hb('nextSlide','last','Наступний слайд (→)')+
       '<i class="sep"></i>'+hb('pen','pen','Олівець (P)')+
       '<span class="hud-pal" id="hpal"><button class="c" data-c="0" title="Рожевий"></button><button class="c" data-c="1" title="Синій"></button>'+
         '<button class="c" data-c="2" title="Зелений"></button><button class="c" data-c="3" title="Чорний"></button>'+
         hb('marker','marker','Маркер (напівпрозорий)')+hb('undo','undo','Скасувати штрих (Z)')+hb('clear','clear','Стерти малюнок на слайді (C)')+'</span>'+
       '<i class="sep"></i>'+hb('ov','grid','Усі слайди (G)')+hb('blank','blank','Чорний екран (B)')+hb('help','help','Клавіші (?)')+hb('fs','fs','На весь екран / вийти (F)')+
     '</div>'+
     '<div class="ovl" id="ovl" hidden><div class="panel"><div class="phead"><b>Усі слайди</b><span class="small">клік — перейти · Esc — закрити</span>'+hb('ovClose','close','Закрити (Esc)')+'</div><div class="ovgrid" id="ovg"></div></div></div>'+
     '<div class="ovl" id="help" hidden><div class="panel help"><div class="phead"><b>Керування</b>'+hb('helpClose','close','Закрити (Esc)')+'</div><table>'+
       KEYS.filter(k=>k[0]!=='T'||THEMES.length>1).map(k=>'<tr><td><kbd>'+k[0]+'</kbd></td><td>'+k[1]+'</td></tr>').join('')+'</table></div></div>'+
     '<div class="goto" id="goto" hidden></div>'+
   '</div>'+
   '<aside class="notes" id="notes" hidden><h4>Нотатки вчителя</h4><div id="noteText"></div></aside></main>';

  const stage=$('stage'),colors=secColors(L.slides);S=[];INK={};
  L.slides.forEach((d,i)=>{const r=slideHtml(d,i,L.slides.length);
    const s=el('section','slide '+r.cls);s.innerHTML=r.html;
    s.dataset.type=d.type;s.dataset.secColor=colors[i];s.dataset.grade=L.grade;
    const role=roleOf(d);if(role)s.dataset.role=role;
    stage.append(s);
    const api={setStep:k=>{if(cur===i){S[i].i=k;applyStep(i)}}};
    let st=r.mount?r.mount(s,d,api):null;
    if(!st){const fr=[...s.querySelectorAll('.f')];st={count:fr.length,step:k=>fr.forEach((f,j)=>f.classList.toggle('in',j<k))}}
    S.push({el:s,count:st.count,step:st.step,relayout:st.relayout,i:0,d,inited:false,fit:1})});

  if($('lsel'))$('lsel').onchange=e=>{e.target.blur();location.href=e.target.value};
  $('notesBtn').onclick=()=>toggle('notes');$('gridBtn').onclick=()=>openOv();
  $('penBtn').onclick=()=>pen(!penOn);$('helpBtn').onclick=()=>showHelp(true);
  if($('themeBtn'))$('themeBtn').onclick=()=>nextTheme();
  $('vp').querySelectorAll('[data-a]').forEach(b=>b.onclick=e=>{e.stopPropagation();ACT[b.dataset.a]()});
  $('hpal').querySelectorAll('[data-c]').forEach(b=>b.onclick=e=>{e.stopPropagation();penTool.c=+b.dataset.c;penTool.marker=false;pen(true)});
  $('vp').addEventListener('click',slideClick);
  ['ovl','help'].forEach(id=>$(id).addEventListener('click',e=>{if(e.target===$(id)){id==='ovl'?closeOv():showHelp(false)}}));
  bindHud();new ResizeObserver(fit).observe($('vp'));
  document.addEventListener('fullscreenchange',()=>{fit();hudShow()});
  // картинки й шрифти вантажаться пізніше — тоді розміри змінюються, підгонку повторюємо
  let imgT=0;stage.addEventListener('load',e=>{if(e.target.tagName!=='IMG')return;clearTimeout(imgT);imgT=setTimeout(()=>fitSlide(cur),30)},true);
  addEventListener('load',()=>fitAll());
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>fitAll());
  initPen();fit();
  try{if(localStorage.getItem('notes2')==='1')toggle('notes',true)}catch(e){}}

const ACT={prevSlide:()=>prevSlide(),stepBack:()=>stepBack(),stepFwd:()=>stepFwd(),nextSlide:()=>nextSlide(),
  pen:()=>pen(!penOn),marker:()=>{penTool.marker=!penTool.marker;pen(true)},undo:()=>undoPen(),clear:()=>clearPen(),
  ov:()=>openOv(),ovClose:()=>closeOv(),blank:()=>blank('black'),help:()=>showHelp(true),helpClose:()=>showHelp(false),fs:()=>fullscreen()};

function toggle(id,force){const e=$(id),on=force!==undefined?force:e.hidden;e.hidden=!on;
  const b={notes:'notesBtn'}[id];if(b)$(b).setAttribute('aria-pressed',on);
  if(id==='notes'){$('deck').classList.toggle('with-notes',on);try{localStorage.setItem('notes2',on?'1':'0')}catch(e){}}}
/* нотатка: кожен рядок — абзац; «Спитайте:» на початку — жирним; рядок «Джерело:» — дрібно внизу */
function noteHtml(t){if(!t)return '<p>—</p>';
  const esc=x=>x.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return t.split(/\n+/).map(x=>x.trim()).filter(Boolean).map(x=>{
    const m=/^([^:.!?«]{2,40}):\s+(.*)$/.exec(x);
    if(m&&/^джерел/i.test(m[1]))return '<p class="src">'+esc(x)+'</p>';
    return '<p>'+(m?'<b>'+esc(m[1])+':</b> '+esc(m[2]):esc(x))+'</p>'}).join('')}
function applyStep(i){const s=S[i];const was=s.inited;s.step(s.i);s.inited=true;
  const dots=s.el.querySelector('.stepdots');
  dots.innerHTML=s.count>0?Array.from({length:s.count},(_,k)=>'<b class="'+(k<s.i?'in':'')+'"></b>').join(''):'';
  // віджет і скріншот міняють розмітку на кожному кроці: якщо крок не вміщається — зменшуємо далі (лише вниз)
  if(was&&i===cur&&(s.d.type==='widget'||s.d.type==='shot'))fitSlide(i,true);
  if(i===cur)updPos()}
function updPos(){const s=S[cur];if(!s)return;$('hpos').textContent=(cur+1)+' / '+S.length+(s.count?' · '+s.i+'/'+s.count:'')}

/* ===== Автопідгонка =====
   Зміст, що не вміщається на слайді, рівномірно зменшується (CSS zoom через --fit) кроками по 5 %, до 75 %.
   Межа — поле слайда без відступів теми. Шапку, Біта й лупу (.inner) не рахуємо; рамки з прокруткою
   рахуємо як одне ціле. Титул: заголовок не має налазити на картинки. Не вмістилось і на 75 % —
   це ловить перевірка збірки (check_fit.py), текст треба скоротити. Розмір — у s.fit і data-fit. */
const FIT_MIN=.75,FIT_STEP=.05,FIT_GAP=10;   // FIT_GAP — найменший проміжок між текстом і картинкою титулу / Бітом, px
const FIT_SKIP='.slide-top,.bit:not([data-pos="home"]),.deco,.stickers,.inner,.t-head,.hud';
/* перекриття двох прямокутників (висота спільної частини, 0 — не перекриваються) */
const hitH=(a,b)=>Math.min(a.right,b.right)-Math.max(a.left,b.left)>2?Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)):0;
/* прямокутники самого тексту (по рядках), а не рамки блоку: рядок на всю ширину з коротким текстом не «налазить» */
function textRects(e){const rg=document.createRange();rg.selectNodeContents(e);return [...rg.getClientRects()].filter(q=>q.width>1&&q.height>1)}
const TEXT_SEL='h2,h3,p,li,dt,dd,td,th,b,button';
function overflowOf(e){const r=e.getBoundingClientRect();if(!r.width)return 0;const k=r.width/1280,cs=getComputedStyle(e);
  const lim={right:r.right-parseFloat(cs.paddingRight)*k,bottom:r.bottom-parseFloat(cs.paddingBottom)*k,left:r.left,top:r.top};
  let over=0;
  const visit=n=>{for(const c of n.children){if(c.matches(FIT_SKIP))continue;const st=getComputedStyle(c);
    if(st.display==='none'||st.visibility==='hidden')continue;
    const q=c.getBoundingClientRect();
    if(q.width&&q.height)over=Math.max(over,(q.bottom-lim.bottom)/k,(q.right-lim.right)/k);
    if(/auto|scroll|hidden/.test(st.overflowX+st.overflowY))continue;   // вміст рамки з прокруткою чи обрізанням — не межа слайда
    visit(c)}};
  visit(e);
  // перешкоди: картинки титулу, Біт у куті — текст не має під них залазити
  const blocks=[...e.querySelectorAll('.stickers li,.bit:not([data-pos="home"]) .bubble,.bit:not([data-pos="home"]) .bot')]
    .filter(b=>getComputedStyle(b).display!=='none').map(b=>{const q=b.getBoundingClientRect(),m=FIT_GAP*k;   // + проміжок, щоб не впритул
      return{left:q.left-m,right:q.right+m,top:q.top-m,bottom:q.bottom+m}});
  if(blocks.length)e.querySelectorAll(TEXT_SEL+',.sub,.t-meta,.kicker').forEach(t=>{if(t.closest('.bit,.slide-top,.stickers'))return;
    textRects(t).forEach(q=>blocks.forEach(b=>{over=Math.max(over,hitH(q,b)/k)}))});
  return over}
function fitSlide(i,keep){const s=S[i];if(!s)return;const e=s.el;if(!e.classList.contains('on'))return;
  // вкладки й тест на дошці: розмір один на всі кроки — за найбільшим станом
  const multi=s.d.type==='tabs'||s.d.type==='quiz';
  const over=()=>{if(s.relayout)s.relayout();if(!multi)return overflowOf(e);let m=0;
    for(let k=0;k<=s.count;k++){s.step(k);m=Math.max(m,overflowOf(e))}s.step(s.i);return m};
  let f=keep?s.fit:1;e.style.setProperty('--fit',f);e.classList.add('fitting');
  while(over()>2&&f>FIT_MIN+.001){f=Math.round((f-FIT_STEP)*100)/100;e.style.setProperty('--fit',f)}
  e.classList.remove('fitting');s.fit=f;if(f<1)e.dataset.fit=f;else delete e.dataset.fit}
/* усі слайди: після шрифтів, картинок і зміни теми */
function fitAll(){if(!S.length)return;
  S.forEach((s,k)=>{if(k===cur)return;s.el.classList.add('on');
    if(!s.inited){try{s.step(0)}catch(e){}s.inited=true}
    fitSlide(k);s.el.classList.remove('on')});
  fitSlide(cur)}

function go(i,stepAt){cur=i;S.forEach((s,k)=>s.el.classList.toggle('on',k===i));
  const s=S[i];s.i=stepAt==='end'?s.count:(stepAt||0);applyStep(i);fitSlide(i);
  $('noteText').innerHTML=noteHtml(s.d.note);redrawPen();if(!$('ovl').hidden)markOv();
  const h='#'+(i+1);if(location.hash!==h)history.replaceState(null,'',h)}
/* Кроки (анімація): пробіл, клік, PgDn / PgUp. Слайди: стрілки. */
function stepFwd(){const s=S[cur];if(s.i<s.count){s.i++;applyStep(cur)}else if(cur<S.length-1)go(cur+1,0)}
function stepBack(){const s=S[cur];if(s.i>0){s.i--;applyStep(cur)}else if(cur>0)go(cur-1,'end')}
function nextSlide(){if(cur<S.length-1)go(cur+1,0)}
function prevSlide(){if(cur>0)go(cur-1,'end')}
const fwd=stepFwd,back=stepBack;   // старі назви (qa.py, відео)

let FX={k:1,x:0,y:0};
function fit(){const vp=$('vp');if(!vp)return;const w=vp.clientWidth,h=vp.clientHeight;const k=Math.min(w/1280,h/720);
  FX={k,x:(w-1280*k)/2,y:(h-720*k)/2};
  $('stage').style.transform='translate('+FX.x+'px,'+FX.y+'px) scale('+k+')';
  const c=$('pen');c.width=w*devicePixelRatio;c.height=h*devicePixelRatio;c.style.width=w+'px';c.style.height=h+'px';redrawPen()}
function fullscreen(on){const vp=$('vp');const want=on===undefined?!document.fullscreenElement:on;
  if(!want&&document.fullscreenElement)document.exitFullscreen();
  else if(want&&!document.fullscreenElement&&vp.requestFullscreen)vp.requestFullscreen().catch(()=>{})}
function blank(kind){const b=$('blank');const on=!(b.classList.contains('on')&&b.dataset.k===kind);
  b.dataset.k=kind;b.classList.toggle('on',on);b.classList.toggle('white',on&&kind==='white')}

/* Клік по слайду = наступний крок (кнопки, вкладки, поля, віджети й скріншоти працюють як раніше) */
const NOCLICK='button,a,input,select,textarea,label,summary,[contenteditable],.wbox,.shot,.tabs,.opts,.opt,.cell,.seg,.sw,.frame,.qr,.hud,.ovl,.goto';
function slideClick(e){if(penOn||e.button!==0)return;const t=e.target;
  if(t.closest('#blank')){$('blank').classList.remove('on','white');return}
  if(t.closest(NOCLICK))return;if(String(getSelection&&getSelection()||''))return;stepFwd()}

/* Панель керування всередині показу: видно й на весь екран; ховається, коли мишка не рухається */
let hudT=0;
function hudShow(){const h=$('hud');if(!h)return;h.classList.add('show');$('vp').classList.remove('idle');clearTimeout(hudT);
  hudT=setTimeout(()=>{if(!penOn&&!h.matches(':hover')){h.classList.remove('show');if(document.fullscreenElement)$('vp').classList.add('idle')}},2500)}
function bindHud(){const vp=$('vp');vp.addEventListener('mousemove',hudShow);
  vp.addEventListener('mouseleave',()=>{if(!penOn)$('hud').classList.remove('show')})}

/* Огляд усіх слайдів — у вікні поверх показу */
function openOv(){const g=$('ovg');g.innerHTML='';
  S.forEach((s,i)=>{if(!s.inited){try{s.step(0)}catch(e){}s.inited=true}
    const b=el('button','thumb'),box=el('div','tbox'),c=s.el.cloneNode(true);
    c.classList.add('on');c.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));c.removeAttribute('id');
    box.append(c);
    b.append(box,el('span','tn','<b>'+(i+1)+'</b> '+String(s.d.title||s.d.kicker||(s.d.type==='home'?'Домашнє завдання':'')).replace(/<[^>]+>/g,' ')));
    b.onclick=e=>{e.stopPropagation();closeOv();go(i,0)};g.append(b)});
  $('ovl').hidden=false;const t=g.querySelector('.tbox');if(t)g.style.setProperty('--tk',t.clientWidth/1280);markOv(true)}
function markOv(scroll){[...$('ovg').children].forEach((c,k)=>c.classList.toggle('cur',k===cur));
  const c=$('ovg').children[cur];if(scroll&&c)c.scrollIntoView({block:'center'})}
function closeOv(){$('ovl').hidden=true;$('ovg').innerHTML=''}
function showHelp(on){$('help').hidden=!on}

/* Олівець: малюнок зберігається окремо для кожного слайда в координатах сцени 1280×720 */
let penOn=false,INK={},drawing=null;const penTool={c:0,marker:false};
const PENC=['--pink','--sky','--mint','--ink'],PENF=['#E8336F','#1F8EF1','#0C9B70','#1E1B4B'];
const penColor=i=>{const cs=getComputedStyle(document.documentElement);
  return cs.getPropertyValue('--pen'+(i+1)).trim()||cs.getPropertyValue(PENC[i]).trim()||PENF[i]};
function penPal(){$('hpal').querySelectorAll('[data-c]').forEach((b,k)=>{b.style.background=penColor(k);b.classList.toggle('on',k===penTool.c)})}
function pen(on){penOn=on;$('pen').classList.toggle('on',on);$('penBtn').setAttribute('aria-pressed',on);
  const h=$('hud');h.classList.toggle('inking',on);
  h.querySelector('[data-a="pen"]').classList.toggle('on',on);
  h.querySelector('[data-a="marker"]').classList.toggle('on',on&&penTool.marker);
  penPal();hudShow()}
function drawStroke(x,s){const r=devicePixelRatio,P=p=>[(p[0]*FX.k+FX.x)*r,(p[1]*FX.k+FX.y)*r];
  x.globalAlpha=s.a;x.strokeStyle=s.c;x.lineWidth=s.w*FX.k*r;x.lineCap='round';x.lineJoin='round';x.beginPath();
  const a=P(s.pts[0]);x.moveTo(a[0],a[1]);if(s.pts.length===1)x.lineTo(a[0]+.1,a[1]);
  s.pts.forEach(p=>{const q=P(p);x.lineTo(q[0],q[1])});x.stroke();x.globalAlpha=1}
function redrawPen(){const c=$('pen');if(!c)return;const x=c.getContext('2d');x.clearRect(0,0,c.width,c.height);
  (INK[cur]||[]).forEach(s=>drawStroke(x,s))}
function clearPen(){INK[cur]=[];redrawPen()}
function undoPen(){(INK[cur]||[]).pop();redrawPen()}
function initPen(){const c=$('pen');let raf=0;
  const pt=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left-FX.x)/FX.k,(e.clientY-r.top-FX.y)/FX.k]};
  c.onpointerdown=e=>{if(!penOn)return;e.preventDefault();c.setPointerCapture(e.pointerId);
    drawing={c:penColor(penTool.c),a:penTool.marker?.35:1,w:penTool.marker?22:4,pts:[pt(e)]};
    (INK[cur]=INK[cur]||[]).push(drawing);redrawPen()};
  c.onpointermove=e=>{if(!drawing)return;drawing.pts.push(pt(e));if(!raf)raf=requestAnimationFrame(()=>{raf=0;redrawPen()})};
  c.onpointerup=c.onpointercancel=()=>{drawing=null}}

/* Тема: заміна одного <link> — миттєво, без перезавантаження, той самий слайд */
function setTheme(id){if(!THEMES.length)return;
  const t=THEMES.filter(x=>x.id===id)[0]||THEMES[0];
  const link=$('themeCss');
  if(link&&link.getAttribute('href')!==t.css){
    // кольори олівця беруться з теми, а файл теми застосовується не миттєво
    link.addEventListener('load',()=>{if(L){penPal();fitAll()}},{once:true});
    link.setAttribute('href',t.css)}
  document.documentElement.dataset.theme=t.id;
  try{localStorage.setItem(themeKey(),t.id)}catch(e){}
  if(L)penPal()}
function nextTheme(){if(THEMES.length<2)return;const now=document.documentElement.dataset.theme;
  const i=THEMES.map(x=>x.id).indexOf(now);setTheme(THEMES[(i+1)%THEMES.length].id)}
// вибір теми пам'ятається окремо для кожного класу: T на уроці 9 класу не змінює 6 клас
function themeKey(){return 'theme2-'+((typeof LESSON!=='undefined'&&LESSON&&LESSON.grade)||'')}
function initTheme(){if(!THEMES.length)return;let id=null;
  try{id=localStorage.getItem(themeKey())}catch(e){}
  setTheme(THEMES.filter(x=>x.id===id)[0]?id:(CFG.theme||THEMES[0].id))}

/* Перехід на слайд за номером: цифри + Enter */
let gotoBuf='',gotoT=0;
function gotoKey(d){gotoBuf=(gotoBuf+d).slice(-3);const g=$('goto');g.hidden=false;g.textContent='→ слайд '+gotoBuf;
  clearTimeout(gotoT);gotoT=setTimeout(()=>{gotoBuf='';g.hidden=true},2500)}
function gotoDo(){const n=+gotoBuf;gotoBuf='';$('goto').hidden=true;if(n>=1&&n<=S.length)go(n-1,0)}

document.addEventListener('keydown',e=>{if(!L)return;const k=e.key,a=document.activeElement,tag=(a&&a.tagName)||'';
  const typing=/INPUT|TEXTAREA/.test(tag)||(a&&a.isContentEditable);
  if(e.ctrlKey&&(k==='z'||k==='я')){if(!typing){e.preventDefault();undoPen()}return}
  if(e.ctrlKey||e.altKey||e.metaKey)return;
  // пульт (PgDn/PgUp) гортає завжди, навіть коли курсор у полі віджета
  if(k==='PageDown'||k==='PageUp'){e.preventDefault();if(typing||tag==='SELECT')a.blur();k==='PageDown'?stepFwd():stepBack();return}
  if(typing){if(k==='Escape')a.blur();return}
  if(tag==='SELECT'){if(['ArrowLeft','ArrowRight','Escape',' '].includes(k)){e.preventDefault();a.blur()}else return}
  if(/^[0-9]$/.test(k)){gotoKey(k);return}
  if(k==='Enter'){if(gotoBuf){e.preventDefault();gotoDo()}else if(tag!=='BUTTON'&&tag!=='A'){e.preventDefault();stepFwd()}return}
  if(k==='Escape'){if(!$('help').hidden)showHelp(false);else if(!$('ovl').hidden)closeOv();
    else if($('blank').classList.contains('on'))$('blank').classList.remove('on','white');else if(penOn)pen(false);return}
  if(k==='ArrowRight'){e.preventDefault();nextSlide()}
  else if(k==='ArrowLeft'){e.preventDefault();prevSlide()}
  else if(k===' '){e.preventDefault();e.shiftKey?stepBack():stepFwd()}
  else if(k==='Backspace'){e.preventDefault();stepBack()}
  else if(k==='F5'){e.preventDefault();if(!e.shiftKey)go(0,0);fullscreen(true)}
  else if(k==='f'||k==='а'){fullscreen()}
  else if(k==='p'||k==='з'){pen(!penOn)}
  else if(k==='c'||k==='с'){clearPen()}
  else if(k==='z'||k==='я'){undoPen()}
  else if(k==='b'||k==='и'||k==='.'||k==='ю'){blank('black')}
  else if(k==='w'||k==='ц'||k===','||k==='б'){blank('white')}
  else if(k==='n'||k==='т'){toggle('notes')}
  else if(k==='g'||k==='п'){$('ovl').hidden?openOv():closeOv()}
  else if(k==='t'||k==='е'){nextTheme()}
  else if(k==='?'||k==='h'||k==='р'){showHelp($('help').hidden)}
  else if(k==='Home'){e.preventDefault();go(0,0)}
  else if(k==='End'){e.preventDefault();go(S.length-1,0)}});
// пробіл не «натискає» кнопку, на якій лишився фокус після кліку мишкою
document.addEventListener('keyup',e=>{if(L&&e.key===' '&&/BUTTON|A/.test((document.activeElement||{}).tagName||''))e.preventDefault()});
document.addEventListener('pointerup',e=>{if(!L)return;const b=e.target.closest&&e.target.closest('#deck button,.bar button');
  if(b)setTimeout(()=>b.blur(),0)});

/* API для вікна вчителя, перевірок і відео */
window.deck={get state(){return{lesson:L&&L.id,slide:cur,step:S[cur]?S[cur].i:0,steps:S[cur]?S[cur].count:0,total:S.length}},
  go:(i,k)=>go(i,k),next:()=>stepFwd(),prev:()=>stepBack(),nextSlide:()=>nextSlide(),prevSlide:()=>prevSlide()};

let app=null;
const hashSlide=()=>parseInt(((location.hash||'').match(/(\d+)$/)||[])[1],10);
function start(){app=$('app');
  // Біт: спрайт один на сторінку, слайди беруть його через <use>
  if(typeof BIT_SPRITE!=='undefined'&&!document.getElementById('bitSprite'))document.body.insertAdjacentHTML('afterbegin',BIT_SPRITE);
  initTheme();buildLesson();
  const n=hashSlide();
  go(Math.max(0,Math.min(L.slides.length-1,(n||1)-1)),0);
  addEventListener('hashchange',()=>{const m=hashSlide();
    if(m&&m-1!==cur)go(Math.max(0,Math.min(S.length-1,m-1)),0)})}

/* ===== Рушій v2: дані уроку → семантична розмітка =====
   Вхід — LESSON (JSON у сторінці), той самий для будь-якої теми.
   Усе, що раніше рахувала тема (колір частини, значок ролі, Біт, значки
   замість емодзі, Так/Ні), рахує рушій і пише data-атрибутами; тема лише малює.
   V.<тип>(d) -> {cls?, html, mount?} — як T у engine.js, тому кроки,
   віджети й скріншоти працюють без змін. */

const V={};                       // типи слайдів
const AUTHOR='&copy; М. В. Мойсеєв, вчитель інформатики';

/* ---- рядки й атрибути ---- */
const cls=(...a)=>{const s=a.filter(Boolean).join(' ');return s?' class="'+s+'"':''};
const at=(n,v)=>(v==null||v===''||v===false)?'':' '+n+'="'+String(v).replace(/"/g,'&quot;')+'"';
const vars=o=>{const s=Object.keys(o).filter(k=>o[k]!=null&&o[k]!=='').map(k=>k+':'+o[k]).join(';');return s?' style="'+s+'"':''};
const pad2=n=>String(n).padStart(2,'0');
const today=()=>new Date().toLocaleDateString('uk-UA',{day:'2-digit',month:'2-digit',year:'numeric'});

/* ---- емодзі → значки (рішення: тема малює значок за data-icon) ----
   У декоративних полях (частина, заголовок, картка, домашнє) піктограма
   прибирається, а замість неї йде data-icon; у тексті лишаються текстові
   символи (© ® ™ ♪ ↔), кольорові прибираються, ✅ ❌ → ✓ ✗. */
const PICTO=/(?:[\u{1F1E6}-\u{1F1FF}]{2}|(?![\u00A9\u00AE\u2122])\p{Extended_Pictographic})[\uFE0F\u200D]*\s?/gu;
const PICTO_COLOR=/(?:[\u{1F1E6}-\u{1F1FF}]{2}|\p{Emoji_Presentation}|(?![\u00A9\u00AE\u2122])\p{Extended_Pictographic}\uFE0F)[\uFE0F\u200D]*\s?/gu;
const PICTO_LEAD=/^(\s*(?:<[^>]+>)*)\s*(?:(?![\u00A9\u00AE\u2122])\p{Extended_Pictographic}[\uFE0F\u200D]*\s*)+/u;
const PICTO_ONE=/(?:[\u{1F1E6}-\u{1F1FF}]{2}|(?![\u00A9\u00AE\u2122])\p{Extended_Pictographic})[\uFE0F\u200D]*/u;
const tidy=s=>String(s==null?'':s).replace(/\s{2,}/g,' ').trim();
/* текст слайда */
const txt=s=>tidy(String(s==null?'':s).replace(/\u2705\uFE0F?/g,'✓').replace(/\u274C\uFE0F?/g,'✗')
  .replace(PICTO_LEAD,'$1').replace(PICTO_COLOR,''));
/* декоративний напис: без піктограм */
const plain=s=>tidy(String(s==null?'':s).replace(PICTO,''));

/* частина уроку → значок */
const SEC_ICON={'Старт':'start','Безпека':'shield','Пристрої':'phone','Вимірювання':'ruler','Процеси':'cycle',
 'Переваги':'star','Обговорюємо':'chat','Класифікація':'grid','Фініш':'flag','Технології':'bulb',
 'Розумний дім':'house','Інновації':'cap','Цифровий слід':'steps','Анімація':'film','Ефекти':'star',
 'Властивості':'sliders','Вкладка Анімація':'layout','Хронометраж':'clock','Область анімації':'list',
 'Повторення':'cycle','Практика':'pencil','Підсумки':'flag','Домашнє':'home','Теорія':'book'};
const EMO_ICON={'🎓':'cap','🏠':'house','👣':'steps','💡':'bulb','📱':'phone','🔄':'cycle','🗂':'grid','🦺':'shield',
 '⭐':'star','🏁':'flag','💬':'chat','📏':'ruler','🚀':'start','🎬':'film','📖':'book','✍':'pencil','📝':'test',
 '🔍':'search','✅':'check','🔒':'shield','⏱':'clock','🧩':'grid','📐':'ruler','🎯':'star','🧠':'bulb',
 '🖥':'monitor','📄':'doc','📊':'table','🖼':'image','💻':'code','🧊':'cube','🗄':'db','☁':'cloud','🌐':'globe',
 '🔗':'link','✉':'mail','🖨':'printer','🎨':'palette','⌨':'keyboard'};
const ICON_NAMES=new Set(Object.keys(SEC_ICON).map(k=>SEC_ICON[k]).concat(Object.keys(EMO_ICON).map(k=>EMO_ICON[k])));
function iconOf(v){const s=String(v==null?'':v).trim();if(!s)return 'star';
  if(ICON_NAMES.has(s))return s;
  const m=s.match(PICTO_ONE);const k=m?m[0].replace(/[\uFE0F\u200D]/g,''):'';
  return EMO_ICON[k]||'star'}
function secIcon(s){const n=plain(s);return SEC_ICON[n]||iconOf(s)}

/* ---- Так / Ні: рушій позначає, тема малює ---- */
const YN=/^(Так|Ні)(?=$|[\s,.;:!?—–-])/;
function yn(s){const t=String(s==null?'':s);const m=t.match(YN);if(!m)return t;
  return '<span class="yn"'+at('data-yn',m[1]==='Так'?'yes':'no')+'>'+m[1]+'</span>'+t.slice(m[1].length)}

/* ---- значок ролі слайда: з поля role або за типом і заголовком ---- */
const ROLE_T={q:'Пригадайте',tf:'Гра',think:'Подумайте',ex:'Важливо',task:'Задача',talk:'Обговорюємо',test:'Тест'};
const hasDef=list=>(list||[]).some(b=>b.k==='def'||(b.blocks&&hasDef(b.blocks))||(b.items&&b.k==='cols'&&hasDef(b.items)));
function roleOf(d){if(d.role!==undefined)return d.role||null;
  const t=plain(String(d.title||'').replace(/<[^>]+>/g,''));
  if(d.type==='quiz')return 'test';
  if(/Правда чи (міф|ні)/i.test(t))return 'tf';
  if(/^(Пригадайте|Пригадаймо|Повторимо|Повторення|Поміркуйте|Подумайте)/i.test(t)||/ребус/i.test(t))return 'q';
  if(/Обговор/i.test(t))return 'talk';
  if(/^(Задача|Завдання|Практика)/i.test(t))return 'task';
  if(['widget','shot','tabs','table','home','title'].indexOf(d.type)>=0)return null;
  if(d.type==='steps')return 'task';
  if(d.type==='text'&&hasDef(d.body))return 'ex';
  if(/\?$/.test(t)||/Дайте відповіді/.test(t))return 'think';
  return null}

/* ---- Біт: рушій вирішує, де він, що каже і в якій позі; вигляд — у темі ----
   Малюнок — з дизайн-систем (site/engine2/bit.svg, збірка вшиває його як BIT_SPRITE):
   три тіла — sq (синій квадрат, Swiss), hd (намальований ручкою, Зошит), ab (рожевий камінчик, Abstract); тема показує одне.
   Шари: поза ззаду → настрій → поза спереду → убір класу (6 антена, 7 навушники, 8 окуляри, 9 шапочка).
   Поза — за типом і роллю слайда (як радить дизайн-система): титул — wave, питання — think,
   тест — cheer, завдання — laptop, показ (скріншот, віджет, кроки, таблиця, картки) — point, пояснення — pencil. */
const BIT_MOOD={think:'think',cheer:'happy'};
function bitPose(d){if(!d)return 'wave';
  if(d.type==='title')return 'wave';if(d.type==='quiz')return 'cheer';
  const r=roleOf(d);if(r==='q'||r==='think'||r==='tf'||r==='talk')return 'think';if(r==='task')return 'laptop';
  if(/^(shot|widget|steps|table|cards|tabs)$/.test(d.type))return 'point';
  return 'pencil'}
function botSvg(pose,mood){const g=[6,7,8,9].indexOf(+LESSON.grade)>=0?+LESSON.grade:8;
  const u=id=>'<use href="#'+id+'" width="240" height="280"/>';mood=mood||BIT_MOOD[pose]||'hi';
  return ['sq','hd','ab'].map(f=>'<svg class="bot bot-'+f+'" viewBox="0 0 240 280" aria-hidden="true">'+
    u('b-pose-'+pose+'-back')+u('b-'+f+'-'+mood)+u('b-pose-'+pose+'-front')+u('b-'+f+'-g'+g)+'</svg>').join('')}
const bit=(text,where,pose)=>'<aside class="bit"'+at('data-grade',LESSON.grade)+at('data-pos',where||'corner')+at('data-pose',pose)+
  '><p class="bubble">'+txt(text)+'</p>'+botSvg(pose)+'</aside>';

/* ---- заголовок слайда зі значком ролі ---- */
function head(d,force){const t=force!==undefined?force:d.title;if(!t)return '';
  const r=roleOf(d);
  return '<h2'+cls(r?'has-role':'')+'>'+(r?'<span class="role"'+at('data-role',r)+at('title',ROLE_T[r])+' aria-hidden="true"></span>':'')+txt(t)+'</h2>'}
const intro=d=>d.intro?'<p class="intro">'+txt(d.intro)+'</p>':'';
const foot=d=>d.foot?'<p class="foot">'+txt(d.foot)+'</p>':'';
const ill=k=>k?img(k,'ill'):'';

/* ===== Блоки тексту ===== */
function blocks(list){return (list||[]).map(block).join('')}
function block(b){if(!b)return '';const f=b.f?'f':'';
  if(b.k==='p')return '<p'+cls(b.small?'small':'',f)+'>'+yn(txt(b.text))+'</p>';
  if(b.k==='def')return '<div'+cls('def',f)+'><p>'+txt(b.text)+'</p></div>';
  if(b.k==='chips')return '<ul'+cls('chips',f)+'>'+(b.items||[]).map(x=>'<li class="chip">'+yn(txt(x))+'</li>').join('')+'</ul>';
  if(b.k==='box')return '<div'+cls('box',f)+at('data-tone',b.tone)+'>'+blocks(b.blocks)+'</div>';
  if(b.k==='cols')return '<div'+cls('cols',f)+vars({'--n':b.n||2})+'>'+(b.items||[]).map(x=>'<div class="col">'+block(x)+'</div>').join('')+'</div>';
  if(b.k==='grid')return grid(b);
  if(b.k==='list')return '<ul'+cls('list')+vars({'--fs':(b.fs||28)+'px'})+'>'+(b.items||[]).map(x=>'<li'+cls(b.f===false?'':'f')+'>'+yn(txt(x))+'</li>').join('')+'</ul>';
  if(b.k==='img')return figure(b);
  return ''}
function grid(b){const items=b.items||[];
  return '<ul class="grid"'+vars({'--n':b.n||Math.min(items.length,4),'--h':(b.h||170)+'px','--fs':(b.fs||24)+'px'})+'>'+
   items.map((it,i)=>'<li'+cls('gi',b.f===false?'':'f')+'><figure class="ph">'+
    (it.img?img(it.img):'<i class="ic"'+at('data-icon',iconOf(it.e))+' aria-hidden="true"></i>')+
    '<span class="num" aria-hidden="true">'+pad2(i+1)+'</span></figure><b>'+txt(it.t)+'</b>'+
    (it.x?'<span class="x">'+txt(it.x)+'</span>':'')+'</li>').join('')+'</ul>'}
function figure(b){return '<figure'+cls('fig',b.head?'has-head':'')+vars({'--h':b.h?b.h+'px':null})+'>'+
  img(b.img)+(b.head?'<figcaption><h3>'+txt(b.head)+'</h3></figcaption>':'')+'</figure>'}

/* ===== Типи слайдів ===== */
V.title=d=>({cls:'s-title',html:
  '<div class="deco" aria-hidden="true"></div>'+
  '<header class="t-head"><span class="t-subj">Інформатика · '+LESSON.grade+' клас</span>'+
   '<span class="t-meta">Урок '+LESSON.num+' · '+txt(LESSON.par)+'</span></header>'+
  '<div class="t-main"><span class="t-badge" aria-hidden="true">'+LESSON.grade+'</span>'+
   (d.kicker?'<p class="kicker">'+txt(d.kicker)+'</p>':'')+'<h2>'+txt(d.title)+'</h2>'+
   (d.sub?'<p class="sub">'+txt(d.sub)+'</p>':'')+
   '<p class="author">'+AUTHOR+'</p><time class="date">'+today()+'</time></div>'+
  (d.stickers&&d.stickers.length?'<ul class="stickers" aria-hidden="true">'+d.stickers.map(s=>
    '<li>'+(IMG[s]?img(s):'<i class="ic"'+at('data-icon',iconOf(s))+'></i>')+'</li>').join('')+'</ul>':'')});

V.text=d=>({html:head(d)+'<div'+cls('split',d.img?'has-img':'')+'><div class="col">'+blocks(d.body)+'</div>'+ill(d.img)+'</div>'});

V.reveal=d=>({html:head(d)+'<div'+cls('split',d.img?'has-img':'')+'><dl'+cls('rv',d.compact?'compact':'',d.two?'two':'')+'>'+
  (d.items||[]).map(it=>'<div class="item"><dt class="q">'+txt(it[0])+'</dt><dd class="a f">'+yn(txt(it[1]))+'</dd></div>').join('')+
  '</dl>'+ill(d.img)+'</div>'});

V.steps=d=>({html:head(d)+intro(d)+'<ol class="steps">'+(d.steps||[]).map(s=>'<li class="f">'+txt(s)+'</li>').join('')+'</ol>'+
  (d.answer?'<div class="box answer f" data-tone="mint"><p><b>Відповідь:</b> '+txt(d.answer)+'</p></div>':'')});

V.table=d=>({html:head(d)+intro(d)+'<table class="t"><thead><tr>'+(d.head||[]).map(h=>'<th>'+txt(h)+'</th>').join('')+'</tr></thead><tbody>'+
  (d.rows||[]).map(r=>'<tr'+cls(d.frag?'f':'')+'>'+r.map((c,i)=>'<td'+cls(i===0&&d.leftFirst?'l':'')+'>'+yn(txt(c))+'</td>').join('')+'</tr>').join('')+
  '</tbody></table>'+foot(d)});

V.cards=d=>{const list=d.cards||[];
  return{html:head(d)+intro(d)+'<ul class="cards"'+vars({'--n':d.n||Math.min(list.length,4)})+'>'+
   list.map((c,i)=>'<li'+cls('card',d.frag===false?'':'f')+at('data-icon',c.img?null:iconOf(c.e))+'>'+
    '<span class="num" aria-hidden="true">'+pad2(i+1)+'</span>'+
    (c.img?img(c.img,'ci'):'<i class="ic"'+at('data-icon',iconOf(c.e))+' aria-hidden="true"></i>')+
    '<b>'+txt(c.t)+'</b>'+(c.x?'<span class="x">'+txt(c.x)+'</span>':'')+'</li>').join('')+'</ul>'+foot(d)}};

V.tabs=d=>({html:head(d)+'<div class="tabs" role="tablist">'+(d.tabs||[]).map((t,i)=>
   '<button class="tab" role="tab" aria-selected="false" data-i="'+i+'">'+txt(t.label)+'</button>').join('')+'</div>'+
  (d.tabs||[]).map(t=>'<div class="tabpane" role="tabpanel">'+blocks(t.body)+'</div>').join(''),
  mount(r,_,api){const tb=[].slice.call(r.querySelectorAll('.tab')),pn=[].slice.call(r.querySelectorAll('.tabpane'));
    const step=i=>{tb.forEach((t,k)=>{t.classList.toggle('on',k===i);t.setAttribute('aria-selected',k===i)});
      pn.forEach((p,k)=>p.classList.toggle('on',k===i))};
    tb.forEach((t,i)=>t.onclick=()=>api.setStep(i));return{count:tb.length-1,step}}});

V.quiz=d=>({html:head(d)+'<div class="qprog" aria-hidden="true"></div><p class="qq"></p><ul class="opts"></ul><p class="qexp"></p>',
  mount(r){const P=r.querySelector('.qprog'),Q=r.querySelector('.qq'),O=r.querySelector('.opts'),E=r.querySelector('.qexp');
    const qs=d.qs||[],picked={};  // picked[номер питання] = вибраний варіант
    const step=i=>{const qi=Math.floor(i/2),show=i%2===1,q=qs[qi];
      P.innerHTML=qs.map((_,k)=>'<span'+cls(k<=qi?'cur':'')+'></span>').join('');
      Q.innerHTML=(qi+1)+'. '+txt(q.q);O.innerHTML='';
      q.a.forEach((o,k)=>{const li=el('li'),b=el('button','opt','<span class="l">'+'АБВГ'[k]+'</span><span class="o">'+txt(o)+'</span>');
        if(show)b.classList.add(k===q.ok?'ok':k===picked[qi]?'wrong':'no');
        else if(k===picked[qi])b.classList.add('pick');
        b.onclick=()=>{if(show)return;const on=!b.classList.contains('pick');
          O.querySelectorAll('.opt.pick').forEach(x=>x.classList.remove('pick'));b.classList.toggle('pick',on);
          if(on)picked[qi]=k;else delete picked[qi]};li.append(b);O.append(li)});
      E.innerHTML=show?'<span class="ic" data-icon="check" aria-hidden="true"></span><span>'+txt(q.exp||q.a[q.ok])+'</span>':
        '<span>Варіанти відповідей — голосуйте!</span>';
      E.dataset.state=show?'ok':'wait'};
    return{count:qs.length*2-1,step}}});

V.shot=d=>({html:head(d)+'<div class="shot"></div>',mount:(r,_,api)=>shotMount(r.querySelector('.shot'),d,api)});

V.widget=d=>{const w=W[d.w];
  if(!w)return{html:head(d)+'<p class="warn">Немає віджета «'+plain(d.w)+'»</p>'};
  return{html:head(d)+intro(d)+'<div class="wbox">'+w.html(d)+'</div>',
    mount:(r,_,api)=>w.mount(r.querySelector('.wbox'),d,api)}};

/* «Домашнє»: тест (QR) і практична (QR + кнопка) стоять поруч; без них — картинка слайда */
V.home=d=>{const qr=(typeof QR!=='undefined'&&QR[LESSON.id])||'';const items=d.items||[];
  const pUrl=CFG.praktychnaUrl||'',pQr=CFG.praktychnaQr||'';
  const cards=(qr?'<div class="qr"><div class="qrimg">'+qr+'</div><b><span class="ic" data-icon="test" aria-hidden="true"></span>Тест до уроку</b>'+
       '<span>Скануйте камерою телефона</span></div>':'')+
    (pUrl?'<div class="qr qr-p">'+(pQr?'<div class="qrimg">'+pQr+'</div>':'')+
       '<b><span class="ic" data-icon="pencil" aria-hidden="true"></span>Практична</b>'+
       (pQr?'<span>Скануйте камерою телефона</span>':'')+
       '<a class="btn primary" href="'+pUrl+'" target="_blank" rel="noopener">Відкрити практичну</a></div>':'');
  const nQr=(qr?1:0)+(pUrl?1:0);
  const bt=qr&&pUrl?'Успіхів! Тест — за першим QR-кодом, практична — за другим.':
    pUrl?'Успіхів! Практична — за QR-кодом або кнопкою.':
    qr?'Успіхів! Тест — 12 питань, по балу за кожне.':'Успіхів! До зустрічі на наступному уроці.';
  return{html:'<h2>Домашнє завдання</h2><div class="homewrap"'+vars({'--n':items.length})+'>'+
   '<ul class="home">'+items.map((it,i)=>'<li class="hw"'+at('data-icon',iconOf(it[0]))+'>'+
     '<span class="num" aria-hidden="true">'+pad2(i+1)+'</span><h3>'+plain(it[0])+'</h3>'+
     '<p class="main">'+txt(it[1])+'</p>'+(it[2]?'<p class="small">'+txt(it[2])+'</p>':'')+'</li>').join('')+'</ul>'+
   (nQr?'<div class="qrs"'+at('data-n',nQr)+'>'+cards+'</div>':(d.img?img(d.img,'ill'):''))+'</div>'+
   '<div class="homefoot"><p class="fin">Успіхів у навчанні!</p>'+
   bit(d.bit||bt,'home',pUrl?'laptop':'wave')+'</div>'}};

/* ===== Скріншот із підказками: → веде по позначках, лупа наближає ===== */
function shotMount(box,d,api){
  const side=el('div','hs-side'),tx=el('p','hs-text',txt(d.intro)||'Пробіл або клік — далі, або оберіть пункт списку.');
  const btns=(d.spots||[]).map((s,i)=>{const b=el('button','hs-btn',txt(s.l));b.onclick=()=>api.setStep(i+1);side.append(b);return b});
  const lupa=el('button','btn lupa on','<span class="ic" data-icon="search" aria-hidden="true"></span>Лупа');
  side.append(tx,lupa);
  const frame=el('div','frame'),inner=el('div','inner'),im=el('img'),spot=el('div','spot');
  inner.append(im,spot);frame.append(inner);box.append(side,frame);
  let dd=null,cur=0,zoom=true;
  /* кадр займає вільне місце праворуч від списку й під заголовком; d.w / d.h — найбільший розмір.
     Слайд схований (розмірів ще немає) — запасні 790×520, рушій перерахує при показі (relayout). */
  function room(){const aw=box.clientWidth-side.offsetWidth-(parseFloat(getComputedStyle(box).columnGap)||0),ah=box.clientHeight;
    const MW=aw>0?Math.min(d.w||aw,aw):(d.w||790),MH=ah>0?Math.min(d.h||ah,ah):(d.h||520);return[MW,MH]}
  function layout(){const ar=(im.naturalHeight/im.naturalWidth)||.58;const m=room(),MW=m[0],MH=m[1];let w=MW,h=w*ar;if(h>MH){h=MH;w=h/ar}
    frame.style.width=w+'px';frame.style.height=h+'px';inner.style.width=w+'px';return[w,h]}
  function show(){const s=cur?d.spots[cur-1]:null;const wh=layout(),w=wh[0],h=wh[1];if(dd)dd.style.display='none';
    btns.forEach((b,k)=>b.classList.toggle('on',k===cur-1));
    tx.innerHTML=s?txt(s.t):(txt(d.intro)||'Пробіл або клік — далі, або оберіть пункт списку.');
    if(s&&s.r){const x=s.r[0],y=s.r[1],rw=s.r[2],rh=s.r[3];
      spot.style.cssText='left:'+x+'%;top:'+y+'%;width:'+rw+'%;height:'+rh+'%';spot.classList.add('on');
      let k=1,tX=0,tY=0;
      if(zoom){k=Math.max(1,Math.min(3,Math.min(.5/(rw/100),.5/(rh/100))));
        const cx=(x+rw/2)/100*w,cy=(y+rh/2)/100*h;
        tX=Math.min(0,Math.max(w-k*w,w/2-k*cx));tY=Math.min(0,Math.max(h-k*h,h/2-k*cy))}
      inner.style.transform='translate('+tX+'px,'+tY+'px) scale('+k+')';spot.style.borderWidth=(3/k)+'px'}
    else{spot.classList.remove('on');inner.style.transform='none'}
    if(s&&s.dd){if(!dd){dd=el('div','dd');inner.append(dd)}
      dd.innerHTML=s.dd.map(t=>'<div>'+txt(t)+'</div>').join('');
      dd.style.left=(s.r[0]+18)+'%';dd.style.top=(s.r[1]+s.r[3])+'%';dd.style.display='block'}}
  function step(i){cur=i;const key=(cur?d.spots[cur-1].img:null)||d.img;
    if(im.dataset.k!==key){im.dataset.k=key;im.onload=show;im.src=IMG[key]||'';show()}else show()}
  lupa.onclick=()=>{zoom=!zoom;lupa.classList.toggle('on',zoom);show()};
  return{count:(d.spots||[]).length,step,relayout:show}}

/* ===== Слайд цілком: рушій дописує колір частини, значки, Біт ===== */
function slideHtml(d,i,total){const r=V[d.type]?V[d.type](d):{html:'<p class="warn">Невідомий тип «'+plain(d.type)+'»</p>'};
  const top='<header class="slide-top" aria-hidden="true"><span class="sec"'+at('data-icon',secIcon(d.sec))+'>'+plain(d.sec)+'</span>'+
    '<span class="track"><i'+vars({'--p':((i+1)/total*100)+'%'})+'></i></span><span class="stepdots"></span>'+
    '<span class="n">'+(i+1)+'/'+total+'</span></header>';
  return{cls:r.cls||'',mount:r.mount,html:top+r.html+(d.bit&&d.type!=='home'?bit(d.bit,'corner',bitPose(d)):'')}}

/* порядок частин уроку → колір (0–3), як було в темі Swiss */
function secColors(slides){const secs=[];
  slides.forEach(s=>{const n=plain(s.sec);if(n&&secs.indexOf(n)<0)secs.push(n)});
  return slides.map(s=>Math.max(0,secs.indexOf(plain(s.sec)))%4)}

/* ===== Widgets: live demonstrations the teacher operates at the board =====
   W.name = {html(d) -> string, mount(root, d, api) -> optional {count, step(i)}} */

/* --- 8 клас: двійкове кодування --- */
W.morse={html:()=>'<div class="cols" style="grid-template-columns:.8fr 1.2fr"><div id="mTable"></div><div><h3>Складаємо слово</h3><div class="seg" id="mKeys" style="margin-bottom:14px"></div><div class="box" style="min-height:230px"><div id="mWord" style="font:800 40px var(--display);min-height:52px">&nbsp;</div><div id="mOut" style="display:flex;gap:30px;flex-wrap:wrap;min-height:50px;align-items:center"></div><p style="margin-top:14px">Сигналів: <b id="mCnt" class="mono">0</b></p></div><div class="seg" style="margin-top:12px"><button id="mBack">⌫ Стерти</button><button id="mClr">Очистити</button></div></div></div>',
  mount(r){const M={'а':'.-','о':'---','п':'.--.','р':'.-.','т':'-'};const sig=c=>'<span class="sig">'+[...c].map(x=>x==='.'?'<span class="dot"></span>':'<span class="dash"></span>').join('')+'</span>';
    r.querySelector('#mTable').innerHTML=Object.entries(M).map(([k,v])=>'<div style="display:flex;gap:18px;align-items:center;margin:10px 0"><b style="font:800 34px var(--display);width:44px">'+k+'</b>'+sig(v)+'</div>').join('');
    let w='';const upd=()=>{r.querySelector('#mWord').textContent=w||'\u00a0';r.querySelector('#mOut').innerHTML=[...w].map(c=>sig(M[c])).join('');r.querySelector('#mCnt').textContent=[...w].reduce((s,c)=>s+M[c].length,0)};
    Object.keys(M).forEach(k=>{const b=el('button','',k);b.style.fontSize='26px';b.onclick=()=>{if(w.length<8){w+=k;upd()}};r.querySelector('#mKeys').append(b)});
    r.querySelector('#mBack').onclick=()=>{w=w.slice(0,-1);upd()};r.querySelector('#mClr').onclick=()=>{w='';upd()}}};

W.bitsN={html:()=>'<div class="cols"><div><p>Кількість бітів: <b class="mono" id="nV">1</b></p><input type="range" min="1" max="8" value="1" id="nR" style="width:100%;accent-color:var(--vio)" aria-label="Кількість бітів"><p style="margin-top:18px">Різних кодів: 2<sup id="nS">1</sup> =</p><div class="count" id="nC">2</div><p class="small" id="nE" style="margin-top:12px"></p></div><div class="box" style="overflow:auto"><div id="nL" class="mono" style="font-size:23px;line-height:1.6;display:flex;flex-wrap:wrap;gap:4px 18px"></div></div></div>',
  mount(r,d,api){const ex={1:'хибне / істинне, вимкнено / увімкнено',2:'чотири сторони горизонту',3:'8 кольорів або рядки шахівниці',4:'16 кодів',5:'32 коди',6:'64 коди',7:'128 кодів',8:'256 кодів = 1 байт: літери, цифри, знаки'};const R=r.querySelector('#nR');
    const step=i=>{const n=i+1,c=2**n;R.value=n;r.querySelector('#nV').textContent=n;r.querySelector('#nS').textContent=n;r.querySelector('#nC').textContent=c;r.querySelector('#nE').textContent=ex[n];
      const lim=Math.min(c,64);let h='';for(let k=0;k<lim;k++)h+='<span>'+k.toString(2).padStart(n,'0')+'</span>';if(c>lim)h+='<span>… ще '+(c-lim)+'</span>';r.querySelector('#nL').innerHTML=h};
    R.oninput=()=>api.setStep(+R.value-1);return{count:7,step}}};

W.textenc={html:()=>'<div class="cols" style="grid-template-columns:1fr 1.3fr"><table class="t"><tr><th>Символ</th><th>Код</th><th>Байт</th></tr><tr><td>!</td><td class="mono">33</td><td class="mono">00100001</td></tr><tr><td>@</td><td class="mono">64</td><td class="mono">01000000</td></tr><tr><td>W</td><td class="mono">87</td><td class="mono">01010111</td></tr><tr><td>ю</td><td class="mono">254</td><td class="mono">11111110</td></tr><tr><td>я</td><td class="mono">255</td><td class="mono">11111111</td></tr></table>'+
  '<div><input class="field" id="tx" value="Слава Україні!" style="width:100%;font-family:var(--body)" aria-label="Текст"><div style="display:flex;gap:28px;margin-top:14px;font-size:22px"><div>Windows-1251<br><b id="tA" style="font:800 32px var(--display);color:var(--vio)"></b></div><div>у бітах<br><b id="tB" style="font:800 32px var(--display);color:var(--vio)"></b></div><div>UTF-8<br><b id="tU" style="font:800 32px var(--display);color:var(--vio)"></b></div></div><div id="tC" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;max-height:210px;overflow:auto"></div></div></div>',
  mount(r){const cp={'Ё':168,'ё':184,'Ґ':165,'ґ':180,'Є':170,'є':186,'І':178,'і':179,'Ї':175,'ї':191,'«':171,'»':187,'–':150,'—':151,'№':185,'’':146};
    const code=ch=>{const u=ch.codePointAt(0);if(u<128)return u;if(u>=0x410&&u<=0x44F)return u-0x410+192;return cp[ch]??null};
    const I=r.querySelector('#tx');const upd=()=>{const s=[...I.value];r.querySelector('#tA').textContent=s.length+' Б';r.querySelector('#tB').textContent=s.length*8+' б';r.querySelector('#tU').textContent=new TextEncoder().encode(I.value).length+' Б';
      r.querySelector('#tC').innerHTML=s.slice(0,40).map(c=>{const k=code(c);return '<div style="border:1.5px solid var(--line);border-radius:10px;padding:4px 10px;text-align:center"><b style="font-size:24px">'+(c===' '?'␣':c.replace(/[<&]/g,''))+'</b><br><span class="mono" style="font-size:14px;color:var(--muted)">'+(k===null?'—':k)+'<br>'+(k===null?'немає':k.toString(2).padStart(8,'0'))+'</span></div>'}).join('')};
    I.oninput=upd;upd()}};

W.byte={html:()=>'<p class="small">Клацайте клітинки: 0 ↔ 1. Або введіть число.</p><div id="bC" style="display:flex;gap:10px;margin:14px 0 22px"></div><div class="cols" style="flex:none"><div class="box"><p>Сума: <span id="bS" class="mono"></span></p></div><div class="box sun"><p>Число: <b id="bD" class="mono" style="font-size:40px"></b><sub>10</sub></p></div></div><p style="margin-top:16px">Число 0–255: <input class="field" id="bI" type="number" min="0" max="255" value="13"></p>',
  mount(r){const bits=[0,0,0,0,1,1,0,1];const C=r.querySelector('#bC'),I=r.querySelector('#bI');
    bits.forEach((_,i)=>{const p=el('div','place','<button class="cell" aria-label="Розряд '+2**(7-i)+'"></button>'+2**(7-i));p.firstChild.onclick=()=>{bits[i]^=1;upd()};C.append(p)});
    const upd=fromI=>{const v=bits.reduce((s,b,i)=>s+b*2**(7-i),0);C.querySelectorAll('.cell').forEach((c,i)=>{c.textContent=bits[i];c.classList.toggle('one',!!bits[i])});
      const p=bits.map((b,i)=>b?2**(7-i):null).filter(x=>x!==null);r.querySelector('#bS').textContent=p.length?p.join(' + '):'0';r.querySelector('#bD').textContent=v;if(!fromI)I.value=v};
    I.oninput=()=>{const v=Math.max(0,Math.min(255,parseInt(I.value)||0));v.toString(2).padStart(8,'0').split('').forEach((b,i)=>bits[i]=+b);upd(true)};upd()}};

/* --- 8 клас: одиниці --- */
W.doubling={html:()=>'<div class="cols" style="grid-template-columns:1fr 1fr"><div><p>Пробіл або клік: множимо на 2.</p><div id="dR" style="display:flex;gap:6px;flex-wrap:wrap"></div></div><div class="box" style="display:flex;flex-direction:column;justify-content:center"><p>2<sup id="dE">0</sup> =</p><div class="count" id="dV">1</div><p id="dM" style="margin-top:14px;min-height:80px"></p></div></div>',
  mount(r){const step=e=>{r.querySelector('#dE').textContent=e;r.querySelector('#dV').textContent=fmt(2**e);
    let h='';for(let i=0;i<=e;i++)h+='<span class="mono" style="font-size:19px;border-radius:8px;padding:4px 9px;background:'+(i===10?'var(--sun)':'var(--off)')+'">2<sup>'+i+'</sup>='+fmt(2**i)+'</span>';r.querySelector('#dR').innerHTML=h;
    r.querySelector('#dM').innerHTML=e===10?'<b>1024 ≈ 1000!</b> Тому 1024 Б назвали <b>кілобайтом</b>.':e<10?'Коли число стане близьким до 1000?':''};return{count:10,step}}};

W.disk={html:()=>'<div class="cols" style="grid-template-columns:.9fr 1.1fr"><div><div class="seg" id="kB" style="flex-direction:column;align-items:flex-start"></div><p class="small" style="margin-top:16px">Виробник: 1 ГБ = 10<sup>9</sup> Б<br>Windows: 1 ГБ = 2<sup>30</sup> Б</p></div><div class="box"><p>На коробці: <b id="kL"></b></p><p>Байтів: <b id="kY" class="mono"></b></p><p>Windows покаже: <b id="kW" class="mono" style="color:var(--vio);font-size:38px"></b></p><p>«Зникло»: <b id="kX" class="mono" style="color:var(--pink)"></b></p></div></div>',
  mount(r,d,api){const D=[['Флешка 16 ГБ',16e9],['Телефон 256 ГБ',256e9],['SSD 512 ГБ',512e9],['Диск 1 ТБ',1e12],['Диск 2 ТБ',2e12]];
    D.forEach((x,i)=>{const b=el('button','',x[0]);b.style.fontSize='22px';b.onclick=()=>api.setStep(i);r.querySelector('#kB').append(b)});
    const step=i=>{const [n,b]=D[i];[...r.querySelector('#kB').children].forEach((x,k)=>x.classList.toggle('on',k===i));r.querySelector('#kL').textContent=n.replace(/^\S+\s/,'');r.querySelector('#kY').textContent=fmt(b);
      const g=b/2**30;r.querySelector('#kW').textContent=g>=1024?fmt(b/2**40,2)+' ТБ':fmt(g,1)+' ГБ';r.querySelector('#kX').textContent='≈ '+fmt(b/1e9-g,1)+' ГБ'};return{count:D.length-1,step}}};

W.winprops={html:()=>'<div class="cols" style="grid-template-columns:1fr 1.15fr"><div><p>Символів ASCII у файлі:</p><input class="field" id="wC" type="number" min="0" value="2048" style="width:240px" aria-label="Символів"><div class="seg" id="wP" style="margin-top:14px"></div><p class="small" style="margin-top:16px">1 символ ASCII = 1 Б</p></div>'+
  '<div class="paper" style="border-radius:12px;align-self:start;font-family:\'Segoe UI\',var(--body)"><div style="padding:10px 16px;border-bottom:1px solid #ddd;font-size:18px">код.txt — властивості</div><div style="padding:16px 20px;display:grid;grid-template-columns:120px 1fr;gap:10px;font-size:20px"><span style="color:#777">Тип:</span><span>Текстовий документ</span><span style="color:#777">Розмір:</span><span><span id="wS" style="background:#DBF6EC;border-radius:6px;padding:0 6px"></span></span><span style="color:#777">На диску:</span><span id="wD"></span></div></div></div>',
  mount(r){const ws=b=>{if(b<1024)return fmt(b)+' байтів';const u=['КБ','МБ','ГБ'];let v=b/1024,k=0;while(v>=1024&&k<2){v/=1024;k++}const d=v<10?2:v<100?1:0;const t=Math.floor(v*10**d)/10**d;return t.toLocaleString('uk-UA',{minimumFractionDigits:d,maximumFractionDigits:d})+' '+u[k]+' ('+fmt(b)+' байтів)'};
    const I=r.querySelector('#wC');const upd=()=>{const c=Math.max(0,Math.floor(+I.value||0));r.querySelector('#wS').textContent=ws(c);r.querySelector('#wD').textContent=ws(Math.ceil(c/4096)*4096)};
    [1,2048,5000,100000,3145728].forEach(n=>{const b=el('button','',fmt(n));b.onclick=()=>{I.value=n;upd()};r.querySelector('#wP').append(b)});I.oninput=upd;upd()}};

W.ladder={html:()=>'<div style="display:flex;gap:12px;align-items:center"><input class="field" id="cV" type="number" min="0" step="any" value="1" aria-label="Значення"><select class="field" id="cU" style="width:auto;font-family:var(--body)" aria-label="Одиниця"></select></div><div id="cL" style="display:flex;margin-top:28px"></div><p class="small" style="margin-top:22px">До крупніших одиниць — ділимо, до дрібніших — множимо.</p>',
  mount(r){const U=[['б',1],['Б',8],['кБ',8192],['МБ',8*1024**2],['ГБ',8*1024**3],['ТБ',8*1024**4]];const S=r.querySelector('#cU');U.forEach((u,i)=>S.append(new Option(u[0],i)));S.value=3;
    const nice=v=>v===0?'0':v>=1?fmt(v,v<1000?3:0):v<1e-6?v.toExponential(2).replace('.',','):fmt(v,8);
    const upd=()=>{const v=+r.querySelector('#cV').value||0,ui=+S.value,b=v*U[ui][1];let h='';U.forEach((u,i)=>{if(i)h+='<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 6px;font:700 15px var(--mono);color:var(--pink);min-width:60px">'+(i===1?'×8':'×1024')+'<br>←→<br>'+(i===1?':8':':1024')+'</div>';
      h+='<div style="flex:1;min-width:0;border:2px solid '+(i===ui?'var(--vio)':'var(--line)')+';background:'+(i===ui?'var(--vio-soft)':'var(--paper)')+';border-radius:14px;padding:12px 8px;text-align:center"><div style="font:800 24px var(--display)">'+u[0]+'</div><div class="mono" style="font-size:19px;word-break:break-all;margin-top:8px;color:var(--vio)">'+nice(b/u[1])+'</div></div>'});r.querySelector('#cL').innerHTML=h};
    r.querySelector('#cV').oninput=upd;S.onchange=upd;upd()}};

W.bmp={html:()=>'<div class="cols" style="grid-template-columns:.9fr 1.2fr"><div><p>Ширина: <input class="field" id="bw" type="number" min="1" max="400" value="25" style="width:110px"> пкс</p><p>Висота: <input class="field" id="bh" type="number" min="1" max="400" value="20" style="width:110px"> пкс</p><p class="small">1 піксель = 3 Б · заголовок = 54 Б · рядок кратний 4 Б</p><div id="bz" style="display:flex;gap:2px;flex-wrap:wrap;margin-top:8px" aria-hidden="true"></div><p class="small"><span style="color:var(--sky)">■</span> кольори <span style="color:var(--pink)">■</span> вирівнювання</p></div><div class="box" style="align-self:start" id="bo"></div></div>',
  mount(r){const upd=()=>{const w=Math.max(1,Math.min(400,+r.querySelector('#bw').value||1)),h=Math.max(1,Math.min(400,+r.querySelector('#bh').value||1)),row=w*3,pad=(4-row%4)%4,rl=row+pad,px=rl*h;
    r.querySelector('#bo').innerHTML=['рядок: '+w+' · 3 Б = '+row+' Б','вирівнювання: +'+pad+' Б → '+rl+' Б','пікселі: '+h+' · '+rl+' = '+fmt(px)+' Б','+ заголовок 54 Б'].map(t=>'<p class="mono" style="font-size:23px">'+t+'</p>').join('')+'<p>Розмір: <b style="font:800 38px var(--display);color:var(--vio)">'+fmt(px+54)+' Б</b></p>';
    let v='';const n=Math.min(row,56);for(let i=0;i<n;i++)v+='<i style="width:9px;height:22px;border-radius:2px;background:var(--sky)"></i>';if(row>56)v+='…';for(let i=0;i<pad;i++)v+='<i style="width:9px;height:22px;border-radius:2px;background:var(--pink)"></i>';r.querySelector('#bz').innerHTML=v};
    r.querySelector('#bw').oninput=upd;r.querySelector('#bh').oninput=upd;upd()}};

/* --- 9 клас: текстові документи --- */
W.wysiwyg={html:()=>'<div class="seg" style="margin-bottom:14px"><button id="yC">Без WYSIWYG: команди розмітки</button><button id="yV">З WYSIWYG: як на папері</button></div><div id="yB" style="flex:1;min-height:0"></div>',
  mount(r,d,api){const code='<div style="font:500 22px/1.6 var(--mono);background:#1D1A36;color:#D9D4FF;border-radius:16px;padding:18px 24px;white-space:pre-wrap;height:100%"><span style="color:#FF9BC2">\\title{</span>Мій рідний край<span style="color:#FF9BC2">}</span>\nНаша країна – <span style="color:#FF9BC2">\\bold{</span>просто казкова<span style="color:#FF9BC2">}</span>.\nТут є <span style="color:#FF9BC2">\\italic{</span>гори, степи й моря<span style="color:#FF9BC2">}</span>.\n<span style="color:#FF9BC2">\\color{blue}</span>Кожен край має свою красу.<span style="color:#FF9BC2">\\end</span></div>';
    const view='<div class="paper" style="border-radius:16px;padding:26px 32px;height:100%"><h4 style="font:800 34px var(--serif);text-align:center;margin:0 0 10px;color:#2B2A7A">Мій рідний край</h4><p style="font:500 26px/1.5 var(--serif);margin:0">Наша країна – <b>просто казкова</b>. Тут є <i>гори, степи й моря</i>. <span style="color:#1F5FD1">Кожен край має свою красу.</span></p></div>';
    const step=i=>{r.querySelector('#yB').innerHTML=i?view:code;r.querySelector('#yC').classList.toggle('on',!i);r.querySelector('#yV').classList.toggle('on',!!i)};
    r.querySelector('#yC').onclick=()=>api.setStep(0);r.querySelector('#yV').onclick=()=>api.setStep(1);return{count:1,step}}};

W.rings={html:()=>'<div class="cols" style="grid-template-columns:460px 1fr"><div id="gR" style="position:relative;width:440px;height:440px"></div><div><div id="gS" class="paper" style="font:500 27px/1.6 var(--serif);border-radius:16px;padding:18px 24px"><span class="p0"><span class="s0"><span class="w0"><span class="c0">Н</span>аша</span> країна – просто казкова.</span> Тут гори, ліси й теплі моря.</span><br>Восени тут золоте листя і синє небо.</div><p id="gM" style="margin-top:16px;font-weight:700"></p><div class="chips" style="margin-top:8px"><span class="chip">📊 таблиці</span><span class="chip">📈 діаграми</span><span class="chip">🖼️ малюнки</span><span class="chip">🔀 схеми</span></div></div></div>',
  mount(r,d,api){const R=[['Символ','c0','#E89B00',120,'Символ — найменший об\u2019єкт тексту.'],['Слово','w0','#E8336F',200,'Слово складається із символів.'],['Речення','s0','#0C9B70',280,'Речення складається зі слів.'],['Абзац','p0','#1F8EF1',360,'Абзац — текст між двома натисканнями Enter.'],['Сторінка',null,'#6D4AFF',440,'Сторінка містить усі інші об\u2019єкти.']];
    [...R].reverse().forEach(([n,,c,s],k)=>{const i=4-k;const b=el('button','',n);b.style.cssText='position:absolute;border:none;border-radius:50%;left:50%;transform:translateX(-50%);display:flex;justify-content:center;cursor:pointer;font:800 21px var(--body);color:#fff;width:'+s+'px;height:'+s+'px;top:'+(440-s)+'px;background:'+c+';'+(i===0?'align-items:center':'padding-top:12px');b.onclick=()=>api.setStep(i+1);r.querySelector('#gR').append(b)});
    const S=r.querySelector('#gS');const step=i=>{S.querySelectorAll('span').forEach(x=>x.style.background='');S.style.outline='';if(!i){r.querySelector('#gM').textContent='Об\u2019єкти вкладені один в одного.';return}
      const x=R[i-1];if(x[1])S.querySelector('.'+x[1]).style.background='#FFD95A';else S.style.outline='5px solid #FFC228';r.querySelector('#gM').textContent=x[4]};return{count:5,step}}};

W.lab={html:()=>'<div class="tabs" id="lT"></div><div style="display:grid;grid-template-columns:430px 1fr;gap:28px;flex:1;min-height:0"><div><p class="small" id="lP" style="margin-bottom:12px"></p><div id="lC" style="display:flex;flex-direction:column;gap:12px"></div></div><div class="prev" id="lV"></div></div>',
  mount(r,d,api){const LAB={
   'Символ':{p:'Шрифт, розмір, колір, накреслення, видозміна, зсув, інтервал між символами.',s:{font:'serif',size:70,color:'#222',b:0,i:0,u:0,sp:0,pos:0},c:[['seg','Шрифт','font',[['serif','Lora'],['sans','Nunito'],['mono','Mono']]],['range','Розмір','size',24,120],['col','Колір','color',['#222','#6D4AFF','#E8336F','#0C9B70','#1F8EF1']],['tog','Накреслення',[['b','Ж'],['i','К'],['u','П']]],['range','Інтервал','sp',0,20],['seg','Зсув','pos',[[0,'звич.'],[1,'x²'],[-1,'x₂']]]],
     v:s=>'<div class="paper" style="font-family:'+{serif:'var(--serif)',sans:'var(--body)',mono:'var(--mono)'}[s.font]+';font-size:'+s.size+'px;color:'+s.color+';font-weight:'+(s.b?800:500)+';font-style:'+(s.i?'italic':'normal')+';text-decoration:'+(s.u?'underline':'none')+';letter-spacing:'+s.sp+'px;padding:20px 30px;border-radius:12px">Україн<span style="vertical-align:'+(s.pos>0?'super':s.pos<0?'sub':'baseline')+';font-size:'+(s.pos?'.6em':'1em')+'">а</span></div>'},
   'Абзац':{p:'Відступи, відступ першого рядка, вирівнювання, міжрядковий інтервал, відстань між абзацами.',s:{al:'left',first:30,left:0,lh:1.4,gap:10},c:[['seg','Вирівнювання','al',[['left','ліво'],['center','центр'],['right','право'],['justify','ширина']]],['range','Перший рядок','first',0,80],['range','Лівий відступ','left',0,120],['range','Міжрядковий','lh',1,2.4,.1],['range','Між абзацами','gap',0,40]],
     v:s=>{const p='text-align:'+s.al+';text-indent:'+s.first+'px;margin:0 0 '+s.gap+'px '+s.left+'px;line-height:'+s.lh+';font:500 18px var(--serif)';return '<div class="paper" style="width:600px;padding:26px 30px"><p style="'+p+'">Наша країна – просто казкова. Тут є гори, степи й моря, ліси та річки. Кожен край має свою красу.</p><p style="'+p+'">Карпати вкриті лісами, на півдні шумить Чорне море, а Дніпро ділить країну на два береги.</p></div>'}},
   'Сторінка':{p:'Розмір аркуша, орієнтація, поля, нумерація, колонтитули.',s:{or:'p',m:24,num:1,hdr:1},c:[['seg','Орієнтація','or',[['p','книжкова'],['l','альбомна']]],['range','Поля','m',6,50],['tog','Показати',[['num','№ сторінки'],['hdr','колонтитул']]]],
     v:s=>{const w=s.or==='p'?300:424,h=s.or==='p'?424:300;const ln=Array.from({length:14},(_,i)=>'<div style="height:7px;background:#cfd3e6;border-radius:3px;margin-bottom:7px;width:'+(i%4===3?60:100)+'%"></div>').join('');return '<div class="paper" style="width:'+w+'px;height:'+h+'px;padding:'+s.m+'px;overflow:hidden">'+(s.hdr?'<div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:11px;color:#999">Шкільна газета</div>':'')+'<div style="outline:1px dashed #b9b2ff;height:100%;overflow:hidden">'+ln+'</div>'+(s.num?'<div style="position:absolute;bottom:3px;left:0;right:0;text-align:center;font-size:12px;color:#666">1</div>':'')+'</div>'}},
   'Малюнок':{p:'Тип, розмір, кольори, положення, обтікання текстом.',s:{w:160,wrap:'sq',pos:'r'},c:[['range','Розмір','w',80,300],['seg','Обтікання','wrap',[['sq','навколо'],['inl','у тексті'],['tb','зверху й знизу']]],['seg','Положення','pos',[['l','ліворуч'],['r','праворуч']]]],
     v:s=>{const pic='<span class="pic" style="display:'+(s.wrap==='tb'?'block':'inline-block')+';'+(s.wrap==='sq'?'float:'+(s.pos==='l'?'left':'right')+';margin:4px '+(s.pos==='l'?'12px 6px 0':'0 6px 12px')+';':'')+(s.wrap==='tb'?'margin:8px '+(s.pos==='l'?'auto 8px 0':'0 8px auto')+';':'vertical-align:middle;')+'width:'+s.w+'px;height:'+Math.round(s.w*.62)+'px"></span>';
       return '<div class="paper" style="width:600px;padding:22px 26px;font:500 17px/1.5 var(--serif)">'+(s.wrap!=='inl'?pic:'')+'Карпати вкриті лісами, тут течуть швидкі річки й ростуть рідкісні рослини. '+(s.wrap==='inl'?pic:'')+' Влітку туристи йдуть у походи на Говерлу, а взимку катаються на лижах. Місцеві жителі зберігають давні традиції, ремесла та пісні.</div>'}},
   'Таблиця':{p:'Кількість рядків і стовпців, їх висота та ширина, заливка.',s:{r:3,c:3,fill:'#ECE7FF',h:36},c:[['range','Рядків','r',1,7],['range','Стовпців','c',1,6],['range','Висота рядка','h',24,60],['col','Заливка','fill',['#ffffff','#ECE7FF','#DBF6EC','#FFF3CC','#FFE2EC']]],
     v:s=>{let t='<table style="border-collapse:collapse;background:#fff;font:16px var(--body);color:#222">';for(let i=0;i<s.r;i++){t+='<tr>';for(let j=0;j<s.c;j++)t+='<td style="border:1.5px solid #555;width:'+(j?80:110)+'px;height:'+s.h+'px;padding:2px 8px;background:'+(i?'#fff':s.fill)+';font-weight:'+(i?500:800)+'">'+(i?'':'Стовп. '+(j+1))+'</td>';t+='</tr>'}return t+'</table>'}}};
    const keys=d.only||Object.keys(LAB);let k=keys[0];
    keys.forEach((n,i)=>{const t=el('button','tab',n);t.onclick=()=>api.setStep(i);r.querySelector('#lT').append(t)});
    const draw=()=>r.querySelector('#lV').innerHTML=LAB[k].v(LAB[k].s);
    const step=i=>{k=keys[i];[...r.querySelector('#lT').children].forEach((t,j)=>t.classList.toggle('on',j===i));const X=LAB[k],s=X.s,C=r.querySelector('#lC');r.querySelector('#lP').innerHTML='<b>Властивості:</b> '+X.p;C.innerHTML='';
      X.c.forEach(c=>{const row=el('div','ctrl');row.append(el('label','',c[1]));
        if(c[0]==='range'){const q=el('input');q.type='range';q.min=c[3];q.max=c[4];q.step=c[5]||1;q.value=s[c[2]];q.oninput=()=>{s[c[2]]=+q.value;draw()};row.append(q)}
        if(c[0]==='seg'){const g=el('div','seg');c[3].forEach(([v,l])=>{const b=el('button',s[c[2]]==v?'on':'',l);b.onclick=()=>{s[c[2]]=v;[...g.children].forEach(x=>x.classList.toggle('on',x===b));draw()};g.append(b)});row.append(g)}
        if(c[0]==='tog'){const g=el('div','seg');c[2].forEach(([p,l])=>{const b=el('button',s[p]?'on':'',l);b.onclick=()=>{s[p]=s[p]?0:1;b.classList.toggle('on',!!s[p]);draw()};g.append(b)});row.append(g)}
        if(c[0]==='col'){const g=el('div','seg');c[3].forEach(v=>{const b=el('button','sw'+(s[c[2]]===v?' on':''));b.style.background=v;b.setAttribute('aria-label',v);b.onclick=()=>{s[c[2]]=v;[...g.children].forEach(x=>x.classList.toggle('on',x===b));draw()};g.append(b)});row.append(g)}
        C.append(row)});draw()};
    return{count:keys.length-1,step}}};

W.convert={html:()=>'<div style="display:flex;align-items:center;gap:24px;justify-content:center;margin:20px 0"><div class="paper" style="width:150px;height:150px;border-radius:24px;display:grid;place-items:center;padding:14px">'+img('fDOCX')+'</div><span id="cg" style="font-size:70px;transition:transform .8s">⚙️</span><div class="paper" id="ct" style="width:150px;height:150px;border-radius:24px;display:grid;place-items:center;padding:14px"></div></div><p id="cn" style="text-align:center;font-weight:800"></p>',
  mount(r){const F=[['fPDF','PDF'],['fTXT','TXT'],['fRTF','RTF'],['fODT','ODT']];let a=0;
    const step=i=>{if(!i){r.querySelector('#ct').innerHTML='<span style="font-size:60px;color:#bbb">?</span>';r.querySelector('#cn').textContent='Пробіл або клік — конвертуємо';return}
      a+=360;r.querySelector('#cg').style.transform='rotate('+a+'deg)';const [k,n]=F[i-1];r.querySelector('#ct').innerHTML=img(k);r.querySelector('#cn').textContent='DOCX → '+n};return{count:F.length,step}}};

W.zoom={html:()=>'<div class="cols" style="grid-template-columns:.8fr 1.2fr"><div><p>Повзунок, кнопки або <b>Ctrl + коліщатко миші</b> над сторінкою.</p>'+img('mouse','','Коліщатко миші').replace('<img','<img style="border-radius:14px;max-height:150px;background:#fff"')+
  '<div style="display:flex;gap:10px;align-items:center;margin-top:14px"><button class="btn" id="zM">−</button><input type="range" id="zR" min="30" max="200" value="100" style="flex:1;accent-color:var(--vio)" aria-label="Масштаб"><button class="btn" id="zP">+</button><b id="zV" class="mono" style="width:80px;font-size:22px">100%</b></div><button class="btn" id="zF" style="margin-top:10px">За шириною сторінки</button></div>'+
  '<div class="win"><div class="body" id="zB" style="display:grid;place-items:start center"><div class="dpage" id="zG" style="transform-origin:top center;margin:14px"><h6>Шкільна газета</h6><p>Цього тижня в нашій школі відбувся турнір з інформатики. Переможці отримали дипломи.</p><div class="pic" style="width:160px;height:90px;float:right;margin:0 0 8px 12px"></div><p>Наступного місяця — виставка робіт гуртка робототехніки.</p><p>Редакція чекає ваших дописів і світлин.</p></div></div><div class="sb"><span>Сторінка 1 з 1</span><span style="margin-left:auto" id="zS">100%</span></div></div></div>',
  mount(r){const R=r.querySelector('#zR');const set=v=>{v=Math.max(30,Math.min(200,Math.round(v)));R.value=v;r.querySelector('#zV').textContent=v+'%';r.querySelector('#zS').textContent=v+'%';const g=r.querySelector('#zG');g.style.transform='scale('+v/100+')';g.style.marginBottom=(14+640*(v/100-1))+'px'};
    R.oninput=()=>set(+R.value);r.querySelector('#zM').onclick=()=>set(+R.value-10);r.querySelector('#zP').onclick=()=>set(+R.value+10);r.querySelector('#zF').onclick=()=>set((r.querySelector('#zB').clientWidth-40)/632*100);
    r.querySelector('#zB').addEventListener('wheel',e=>{if(!e.ctrlKey)return;e.preventDefault();set(+R.value+(e.deltaY<0?10:-10))},{passive:false})}};

W.modes={html:()=>'<div class="tabs" id="oT"></div><p id="oD" style="font-size:23px;min-height:64px;margin-bottom:6px"></p><div style="flex:1;min-height:0"><div class="win"><div class="rib" id="oR"><b>Word</b><span></span><span></span><span></span></div><div class="body" id="oB"></div><div class="sb" id="oS"></div></div></div>',
  mount(r,d,api){let SE=[['Природа','Карпати вкриті лісами, на півдні шумить Чорне море. Степи тягнуться до обрію.'],['Історія','Київ заснували понад півтори тисячі років тому. Тут стоїть Софійський собор.'],['Люди','Українці шанують традиції: вишиванки, писанки, колядки.']];
    const sec=(h,p)=>SE.map((s,i)=>'<h6'+h+'>'+(i+1)+'. '+s[0]+'</h6><p'+p+'>'+s[1]+'</p>').join('');
    const M=[['Розмітка сторінки','Документ виглядає так, як буде надрукований: сторінки, поля, колонтитули.',()=>'<div class="dpage"><span class="hdr">Мій рідний край · 1</span><h6 style="text-align:center;font-size:26px">Мій рідний край</h6><div class="pic" style="width:160px;height:90px;float:right;margin:0 0 8px 12px"></div>'+sec('','')+'</div><div class="dpage" style="min-height:300px"><span class="hdr">2</span><p>Продовження…</p></div>','Сторінка 1 з 2'],
     ['Веб-документ','Як вебсторінка: без поділу на сторінки, текст на всю ширину вікна.',()=>'<div style="background:#fff;padding:20px 30px;font-family:var(--serif);min-height:100%"><h6 style="font:800 26px var(--serif);margin:0 0 8px;color:#2B2A7A">Мій рідний край</h6>'+sec(' style="font:800 20px var(--serif);margin:10px 0 4px;color:#2B2A7A"',' style="font-size:16px;margin:0 0 8px"')+'</div>','Веб-документ'],
     ['Режим читання','Зручно читати з екрана: стрічку приховано, текст більший.',()=>'<div style="background:#F7F1E3;padding:30px 40px;columns:2;column-gap:50px;font-family:var(--serif);min-height:100%"><h6 style="font:800 26px var(--serif);margin:0 0 10px;color:#5B4630">Мій рідний край</h6>'+sec(' style="font:800 20px var(--serif);margin:0 0 6px;color:#5B4630"',' style="font-size:19px;line-height:1.6;margin:0 0 12px"')+'</div>','Екран 1 з 1'],
     ['Чернетка','Спрощений вигляд без оформлення сторінки — для швидкого редагування.',()=>'<div style="background:#fff;padding:16px 26px;font:16px/1.5 \'Courier New\',monospace;min-height:100%"><b>Мій рідний край</b><p>[малюнок]</p>'+sec(' style="font:700 16px \'Courier New\';margin:10px 0 4px"',' style="margin:0 0 8px"')+'<div style="border-top:2px dotted #999;color:#999;font-size:12px;text-align:center;margin:12px 0">розрив сторінки</div></div>','Сторінка 1 з 2'],
     ['Структура','Ієрархія заголовків. Стрілками змінюйте порядок розділів — текст переміщується разом із заголовком.',()=>'<div style="background:#fff;padding:20px 30px;min-height:100%"><div style="font:800 22px var(--body);padding:8px 0;border-bottom:1px dashed #ddd">⊖ Мій рідний край</div>'+SE.map((s,i)=>'<div style="display:flex;align-items:center;gap:10px;padding:8px 6px 8px 34px;border-bottom:1px dashed #ddd;font:800 21px var(--body)">⊕ '+s[0]+'<span style="margin-left:auto;display:flex;gap:6px"><button data-mv="'+i+'" data-d="-1" style="border:1px solid #bbb;background:#f6f6f6;border-radius:6px;width:36px;height:32px;cursor:pointer;color:#222" aria-label="Вгору">▲</button><button data-mv="'+i+'" data-d="1" style="border:1px solid #bbb;background:#f6f6f6;border-radius:6px;width:36px;height:32px;cursor:pointer;color:#222" aria-label="Вниз">▼</button></span></div>').join('')+'</div>','Структура']];
    M.forEach((m,i)=>{const t=el('button','tab',m[0]);t.onclick=()=>api.setStep(i);r.querySelector('#oT').append(t)});let curM=0;
    const step=i=>{curM=i;const m=M[i];[...r.querySelector('#oT').children].forEach((t,k)=>t.classList.toggle('on',k===i));r.querySelector('#oD').textContent=m[1];const B=r.querySelector('#oB');B.innerHTML=m[2]();B.scrollTop=0;r.querySelector('#oR').style.display=i===2?'none':'flex';r.querySelector('#oS').textContent=m[3];
      B.querySelectorAll('[data-mv]').forEach(b=>b.onclick=()=>{const a=+b.dataset.mv,c=a+(+b.dataset.d);if(c<0||c>=SE.length)return;[SE[a],SE[c]]=[SE[c],SE[a]];step(curM)})};
    return{count:M.length-1,step}}};

W.splitdemo={html:()=>'<div style="display:flex;gap:12px;align-items:center;margin-bottom:12px"><button class="btn primary" id="sB">Розділити</button><span id="sF" style="font-size:22px;font-weight:800;color:var(--mint)"></span></div><div class="win" style="flex:1;min-height:0"><div class="rib"><b>Реферат.docx</b><span></span><span></span></div><div id="sA" style="flex:1;min-height:0;display:flex;flex-direction:column"></div></div>',
  mount(r){const doc=()=>{let h='<div class="longdoc"><h6>Вступ</h6><p>Тема реферату — природа рідного краю. Мета: описати гори, річки та ліси.</p>';['Гори','Річки','Ліси','Степи','Озера','Тварини','Рослини','Заповідники'].forEach((t,i)=>{h+='<h6>Розділ '+(i+1)+'. '+t+'</h6><p>'+t+' рідного краю дуже різноманітні. Їх вивчають учені, ними милуються туристи.</p><p>Цей розділ розповідає про значення цієї теми для людей і довкілля.</p>'});return h+'<h6 class="concl">Висновок</h6><p>Природа рідного краю — наше багатство. Її треба знати, любити й охороняти.</p></div>'};
    let on=false;const A=r.querySelector('#sA'),B=r.querySelector('#sB');
    const render=()=>{A.innerHTML='';r.querySelector('#sF').textContent='';if(!on){const p=el('div','pane',doc());p.style.flex='1';A.append(p);B.textContent='Розділити';return}
      const p1=el('div','pane',doc()),dv=el('div','divider'),p2=el('div','pane',doc());p1.style.height='48%';p2.style.flex='1';A.append(p1,dv,p2);B.textContent='Зняти поділ';
      let dr=false;dv.onpointerdown=e=>{dr=true;dv.setPointerCapture(e.pointerId)};dv.onpointermove=e=>{if(!dr)return;const q=A.getBoundingClientRect(),k=q.height/A.offsetHeight;p1.style.height=Math.max(40,Math.min(A.offsetHeight-60,(e.clientY-q.top)/k))+'px'};dv.onpointerup=()=>dr=false;dv.ondblclick=()=>{on=false;render()};
      const chk=()=>{const c=p2.querySelector('.concl'),t=c.offsetTop-p2.scrollTop;if(p1.scrollTop<30&&t>-10&&t<p2.clientHeight-20)r.querySelector('#sF').textContent='Вступ і висновок на одному екрані ✓'};p1.onscroll=chk;p2.onscroll=chk};
    B.onclick=()=>{on=!on;render()};render()}};

W.sbs={html:()=>'<label style="font-size:22px;font-weight:800;display:flex;gap:8px;align-items:center;margin-bottom:12px"><input type="checkbox" id="xS" checked style="width:24px;height:24px;accent-color:var(--vio)"> Синхронне прокручування <span id="xF" style="margin-left:16px;color:var(--mint)">Знайдено: 0 з 3</span></label><div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:minmax(0,1fr);gap:10px;flex:1;min-height:0"><div class="pane" id="xA" style="border-radius:12px"></div><div class="pane" id="xB" style="border-radius:12px"></div></div>',
  mount(r){const P=['Шкільний похід у Карпати тривав три дні. Ми вийшли рано-вранці з Ворохти.','Першого дня ми піднялися на Говерлу. Висота гори — 2061 метр.','Погода була сонячна, але на вершині дув сильний вітер.','Другого дня ми розбили табір біля річки Прут. Увечері співали пісні.','Ми бачили оленя, білок і багато птахів.','Наступного року плануємо похід на Петрос.'];
    const F=[P[0].replace('три','<span class="dx">чотири</span>'),P[1],P[2],P[3].replace('Прут','<span class="dx">Черемош</span>'),P[4],P[5].replace('Петрос','<span class="dx">Піп Іван</span>')];
    const fill='<p style="color:#888">Ми фотографували краєвиди, вивчали карту й слухали розповіді інструктора.</p>';
    const A=r.querySelector('#xA'),B=r.querySelector('#xB');A.innerHTML='<div class="longdoc" style="width:auto;margin:10px;padding:20px 26px"><h6>Чернетка</h6>'+P.map(p=>'<p>'+p+'</p>'+fill).join('')+'</div>';B.innerHTML='<div class="longdoc" style="width:auto;margin:10px;padding:20px 26px"><h6>Остаточна версія</h6>'+F.map(p=>'<p>'+p+'</p>'+fill).join('')+'</div>';
    let lock=false;const sy=(a,b)=>()=>{if(!r.querySelector('#xS').checked||lock)return;lock=true;b.scrollTop=a.scrollTop/((a.scrollHeight-a.clientHeight)||1)*(b.scrollHeight-b.clientHeight);requestAnimationFrame(()=>lock=false)};A.onscroll=sy(A,B);B.onscroll=sy(B,A);
    let n=0;B.querySelectorAll('.dx').forEach(x=>{x.style.cursor='pointer';x.onclick=()=>{if(x.dataset.g)return;x.dataset.g=1;x.style.background='#FFE07A';n++;r.querySelector('#xF').textContent='Знайдено: '+n+' з 3'}})}};

W.rebus={html:d=>'<div class="paper" style="display:flex;gap:30px;align-items:center;justify-content:center;border-radius:20px;padding:24px;margin-bottom:24px">'+d.imgs.map(k=>img(k).replace('<img','<img style="max-height:200px"')).join('')+'</div><p class="f" style="font:800 54px var(--display);text-align:center;color:var(--vio)">'+d.answer+'</p>',mount(){}};

/* --- Word ribbon lab: properties are changed with buttons on the REAL ribbon screenshot ---
   d.rib: image key; d.cw,d.ch: crop size as % of the original screenshot (to convert hotspots).
   → walks a scripted sequence (select → font → size → bold → … → paragraph), clicks on the
   screenshot buttons work as in Word. */
W.wordlab={html:()=>'<div class="wl-rib" style="position:relative;width:1000px;align-self:center;border-radius:12px;overflow:hidden;border:2px solid var(--line);flex:none"><img class="wl-img" style="display:block;width:100%;max-width:none" alt="Вкладка Основне у Word"><div class="wl-ov" style="position:absolute;inset:0"></div></div>'+
  '<div style="display:flex;gap:16px;align-items:center;margin:12px 0 10px;min-height:52px;flex:none"><span class="chip wl-tag" style="background:var(--pink-soft);color:var(--pink);white-space:nowrap"></span><span class="wl-cap" style="font-size:25px;font-weight:700"></span></div>'+
  '<div style="flex:1;min-height:0;background:#E6E6E6;border-radius:12px;padding:12px;overflow:hidden"><div class="paper" style="width:860px;margin:0 auto;padding:20px 44px;min-height:100%"><p class="wl-p" style="margin:0;color:#111">Наша країна – <span class="wl-s">просто казкова</span>. Тут є гори, степи й моря, ліси та річки. Кожен край має свою красу, а люди бережуть свої традиції.</p></div></div>',
  mount(r,d,api){
    const B={font:[8.2,10.9,8.7,3.2],size:[17.1,10.9,3.5,3.2],grow:[20.8,10.9,1.7,3.2],shrink:[22.6,10.9,1.7,3.2],bold:[8.2,15.6,1.5,2.5],italic:[10.1,15.6,1.4,2.5],under:[12,15.6,1.4,2.5],sub:[16.9,15.6,1.3,2.5],sup:[18.8,15.6,1.5,2.5],color:[27,15.6,1.7,2.5],left:[31.3,15.2,1.7,3.3],center:[33.4,15.2,1.5,3.3],right:[35.2,15.2,1.5,3.3],just:[37,15.2,1.5,3.3],spacing:[39.1,15.2,1.7,3.3],indent:[42.8,10.9,1.4,3.2]};
    const CW=d.cw||50,CH=d.ch||21,pct=([x,y,w,h])=>'left:'+(x/CW*100)+'%;top:'+(y/CH*100)+'%;width:'+(w/CW*100)+'%;height:'+(h/CH*100)+'%';
    r.querySelector('.wl-img').src=IMG[d.rib||'ribbonHome'];
    const OV=r.querySelector('.wl-ov'),P=r.querySelector('.wl-p'),SEL=r.querySelector('.wl-s');
    const FONTS=['Calibri','Times New Roman','Courier New'],FF={'Calibri':'Calibri,Carlito,"Segoe UI",sans-serif','Times New Roman':'"Times New Roman",Tinos,serif','Courier New':'"Courier New",Cousine,monospace'};
    const fresh=()=>({sel:false,font:'Calibri',size:11,b:0,i:0,u:0,pos:0,color:'#111111',al:'left',lh:1.15,ind:0});let S=fresh(),hot=null;
    // live values drawn over the font/size boxes of the screenshot
    const fb=el('div','',''),sb=el('div','','');[fb,sb].forEach((x,k)=>{x.style.cssText='position:absolute;'+pct(k?[17.25,11.2,2.6,2.6]:[8.35,11.2,7.6,2.6])+';background:#fff;font:15px "Segoe UI",Arial,sans-serif;color:#222;display:flex;align-items:center;padding-left:4px;white-space:nowrap;overflow:hidden;pointer-events:none';OV.append(x)});
    const frame=el('div','');frame.style.cssText='position:absolute;border:3px solid var(--pink);border-radius:5px;box-shadow:0 0 0 4px rgba(232,51,111,.25);pointer-events:none;display:none';
    const ACT={font:s=>s.font=FONTS[(FONTS.indexOf(s.font)+1)%3],size:s=>s.size=[11,14,16,20][([11,14,16,20].indexOf(s.size)+1)%4],grow:s=>s.size=Math.min(28,s.size+2),shrink:s=>s.size=Math.max(8,s.size-2),
      bold:s=>s.b^=1,italic:s=>s.i^=1,under:s=>s.u^=1,sub:s=>s.pos=s.pos<0?0:-1,sup:s=>s.pos=s.pos>0?0:1,color:s=>s.color=['#111111','#E02424','#1F5FD1','#0C9B70'][(['#111111','#E02424','#1F5FD1','#0C9B70'].indexOf(s.color)+1)%4],
      left:s=>s.al='left',center:s=>s.al='center',right:s=>s.al='right',just:s=>s.al='justify',spacing:s=>s.lh=[1,1.15,1.5,2][([1,1.15,1.5,2].indexOf(s.lh)+1)%4],indent:s=>s.ind=s.ind?0:50};
    const NAME={font:['Символ: шрифт','Список «Шрифт»'],size:['Символ: розмір','Список «Розмір шрифту»'],grow:['Символ: розмір','Збільшити розмір шрифту'],shrink:['Символ: розмір','Зменшити розмір шрифту'],bold:['Символ: накреслення','Ж — напівжирний'],italic:['Символ: накреслення','К — курсив'],under:['Символ: накреслення','П — підкреслення'],sub:['Символ: зсув','Підрядковий знак x₂'],sup:['Символ: зсув','Надрядковий знак x²'],color:['Символ: колір','Колір шрифту'],
      left:['Абзац: вирівнювання','Вирівняти ліворуч'],center:['Абзац: вирівнювання','Вирівняти по центру'],right:['Абзац: вирівнювання','Вирівняти праворуч'],just:['Абзац: вирівнювання','Вирівняти за шириною'],spacing:['Абзац: міжрядковий інтервал','Інтервал між рядками'],indent:['Абзац: відступ','Збільшити відступ']};
    const para=k=>['left','center','right','just','spacing','indent'].includes(k);
    function draw(){fb.textContent=S.font;sb.textContent=S.size;
      Object.assign(SEL.style,{fontFamily:FF[S.font],fontSize:(S.size*2.2)+'px',fontWeight:S.b?'700':'400',fontStyle:S.i?'italic':'normal',textDecoration:S.u?'underline':'none',color:S.color,verticalAlign:S.pos>0?'super':S.pos<0?'sub':'baseline',background:S.sel?'#C7DDF5':'transparent'});
      if(S.pos)SEL.style.fontSize=(S.size*2.2*.65)+'px';
      Object.assign(P.style,{fontFamily:FF.Calibri,fontSize:'24px',textAlign:S.al,lineHeight:S.lh*1.25,marginLeft:S.ind+'px',background:S.psel?'#C7DDF5':'transparent'});
      if(hot&&B[hot]){frame.style.cssText+=';'+pct(B[hot]);frame.style.display='block'}else frame.style.display='none';
      const [tag,cap]=hot&&NAME[hot]?NAME[hot]:hot==='select'?['Виділення','Спочатку виділяємо фрагмент, який змінюємо']:hot==='psel'?['Виділення','Для абзацу достатньо поставити курсор у нього']:['Об\u2019єкт → властивість → кнопка','Пробіл або клік — далі, або кнопки на скріншоті'];
      r.querySelector('.wl-tag').textContent=tag;r.querySelector('.wl-cap').textContent=cap}
    Object.keys(B).forEach(k=>{const b=el('button','');b.setAttribute('aria-label',NAME[k][1]);b.style.cssText='position:absolute;'+pct(B[k])+';background:transparent;border:0;cursor:pointer;padding:0';
      b.onclick=()=>{if(para(k)){S.sel=false;S.psel=true}else{S.sel=true;S.psel=false}ACT[k](S);hot=k;draw()};OV.append(b)});
    OV.append(frame);
    const SEQ=['select','font','size','bold','italic','color','psel','center','just','spacing','indent'];
    const step=i=>{S=fresh();hot=null;for(let k=0;k<i;k++){const a=SEQ[k];if(a==='select'){S.sel=true}else if(a==='psel'){S.sel=false;S.psel=true}else{if(a==='size')S.size=16;else if(a==='color')S.color='#E02424';else ACT[a](S)}hot=a}draw()};
    return{count:SEQ.length,step}}};

{
/* sections/6-r2/widgets/anim.js */
/* ===== 6 клас, тема «Анімація об'єктів на слайді»: демонстрації, якими керує вчитель (→) ===== */
const _AIC={
 play:'<path d="M6 3l14 9-14 9z"/>',
 leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
 mouse:'<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 next:'<path d="M5 12h14M12 5l7 7-7 7"/>',
 cycle:'<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>',
 back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
 steps:'<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4M4 13h4"/>'
};
const _I=n=>typeof I==='function'?I(n):'<svg style="width:1em;height:1em;fill:none;stroke:currentColor;stroke-width:2.3;stroke-linecap:round;stroke-linejoin:round;vertical-align:-.14em;flex:none" viewBox="0 0 24 24" aria-hidden="true">'+(_AIC[n]||'')+'</svg>';
document.head.insertAdjacentHTML('beforeend','<style>'+
'.ms{position:relative;background:#fff;border-radius:14px;box-shadow:var(--shadow);overflow:hidden;aspect-ratio:16/9;color:#222}'+
'.ms .cap{position:absolute;left:14px;top:10px;font:600 14px "Segoe UI",sans-serif;color:#444}'+
'.obj{position:absolute;display:grid;place-items:center}'+
'.sunobj{width:96px;height:96px}.sunobj svg{width:100%;height:100%}'+
'.wcard{display:flex;flex-direction:column;gap:10px}'+
'.gbtn{display:flex;gap:14px;align-items:center;text-align:left;border:2px solid var(--line);background:var(--card);border-radius:var(--r-sm);padding:10px 16px;cursor:pointer}'+
'.gbtn b{font:700 21px var(--display);display:block}.gbtn span{font-size:18px;color:var(--ink-muted)}'+
'.gbtn .dotc{flex:none;width:46px;height:46px;border-radius:50%;background:var(--ink);color:var(--accent);display:grid;place-items:center;font-size:22px}'+
'.gbtn.on{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}.gbtn.on span:not(.dotc){color:var(--on-accent)}'+
'.fstrip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}'+
'.fstrip div{background:#fff;border:2px solid var(--line);border-radius:10px;padding:4px;position:relative}'+
'.fstrip div.on{border-color:var(--accent-deep);box-shadow:0 0 0 3px var(--accent)}'+
'.fstrip i{position:absolute;left:6px;top:2px;font:700 13px var(--display);font-style:normal;color:#444}'+
'.fscreen{background:#fff;border-radius:var(--r-lg);box-shadow:var(--shadow);padding:10px;position:relative}'+
'.fscreen .fps{position:absolute;right:18px;top:14px;font:700 16px var(--display);background:var(--ink);color:var(--surface);border-radius:999px;padding:3px 12px}'+
'.wl-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:8px 0}.wl-row>b{font:700 18px var(--display);min-width:118px}'+
'.ofc{font:14px "Segoe UI",system-ui,sans-serif;color:#222;background:#fff;border-radius:12px;box-shadow:var(--shadow);overflow:hidden;user-select:none}'+
'.ofc .tabsr{display:flex;gap:2px;padding:6px 10px 0;background:#f3f3f3;border-bottom:1px solid #ddd}'+
'.ofc .tabsr span{padding:6px 12px;color:#444}.ofc .tabsr span.act{background:#fff;border:1px solid #ddd;border-bottom-color:#fff;margin-bottom:-1px;border-radius:4px 4px 0 0;color:#b7472a;font-weight:600}'+
'.ofc .rib{display:flex;align-items:stretch;padding:8px 6px 0;gap:0;width:max-content}.ofc .grp{flex:none}.tmock .ofc{width:max-content}'+
'.ofc .grp{display:flex;flex-direction:column;border-right:1px solid #e1e1e1;padding:0 8px}'+
'.ofc .grp .in{display:flex;gap:6px;align-items:flex-start;flex:1}'+
'.ofc .grp .gl{text-align:center;color:#333;font-size:12.5px;padding:6px 0 6px;position:relative}'+
'.ofc .big{display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 6px;border-radius:4px;text-align:center;font-size:13px;line-height:1.15;width:92px}'+
'.ofc .big svg{width:30px;height:30px}'+
'.ofc .gal{display:flex;border:1px solid #d8d8d8;border-radius:3px;background:#fafafa}'+
'.ofc .gal .it{display:flex;flex-direction:column;align-items:center;gap:3px;width:66px;padding:6px 2px;font-size:12.5px}'+
'.ofc .gal .it svg{width:28px;height:28px}.ofc .gal .it.sel{background:#d5e1f2}'+
'.ofc .scr{display:flex;flex-direction:column;border-left:1px solid #d8d8d8;width:22px;font-size:11px;color:#555}.ofc .scr span{flex:1;display:grid;place-items:center}.ofc .scr span:last-child{border-top:1px solid #d8d8d8}'+
'.ofc .sm{display:flex;align-items:center;gap:6px;padding:3px 6px;border-radius:4px;white-space:nowrap}'+
'.ofc .sm svg{width:18px;height:18px}'+
'.ofc .fld{border:1px solid #bbb;border-radius:3px;padding:1px 8px;background:#fff;min-width:96px;display:inline-flex;justify-content:space-between;gap:10px}'+
'.ofc .launch{position:absolute;right:-2px;bottom:4px;font-size:12px;padding:0 3px;border-radius:3px}'+
'.ofc [data-k]{transition:box-shadow .25s,background .25s}'+
'.ofc .hot{box-shadow:0 0 0 3px var(--accent-deep),0 0 0 7px rgba(32,201,151,.25);background:#e6fcf5!important;border-radius:4px;position:relative;z-index:2}'+
'.ofc .dim{opacity:.35}'+
'.ofc.pane{width:560px;background:#fff;overflow:hidden}.ofc.pane .ph{display:flex;justify-content:space-between;padding:10px 14px;font-size:16px;font-weight:600;border-bottom:1px solid #e3e3e3}'+
'.ofc.pane .tb{display:flex;gap:8px;align-items:center;padding:8px 12px;border-bottom:1px solid #eee}'+
'.ofc.pane .btnx{border:1px solid #c8c8c8;border-radius:3px;padding:2px 10px;background:#fafafa;display:inline-flex;gap:6px;align-items:center}'+
'.ofc.pane .row{display:grid;grid-template-columns:26px 26px 34px 1fr 170px 26px;align-items:center;gap:4px;padding:7px 12px;font-size:15px}'+
'.ofc.pane .row.sel{background:#d5e1f2}'+
'.ofc.pane .bar{height:12px;border-radius:2px;background:#9cc3ea;border:1px solid #6a9fd4}'+
'.ofc.pane .row svg{width:22px;height:22px}'+
'.ofc.pane .ft{display:flex;justify-content:space-between;padding:8px 14px;color:#333;border-top:1px solid #eee;font-size:13px}'+
'.ofc.pane .menu{position:absolute;right:16px;top:150px;background:#fff;border:1px solid #bbb;box-shadow:0 6px 18px rgba(0,0,0,.25);font-size:14px;display:none;z-index:3}'+
'.ofc.pane .menu div{padding:5px 14px}.ofc.pane .menu div.s{border-top:1px solid #e3e3e3}'+
'.rv.two{display:grid;grid-template-columns:1fr 1fr}table.t.sm td{padding:7px 12px;font-size:20px}table.t.sm th{padding:8px 12px}'+
'.tlrow{display:grid;grid-template-columns:34px 34px 120px 1fr;align-items:center;gap:8px;font-size:19px;font-weight:700;padding:6px 0;border-bottom:1px solid var(--line)}'+
'.tlrow .sc{position:relative;height:18px;background:repeating-linear-gradient(90deg,var(--line) 0 1px,transparent 1px 25%)}'+
'.tlrow .sc i{position:absolute;top:2px;height:14px;border-radius:4px;background:var(--accent-deep);transition:left .3s,width .3s}'+
'.click{position:absolute;right:14px;bottom:12px;font:800 18px var(--display);background:var(--ink);color:var(--surface);border-radius:999px;padding:4px 14px;opacity:0;transition:opacity .15s}'+
'.click.on{opacity:1}'+
'@keyframes bnc{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}'+
'.bounce{animation:bnc 1.4s cubic-bezier(.4,0,.6,1) infinite}'+
'</style>');

/* малюнки-об'єкти */
const SUN='<svg viewBox="0 0 100 100"><g stroke="#0f2e2a" stroke-width="6" stroke-linecap="round"><path d="M50 6v12M50 82v12M6 50h12M82 50h12M19 19l8 8M73 73l8 8M19 81l8-8M73 27l8-8"/></g><circle cx="50" cy="50" r="22" fill="#ffd43b" stroke="#0f2e2a" stroke-width="5"/></svg>';
const BALL=(x,y,a,s)=>'<g transform="translate('+x+' '+y+') rotate('+a+') scale('+(s||1)+')"><circle r="26" fill="#fff" stroke="#0f2e2a" stroke-width="4"/><path d="M0-11l10.4 7.6-4 12.2H-6.4l-4-12.2z" fill="#0f2e2a"/><path d="M0-11V-25M10.4-3.4L23.5-8M6.4 8.8L14 21M-6.4 8.8L-14 21M-10.4-3.4L-23.5-8" stroke="#0f2e2a" stroke-width="3"/></g>';
const STAR=c=>'<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" fill="'+c+'" stroke="#555" stroke-width="1"/></svg>';
const GREEN='#3cb44b',YELLOW='#f2c200',RED='#e0443e';

/* --- Кадри анімації: окремі зображення → швидка зміна → враження руху --- */
W.flip={html:()=>'<div class="cols" style="grid-template-columns:1fr 1.05fr;align-items:start;gap:36px">'+
  '<div><div class="fstrip"></div><p class="fcap" style="margin-top:18px;font-size:23px"></p></div>'+
  '<div class="fscreen"><svg viewBox="0 0 600 300" style="display:block;width:100%"></svg><span class="fps"></span></div></div>',
 mount(root,d,api){const N=8,fr=[];for(let i=0;i<N;i++){const t=i/(N-1);fr.push([60+t*470,243-150*4*t*(1-t),i*55,1.8])}
  const ground='<path d="M0 290H600" stroke="#cfd8d5" stroke-width="4"/><path d="M560 290V170h30v120" fill="none" stroke="#9aa9a5" stroke-width="5"/>';
  const strip=root.querySelector('.fstrip'),scr=root.querySelector('svg'),cap=root.querySelector('.fcap'),fps=root.querySelector('.fps');
  strip.innerHTML=fr.map((f,i)=>'<div><i>'+(i+1)+'</i><svg viewBox="0 0 600 300" style="display:block;width:100%">'+ground+BALL(...f)+'</svg></div>').join('');
  const cells=[...strip.children];let k=0,tm=null;
  const draw=()=>{scr.innerHTML=ground+BALL(...fr[k]);cells.forEach((c,i)=>c.classList.toggle('on',i===k))};
  const run=v=>{clearInterval(tm);tm=null;k=0;draw();if(v)tm=setInterval(()=>{if(!root.isConnected){clearInterval(tm);return}if(!root.offsetParent)return;k=(k+1)%N;draw()},1000/v)};
  const C=['Це <b>8 окремих зображень</b> — кадрів. На кожному м’яч в іншому місці.','<b>Повільно</b> (2 кадри за секунду): помітно, що кадри змінюються.','<b>Швидко</b> (12 кадрів за секунду): здається, що м’яч <b>летить</b>!'];
  const F=['кадр 1','2 кадри/с','12 кадрів/с'];
  return{count:2,step(i){run([0,2,12][i]);cap.innerHTML=C[i];fps.textContent=F[i]}}}};

/* --- Чотири групи ефектів --- */
const GR=[{n:'Вхід',c:GREEN,i:'next',x:'Об’єкт з’являється на слайді',e:'Виліт (знизу)'},{n:'Виділення',c:YELLOW,i:'cycle',x:'Об’єкт змінює свій вигляд',e:'Обертання'},
 {n:'Вихід',c:RED,i:'back',x:'Об’єкт зникає зі слайда',e:'Виліт (вниз)'},{n:'Шляхи переміщення',c:'#888',i:'steps',x:'Об’єкт переміщується по слайду',e:'Праворуч'}];
W.groups={html:()=>'<div class="cols" style="grid-template-columns:1.1fr .9fr;gap:32px;align-items:start"><div>'+
  '<div class="ms"><span class="cap">Слайд</span><svg class="pth" viewBox="0 0 560 315" style="position:absolute;inset:0;width:100%;height:100%;display:none"><path d="M128 158H448" stroke="#888" stroke-width="3" stroke-dasharray="8 6"/><path d="M120 150l12 8-12 8z" fill="'+GREEN+'"/><path d="M448 150l12 8-12 8z" fill="'+RED+'"/></svg>'+
  '<div class="obj sunobj" style="left:14.3%;top:35%">'+SUN+'</div></div>'+
  '<p class="gcap" style="margin-top:16px;font-size:22px"></p><button class="btn gre" style="font-size:18px">'+_I('play')+'Ще раз</button></div>'+
  '<div class="wcard">'+GR.map(g=>'<button class="gbtn"><span class="dotc">'+_I(g.i)+'</span><span><b>'+g.n+'</b><span>'+g.x+'</span></span></button>').join('')+'</div></div>',
 mount(root,d,api){const o=root.querySelector('.obj'),p=root.querySelector('.pth'),cap=root.querySelector('.gcap'),bt=[...root.querySelectorAll('.gbtn')];let cur=0;
  bt.forEach((b,i)=>b.onclick=()=>api.setStep(i+1));
  const play=()=>{o.getAnimations().forEach(a=>a.cancel());p.style.display=cur===4?'block':'none';const W_=o.parentNode.clientWidth;
   if(cur===1)o.animate([{transform:'translateY(260px)',opacity:0},{transform:'none',opacity:1}],{duration:1000,easing:'cubic-bezier(.2,.8,.3,1)'});
   if(cur===2)o.animate([{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{duration:1200,easing:'ease-in-out'});
   if(cur===3)o.animate([{transform:'none',opacity:1},{transform:'translateY(260px)',opacity:0,offset:.6},{transform:'translateY(260px)',opacity:0,offset:.85},{transform:'none',opacity:1}],{duration:2200,easing:'ease-in'});
   if(cur===4){const dx=W_*.57;o.animate([{transform:'none'},{transform:'translateX('+dx+'px)',offset:.6},{transform:'translateX('+dx+'px)',offset:.9},{transform:'none'}],{duration:2600,easing:'ease-in-out'})}};
  root.querySelector('.gre').onclick=play;
  return{count:4,step(i){cur=i;bt.forEach((b,k)=>b.classList.toggle('on',k===i-1));
   cap.innerHTML=i?'Група <b>'+GR[i-1].n+'</b>. Приклад ефекту: <b>'+GR[i-1].e+'</b>.':'Пробіл або клік — побачимо ефект з кожної групи.';if(i)play();else{o.getAnimations().forEach(a=>a.cancel());p.style.display='none'}}}}};

/* --- Лабораторія: параметри ефектів --- */
const EF=[{n:'Виліт',g:'Вхід',p:[['Напрямок',['Знизу','Згори','Зліва','Знизу зліва']]]},
 {n:'Обертання',g:'Виділення',p:[['Напрямок',['За год. стрілкою','Проти год. стрілки']],['Оберти',['Чверть','Півоберту','Повний','Два']]]},
 {n:'Годинникова стрілка',g:'Вихід',p:[['Сектори',['1','2','3','4','8']]]},
 {n:'Фігури',g:'Шляхи переміщення',p:[['Фігура',['Круг','Ромб','Трикутник','Шестикутник']]]}];
const PRE=[[0,[0]],[0,[2]],[1,[0,1]],[1,[1,3]],[2,[0]],[2,[3]],[3,[0]],[3,[2]]];
W.efflab={html:()=>'<div class="cols" style="grid-template-columns:.95fr 1.05fr;gap:32px;align-items:start"><div>'+
  '<div class="seg lef" style="margin-bottom:12px"></div><div class="lpar"></div><button class="btn primary lpl" style="margin-top:12px;font-size:19px">'+_I('play')+'Переглянути</button></div>'+
  '<div><div class="ms"><span class="cap">Слайд</span><svg class="lpth" viewBox="0 0 560 315" style="position:absolute;inset:0;width:100%;height:100%"></svg><div class="obj sunobj" style="left:21.4%;top:45.1%">'+SUN+'</div></div><p class="lcap" style="margin-top:14px;font-size:21px"></p></div></div>',
 mount(root,d,api){const ef=root.querySelector('.lef'),par=root.querySelector('.lpar'),o=root.querySelector('.obj'),pth=root.querySelector('.lpth'),cap=root.querySelector('.lcap');
  let e=0,v=[0,0],raf=0;
  const shape=()=>{const s=EF[3].p[0][1][v[0]],R=s==='Трикутник'?92:95,P=[];
   if(s==='Круг')for(let a=0;a<=36;a++){const t=a/36*2*Math.PI;P.push([R-R*Math.cos(t),-R*Math.sin(t)])}
   if(s==='Ромб')P.push([0,0],[R,-R],[2*R,0],[R,R],[0,0]);
   if(s==='Трикутник')P.push([0,0],[2*R,0],[R,-1.73*R],[0,0]);
   if(s==='Шестикутник')for(let a=0;a<=6;a++){const t=Math.PI+a*Math.PI/3;P.push([R+R*Math.cos(t),R*Math.sin(t)])}return P};
  const sc=()=>o.parentNode.clientWidth/560;
  const ui=()=>{ef.innerHTML=EF.map((f,i)=>'<button class="'+(i===e?'on':'')+'">'+f.n+'</button>').join('');[...ef.children].forEach((b,i)=>b.onclick=()=>{e=i;v=[0,0];ui();play()});
   par.innerHTML=EF[e].p.map((p,j)=>'<div class="wl-row"><b>'+p[0]+'</b><div class="seg">'+p[1].map((x,k)=>'<button data-j="'+j+'" data-k="'+k+'" class="'+(v[j]===k?'on':'')+'">'+x+'</button>').join('')+'</div></div>').join('');
   par.querySelectorAll('button').forEach(b=>b.onclick=()=>{v[+b.dataset.j]=+b.dataset.k;ui();play()});
   cap.innerHTML='Ефект <b>'+EF[e].n+'</b> · група <b>'+EF[e].g+'</b><br>'+EF[e].p.map((p,j)=>p[0]+': <b>'+p[1][v[j]]+'</b>').join(' · ');
   pth.innerHTML=e===3?'<path d="'+shape().map((q,i)=>(i?'L':'M')+(168+q[0])+' '+(190+q[1])).join('')+'" fill="none" stroke="#888" stroke-width="3" stroke-dasharray="8 6"/><circle cx="168" cy="190" r="6" fill="'+GREEN+'"/>':''};
  const reset=()=>{cancelAnimationFrame(raf);o.getAnimations().forEach(a=>a.cancel());o.style.webkitMaskImage=o.style.maskImage='';o.style.opacity=''};
  const play=()=>{reset();const k=sc(),f=EF[e].n;
   if(f==='Виліт'){const D=[[0,240],[0,-240],[-200,0],[-200,240]][v[0]];o.animate([{transform:'translate('+D[0]*k+'px,'+D[1]*k+'px)',opacity:0},{transform:'none',opacity:1}],{duration:1000,easing:'cubic-bezier(.2,.8,.3,1)'})}
   if(f==='Обертання'){const deg=[90,180,360,720][v[1]]*(v[0]?-1:1);o.animate([{transform:'rotate(0)'},{transform:'rotate('+deg+'deg)'}],{duration:Math.abs(deg)>360?1800:1200,easing:'ease-in-out',fill:'forwards'})}
   if(f==='Годинникова стрілка'){const n=+EF[2].p[0][1][v[0]],t0=performance.now();
    const tick=t=>{const a=Math.min(1,(t-t0)/1200),s=360/n,m='repeating-conic-gradient(from 0deg,transparent 0 '+(a*s)+'deg,#000 '+(a*s)+'deg '+s+'deg)';o.style.webkitMaskImage=o.style.maskImage=m;
     if(a<1)raf=requestAnimationFrame(tick);else setTimeout(()=>{o.style.webkitMaskImage=o.style.maskImage=''},700)};raf=requestAnimationFrame(tick)}
   if(f==='Фігури'){const P=shape();o.animate(P.map(q=>({transform:'translate('+q[0]*k+'px,'+q[1]*k+'px)'})),{duration:2400,easing:'linear'})}};
  root.querySelector('.lpl').onclick=play;
  return{count:PRE.length,step(i){if(i){e=PRE[i-1][0];v=[...PRE[i-1][1],0].slice(0,2)}else{e=0;v=[0,0]}ui();if(i)play();else reset()}}}};

/* --- Тур по макету вікна PowerPoint: стрічка «Анімація» та Область анімації --- */
const MOCK={
 ribbon:()=>'<div class="ofc"><div class="tabsr"><span>Файл</span><span>Основне</span><span>Вставлення</span><span>Конструктор</span><span>Переходи</span><span class="act">Анімація</span><span>Показ слайдів</span></div><div class="rib">'+
  '<div class="grp"><div class="in"><div class="big" data-k="prev"><svg viewBox="0 0 24 24"><path d="M6 3l14 9-14 9z" fill="#3a7bd5"/></svg>Переглянути</div></div><div class="gl">Попередній перегляд</div></div>'+
  '<div class="grp"><div class="in"><div class="gal" data-k="list">'+[['Немає','#fff'],['Поява',GREEN],['Вицвітання',GREEN],['Виліт',GREEN],['Обертання',YELLOW]].map((x,i)=>'<div class="it'+(i===3?' sel':'')+'">'+STAR(x[1])+x[0]+'</div>').join('')+
  '<div class="scr"><span>▲</span><span>▼</span><span data-k="more">▾</span></div></div><div class="big" data-k="opts"><svg viewBox="0 0 24 24"><path d="M4 12h16M12 4v16" stroke="#3a7bd5" stroke-width="3"/></svg>Параметри ефектів ▾</div></div><div class="gl">Анімація<span class="launch" data-k="launch">⇲</span></div></div>'+
  '<div class="grp"><div class="in"><div class="big" data-k="add">'+STAR(GREEN).replace('<svg','<svg style="width:30px;height:30px"')+'Додати анімацію ▾</div><div style="display:flex;flex-direction:column;gap:2px;padding-top:2px"><div class="sm" data-k="pane"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" fill="none" stroke="#555" stroke-width="2"/><path d="M14 3v18" stroke="#555" stroke-width="2"/></svg>Область анімації</div><div class="sm"><svg viewBox="0 0 24 24"><path d="M5 12h14" stroke="#555" stroke-width="2"/></svg>Тригер ▾</div><div class="sm"><svg viewBox="0 0 24 24"><path d="M5 19l14-14" stroke="#555" stroke-width="2"/></svg>Копіювати анімацію</div></div></div><div class="gl">Додаткові параметри анімації</div></div>'+
  '<div class="grp" style="border:0"><div class="in"><div style="display:flex;flex-direction:column;gap:5px;padding-top:2px"><div class="sm" data-k="start">Початок: <span class="fld">По клацанню ▾</span></div><div class="sm" data-k="dur">Тривалість: <span class="fld">00,50 ⇕</span></div><div class="sm" data-k="delay">Затримка: <span class="fld">00,00 ⇕</span></div></div>'+
  '<div style="display:flex;flex-direction:column;gap:2px;padding-top:2px" data-k="order"><div class="sm" style="color:#333">Змінити порядок</div><div class="sm">▲ Раніше</div><div class="sm">▼ Пізніше</div></div></div><div class="gl">Хронометраж</div></div>'+
  '</div></div>',
 pane:()=>'<div class="ofc pane" style="position:relative"><div class="ph"><span>Область анімації</span><span>✕</span></div>'+
  '<div class="tb"><span class="btnx" data-k="play">▶ Відтворити з</span><span style="flex:1"></span><span class="btnx" data-k="ord">▲</span><span class="btnx" data-k="ord">▼</span></div>'+
  '<div class="row"><span>1</span><span><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="5" fill="none" stroke="#555" stroke-width="2"/></svg></span><span>'+STAR(GREEN)+'</span><span>Заголовок 1</span><span><div class="bar" style="width:30%"></div></span><span></span></div>'+
  '<div class="row sel"><span data-k="num">2</span><span data-k="ev"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="5" fill="none" stroke="#555" stroke-width="2"/><path d="M12 6v4" stroke="#555" stroke-width="2"/></svg></span><span data-k="ico">'+STAR(YELLOW)+'</span><span data-k="name">Сонце</span><span data-k="bar"><div class="bar" style="width:60%"></div></span><span data-k="dd" class="btnx" style="padding:0 4px">▾</span></div>'+
  '<div class="row"><span></span><span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="#555" stroke-width="2"/><path d="M12 7v5l3 2" stroke="#555" stroke-width="2"/></svg></span><span>'+STAR(GREEN)+'</span><span>Хмара</span><span><div class="bar" style="width:40%;margin-left:60%"></div></span><span></span></div>'+
  '<div class="ft"><span>Секунди ◂</span><span>0</span><span>2</span><span>4</span><span>▸</span></div>'+
  '<div class="menu"><div>По клацанню</div><div>З попереднім</div><div>Після попереднього</div><div class="s">Параметри ефектів…</div><div>Хронометраж…</div><div class="s">Видалити</div></div></div>'};
W.tour={html:d=>d.layout==='top'?'<div class="tmock">'+MOCK[d.mock]()+'</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:22px"><div class="hs-side tside" style="flex-direction:row;flex-wrap:wrap;align-content:flex-start"></div><div class="hs-text ttxt" style="margin:0;font-size:22px"></div></div>'
  :'<div class="shot" style="grid-template-columns:330px 1fr"><div class="hs-side tside"></div><div><div class="tmock">'+MOCK[d.mock]()+'</div><div class="hs-text ttxt" style="margin-top:14px;font-size:22px"></div></div></div>',
 mount(root,d,api){const side=root.querySelector('.tside'),txt=root.querySelector('.ttxt'),mk=root.querySelector('.ofc'),menu=mk.querySelector('.menu');
  const fit=()=>{if(mk._f||!root.clientWidth)return;mk._f=1;mk.style.zoom=1;const box=mk.parentNode.clientWidth;mk.style.zoom=Math.min(d.zoom||1.6,box/mk.scrollWidth)};
  const bs=d.spots.map((s,i)=>{const b=el('button','hs-btn',s.l);b.onclick=()=>api.setStep(i+1);side.append(b);return b});
  return{count:d.spots.length,step(i){fit();const s=i?d.spots[i-1]:null;bs.forEach((b,k)=>b.classList.toggle('on',k===i-1));
   mk.querySelectorAll('[data-k]').forEach(e=>e.classList.toggle('hot',!!s&&e.dataset.k===s.k));
   if(menu)menu.style.display=s&&s.k==='dd'?'block':'none';
   if(d.lupa){const box=mk.parentNode;box.style.cssText='position:relative;overflow:hidden;border-radius:12px;box-shadow:var(--shadow);height:'+mk.offsetHeight+'px';mk.style.transformOrigin='0 0';mk.style.transition='transform .5s cubic-bezier(.3,.8,.3,1)';mk.style.boxShadow='none';
    const e=s&&mk.querySelector('[data-k="'+s.k+'"]');if(!e||!mk.offsetWidth){mk.style.transform='none'}else{const mr=mk.getBoundingClientRect(),er=e.getBoundingClientRect(),kt=mr.width/mk.offsetWidth,Wd=mk.offsetWidth,Hd=mk.offsetHeight;
     const cx=(er.left+er.width/2-mr.left)/kt,cy=(er.top+er.height/2-mr.top)/kt,k=d.lupa,tx=Math.min(0,Math.max(Wd-k*Wd,Wd/2-k*cx)),ty=Math.min(0,Math.max(Hd-k*Hd,Hd/2-k*cy));mk.style.transform='translate('+tx+'px,'+ty+'px) scale('+k+')'}}txt.innerHTML=s?s.t:(d.intro||'Пробіл або клік — розглянемо елементи по черзі.')}}}};

/* --- Хронометраж: Початок, Тривалість, Затримка --- */
W.timing={html:()=>'<div class="cols" style="grid-template-columns:1fr 1fr;gap:32px;align-items:start"><div>'+
  '<div class="ms tms"><span class="cap">Слайд</span><div class="obj tob" style="left:6%;top:12%;width:88%;height:20%;font:800 34px var(--display);color:#0f2e2a;justify-content:start">ОСІНЬ</div>'+
  '<div class="obj tob" style="left:6%;top:42%;width:34%;height:48%;background:#ffe8cc;border-radius:10px;font-size:64px;color:#c2410c">'+_I('leaf')+'</div>'+
  '<div class="obj tob" style="left:46%;top:46%;width:48%;height:40%;font:600 22px var(--body);color:#333;text-align:left;place-items:start">Листя жовтіє<br>і опадає.</div><span class="click">клац!</span></div>'+
  '<div style="margin-top:14px"><div class="tlrow" style="font-size:15px;color:var(--ink-muted)"><span>№</span><span></span><span>Об’єкт</span><span style="display:flex;justify-content:space-between"><span>0 с</span><span>2 с</span><span>4 с</span></span></div><div class="tl"></div></div></div>'+
  '<div><div class="wl-row"><b>Початок</b><div class="seg tst"></div></div><div class="wl-row"><b>Тривалість</b><div class="seg tdu"></div></div><div class="wl-row"><b>Затримка</b><div class="seg tde"></div></div>'+
  '<button class="btn primary tpl" style="margin-top:10px;font-size:19px">'+_I('play')+'Переглянути</button><p class="tcap" style="margin-top:16px;font-size:21px"></p></div></div>',
 mount(root,d,api){const ST=['По клацанню','З попереднім','Після попереднього'],DU=[.5,1,2],DE=[0,.5,1],N=['Заголовок','Малюнок','Підпис'];
  let st=0,du=1,de=0,tms=[];const ob=[...root.querySelectorAll('.tob')],clk=root.querySelector('.click'),tl=root.querySelector('.tl'),cap=root.querySelector('.tcap');
  const seg=(c,a,f,get,lab)=>{const r=root.querySelector(c);r.innerHTML=a.map((x,i)=>'<button class="'+(get()===i?'on':'')+'">'+lab(x)+'</button>').join('');[...r.children].forEach((b,i)=>b.onclick=()=>{f(i);ui();play()})};
  const sched=()=>{const D=DU[du],E=DE[de];let t=0;return N.map((_,i)=>{let s;if(st===1)s=E;else if(st===2){s=t+E;t=s+D}else s=E;return[s,D]})};
  const ui=()=>{seg('.tst',ST,i=>st=i,()=>st,x=>x);seg('.tdu',DU,i=>du=i,()=>du,x=>String(x).replace('.',',')+' с');seg('.tde',DE,i=>de=i,()=>de,x=>String(x).replace('.',',')+' с');
   const S=sched();tl.innerHTML=N.map((n,i)=>'<div class="tlrow"><span>'+(st===0?i+1:'')+'</span><span style="font-size:22px;color:var(--ink-muted)">'+(st===0?_I('mouse'):st===2?_I('clock'):'')+'</span><span>'+n+'</span><span class="sc"><i style="left:'+(S[i][0]/4*100)+'%;width:'+(S[i][1]/4*100)+'%"></i></span></div>').join('');
   cap.innerHTML=['Кожен ефект чекає <b>клацання</b> мишею (або натискання →).','Ефект починається <b>одночасно</b> з попереднім.','Ефект починається <b>одразу після</b> завершення попереднього.'][st]};
  const reset=()=>{tms.forEach(clearTimeout);tms=[];ob.forEach(o=>{o.getAnimations().forEach(a=>a.cancel());o.style.opacity=0});clk.classList.remove('on')};
  const anim=(o,D)=>o.animate([{transform:'translateY(120px)',opacity:0},{transform:'none',opacity:1}],{duration:D*1000,easing:'cubic-bezier(.2,.8,.3,1)',fill:'forwards'});
  const play=()=>{reset();const S=sched();if(st===0){let t=400;ob.forEach((o,i)=>{tms.push(setTimeout(()=>clk.classList.add('on'),t));tms.push(setTimeout(()=>{clk.classList.remove('on');tms.push(setTimeout(()=>anim(o,S[i][1]),S[i][0]*1000))},t+450));t+=450+(S[i][0]+S[i][1])*1000+700})}
   else ob.forEach((o,i)=>tms.push(setTimeout(()=>anim(o,S[i][1]),300+S[i][0]*1000)))};
  root.querySelector('.tpl').onclick=play;
  return{count:3,step(i){st=i?i-1:0;du=1;de=0;ui();if(i)play();else{reset();ob.forEach(o=>o.style.opacity=1)}}}}};
}
{
/* sections/6-r2/widgets/trans.js */
/* ===== 6 клас, урок 6-5 «Анімація слайдів. Налаштування показу»: демонстрації, якими керує вчитель (пробіл або клік — далі) =====
   W.trans    — лабораторія ефектів появи слайдів (переходів): ефект, Параметри ефекту, Тривалість;
   W.advance  — «Зміна слайда»: Клацання кнопки миші / Після N с / обидва прапорці;
   W.rehearse — Репетиція часу: вікно «Запис», збереження хронометражу, сортувальник слайдів.
   Усе в IIFE: імена не перетинаються з anim.js (SUN, BALL, STAR …). */
(function(){
document.head.insertAdjacentHTML('beforeend','<style>'+
'.tw-stage{position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;box-shadow:var(--shadow);background:#111}'+
'.tw-sl{position:absolute;inset:0;font-family:"Segoe UI",system-ui,sans-serif;color:#1d2b36;overflow:hidden}'+
'.tw-a{background:linear-gradient(135deg,#0b4f6c,#1b8a9a)}.tw-a .t1{position:absolute;left:7%;top:20%;width:56%;font:700 36px/1.1 "Segoe UI",sans-serif;color:#fff}.tw-a .t2{position:absolute;left:7%;top:62%;width:56%;font:400 22px "Segoe UI",sans-serif;color:#d9f2f2}'+
'.tw-a .mp{position:absolute;right:6%;top:20%;width:28%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 35%,#7fd3e0,#2a7f9e 60%,#13506a);box-shadow:0 0 0 6px rgba(255,255,255,.25)}'+
'.tw-b{background:#fff8ec}.tw-b .bh{position:absolute;left:0;right:0;top:0;height:22%;background:#f2a541;display:flex;align-items:center;padding-left:6%;font:700 32px "Segoe UI",sans-serif;color:#3b2508}'+
'.tw-b ul{position:absolute;left:6%;top:30%;width:56%;margin:0;padding-left:22px;font:400 19px/1.35 "Segoe UI",sans-serif;color:#333}.tw-b li{margin:0 0 8px}'+
'.tw-b .pic{position:absolute;right:6%;top:30%;width:28%;height:56%;border-radius:8px;background:linear-gradient(160deg,#cfe8ff,#8fb8de);display:grid;place-items:center}'+
'.tw-b .pic svg{width:70%;height:70%}'+
'.tw-cell{position:absolute;overflow:hidden}.tw-cell>.tw-sl{position:absolute}'+
'.tw-side{display:flex;flex-direction:column;gap:12px}.tw-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.tw-row>b{font:700 19px var(--display);min-width:150px}'+
'.tw-side .seg button{font-size:18px;padding:6px 12px}.tw-cap{font-size:21px;line-height:1.35;margin:4px 0 0}'+
'.tw-fx{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.tw-fx button{border:2px solid var(--line);background:var(--card);border-radius:10px;padding:8px 4px;font:700 17px var(--display);cursor:pointer;color:var(--ink)}'+
'.tw-fx button.on{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}'+
'.tw-clk{position:absolute;right:12px;bottom:10px;font:800 18px var(--display);background:var(--ink);color:var(--surface);border-radius:999px;padding:4px 14px;opacity:0;transition:opacity .15s;z-index:5}'+
'.tw-clk.on{opacity:1}.tw-clk.no{background:#b42318;color:#fff}'+
'.tw-bar{position:absolute;left:0;bottom:0;height:8px;background:#f2c200;z-index:4;width:0}'+
'.tw-end{background:#000;color:#ddd;display:grid;place-items:center;font:400 20px "Segoe UI",sans-serif}'+
'.tw-num{position:absolute;right:12px;top:8px;font:700 15px "Segoe UI",sans-serif;background:rgba(0,0,0,.55);color:#fff;border-radius:6px;padding:1px 8px;z-index:4}'+
'.tw-ofc{font:15px "Segoe UI",system-ui,sans-serif;color:#222;background:#f6f6f6;border:1px solid #d6d6d6;border-radius:10px;padding:12px 16px;user-select:none}'+
'.tw-ofc .gt{font-size:16px;color:#555;margin:0 0 8px}.tw-ofc label{display:flex;gap:12px;align-items:center;font-size:23px;margin:10px 0;cursor:pointer}'+
'.tw-ofc .cb{width:28px;height:28px;border:2px solid #555;border-radius:4px;background:#fff;display:grid;place-items:center;font:700 22px sans-serif;color:#222;flex:none}'+
'.tw-ofc .fld{border:1px solid #aaa;background:#fff;border-radius:3px;padding:1px 10px;font-size:21px}'+
'.tw-ofc .hl{box-shadow:0 0 0 3px var(--accent-deep);border-radius:4px;background:#e6fcf5}'+
'.tw-rec{position:absolute;left:10px;top:10px;z-index:6;background:#fff;border:1px solid #888;box-shadow:0 4px 14px rgba(0,0,0,.35);font:17px "Segoe UI",sans-serif;color:#222;width:310px}'+
'.tw-rec .rh{display:flex;justify-content:space-between;padding:3px 8px;border-bottom:1px solid #ddd}'+
'.tw-rec .rb{display:flex;align-items:center;gap:10px;padding:6px 8px}.tw-rec .nx{color:#1f6fd1;display:grid;place-items:center;width:30px;height:28px}.tw-rec .nx svg{width:24px;height:24px}'+
'.tw-rec .tm{border:1px solid #999;padding:0 6px;font:18px Consolas,monospace;min-width:76px}.tw-rec .tt{font:18px Consolas,monospace;color:#444}'+
'.tw-rec .nx.hl{box-shadow:0 0 0 3px var(--accent-deep);border-radius:4px}'+
'.tw-dlg{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:7;background:#fff;border:1px solid #777;box-shadow:0 8px 28px rgba(0,0,0,.45);font:19px "Segoe UI",sans-serif;color:#222;width:84%}'+
'.tw-dlg .dh{padding:6px 12px;border-bottom:1px solid #ddd;font-weight:600}.tw-dlg .db{padding:14px 16px}.tw-dlg .dbt{display:flex;justify-content:flex-end;gap:10px;padding:0 16px 14px}'+
'.tw-dlg .dbt span{border:1px solid #888;padding:3px 22px;border-radius:3px;background:#f3f3f3}.tw-dlg .dbt span.y{border:2px solid #1f6fd1;box-shadow:0 0 0 3px var(--accent-deep)}'+
'.tw-sort{position:absolute;inset:0;background:#e9e9e9;padding:14px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px;align-content:start;font:14px "Segoe UI",sans-serif;color:#333}'+
'.tw-sort .th{position:relative;aspect-ratio:16/9;border:1px solid #bbb;background:#fff;overflow:hidden}.tw-sort .th .tw-sl{transform:scale(.3);transform-origin:0 0;width:333%;height:333%}'+
'.tw-sort .ft{display:flex;justify-content:space-between;align-items:center;padding:4px 2px;font-size:18px}.tw-sort .ft b{font:700 21px Consolas,monospace;color:#b42318}'+
'.tw-sort .cap{grid-column:1/-1;font-weight:600;color:#444}'+
'</style>');

const GLOBE='<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#e9f6ff" stroke="#2a6f97" stroke-width="5"/><path d="M10 50h80M50 10c-16 18-16 62 0 80M50 10c16 18 16 62 0 80M18 30h64M18 70h64" fill="none" stroke="#2a6f97" stroke-width="4"/><path d="M58 18l14 8-6 10-12-4zM30 54l12-4 8 10-6 14-10-6z" fill="#3cb44b"/></svg>';
const SLA='<div class="tw-sl tw-a"><div class="t1">Визначні мандрівники</div><div class="t2">Відкриття нових земель</div><div class="mp"></div></div>';
const SLB='<div class="tw-sl tw-b"><div class="bh">Марко Поло</div><ul><li>Венеційський купець і мандрівник</li><li>Подорожував Азією, дістався Китаю</li><li>Автор «Книги чудес світу»</li></ul><div class="pic">'+GLOBE+'</div></div>';
const SLC='<div class="tw-sl tw-b"><div class="bh" style="background:#7cc36a;color:#173a0e">Христофор Колумб</div><ul><li>Іспанський мореплавець</li><li>4 подорожі до берегів Америки</li></ul><div class="pic">'+GLOBE+'</div></div>';
const SLD='<div class="tw-sl tw-b"><div class="bh" style="background:#8fb8de;color:#10324f">Фернан Магеллан</div><ul><li>Перша навколосвітня експедиція</li><li>Дав назву «Тихий океан»</li></ul><div class="pic">'+GLOBE+'</div></div>';
const SLIDES=[SLA,SLB,SLC,SLD];
const comma=x=>String(x).replace('.',',');

/* ---------- 1. Лабораторія ефектів появи слайдів ---------- */
const DIR8=['Справа','Згори','Зліва','Знизу','Згори справа','Знизу справа','Згори зліва','Знизу зліва'];
/* напрямок → вектор руху «звідки» (x,y): Справа = (1,0) тощо */
const VEC={'Справа':[1,0],'Згори':[0,-1],'Зліва':[-1,0],'Знизу':[0,1],'Згори справа':[1,-1],'Знизу справа':[1,1],'Згори зліва':[-1,-1],'Знизу зліва':[-1,1]};
const FX=[
 {n:'Немає',o:null,x:'слайд просто замінює попередній, без ефекту'},
 {n:'Вицвітання',o:null,x:'новий слайд плавно проступає крізь попередній'},
 {n:'Зсув',o:['Знизу','Зліва','Згори','Справа'],x:'новий слайд виштовхує попередній'},
 {n:'Поява',o:['Справа','Згори','Зліва','Знизу','Згори справа'],x:'новий слайд поступово «витирає» попередній'},
 {n:'Відкривання',o:DIR8,x:'попередній слайд від’їжджає й відкриває новий'},
 {n:'Шашки',o:['Зліва','Згори'],x:'слайд збирається з прямокутників, наче пазл'},
 {n:'Годинник',o:['За годинниковою стрілкою','Проти годинникової стрілки','Симетрична кругова'],x:'новий слайд відкривається, як стрілка годинника'}];
const DUR=[0.5,1.5,3];
/* кроки вчителя: [ефект, параметр, тривалість] */
const TPRE=[[1,0,1],[2,0,1],[3,4,1],[4,5,1],[5,0,1],[5,1,1],[6,0,1],[6,2,1],[5,0,2]];

W.trans={html:()=>'<div style="display:grid;grid-template-columns:.85fr 1.15fr;gap:26px;align-items:start">'+
  '<div class="tw-side"><div class="tw-fx"></div><div class="tw-row tw-par"><b>Параметри ефекту</b><div class="seg tw-opt"></div></div>'+
  '<div class="tw-row"><b>Тривалість</b><div class="seg tw-dur"></div></div>'+
  '<div class="tw-row"><button class="btn primary tw-play" style="font-size:19px">'+(typeof I==='function'?I('play'):'')+'Переглянути</button></div><p class="tw-cap"></p></div>'+
  '<div><div class="tw-stage"><div class="tw-old"></div><div class="tw-new"></div></div><p style="font-size:17px;color:var(--ink-muted);margin:8px 0 0">Перехід від слайда 1 до слайда 2</p></div></div>',
 mount(root,d,api){
  const fxB=root.querySelector('.tw-fx'),opt=root.querySelector('.tw-opt'),par=root.querySelector('.tw-par'),du=root.querySelector('.tw-dur'),cap=root.querySelector('.tw-cap');
  const stage=root.querySelector('.tw-stage'),O=root.querySelector('.tw-old'),N=root.querySelector('.tw-new');
  let e=0,o=0,t=1,raf=0;
  const clear=()=>{cancelAnimationFrame(raf);stage.querySelectorAll('.tw-cell').forEach(c=>c.remove());
   [O,N].forEach(x=>{x.style.cssText='position:absolute;inset:0';x.style.webkitMaskImage=x.style.maskImage=''});O.innerHTML=SLA;N.innerHTML=SLB};
  const show=k=>{clear();N.style.opacity=k?1:0;O.style.zIndex=1;N.style.zIndex=2};
  const ui=()=>{
   fxB.innerHTML=FX.map((f,i)=>'<button class="'+(i===e?'on':'')+'">'+f.n+'</button>').join('');
   [...fxB.children].forEach((b,i)=>b.onclick=()=>{e=i;o=0;ui();play()});
   const f=FX[e];par.style.visibility=f.o?'visible':'hidden';
   opt.innerHTML=f.o?f.o.map((x,i)=>'<button class="'+(i===o?'on':'')+'">'+x+'</button>').join(''):'';
   [...opt.children].forEach((b,i)=>b.onclick=()=>{o=i;ui();play()});
   du.innerHTML=DUR.map((x,i)=>'<button class="'+(i===t?'on':'')+'">'+comma(x)+' с</button>').join('');
   [...du.children].forEach((b,i)=>b.onclick=()=>{t=i;ui();play()});
   cap.innerHTML='Ефект <b>'+f.n+'</b>'+(f.o?', параметр <b>'+f.o[o]+'</b>':'')+(e?', тривалість <b>'+comma(DUR[t])+' с</b>':'')+': '+f.x+'.'};
  const W_=()=>stage.clientWidth,H_=()=>stage.clientHeight;
  const play=()=>{show(0);const f=FX[e],D=DUR[t]*1000,dir=f.o?f.o[o]:'';
   if(e===0){N.style.opacity=1;return}
   let prep=null,apply;
   if(f.n==='Вицвітання')apply=p=>{N.style.opacity=p};
   if(f.n==='Зсув'){const v=VEC[dir];apply=p=>{N.style.opacity=1;const w=W_(),h=H_();
     N.style.transform='translate('+(v[0]*(1-p)*w)+'px,'+(v[1]*(1-p)*h)+'px)';O.style.transform='translate('+(-v[0]*p*w)+'px,'+(-v[1]*p*h)+'px)'}}
   if(f.n==='Поява'){const v=VEC[dir],a=Math.atan2(-v[0],v[1])*180/Math.PI;  /* кут градієнта = напрямок «витирання» від краю dir (0° — угору, 90° — праворуч) */
     apply=p=>{N.style.opacity=1;const q=-15+p*130,m='linear-gradient('+a+'deg,#000 '+(q-15)+'%,transparent '+q+'%)';N.style.webkitMaskImage=N.style.maskImage=m}}
   if(f.n==='Відкривання'){const v=VEC[dir];O.style.zIndex=3;apply=p=>{N.style.opacity=1;const w=W_(),h=H_();
     O.style.transform='translate('+(-v[0]*p*w)+'px,'+(-v[1]*p*h)+'px)'}}
   if(f.n==='Шашки'){const C=8,R=5;N.style.opacity=0;prep=[];const w=W_(),h=H_(),cw=w/C,ch=h/R,vert=dir==='Згори';
     for(let r=0;r<=R;r++)for(let c=0;c<=C;c++){const off=(vert?c:r)%2?.5:0,x=(vert?c*cw:(c-off)*cw),y=(vert?(r-off)*ch:r*ch);
      const x0=Math.max(0,x),x1=Math.min(w,x+cw),y0=Math.max(0,y),y1=Math.min(h,y+ch);if(x1-x0<1||y1-y0<1)continue;   /* клітинки обрізано по краю сцени */
      const cell=document.createElement('div');cell.className='tw-cell';cell.style.cssText='left:'+x0+'px;top:'+y0+'px;width:'+(x1-x0)+'px;height:'+(y1-y0)+'px;z-index:2';
      cell.innerHTML=SLB;const inn=cell.firstChild;inn.style.cssText='inset:auto;left:'+(-x0)+'px;top:'+(-y0)+'px;width:'+w+'px;height:'+h+'px';stage.append(cell);
      prep.push({cell,a:vert?y:x,s:vert?y0:x0,e:vert?y1:x1,len:vert?ch:cw})}
     apply=p=>{const v=Math.min(1,Math.max(0,p*1.02));prep.forEach(q=>{const front=Math.min(q.e,Math.max(q.s,q.a+v*q.len)),cut=q.e-front;
       q.cell.style.clipPath=vert?'inset(0 0 '+cut+'px 0)':'inset(0 '+cut+'px 0 0)'});
      if(p>=1){prep.forEach(q=>q.cell.remove());N.style.opacity=1}}}
   if(f.n==='Годинник'){apply=p=>{N.style.opacity=1;const a=p*360;let m;
     if(o===0)m='conic-gradient(from 0deg,#000 0deg '+a+'deg,transparent '+a+'deg)';
     else if(o===1)m='conic-gradient(from 0deg,transparent 0deg '+(360-a)+'deg,#000 '+(360-a)+'deg)';
     else m='conic-gradient(from 0deg,#000 0deg '+(a/2)+'deg,transparent '+(a/2)+'deg '+(360-a/2)+'deg,#000 '+(360-a/2)+'deg)';
     if(p>=1)m='none';N.style.webkitMaskImage=N.style.maskImage=m}}
   const t0=performance.now();apply(0);
   const tick=now=>{if(!root.isConnected)return;const p=Math.min(1,(now-t0)/D);apply(p);if(p<1)raf=requestAnimationFrame(tick);else if(f.n==='Поява'){N.style.webkitMaskImage=N.style.maskImage=''}};
   raf=requestAnimationFrame(tick)};
  root.querySelector('.tw-play').onclick=play;
  return{count:TPRE.length,step(i){if(i){[e,o,t]=TPRE[i-1]}else{e=1;o=0;t=1}ui();if(i)play();else show(0)}}}};

/* ---------- 2. Зміна слайда: Клацання кнопки миші / Після ---------- */
/* сценарій для кроків вчителя: [клацання, після, моменти «клацань» для слайдів 1–3 (с від появи слайда) або null] */
const APRE=[[true,false,[1.2,1.2,1.2]],[false,true,[0.9,null,null]],[true,true,[null,0.9,null]]];
const ACAP=['Прапорець <b>Клацання кнопки миші</b>: слайд чекає клацання — хоч хвилину, хоч годину.',
 '<b>Після: 2 с</b>, клацання вимкнено: слайди змінюються самі через 2 с. Клацання миші нічого не робить (лишаються лише клавіші).',
 'Обидва прапорці: слайд зміниться через 2 с, <b>або раніше</b> — якщо доповідач клацне.'];
W.advance={html:()=>'<div style="display:grid;grid-template-columns:.8fr 1.2fr;gap:28px;align-items:start">'+
  '<div class="tw-side"><div class="tw-ofc"><p class="gt">Переходи → Хронометраж → Зміна слайда</p>'+
  '<label class="tw-l1"><span class="cb"></span>Клацання кнопки миші</label><label class="tw-l2"><span class="cb"></span>Після: <span class="fld">00:02,00</span></label></div>'+
  '<div class="tw-row"><button class="btn primary tw-go" style="font-size:19px">'+(typeof I==='function'?I('play'):'')+'Почати показ</button><button class="btn tw-mc" style="font-size:19px">'+(typeof I==='function'?I('mouse'):'')+'Клацнути</button></div>'+
  '<p class="tw-cap"></p></div>'+
  '<div><div class="tw-stage"><div class="tw-cur" style="position:absolute;inset:0"></div><span class="tw-num"></span><span class="tw-clk">клац!</span><div class="tw-bar"></div></div>'+
  '<p class="tw-tm" style="font-size:18px;color:var(--ink-muted);margin:8px 0 0"></p></div></div>',
 mount(root,d,api){
  const cur=root.querySelector('.tw-cur'),num=root.querySelector('.tw-num'),clk=root.querySelector('.tw-clk'),bar=root.querySelector('.tw-bar'),cap=root.querySelector('.tw-cap'),tm=root.querySelector('.tw-tm');
  const l1=root.querySelector('.tw-l1'),l2=root.querySelector('.tw-l2');
  let click=true,after=false,sec=2,k=0,t0=0,raf=0,plan=null,tms=[],run=false;
  const box=()=>{l1.firstChild.textContent=click?'✓':'';l2.firstChild.textContent=after?'✓':''};
  const draw=()=>{cur.innerHTML=k<4?SLIDES[k]:'<div class="tw-sl tw-end">Кінець показу слайдів. Клацніть, щоб вийти.</div>';num.textContent=k<4?'Слайд '+(k+1):'';num.style.display=k<4?'':'none'};
  const stop=()=>{run=false;cancelAnimationFrame(raf);tms.forEach(clearTimeout);tms=[];bar.style.width=0;clk.classList.remove('on','no')};
  const next=()=>{if(k>=4)return;k++;draw();
   const c=cur.firstChild;if(c&&c.animate)c.animate([{opacity:0},{opacity:1}],{duration:350});
   startSlide()};
  const flash=ok=>{clk.textContent=ok?'клац!':'клац! — не діє';clk.classList.toggle('no',!ok);clk.classList.add('on');tms.push(setTimeout(()=>clk.classList.remove('on','no'),700))};
  const doClick=()=>{if(!run)return;flash(click);if(click)next()};
  const startSlide=()=>{t0=performance.now();if(k>=3){run=false;bar.style.width=0;tm.textContent='Слайд 4 — останній у цій демонстрації.';return}
   if(plan&&plan[k]!=null){const kk=k;tms.push(setTimeout(()=>{if(k===kk)doClick()},plan[k]*1000))}};
  const loop=now=>{if(!root.isConnected){stop();return}
   if(run&&k<3){const el_=(now-t0)/1000;tm.textContent='Слайд '+(k+1)+' на екрані: '+comma(el_.toFixed(1))+' с';
    if(after){bar.style.width=Math.min(100,el_/sec*100)+'%';if(el_>=sec){next()}}else bar.style.width=0}
   if(run)raf=requestAnimationFrame(loop)};
  const start=(scripted)=>{stop();k=0;draw();run=true;plan=scripted;startSlide();raf=requestAnimationFrame(loop)};
  l1.onclick=()=>{click=!click;box();start(null)};l2.onclick=()=>{after=!after;box();start(null)};
  root.querySelector('.tw-go').onclick=()=>start(null);root.querySelector('.tw-mc').onclick=doClick;
  return{count:APRE.length,step(i){stop();if(i){[click,after,plan]=[APRE[i-1][0],APRE[i-1][1],APRE[i-1][2]];cap.innerHTML=ACAP[i-1];box();start(plan)}
   else{click=true;after=false;box();k=0;draw();tm.textContent='';cap.innerHTML='Як зміниться слайд під час показу? Пробіл або клік — далі: три варіанти налаштування.'}}}}};

/* ---------- 3. Репетиція часу ---------- */
const fmt2=s=>{s=Math.round(s);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const fmt3=s=>{s=Math.floor(s);return '0:'+String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const RCAP=['Звичайний режим, <b>Сортувальник слайдів</b>: під слайдами часу ще немає. Вкладка <b>Показ слайдів</b> → <b>Репетиція часу</b>.',
 'Почався показ, зліва вгорі — вікно <b>Запис</b>. Доповідач читає текст першого слайда, годинник рахує час.',
 'Натиснули <b>Далі</b> (синя стрілка) — другий слайд. Час слайда почався з нуля, а загальний час іде далі.',
 'Третій, останній слайд. Прочитали — знову <b>Далі</b>.',
 'Після останнього слайда PowerPoint питає, чи зберегти час. Відповідаємо <b>Так</b>.',
 'Під кожним слайдом — записаний час показу. Тепер слайди змінюватимуться самі через цей час.'];
W.rehearse={html:()=>'<div style="display:grid;grid-template-columns:.75fr 1.25fr;gap:28px;align-items:start">'+
  '<div class="tw-side"><p class="tw-cap" style="margin:0"></p></div>'+
  '<div><div class="tw-stage tw-rst"></div></div></div>',
 mount(root,d,api){
  const st=root.querySelector('.tw-rst'),cap=root.querySelector('.tw-cap');
  const DEF=[6,9,5];let rec=[null,null,null],i0=0,t0=0,raf=0,cur=-1;
  const sorter=times=>'<div class="tw-sort"><div class="cap">Сортувальник слайдів</div>'+[0,1,2].map(i=>'<div><div class="th">'+SLIDES[i]+'</div><div class="ft"><span>'+(i+1)+'</span>'+(times?'<span>★ <b>'+fmt2(times[i])+'</b></span>':'')+'</div></div>').join('')+'</div>';
  const recWin=()=>'<div class="tw-rec"><div class="rh"><span>Запис</span><span>▾ ✕</span></div><div class="rb"><span class="nx hl" title="Далі"><svg viewBox="0 0 24 24"><path d="M4 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>❚❚</span><span class="tm">0:00:00</span><span>↺</span><span class="tt">0:00:00</span></div></div>';
  const tick=now=>{if(!root.isConnected)return;if(cur>=0&&cur<3){const s=(now-t0)/1000,tot=rec.slice(0,cur).reduce((a,b)=>a+(b||0),0)+s;
    const a=st.querySelector('.tm'),b=st.querySelector('.tt');if(a)a.textContent=fmt3(s);if(b)b.textContent=fmt3(tot);raf=requestAnimationFrame(tick)}};
  const total=()=>rec.reduce((a,b,i)=>a+(b==null?DEF[i]:b),0);
  return{count:5,step(i){cancelAnimationFrame(raf);
   if(cur>=0&&cur<3&&i===cur+2){const e=(performance.now()-t0)/1000;rec[cur]=e>=3?e:DEF[cur]}   /* пішли вперед — записуємо час слайда (менше 3 с — проскочили, беремо типовий) */
   if(i===0)rec=[null,null,null];
   cur=-1;cap.innerHTML=RCAP[i];
   if(i===0){st.innerHTML=sorter(null);return}
   if(i<=3){cur=i-1;for(let k=0;k<cur;k++)if(rec[k]==null)rec[k]=DEF[k];st.innerHTML=SLIDES[cur]+recWin();t0=performance.now();raf=requestAnimationFrame(tick);return}
   for(let k=0;k<3;k++)if(rec[k]==null)rec[k]=DEF[k];
   if(i===4){st.innerHTML=SLIDES[2]+'<div class="tw-dlg"><div class="dh">Microsoft PowerPoint</div><div class="db">Загальний час показу слайдів: '+fmt3(total())+'.<br>Зберегти новий хронометраж показу слайдів?</div><div class="dbt"><span class="y">Так</span><span>Ні</span></div></div>';return}
   st.innerHTML=sorter(rec)}}}};
})();
}
{
/* sections/7-r1/widgets/cloud.js */
/* ===== 7 клас, урок 7-5 «Хмарні сервіси. Онлайн-перекладачі. Синхронізація даних»: демонстрації, якими керує вчитель (пробіл або клік — далі) =====
   W.mt     — як працює онлайн-перекладач: електронний словник ⇒ дослівний переклад ⇒ узгодження за правилами мови;
   W.gdrive — операції на Google Диску, як у практичній: нова папка, завантаження, копія, перейменування, завантаження на комп’ютер, переміщення, Кошик;
   W.gsync  — синхронізація папки комп’ютера з Google Диском: зміни, робота без Інтернету, зміни з телефона, ризик видалення.
   Меню й панель Google Диска — справжні скріншоти з презентації вчителя (a75_new, a75_ctx, a75_bar, a75_side).
   Усе в IIFE: імена не перетинаються з іншими віджетами розділу. Кольори — лише змінними теми. */
(function(){
document.head.insertAdjacentHTML('beforeend','<style>'+
'.c75{display:grid;gap:22px;flex:1;min-height:0;align-items:start}'+
'.c75 .act{border:3px solid var(--ink);background:var(--paper-alt);padding:14px 18px}'+
'.c75 .act b.k{display:block;font:600 17px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}'+
'.c75 .act p{font-size:23px;line-height:1.35;margin:0}'+
'.c75 .tb{display:flex;gap:8px;flex-wrap:wrap}'+
'.c75 .tb button{border:3px solid var(--ink);background:var(--paper);color:var(--ink);font:700 17px var(--body);padding:5px 10px;cursor:pointer}'+
'.c75 .tb button.on{background:var(--accent);color:var(--on-accent)}'+
'.c75 .side{display:flex;flex-direction:column;gap:14px}'+
/* перекладач */
'.mt{border:3px solid var(--ink);background:var(--paper);display:flex;flex-direction:column}'+
'.mt-bar{display:grid;grid-template-columns:1fr 60px 1fr;align-items:center;border-bottom:2px solid var(--rule-soft);font:700 21px var(--body)}'+
'.mt-bar span{padding:10px 16px}.mt-bar .sw{text-align:center;color:var(--muted);font-size:26px}'+
'.mt-bar .lg{color:var(--accent);box-shadow:inset 0 -4px 0 var(--accent)}'+
'.mt-pan{display:grid;grid-template-columns:1fr 1fr;min-height:128px}'+
'.mt-in,.mt-out{padding:14px 18px;font:500 30px/1.3 var(--body);min-height:128px}'+
'.mt-out{background:var(--paper-alt);border-left:2px solid var(--rule-soft)}'+
'.mt-in .ph{color:var(--muted);font-size:24px}'+
'.mt-foot{display:grid;grid-template-columns:1fr 1fr;border-top:2px solid var(--rule-soft);font:500 18px var(--body);color:var(--muted)}'+
'.mt-foot>div{display:flex;align-items:center;gap:14px;padding:6px 16px}.mt-foot>div+div{border-left:2px solid var(--rule-soft);justify-content:flex-end}'+
'.mt-foot svg{width:26px;height:26px;fill:none;stroke:var(--ink);stroke-width:2}'+
'.mt-foot .ic{display:inline-flex;align-items:center;gap:6px;padding:2px 6px}'+
'.mt-foot .ic.hi{background:var(--sun);color:var(--on-bright);box-shadow:0 0 0 3px var(--sun)}'+
'.mt-foot .ic.hi svg{stroke:var(--on-bright)}'+
'.mt-dict{display:flex;gap:12px;flex-wrap:wrap;padding:14px 16px;border-top:3px solid var(--ink);min-height:118px;align-items:flex-start;background:var(--paper)}'+
'.mt-dict .cap{width:100%;font:600 16px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}'+
'.mt-w{border:2px solid var(--ink);padding:6px 12px;font:600 24px var(--body);display:flex;flex-direction:column;gap:3px;min-width:130px}'+
'.mt-w>b{font-size:25px}.mt-w>span{color:var(--muted);font-weight:500}.mt-w>span.ch{color:var(--ink);background:var(--accent-tint);font-weight:700}'+
'.mt .bad{text-decoration:line-through;text-decoration-color:var(--negative);text-decoration-thickness:3px;color:var(--negative)}'+
'.mt .new{background:var(--sun);color:var(--on-bright);padding:0 4px}'+
'.mt .miss{display:inline-block;width:48px;height:.85em;border:3px dashed var(--negative);vertical-align:-2px;margin:0 2px}'+
'.mt .flash{animation:c75f 1s}@keyframes c75f{0%{background:var(--sun)}100%{background:transparent}}'+
/* Google Диск */
'.gd{position:relative;display:grid;grid-template-columns:172px 1fr;border:3px solid var(--ink);background:var(--paper);height:470px;overflow:hidden;font-family:"Segoe UI",var(--body)}'+
'.gd-side{background:var(--paper)}.gd-side .gd-sin{position:relative}.gd-side img{width:172px;display:block}'+
'.gd-side .mk{position:absolute;left:4px;right:4px;border:3px solid var(--accent);display:none}'+
'.gd-main{display:flex;flex-direction:column;padding:10px 14px 10px 10px;min-width:0}'+
'.gd-path{font:400 26px "Segoe UI",var(--body);color:var(--ink);padding:4px 2px 8px}.gd-path i{font-style:normal;color:var(--muted)}'+
'.gd-bar{position:relative;height:40px;margin:0 0 6px;visibility:hidden}.gd-bar.on{visibility:visible}.gd-bar img{height:40px;display:block}'+
'.gd-bar .hb{position:absolute;top:2px;bottom:2px;border:3px solid var(--negative);display:none}'+
'.gd-head,.gd-row{display:grid;grid-template-columns:1fr 70px 110px 80px;gap:8px;align-items:center}'+
'.gd-head{font:600 16px "Segoe UI",var(--body);color:var(--muted);border-bottom:2px solid var(--rule-soft);padding:4px 6px}'+
'.gd-row{font:400 19px "Segoe UI",var(--body);color:var(--ink);padding:7px 6px;border-bottom:1px solid var(--rule-soft);transition:background .3s}'+
'.gd-row .nm{display:flex;align-items:center;gap:10px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
'.gd-row .i{flex:none;width:22px;height:22px;display:grid;place-items:center;font:800 13px var(--body);color:var(--paper)}'+
'.gd-row .i.d{background:var(--muted);clip-path:polygon(0 18%,40% 18%,50% 30%,100% 30%,100% 100%,0 100%)}'+
'.gd-row .i.w{background:var(--accent)}.gd-row .i.p{background:var(--coral)}'+
'.gd-row.sel{background:var(--accent-tint)}.gd-row.new{animation:c75f 1.4s}'+
'.gd-row small{font-size:16px;color:var(--muted)}'+
'.gd-empty{padding:30px 6px;font:400 20px "Segoe UI",var(--body);color:var(--muted)}'+
'.gd-ov{position:absolute;display:none;box-shadow:0 6px 22px rgba(0,0,0,.35);background:var(--paper);z-index:3}.gd-ov.on{display:block}'+
'.gd-ov img{display:block;width:100%}.gd-ov .hm{position:absolute;left:0;right:0;border:3px solid var(--negative)}'+
'.gd-dlg{position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);width:380px;background:var(--paper);border-radius:10px;box-shadow:0 8px 30px rgba(0,0,0,.4);padding:16px 20px;z-index:4;display:none;font:400 19px "Segoe UI",var(--body);color:var(--ink)}'+
'.gd-dlg.on{display:block}.gd-dlg h4{margin:0 0 12px;font:500 22px "Segoe UI",var(--body)}'+
'.gd-dlg .fld{border:2px solid var(--accent);border-radius:4px;padding:6px 10px;font-size:20px}'+
'.gd-dlg .gd-o{padding:6px 10px;margin:2px 0;border-radius:4px}.gd-dlg .gd-o.y{background:var(--accent-tint);font-weight:700}'+
'.gd-dlg .bt{display:flex;justify-content:flex-end;gap:16px;margin-top:14px;font-weight:600;color:var(--accent)}'+
'.gd-dlg .bt span.y{background:var(--accent);color:var(--on-accent);border-radius:16px;padding:3px 16px}'+
'.gd-toast{position:absolute;left:190px;bottom:12px;background:var(--ink);color:var(--paper);border-radius:6px;padding:9px 16px;font:400 18px "Segoe UI",var(--body);z-index:4;display:none}.gd-toast.on{display:block}'+
'.gd-toast b{color:var(--sun);margin-left:14px}'+
'.gd-trash{background:var(--paper-alt);border-radius:8px;padding:8px 12px;margin:0 0 8px;font:400 18px "Segoe UI",var(--body);display:flex;justify-content:space-between}'+
/* синхронізація */
'.gs{display:grid;grid-template-columns:minmax(0,1fr) 172px minmax(0,1fr);gap:0;align-items:stretch;min-height:400px}'+
'.gs-col{border:3px solid var(--ink);background:var(--paper);display:flex;flex-direction:column}'+
'.gs-h{padding:10px 14px;border-bottom:3px solid var(--ink);font:700 23px var(--display);display:flex;gap:12px;align-items:center;line-height:1.1}'+
'.gs-h small{display:block;font:500 17px var(--body);color:var(--muted)}'+
'.gs-h svg{width:40px;height:40px;flex:none;fill:none;stroke:var(--ink);stroke-width:2.2}'+
'.gs-files{padding:8px 10px;display:flex;flex-direction:column;gap:6px}'+
'.gs-f{display:grid;grid-template-columns:26px minmax(0,1fr);gap:10px;align-items:center;padding:6px 8px;border:2px solid var(--rule-soft);font:600 20px var(--body);transition:background .3s}'+
'.gs-f .i{width:24px;height:24px;display:grid;place-items:center;font:800 13px var(--body);color:var(--paper);background:var(--accent)}'+
'.gs-f .i.x{background:var(--mint)}.gs-f .i.j{background:var(--coral)}.gs-f .i.p{background:var(--sun);color:var(--on-bright)}'+
'.gs-f small{display:block;font:500 16px var(--body);color:var(--muted)}'+
'.gs-f .tg{display:inline-block;margin-left:8px;font:700 13px var(--body);text-transform:uppercase;letter-spacing:.05em;padding:1px 6px;border:2px solid var(--ink);white-space:nowrap;vertical-align:1px}'+
'.gs-f .tg.ch{background:var(--sun);color:var(--on-bright)}.gs-f .tg.nw{background:var(--mintb);color:var(--on-bright)}.gs-f .tg.wt{background:var(--paper-alt);color:var(--muted);border-style:dashed}'+
'.gs-f .tg.dl{background:var(--negative);color:var(--paper);border-color:var(--negative)}'+
'.gs-f.del{opacity:.55}.gs-f.del b{text-decoration:line-through;text-decoration-thickness:3px;text-decoration-color:var(--negative)}'+
'.gs-f.fl{animation:c75f 1.4s}'+
'.gs-mid{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:0 6px}'+
'.gs-st{font:700 16px var(--body);text-align:center;padding:6px 6px;max-width:166px;border:3px solid var(--ink);background:var(--paper);line-height:1.2}'+
'.gs-st.ok{background:var(--accent-tint)}.gs-st.go{background:var(--sun);color:var(--on-bright)}.gs-st.off{background:var(--negative);color:var(--paper);border-color:var(--negative)}'+
'.gs-ar{width:120px;height:46px}.gs-ar path{fill:none;stroke:var(--muted);stroke-width:5;stroke-linecap:round;stroke-linejoin:round}'+
'.gs-ar.on path{stroke:var(--accent)}.gs-ar.cut path{stroke:var(--negative);stroke-dasharray:8 8}'+
'</style>');

const IM=k=>(typeof IMG!=='undefined'&&IMG[k])||'';
const SVGI={
 spk:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9c1.5 1.5 1.5 4.5 0 6M18.5 6.5c3 3 3 8 0 11"/></svg>',
 mic:'<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/></svg>',
 cp:'<svg viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="13" rx="1"/><path d="M5 16V4h11"/></svg>',
 sh:'<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/></svg>',
 pc:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M9 20h6M12 16v4"/></svg>',
 cl:'<svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z"/></svg>'};
const side=(r,list,set)=>{const T=r.querySelector('.tb');list.forEach(([t,i])=>{const b=el('button','',t);b.dataset.i=i;b.onclick=()=>set(i);T.append(b)});
 return i=>{let on=-1;list.forEach(([,k],j)=>{if(i>=k)on=j});T.querySelectorAll('button').forEach((b,j)=>b.classList.toggle('on',j===on))}};
const SIDE='<div class="side"><div class="act"><b class="k"></b><p></p></div><div class="tb"></div></div>';

/* ===== Як працює онлайн-перекладач ===== */
W.mt={html:()=>'<div class="c75" style="grid-template-columns:minmax(0,1fr) 350px"><div class="mt">'+
  '<div class="mt-bar"><span class="lg">українська</span><span class="sw">⇄</span><span class="lg">англійська</span></div>'+
  '<div class="mt-pan"><div class="mt-in"></div><div class="mt-out"></div></div>'+
  '<div class="mt-foot"><div><span class="ic" data-t="mic">'+SVGI.mic+'</span><span class="ic" data-t="spk">'+SVGI.spk+'</span><span class="n" style="margin-left:auto"></span></div>'+
  '<div><span class="ic" data-t="spk2">'+SVGI.spk+'</span><span class="ic" data-t="cp" style="margin-left:auto">'+SVGI.cp+'</span><span class="ic" data-t="sh">'+SVGI.sh+'</span></div></div>'+
  '<div class="mt-dict"></div></div>'+SIDE+'</div>',
 mount(r,d,api){
  const T1='хмарне сховище',T2='Учні зберігають фото в хмарі.';
  const D1=[['хмарне',['cloudy','cloud']],['сховище',['storage','repository','vault']]];
  const D2=[['Учні',['pupils','students']],['зберігають',['store','keep']],['фото',['photo','photos']],['в',['in','at']],['хмарі',['cloud']]];
  const S=[
   {k:'Онлайн-перекладач',a:'Ліворуч — мова <b>оригіналу</b>, праворуч — мова <b>перекладу</b>. Текст — до 5000 символів.',i:''},
   {k:'Уводимо текст',a:'Перекладемо англійською термін з підручника — <b>хмарне сховище</b>.',i:T1},
   {k:'Крок 1. Електронний словник',a:'Перекладач шукає <b>кожне слово</b> в електронному словнику. Варіантів перекладу кілька — який вибрати?',i:T1,d:D1,c:[-1,-1]},
   {k:'Крок 2. Слово за словом',a:'Беремо перші варіанти: <b>cloudy storage</b>. Але cloudy — «похмурий» (про погоду). Вийшло «похмуре сховище»!',i:T1,d:D1,c:[0,0],o:'<span class="bad">cloudy</span> storage'},
   {k:'Крок 3. Узгодження',a:'Алгоритм узгоджує слова за <b>правилами англійської</b>: іменник cloud сам стає означенням. Правильно — <b>cloud storage</b>.',i:T1,d:D1,c:[1,0],o:'<span class="new">cloud</span> storage'},
   {k:'Тепер речення',a:'Речення складніше: слова змінюються за відмінками й числами, інший порядок слів, в англійській є артиклі.',i:T2,d:D2,c:[-1,-1,-1,-1,-1]},
   {k:'Слово за словом',a:'Дослівно: <b>Pupils store photo in cloud.</b> Зрозуміло, але з помилками: одне фото замість багатьох і бракує слова.',i:T2,d:D2,c:[0,0,0,0,0],o:'Pupils store <span class="bad">photo</span> in <span class="miss"></span> cloud.'},
   {k:'Узгодження',a:'Перекладач поставив <b>множину</b> photos і додав <b>артикль</b> the — так вимагає англійська граматика.',i:T2,d:D2,c:[0,0,1,0,0],o:'Pupils store <span class="new">photos</span> in <span class="new">the</span> cloud.'},
   {k:'Кнопки під текстом',a:'Переклад можна <b>прослухати</b>, <b>скопіювати</b> в Буфер обміну, <b>поділитися</b> ним. Але перевіряйте: перекладач не розуміє змісту так, як людина.',i:T2,d:D2,c:[0,0,1,0,0],o:'Pupils store photos in the cloud.',tools:1}];
  const I=r.querySelector('.mt-in'),O=r.querySelector('.mt-out'),N=r.querySelector('.n'),DI=r.querySelector('.mt-dict');
  const mark=side(r,[['Термін',1],['Словник',2],['Дослівно',3],['Правильно',4],['Речення',5],['Граматика',7],['Кнопки',8]],api.setStep);
  function step(i){const s=S[i];
   I.innerHTML=s.i?s.i:'<span class="ph">Уведіть текст</span>';N.textContent=(s.i?s.i.length:0)+' / 5 000';
   O.innerHTML=s.o||'';if(s.o&&!(S[i-1]&&S[i-1].o===s.o))O.classList.add('flash');setTimeout(()=>O.classList.remove('flash'),1000);
   DI.innerHTML=s.d?'<div class="cap">Електронний словник</div>'+s.d.map(([w,v],j)=>'<div class="mt-w"><b>'+w+'</b>'+v.map((x,k)=>'<span class="'+(s.c[j]===k?'ch':'')+'">'+x+'</span>').join('')+'</div>').join(''):'<div class="cap">Словник ще не потрібен</div>';
   r.querySelectorAll('.mt-foot .ic').forEach(e=>e.classList.toggle('hi',!!s.tools&&e.dataset.t!=='mic'));
   r.querySelector('.act .k').textContent=s.k;r.querySelector('.act p').innerHTML=s.a;mark(i)}
  return{count:S.length-1,step}}};

/* ===== Операції на Google Диску ===== */
W.gdrive={html:()=>'<div class="c75" style="grid-template-columns:minmax(0,1fr) 330px"><div class="gd">'+
  '<div class="gd-side"><div class="gd-sin"><img alt="" src="'+IM('a75_side')+'"><div class="mk"></div></div></div>'+
  '<div class="gd-main"><div class="gd-path"></div><div class="gd-bar"><img alt="" src="'+IM('a75_bar')+'"><div class="hb"></div></div>'+
  '<div class="gd-pre"></div><div class="gd-head"><span>Назва</span><span>Власник</span><span>Останні зміни</span><span>Розмір</span></div><div class="gd-list"></div></div>'+
  '<div class="gd-ov" data-m="new" style="left:150px;top:56px;width:300px"><img alt="" src="'+IM('a75_new')+'"><div class="hm"></div></div>'+
  '<div class="gd-ov" data-m="ctx" style="left:455px;top:140px;width:300px"><img alt="" src="'+IM('a75_ctx')+'"><div class="hm"></div></div>'+
  '<div class="gd-dlg"></div><div class="gd-toast"></div></div>'+SIDE+'</div>',
 mount(r,d,api){
  const F=(n,t,dt,sz,x)=>Object.assign({n,t,dt,sz},x||{});
  const ROOT=[F('Фото','d','12 вер.','—'),F('Реферат.docx','w','5 жовт.','24 КБ')];
  const ROOTF=[F('Вправа 1.5','d','10:02','—')].concat(ROOT);
  const UP=F('вправа 1.5.docx','w','10:05','15 КБ');
  const W3=F('w3c.docx','w','10:06','15 КБ');
  /* меню: [картинка, верх %, висота %]; side: рамка на лівій панелі [верх %, висота %]; bar: рамка на панелі [ліво %, ширина %] */
  const S=[
   {k:'Мій диск',a:'Тут — усі ваші файли й папки, що зберігаються в хмарі. Почнемо, як у практичній: створимо папку <b>Вправа 1.5</b>.',p:'Мій диск',L:ROOT},
   {k:'Створити ⇒ Нова папка',a:'Кнопка <b>Створити</b> ⇒ <b>Нова папка</b> ⇒ вводимо ім’я ⇒ <b>Створити</b>.',p:'Мій диск',L:ROOT,side:[2.5,11.5],menu:['new',2.5,10.5],
    dlg:'<h4>Нова папка</h4><div class="fld">Вправа 1.5</div><div class="bt"><span>Скасувати</span><span class="y">Створити</span></div>'},
   {k:'Папка створена',a:'Папка з’явилася в <b>Мій диск</b>. Відкриваємо її подвійним клацанням.',p:'Мій диск',L:ROOTF,nw:0},
   {k:'Створити ⇒ Завантажити файл',a:'У папці: <b>Створити</b> ⇒ <b>Завантажити файл</b> ⇒ вибираємо на комп’ютері файл <b>вправа 1.5</b> ⇒ <b>Відкрити</b>.',p:'Мій диск <i>›</i> Вправа 1.5',L:[],side:[2.5,11.5],menu:['new',19,10]},
   {k:'Файл у хмарі',a:'Файл скопійовано з комп’ютера на Google Диск. Ще швидше — <b>перетягнути</b> файл з вікна Провідника на сторінку Диска.',p:'Мій диск <i>›</i> Вправа 1.5',L:[UP],nw:0,toast:'Завантажено 1 елемент: вправа 1.5.docx'},
   {k:'Контекстне меню ⇒ Зробити копію',a:'Права кнопка миші на файлі ⇒ <b>Зробити копію</b>. З’являється файл <b>Копія вправа 1.5.docx</b>.',p:'Мій диск <i>›</i> Вправа 1.5',L:[F('Копія вправа 1.5.docx','w','10:06','15 КБ'),UP],sel:1,nw:0,tb:1,menu:['ctx',36.5,10.5]},
   {k:'Перейменувати',a:'Права кнопка на копії ⇒ <b>Перейменувати</b> ⇒ нове ім’я <b>w3c.docx</b> ⇒ <b>OK</b>.',p:'Мій диск <i>›</i> Вправа 1.5',L:[W3,UP],sel:0,nw:0,tb:1,
    dlg:'<h4>Перейменувати</h4><div class="fld">w3c.docx</div><div class="bt"><span>Скасувати</span><span class="y">OK</span></div>'},
   {k:'Панель ⇒ Завантажити',a:'Вибрали файл — угорі з’явилася <b>панель інструментів</b>. <b>Завантажити</b> (стрілка вниз) зберігає копію файлу на комп’ютері.',p:'Мій диск <i>›</i> Вправа 1.5',L:[W3,UP],sel:0,bar:[22.6,5.7],toast:'Завантажено на комп’ютер: w3c.docx'},
   {k:'Панель ⇒ Перемістити',a:'<b>Перемістити</b> (папка зі стрілкою) ⇒ вибираємо <b>Мій диск</b> ⇒ <b>Перемістити</b>.',p:'Мій диск <i>›</i> Вправа 1.5',L:[W3,UP],sel:0,bar:[28.3,5.7],
    dlg:'<h4>Перемістити «w3c.docx»</h4><div class="gd-o y">Мій диск</div><div class="gd-o">Вправа 1.5</div><div class="gd-o">Фото</div><div class="bt"><span>Скасувати</span><span class="y">Перемістити</span></div>'},
   {k:'Файл переміщено',a:'У папці <b>Вправа 1.5</b> лишився оригінал, а <b>w3c.docx</b> тепер у <b>Мій диск</b>.',p:'Мій диск',L:[W3].concat(ROOTF),nw:0,side:[22,5.5]},
   {k:'Перемістити в кошик',a:'Вибрали файл ⇒ <b>Перемістити в кошик</b> (смітник). Файл зник зі списку, але не назавжди.',p:'Мій диск',L:ROOTF,bar:[33.9,6.3],toast:'Файл переміщено в кошик <b>Скасувати</b>'},
   {k:'Кошик ⇒ Відновити',a:'У <b>Кошику</b> файли зберігаються <b>30 днів</b>. Права кнопка ⇒ <b>Відновити</b> або <b>Видалити назавжди</b>.',p:'Кошик на Моєму диску',pre:'<div class="gd-trash"><span>Файли в кошику видаляються назавжди через 30 днів</span><b style="color:var(--accent)">Очистити кошик</b></div>',L:[W3],sel:0,side:[63,5.5],
    dlg:null,menuT:1},
   {k:'Відновлено',a:'Відновлений файл повертається <b>туди, звідки його видалили</b>, — у Мій диск.',p:'Мій диск',L:[W3].concat(ROOTF),nw:0,side:[22,5.5],toast:'Відновлено: w3c.docx'}];
  const P=r.querySelector('.gd-path'),L=r.querySelector('.gd-list'),B=r.querySelector('.gd-bar'),HB=B.querySelector('.hb'),PRE=r.querySelector('.gd-pre'),
   MK=r.querySelector('.gd-side .mk'),DL=r.querySelector('.gd-dlg'),TS=r.querySelector('.gd-toast'),OV=[...r.querySelectorAll('.gd-ov')];
  const mark=side(r,[['Мій диск',0],['Нова папка',1],['Завантажити файл',3],['Копія',5],['Перейменувати',6],['На комп’ютер',7],['Перемістити',8],['Кошик',10]],api.setStep);
  const row=(f,j,s)=>'<div class="gd-row'+(s.sel===j?' sel':'')+(s.nw===j?' new':'')+'"><span class="nm"><span class="i '+f.t+'">'+(f.t==='w'?'W':f.t==='p'?'':'')+'</span>'+f.n+'</span><small>я</small><small>'+f.dt+'</small><small>'+f.sz+'</small></div>';
  function step(i){const s=S[i];
   P.innerHTML=s.p;PRE.innerHTML=s.pre||'';
   L.innerHTML=s.L.length?s.L.map((f,j)=>row(f,j,s)).join(''):'<div class="gd-empty">Папка порожня. Перетягніть сюди файли або скористайтеся кнопкою «Створити».</div>';
   B.classList.toggle('on',!!s.tb||!!s.bar);HB.style.display=s.bar?'block':'none';if(s.bar){HB.style.left=s.bar[0]+'%';HB.style.width=s.bar[1]+'%'}
   MK.style.display=s.side?'block':'none';if(s.side){MK.style.top=s.side[0]+'%';MK.style.height=s.side[1]+'%'}
   OV.forEach(o=>{const on=!!s.menu&&s.menu[0]===o.dataset.m;o.classList.toggle('on',on);if(on){const h=o.querySelector('.hm');h.style.top=s.menu[1]+'%';h.style.height=s.menu[2]+'%'}});
   DL.classList.toggle('on',!!s.dlg);DL.innerHTML=s.dlg||'';
   if(s.menuT){DL.classList.add('on');DL.style.cssText='left:auto;right:16px;top:200px;transform:none;width:260px';DL.innerHTML='<div class="gd-o y">Відновити</div><div class="gd-o">Видалити назавжди</div>'}else DL.style.cssText='';
   TS.classList.toggle('on',!!s.toast);TS.innerHTML=s.toast||'';
   r.querySelector('.act .k').textContent=s.k;r.querySelector('.act p').innerHTML=s.a;mark(i)}
  return{count:S.length-1,step}}};

/* ===== Синхронізація файлів ===== */
W.gsync={html:()=>'<div class="c75" style="grid-template-columns:minmax(0,1fr) 330px"><div class="gs">'+
  '<div class="gs-col"><div class="gs-h">'+SVGI.pc+'<span>Комп’ютер<small>папка Навчання</small></span></div><div class="gs-files" data-s="a"></div></div>'+
  '<div class="gs-mid"><svg class="gs-ar" data-a="r" viewBox="0 0 120 46"><path d="M8 23h100M90 8l18 15-18 15"/></svg><div class="gs-st"></div><svg class="gs-ar" data-a="l" viewBox="0 0 120 46"><path d="M112 23H12M30 8L12 23l18 15"/></svg></div>'+
  '<div class="gs-col"><div class="gs-h">'+SVGI.cl+'<span>Google Диск<small>Комп’ютери ⇒ Навчання</small></span></div><div class="gs-files" data-s="b"></div></div></div>'+SIDE+'</div>',
 mount(r,d,api){
  const f=(n,i,t,x)=>Object.assign({n,i,t},x||{});
  const R1=f('реферат.docx','W','10:15'),R2=f('реферат.docx','W','14:20'),PH=f('фото.jpg','J','09:40'),PL1=f('план.xlsx','X','08:30'),PL2=f('план.xlsx','X','15:05'),
   DP=f('доповідь.pptx','P','15:10'),DS=f('дошка.jpg','J','16:00');
  const tg=(o,g,c,x)=>Object.assign({},o,{g,c},x||{});
  const S=[
   {k:'Синхронізовано',a:'Програма <b>Диск для комп’ютера</b> стежить за папкою <b>Навчання</b>. На комп’ютері й у хмарі — однакові файли.',st:['ok','Синхронізовано'],
    A:[R1,PH,PL1],B:[R1,PH,PL1]},
   {k:'Змінили файл на комп’ютері',a:'Дописали реферат на комп’ютері о 14:20. Програма помітила зміну й почала синхронізацію.',st:['go','Синхронізація…'],ar:'r',
    A:[tg(R2,'змінено','ch'),PH,PL1],B:[R1,PH,PL1]},
   {k:'Хмара оновилася',a:'У хмарі тепер теж <b>остання версія</b> реферату — від 14:20.',st:['ok','Синхронізовано'],
    A:[R2,PH,PL1],B:[tg(R2,'оновлено','ch'),PH,PL1],fl:'b0'},
   {k:'Немає Інтернету',a:'Мережа зникла, а працювати можна далі: змінили план і створили доповідь. Зміни <b>чекають</b> на мережу.',st:['off','Немає підключення'],cut:1,
    A:[R2,PH,tg(PL2,'очікує','wt'),tg(DP,'очікує','wt')],B:[R2,PH,PL1]},
   {k:'Інтернет з’явився',a:'Щойно мережа з’явилася, усі зміни <b>автоматично</b> потрапили в хмару.',st:['ok','Синхронізовано'],ar:'r',
    A:[R2,PH,PL2,DP],B:[R2,PH,tg(PL2,'оновлено','ch'),tg(DP,'новий','nw')]},
   {k:'Зміни з телефона',a:'На телефоні в Google Диску додали фото дошки. Синхронізація працює <b>в обидва боки</b>.',st:['go','Синхронізація…'],ar:'l',
    A:[R2,PH,PL2,DP],B:[R2,PH,PL2,DP,tg(DS,'з телефона','nw')]},
   {k:'Файл на комп’ютері',a:'Фото дошки з’явилося і в папці на комп’ютері. Остання версія — <b>в усіх місцях</b>.',st:['ok','Синхронізовано'],
    A:[R2,PH,PL2,DP,tg(DS,'новий','nw')],B:[R2,PH,PL2,DP,DS]},
   {k:'Обережно: видалення',a:'Видалили фото на комп’ютері — воно <b>зникло і з хмари</b>! Помилки теж синхронізуються. Рятує Кошик Диска (30 днів).',st:['ok','Синхронізовано'],ar:'r',
    A:[R2,tg(PH,'видалено','dl',{del:1}),PL2,DP,DS],B:[R2,tg(PH,'у Кошику','dl',{del:1}),PL2,DP,DS]}];
  const CA=r.querySelector('[data-s="a"]'),CB=r.querySelector('[data-s="b"]'),ST=r.querySelector('.gs-st'),AR=[...r.querySelectorAll('.gs-ar')];
  const mark=side(r,[['Зміна',1],['Без мережі',3],['З телефона',5],['Видалення',7]],api.setStep);
  const cls={W:'',X:'x',J:'j',P:'p'};
  const rowh=(o,fl)=>'<div class="gs-f'+(o.del?' del':'')+(fl?' fl':'')+'"><span class="i '+cls[o.i]+'">'+o.i+'</span><span><b>'+o.n+'</b><small>змінено о '+o.t+(o.g?' <span class="tg '+o.c+'">'+o.g+'</span>':'')+'</small></span></div>';
  function step(i){const s=S[i];
   CA.innerHTML=s.A.map(o=>rowh(o,!!o.g&&o.c!=='wt')).join('');CB.innerHTML=s.B.map(o=>rowh(o,!!o.g)).join('');
   ST.className='gs-st '+s.st[0];ST.textContent=s.st[1];
   AR.forEach(a=>{a.classList.toggle('on',s.ar===a.dataset.a);a.classList.toggle('cut',!!s.cut)});
   r.querySelector('.act .k').textContent=s.k;r.querySelector('.act p').innerHTML=s.a;mark(i)}
  return{count:S.length-1,step}}};
})();
}
{
/* sections/8-r1/widgets/codes.js */
/* Шифр Цезаря: пробіл/клік кодує слово по літері. d.word, d.shift, d.dir (1 — кодування, -1 — декодування) */
W.caesar={html:d=>'<div style="display:flex;gap:16px;align-items:center;margin-bottom:12px;font-size:24px"><span>Зсув:</span><input type="range" min="1" max="10" value="'+(d.shift||4)+'" class="cz-r" style="width:220px;accent-color:var(--vio)"><b class="cz-k mono" style="font-size:30px"></b><span class="cz-d chip"></span></div>'+
  '<div class="cz-ab" style="display:grid;grid-template-columns:repeat(33,1fr);gap:3px;font:700 22px var(--mono);text-align:center"></div>'+
  '<div style="display:flex;gap:40px;align-items:center;justify-content:center;margin-top:30px"><div class="cz-w" style="display:flex;gap:8px"></div><span style="font-size:44px">→</span><div class="cz-o" style="display:flex;gap:8px"></div></div>',
 mount(r,d,api){const A='абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'.split(''),w=d.word.split(''),dir=d.dir||1;let k=d.shift||4,cur=0;
  const R=r.querySelector('.cz-r'),ab=r.querySelector('.cz-ab'),W1=r.querySelector('.cz-w'),O=r.querySelector('.cz-o');
  r.querySelector('.cz-d').textContent=dir>0?'кодування: праворуч':'декодування: ліворуч';
  const enc=c=>{const i=A.indexOf(c);return i<0?c:A[(i+dir*k+33*10)%33]};
  const cell=(t,bg,col)=>'<div style="border-radius:8px;padding:6px 0;background:'+bg+';color:'+(col||'inherit')+'">'+t+'</div>';
  const box=(t,on,done)=>'<div style="width:62px;height:72px;border-radius:14px;display:grid;place-items:center;font:800 40px var(--mono);border:3px solid '+(on?'var(--pink)':'var(--line)')+';background:'+(done?'var(--mint-soft)':'var(--paper)')+'">'+t+'</div>';
  function draw(){r.querySelector('.cz-k').textContent=k;const c=cur>0?w[cur-1]:null,e=c?enc(c):null;
   ab.innerHTML=A.map(x=>cell(x,x===c?'var(--pink-soft)':'var(--vio-soft)')).join('')+A.map(x=>cell(enc(x),enc(x)===e&&c?'var(--mint)':'var(--sun-soft)',enc(x)===e&&c?'#fff':'')).join('');
   W1.innerHTML=w.map((x,i)=>box(x,i===cur-1,false)).join('');O.innerHTML=w.map((x,i)=>box(i<cur?enc(x):'',i===cur-1,i<cur)).join('')}
  R.oninput=()=>{k=+R.value;draw()};
  return{count:w.length,step(i){cur=i;draw()}}}};

/* Коди символів у таблицях: пробіл/клік перебирає приклади. d.examples */
W.symcodes={html:()=>'<input class="field sc-i" style="width:100%;font-size:30px" aria-label="Текст"><div class="sc-o" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:18px"></div><p class="small" style="margin-top:14px">— означає, що символу немає в таблиці</p>',
 mount(r,d){const cp={'Ґ':165,'ґ':180,'Є':170,'є':186,'І':178,'і':179,'Ї':175,'ї':191,'«':171,'»':187,'–':150,'—':151,'№':185,'’':146,'₴':null};
  const w1251=ch=>{const u=ch.codePointAt(0);if(u<128)return u;if(u>=0x410&&u<=0x44F)return u-0x410+192;return cp[ch]??null};
  const I=r.querySelector('.sc-i'),O=r.querySelector('.sc-o');const ex=d.examples||['Cat','Україна','₴ ♞ 🥰'];
  const row=(l,v,c)=>'<div style="display:flex;justify-content:space-between;gap:8px;font-size:21px"><span style="color:var(--muted)">'+l+'</span><b class="mono" style="color:'+c+'">'+(v===null?'—':v)+'</b></div>';
  const upd=()=>{O.innerHTML=[...I.value].slice(0,10).map(ch=>{const u=ch.codePointAt(0),w=w1251(ch);return '<div style="border:2px solid var(--line);border-radius:14px;padding:8px 12px;min-width:190px;background:var(--paper)"><div style="font-size:40px;text-align:center;line-height:1.3">'+(ch===' '?'␣':ch.replace(/[<&]/g,''))+'</div>'+row('ASCII',u<128?u:null,'var(--vio)')+row('Win-1251',w,'var(--pink)')+row('Юнікод',u,'var(--mint)')+'</div>'}).join('')};
  I.oninput=upd;return{count:ex.length-1,step(i){I.value=ex[i];upd()}}}};
}
{
/* sections/8-r2/widgets/archiver.js */
/* 8 клас, урок 8: архіватори. Кроки — пробіл або клік; кнопки — додатково. */
const AR_CSS='<style>'+
 '.ar-bt{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}'+
 '.ar-bt button{font:600 18px var(--body);padding:5px 10px;border:3px solid var(--ink);background:var(--paper);color:var(--ink);cursor:pointer}'+
 '.ar-bt button.on{background:var(--ink);color:var(--paper)}'+
 '.ar-panel{border:3px solid var(--ink);background:var(--paper);padding:14px 18px;display:flex;flex-direction:column;gap:8px;min-height:0}'+
 '.ar-lab{font:600 18px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}'+
 '.ar-bar{position:relative;height:34px;background:var(--paper-alt);border:2px solid var(--rule-soft)}'+
 '.ar-bar i{position:absolute;left:0;top:0;bottom:0;transition:width .45s ease}'+
 '.ar-num{font:700 30px var(--mono);margin:0}'+
 '.ar-f{display:flex;justify-content:space-between;align-items:center;gap:10px;border:3px solid var(--rule-soft);padding:6px 12px;font-size:22px;transition:all .3s}'+
 '.ar-f b{font:600 21px var(--mono)} .ar-f span{font-size:19px;color:var(--muted)}'+
 '.ar-f.new{border-color:var(--mintb);background:var(--accent-tint)}'+
 '.ar-f.repl{border-color:var(--sun);background:var(--sun-soft)}'+
 '.ar-f.old{border-color:var(--coral);background:var(--pink-soft)}'+
 '.ar-f.del{opacity:.35;text-decoration:line-through}'+
 '.ar-f.skip{opacity:.35;border-style:dashed}'+
 '.ar-tag{font:700 17px var(--body)!important;color:var(--ink)!important;text-transform:uppercase;letter-spacing:.05em}'+
 '.ar-sum{border-left:8px solid var(--accent);background:var(--paper-alt);padding:10px 16px;font-size:24px;margin:0}'+
'</style>';

/* Ступінь стиснення: виміряно на 7 текстових файлах з папки «Архів» (LZMA, 335 КБ). Кроки — рівні по черзі, останній — висновок */
W.levels={html:()=>AR_CSS+'<div class="ar-bt lv-b"></div>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">'+
   '<div class="ar-panel"><div class="ar-lab">Розмір архіву</div><div class="ar-bar"><i class="lv-s" style="background:var(--accent)"></i></div><p class="ar-num lv-sn"></p><p class="small lv-k" style="margin:0"></p></div>'+
   '<div class="ar-panel"><div class="ar-lab">Час архівування</div><div class="ar-bar"><i class="lv-t" style="background:var(--coral)"></i></div><p class="ar-num lv-tn"></p><p class="small" style="margin:0">чим довша смуга, тим довше чекати</p></div></div>'+
  '<p class="ar-sum lv-c" style="margin-top:18px"></p>',
 mount(r,d,api){
  const L=[['Без стиснення',335,1,'файли просто складено в один архів'],['Найшвидше',136,29,''],['Швидке',132,43,''],['Нормальне',125,98,'стоїть за замовчуванням'],['Максимальне',125,117,''],['Ультра',125,129,'']];
  const B=r.querySelector('.lv-b');
  L.forEach((l,i)=>{const b=el('button','',l[0]);b.onclick=()=>api.setStep(i);B.append(b)});
  const k=v=>(335/v).toFixed(2).replace('.',',');
  function step(i){const j=Math.min(i,L.length-1),[n,s,t,x]=L[j];
   [...B.children].forEach((e,q)=>e.classList.toggle('on',q===j&&i<L.length));
   r.querySelector('.lv-s').style.width=(s/335*100)+'%';r.querySelector('.lv-t').style.width=(t/129*100)+'%';
   r.querySelector('.lv-sn').textContent=s+' КБ';r.querySelector('.lv-tn').textContent=j?t+' мс':'≈ 0 мс';
   r.querySelector('.lv-k').innerHTML='коефіцієнт стиснення <b>'+k(s)+'</b>'+(x?' · '+x:'');
   r.querySelector('.lv-c').innerHTML=i>=L.length?'<b>Висновок.</b> Вищий ступінь — менший архів, але архівування триває довше. Після «Нормального» виграш майже зникає.':
    'Сім текстових файлів, <b>335 КБ</b>. Ступінь: <b>'+n+'</b>'}
  return{count:L.length,step}}};

/* Режим оновлення: що станеться з архівом. Крок 0 — вихідний стан, далі 4 режими */
W.updmode={html:()=>AR_CSS+'<div class="ar-bt um-b"></div>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">'+
   '<div class="ar-panel"><div class="ar-lab">Додаємо (виділені файли)</div><div class="um-a" style="display:flex;flex-direction:column;gap:6px"></div></div>'+
   '<div class="ar-panel"><div class="ar-lab um-h">В архіві</div><div class="um-r" style="display:flex;flex-direction:column;gap:6px"></div></div></div>'+
  '<p class="ar-sum um-c" style="margin-top:16px"></p>',
 mount(r,d,api){
  const ADD=[['звіт.docx','ср'],['план.txt','вт'],['нове.xlsx','ср']];
  const ARC=[['звіт.docx','пн'],['план.txt','чт'],['фото.jpg','пн']];
  /* [ім’я, день, клас, позначка] */
  const M=[
   ['Додати та замінити файли',[['звіт.docx','ср','repl','замінено'],['план.txt','вт','old','замінено старішим!'],['фото.jpg','пн','',''],['нове.xlsx','ср','new','додано']],
    'Усі виділені файли потрапляють в архів. Однойменні <b>замінюються</b>, навіть якщо в архіві новіша версія.'],
   ['Оновити та замінити файли',[['звіт.docx','ср','repl','оновлено'],['план.txt','чт','','в архіві новіший'],['фото.jpg','пн','',''],['нове.xlsx','ср','new','додано']],
    'Однойменні файли замінюються лише <b>новішими</b>. Нові файли <b>додаються</b>.'],
   ['Оновити існуючі файли',[['звіт.docx','ср','repl','оновлено'],['план.txt','чт','','в архіві новіший'],['фото.jpg','пн','',''],['нове.xlsx','ср','skip','не додано']],
    'Оновлюються лише файли, які <b>вже є</b> в архіві, і лише на новіші. Нових файлів не додає.'],
   ['Синхронізувати файли',[['звіт.docx','ср','repl','оновлено'],['план.txt','чт','','в архіві новіший'],['фото.jpg','пн','del','видалено'],['нове.xlsx','ср','new','додано']],
    'Архів стає <b>копією виділеного</b>: відсутні файли додаються, а зайві (фото.jpg) <b>видаляються</b>.']];
  const B=r.querySelector('.um-b');
  M.forEach((m,i)=>{const b=el('button','',m[0]);b.onclick=()=>api.setStep(i+1);B.append(b)});
  const row=(n,dy,c,t)=>'<div class="ar-f '+c+'"><b>'+n+'</b><span>'+(t?'<span class="ar-tag">'+t+'</span> · ':'')+'змінено: '+dy+'</span></div>';
  r.querySelector('.um-a').innerHTML=ADD.map(f=>row(f[0],f[1],'','')).join('');
  function step(i){[...B.children].forEach((e,q)=>e.classList.toggle('on',q===i-1));
   const R=r.querySelector('.um-r'),C=r.querySelector('.um-c'),H=r.querySelector('.um-h');
   if(!i){H.textContent='В архіві (до додавання)';R.innerHTML=ARC.map(f=>row(f[0],f[1],'','')).join('');
    C.innerHTML='Дні — дата зміни файлу (пн → нд). Що буде з архівом у кожному <b>Режимі оновлення</b>?';return}
   const m=M[i-1];H.textContent='В архіві після: '+m[0];R.innerHTML=m[1].map(f=>row(...f)).join('');C.innerHTML=m[2]}
  return{count:M.length,step}}};
}
{
/* sections/8-r2/widgets/backup.js */
/* 8 клас, урок 7: резервне копіювання. Віджети керуються → (кроки), клацання — додатково. */
const BK_CSS='<style>'+
 '.bk-row{display:flex;align-items:center;gap:12px;padding:3px 10px;font-size:22px;border-left:6px solid transparent;transition:opacity .2s}'+
 '.bk-row.cur{background:var(--sun-soft);border-left-color:var(--sun);font-weight:700}'+
 '.bk-row.hid{opacity:0}'+
 '.bk-ico{flex:none;width:30px;height:22px;border:3px solid var(--ink);border-top-width:7px;background:var(--paper)}'+
 '.bk-panel{border:3px solid var(--ink);background:var(--paper);padding:16px 20px;display:flex;flex-direction:column;gap:10px;min-height:0}'+
 '.bk-lab{font:600 18px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}'+
 '.bk-doc{background:var(--paper-alt);border-top:4px solid var(--accent);padding:12px 16px;font-size:22px;line-height:1.35}'+
 '.bk-doc p{font-size:22px;margin:0 0 6px}'+
 '.bk-ver{display:flex;justify-content:space-between;align-items:center;border:3px solid var(--rule-soft);padding:8px 14px;font-size:23px}'+
 '.bk-ver.pick{border-color:var(--ink);background:var(--sun-soft);font-weight:700}'+
 '.bk-tl{display:grid;gap:0;border-top:3px solid var(--ink)}'+
 '.bk-tl div{padding:8px 10px;font-size:21px;border-right:2px solid var(--rule-soft);color:var(--muted)}'+
 '.bk-tl div.on{color:var(--ink)} .bk-tl div.cur{background:var(--ink);color:var(--paper);font-weight:700}'+
 '.bk-bad{border-left:8px solid var(--coral);background:var(--pink-soft);padding:10px 16px;font-size:24px;font-weight:600}'+
 '.bk-good{border-left:8px solid var(--mintb);background:var(--accent-tint);padding:10px 16px;font-size:24px;font-weight:600}'+
 '.bk-cap{font-size:25px;margin:0;border-top:2px solid var(--rule-soft);padding-top:10px}'+
 '.bk-file{display:inline-block;border:3px solid var(--ink);padding:4px 12px;margin:0 8px 8px 0;font:600 21px var(--mono);background:var(--paper)}'+
 '.bk-file.new{background:var(--sun-soft)}'+
'</style>';

/* Структура папки FileHistory (мал. 2.5): → розкриває рівень за рівнем */
W.fhtree={html:()=>BK_CSS+'<div style="display:grid;grid-template-columns:1.1fr .9fr;gap:28px;flex:1;min-height:0">'+
  '<div class="bk-panel fh-t" style="gap:2px;justify-content:flex-start"></div>'+
  '<div class="bk-panel"><div class="bk-lab fh-n">Диск для копій</div><p class="fh-x" style="font-size:28px;line-height:1.35;margin:0"></p></div></div>',
 mount(r,d,api){
  const N=[[0,'FileHistory',1],[1,'Користувач',2],[2,'Ім’я комп’ютера',3],[3,'Configuration',4],[3,'Data',5],[4,'C',6],[5,'Users',7],[6,'Contacts · Desktop · Documents · Searches',8],[4,'D',6],[5,'My documents · Pidruchnik',9]];
  const X=['Після першого резервного копіювання на вибраному диску з’являється папка.',
   '<b>FileHistory</b> — «історія файлів». Тут усі резервні копії.',
   'Папка з іменем <b>облікового запису</b> користувача.',
   'Папка з таким самим іменем, як у <b>комп’ютера</b>.',
   '<b>Configuration</b> — файли <b>налаштувань</b> резервної копії.',
   '<b>Data</b> — папки й файли, які користувач <b>уключив</b> до копії.',
   '<b>C, D</b> — копії з дисків <b>C:</b> і <b>D:</b>.',
   '<b>Users</b> — копії папок, що Windows створює для <b>кожного облікового запису</b>.',
   'Копії папок <b>Контакти, Робочий стіл, Документи, Пошук</b>.',
   'Папки, які користувач <b>додав сам</b>.'];
  const Tt=r.querySelector('.fh-t');
  Tt.innerHTML=N.map((n,i)=>'<div class="bk-row" data-i="'+i+'" style="padding-left:'+(10+n[0]*34)+'px;cursor:pointer">'+(n[0]?'<span style="color:var(--muted);font-size:20px">└</span>':'')+'<span class="bk-ico"></span><span>'+n[1]+'</span></div>').join('');
  const rows=[...Tt.children];rows.forEach((e,i)=>e.onclick=()=>api.setStep(N[i][2]));
  function step(k){rows.forEach((e,i)=>{e.classList.toggle('hid',N[i][2]>k);e.classList.toggle('cur',N[i][2]===k)});
   r.querySelector('.fh-x').innerHTML=X[k];r.querySelector('.fh-n').textContent=k?k+' / 9':'Диск для копій'}
  return{count:9,step}}};

/* Версії файлу в Банку файлів: копії щогодини → видалення → відновлення */
W.versions={html:()=>BK_CSS+'<div class="bk-tl vr-tl" style="grid-template-columns:repeat(6,1fr);margin-bottom:16px"></div>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;flex:1;min-height:0">'+
  '<div class="bk-panel"><div class="bk-lab">Диск C: · Документи</div><div class="vr-doc"></div></div>'+
  '<div class="bk-panel"><div class="bk-lab">Банк файлів · зовнішній диск E:</div><div class="vr-bank" style="display:flex;flex-direction:column;gap:8px"></div></div></div>'+
  '<p class="bk-cap vr-c" style="margin-top:14px"></p>',
 mount(r,d,api){
  const P=['Вступ: що таке резервне копіювання.','Розділ 1. Банк файлів.','Розділ 2. Копії у хмарі.','Розділ 3. Контрольні точки.'];
  const TL=['9:00','10:00','11:00','11:40','11:45','12:00'];
  /* [час, абзаців у файлі (-1 = видалено), копій у банку, вибрана версія, підпис] */
  const S=[[0,1,0,-1,'Учень почав реферат. Банк файлів робить копію <b>щогодини</b>.'],
   [0,1,1,-1,'<b>9:00</b> — перша копія в Банку файлів.'],
   [1,2,2,-1,'<b>10:00</b> — ще одна копія, уже з двома абзацами.'],
   [2,3,3,-1,'<b>11:00</b> — третя версія.'],
   [3,4,3,-1,'<b>11:40</b> — дописали розділ 3. Копії ще немає!'],
   [4,-1,3,-1,'<b>11:45</b> — файл випадково <b>видалили</b> і очистили кошик.'],
   [5,-1,3,2,'Відкриваємо Банк файлів, кнопками ◀ ▶ вибираємо <b>найновішу версію</b> — 11:00.'],
   [5,3,3,2,'Кнопка <b>Відновити</b>: файл повернувся. Втрачено лише те, що написали <b>після 11:00</b>.']];
  const tl=r.querySelector('.vr-tl');tl.innerHTML=TL.map(t=>'<div>'+t+'</div>').join('');
  const doc=n=>'<div class="bk-doc"><b style="font-size:22px">Реферат.docx</b>'+P.slice(0,n).map(p=>'<p>'+p+'</p>').join('')+'</div>';
  function step(k){const [t,n,c,pick,cap]=S[k];[...tl.children].forEach((e,i)=>{e.classList.toggle('on',i<=t);e.classList.toggle('cur',i===t)});
   r.querySelector('.vr-doc').innerHTML=n<0?'<div class="bk-bad">Файл Реферат.docx видалено</div>':(k===7?'<div class="bk-good">Відновлено з копії 11:00</div>':'')+doc(n);
   r.querySelector('.vr-bank').innerHTML=c?['9:00','10:00','11:00'].slice(0,c).map((v,i)=>'<div class="bk-ver'+(i===pick?' pick':'')+'"><span>Реферат.docx</span><b class="mono">'+v+' · '+(i+1)+' абз.</b></div>').join(''):'<p class="small" style="margin:0">Копій ще немає</p>';
   r.querySelector('.vr-c').innerHTML=cap}
  return{count:7,step}}};

/* Контрольна точка відновлення: повертає систему, але не чіпає файли користувача */
W.rpoint={html:()=>BK_CSS+'<div class="bk-tl rp-tl" style="grid-template-columns:repeat(4,1fr);margin-bottom:16px"></div>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;flex:1;min-height:0">'+
  '<div class="bk-panel"><div class="bk-lab">Система: налаштування і програми</div><div class="rp-s"></div></div>'+
  '<div class="bk-panel"><div class="bk-lab">Файли користувача</div><div class="rp-f"></div></div></div>'+
  '<p class="bk-cap rp-c" style="margin-top:14px"></p>',
 mount(r,d,api){
  const TL=['Понеділок','Вівторок','Середа','Четвер'];
  const ok='<div class="bk-good">Працює швидко, без помилок</div>',bad='<div class="bk-bad">Повільно, програми «зависають»</div>';
  const pt='<div class="bk-ver pick" style="margin-top:10px"><span>Контрольна точка</span><b class="mono">Пн</b></div>';
  const prog='<div class="bk-ver" style="margin-top:10px"><span>Програма SuperBoost</span><b style="color:var(--negative)">нова</b></div>';
  const F=(a,nw)=>a.map(f=>'<span class="bk-file'+(f===nw?' new':'')+'">'+f+'</span>').join('');
  /* [день, система, файли, новий файл, підпис] */
  const S=[[0,ok,['Реферат.docx'],'','Усе гаразд. У системі є файл користувача.'],
   [0,ok+pt,['Реферат.docx'],'','<b>Пн</b> — створюємо <b>контрольну точку</b>: знімок налаштувань системи.'],
   [1,ok+pt,['Реферат.docx','Фото.jpg'],'Фото.jpg','<b>Вт</b> — зберегли нове фото.'],
   [2,bad+pt+prog,['Реферат.docx','Фото.jpg'],'','<b>Ср</b> — встановили сумнівну програму. Система почала гальмувати.'],
   [2,bad+pt+prog,['Реферат.docx','Фото.jpg','Малюнок.png'],'Малюнок.png','<b>Ср</b> — намалювали й зберегли малюнок.'],
   [3,ok+pt,['Реферат.docx','Фото.jpg','Малюнок.png'],'','<b>Чт</b> — <b>Відновлення системи</b> до точки Пн. Програму видалено, налаштування — як у понеділок.'],
   [3,ok+pt,['Реферат.docx','Фото.jpg','Малюнок.png'],'','Файли, створені <b>до і після</b> точки, <b>збереглися</b>. Але точка <b>не містить</b> копій файлів!']];
  const tl=r.querySelector('.rp-tl');tl.innerHTML=TL.map(t=>'<div>'+t+'</div>').join('');
  function step(k){const [t,s,f,nw,cap]=S[k];[...tl.children].forEach((e,i)=>{e.classList.toggle('on',i<=t);e.classList.toggle('cur',i===t)});
   r.querySelector('.rp-s').innerHTML=s;r.querySelector('.rp-f').innerHTML=F(f,nw)+(k===6?'<div class="bk-good" style="margin-top:8px">Усі файли на місці</div>':'');
   r.querySelector('.rp-c').innerHTML=cap}
  return{count:6,step}}};
}
{
/* sections/8-r2/widgets/compress.js */
/* 8 клас, розділ 2: стиснення даних */

/* HELLO WORLD: ASCII проти азбуки Морзе. → додає по літері, останній крок — висновок */
W.hello={html:()=>'<div style="display:grid;grid-template-columns:1.25fr .75fr;gap:28px;flex:1;min-height:0">'+
  '<div class="hw-t" style="display:grid;grid-template-columns:60px 1fr 1fr;gap:4px 14px;align-content:start;font-size:24px"></div>'+
  '<div style="display:flex;flex-direction:column;gap:16px"><div class="box"><p class="small">Код ASCII, бітів</p><div class="count hw-a" style="color:var(--vio)">0</div></div>'+
  '<div class="box mint"><p class="small">Азбука Морзе, сигналів</p><div class="count hw-m">0</div></div><div class="hw-c box sun" style="visibility:hidden"><p><b>80 : 32 = 2,5</b> — код Морзе більш ніж <b>удвічі коротший</b>.</p></div></div></div>',
 mount(r){const A={H:'01001000',E:'01000101',L:'01001100',O:'01001111',W:'01010111',R:'01010010',D:'01000100'},
  M={H:'....',E:'.',L:'.-..',O:'---',W:'.--',R:'.-.',D:'-..'},w='HELLOWORLD'.split('');
  const sig=c=>'<span class="sig">'+[...c].map(x=>x==='.'?'<span class="dot"></span>':'<span class="dash"></span>').join('')+'</span>';
  const T=r.querySelector('.hw-t');
  function draw(n){let h='<b class="small" style="color:var(--muted)"></b><b class="small" style="color:var(--vio)">ASCII</b><b class="small" style="color:var(--mint)">Морзе</b>';
   w.forEach((c,i)=>{const on=i<n,cur=i===n-1;const bg=cur?'var(--sun-soft)':'transparent';
    h+='<b style="font:800 28px var(--display);background:'+bg+';border-radius:8px;text-align:center">'+c+'</b>'+
     '<span class="mono" style="background:'+bg+';border-radius:8px;padding:0 8px;opacity:'+(on?1:.15)+'">'+A[c].slice(0,4)+' '+A[c].slice(4)+'</span>'+
     '<span style="background:'+bg+';border-radius:8px;padding:0 8px;display:flex;align-items:center;opacity:'+(on?1:.15)+'">'+sig(M[c])+'</span>'});
   T.innerHTML=h;const k=Math.min(n,10);
   r.querySelector('.hw-a').textContent=k*8;r.querySelector('.hw-m').textContent=w.slice(0,k).reduce((s,c)=>s+M[c].length,0);
   r.querySelector('.hw-c').style.visibility=n>10?'visible':'hidden'}
  return{count:11,step:draw}}};

/* Стиснення без втрат і з втратою: фото і текст. Пробіл/клік змінює ступінь стиснення */
W.lossy={html:()=>'<div class="tabs ls-t" style="margin-bottom:12px"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:26px;flex:1;min-height:0">'+
  '<div class="box" style="display:flex;flex-direction:column;gap:10px;align-items:center"><b>Фото</b><canvas class="ls-c" width="400" height="240" style="width:100%;max-width:400px;border-radius:12px;image-rendering:pixelated"></canvas><p class="ls-pv" style="font-size:24px;margin:0"></p></div>'+
  '<div class="box" style="display:flex;flex-direction:column;gap:10px"><b>Текст</b><p class="ls-tx" style="font:500 30px/1.4 var(--serif,serif);min-height:130px;margin:0;background:var(--paper);border-radius:12px;padding:12px 16px"></p><p class="ls-tv" style="font-size:24px;margin:0"></p></div></div>'+
  '<p class="ls-s" style="margin-top:12px;font-size:26px;text-align:center"></p>',
 mount(r,d,api){const L=[['Оригінал',1,'Ціна квитка: 1250 грн. Потяг о 7:45.','100 КБ'],['Без втрат',1,'Ціна квитка: 1250 грн. Потяг о 7:45.','60 КБ'],['З втратою',6,'Цін квтк: 120 гр. Птяг о 7:4.','20 КБ'],['Сильна втрата',16,'Цн квт 10 г Пт 74','6 КБ']];
  const C=r.querySelector('.ls-c'),x=C.getContext('2d'),src=document.createElement('canvas');src.width=400;src.height=240;const s=src.getContext('2d');
  let g=s.createLinearGradient(0,0,0,240);g.addColorStop(0,'#FF9A5A');g.addColorStop(.55,'#FFD27A');g.addColorStop(1,'#7BC8F0');s.fillStyle=g;s.fillRect(0,0,400,240);
  s.fillStyle='#FFF4B0';s.beginPath();s.arc(280,105,38,0,7);s.fill();
  s.fillStyle='#5B4A8A';s.beginPath();s.moveTo(0,240);s.lineTo(0,170);s.lineTo(90,95);s.lineTo(170,165);s.lineTo(240,120);s.lineTo(330,180);s.lineTo(400,140);s.lineTo(400,240);s.fill();
  s.fillStyle='#2E7D5B';s.beginPath();s.moveTo(0,240);s.lineTo(0,205);s.lineTo(120,180);s.lineTo(250,210);s.lineTo(400,190);s.lineTo(400,240);s.fill();
  const T=r.querySelector('.ls-t');L.forEach((l,i)=>{const b=el('button','',l[0]);b.onclick=()=>api.setStep(i);T.append(b)});
  function step(i){const [n,b,t,sz]=L[i];[...T.children].forEach((e,k)=>e.classList.toggle('on',k===i));
   x.imageSmoothingEnabled=false;if(b===1)x.drawImage(src,0,0);else{const t2=document.createElement('canvas');t2.width=400/b;t2.height=240/b;const q=t2.getContext('2d');q.drawImage(src,0,0,t2.width,t2.height);x.clearRect(0,0,400,240);x.drawImage(t2,0,0,400,240)}
   r.querySelector('.ls-tx').textContent=t;
   r.querySelector('.ls-pv').innerHTML=i<2?'✓ без змін':i===2?'✓ майже не помітно':'видно «квадрати», але сюжет зрозумілий';
   r.querySelector('.ls-tv').innerHTML=i<2?'✓ без змін':'✕ зміст зіпсовано';
   r.querySelector('.ls-s').innerHTML='Розмір файлу: <b class="mono">'+sz+'</b>'+(i===1?' · дані відновлюються <b>повністю</b>':i>1?' · частину даних <b>втрачено назавжди</b>':'')}
  return{count:3,step}}};

/* RLE: малюнок 24×12, Пробіл/клік кодує рядок за рядком. Схема підручника: 1 біт на колір + 4 біти на кожну цифру кількості */
W.rle={html:()=>'<div style="display:grid;grid-template-columns:auto 1fr;gap:28px;flex:1;min-height:0;align-items:start">'+
  '<div><div class="rl-g" style="display:grid;grid-template-columns:repeat(24,18px);gap:1px;background:var(--line);border:1px solid var(--line)"></div><p class="small" style="margin-top:10px">⬜ білий = <b class="mono">0</b> · ⬛ чорний = <b class="mono">1</b></p></div>'+
  '<div style="display:flex;flex-direction:column;gap:10px;min-width:0"><div class="rl-l" style="font-size:22px;line-height:1.45;min-height:200px"></div><div class="box sun rl-s"></div></div></div>',
 mount(r){const P=['........................','........................','.....###......###.......','....#####....#####......','...#######..#######.....','...################.....','....##############......','.....############.......','.......########.........','.........####...........','..........##............','........................'];
  const G=r.querySelector('.rl-g'),Ls=r.querySelector('.rl-l'),S=r.querySelector('.rl-s');
  const runs=row=>{const o=[];let c=row[0],n=0;for(const ch of row){if(ch===c)n++;else{o.push([c,n]);c=ch;n=1}}o.push([c,n]);return o};
  const bits=rs=>rs.reduce((s,[c,n])=>s+1+4*String(n).length,0);
  const code=rs=>rs.map(([c,n])=>(c==='#'?1:0)+' '+n).join(' · ');
  function step(k){G.innerHTML=P.map((row,y)=>[...row].map(ch=>'<div style="width:18px;height:18px;background:'+(ch==='#'?'#1D1640':'#fff')+';'+(y===k-1?'box-shadow:inset 0 0 0 2px var(--pink)':'')+'"></div>').join('')).join('');
   const done=Math.min(k,P.length);const from=Math.max(0,done-5);
   Ls.innerHTML=P.slice(from,done).map((row,i)=>{const rs=runs(row),b=bits(rs);const y=from+i;return '<div style="'+(y===k-1?'background:var(--pink-soft);border-radius:8px;':'')+'padding:0 8px;display:flex;justify-content:space-between;gap:12px"><span><span style="color:var(--muted)">'+(y+1)+')</span> <span class="mono">'+code(rs)+'</span></span><b style="white-space:nowrap;color:'+(b<24?'var(--mint)':'var(--pink)')+'">'+b+' біт</b></div>'}).join('')||'<p class="small" style="font-family:var(--body)">Пробіл або клік — кодуємо рядки.</p>';
   const tot=P.slice(0,done).reduce((s,row)=>s+bits(runs(row)),0);
   S.innerHTML='<p style="margin:0;font-size:24px">Рядків: <b>'+done+'</b> · було <b>'+done*24+' біт</b> · RLE <b>'+tot+' біт</b></p>'+(k>P.length?'<p style="margin:6px 0 0;font-size:24px">Менше в <b>'+(P.length*24/tot).toFixed(1).replace('.',',')+'</b> раза. Рядки з «смужками» — довші!</p>':'')}
  return{count:P.length+1,step}}};
}
{
/* sections/9-r2/widgets/layout.js */
/* Віджети уроку 9-9: розриви розділів, стовпці, колонтитули.
   Кожен віджет крокує пробілом або кліком: mount повертає {count, step}. Кольори — лише змінними теми. */
const W99CSS='<style>'+
 '.w99{display:grid;gap:24px;flex:1;min-height:0;align-items:start}'+
 '.w99 .act{border:3px solid var(--ink);background:var(--paper-alt);padding:14px 18px}'+
 '.w99 .act b.k{display:block;font:600 17px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}'+
 '.w99 .act p{font-size:24px;line-height:1.35;margin:0}'+
 '.w99 .tb{display:flex;gap:8px;flex-wrap:wrap}'+
 '.w99 .tb button{border:3px solid var(--ink);background:var(--paper);color:var(--ink);font:700 18px var(--body);padding:5px 11px;cursor:pointer}'+
 '.w99 .tb button.on{background:var(--accent);color:var(--on-accent)}'+
 '.w99 .row{display:flex;gap:22px;align-items:flex-end;justify-content:center}'+
 '.w99 .pgw{display:flex;flex-direction:column;align-items:center;gap:8px}'+
 '.w99 .pg{position:relative;background:var(--paper);border:3px solid var(--ink);box-shadow:6px 6px 0 var(--rule-soft);transition:width .4s,height .4s;overflow:hidden}'+
 '.w99 .cap{font:600 21px var(--body);color:var(--muted);text-align:center;line-height:1.15}'+
 '.w99 .cap.on{color:var(--accent)}'+
 '.w99 .ln{height:7px;background:var(--rule-soft);margin:0 0 7px}'+
 '.w99 .hd{display:flex;align-items:center;gap:6px;margin:4px 0 8px}'+
 '.w99 .hd i{font:800 18px var(--body);font-style:normal;background:var(--ink);color:var(--paper);min-width:24px;text-align:center;line-height:24px}'+
 '.w99 .hd s{flex:1;height:10px;background:var(--ink);text-decoration:none}'+
 '.w99 .brk{height:0;border-top:7px double var(--accent);margin:10px 0}'+
 '.w99 .brk.brkc{border-top:5px dotted var(--accent)}'+
 '.w99 .brk.hi{box-shadow:0 0 0 6px var(--sun);background:none}'+
 '.w99 .tbl{display:grid;gap:3px;margin:4px 0 8px}'+
 '.w99 .tbl span{height:14px;background:var(--sky-soft);border:2px solid var(--sky)}'+
 '.w99 .over{outline:3px dashed var(--negative);outline-offset:2px}'+
 '.w99 .hi{background:var(--sun);color:var(--on-bright);box-shadow:0 0 0 3px var(--sun)}'+
 '.w99 .flash{animation:w99f 1.2s}'+
 '@keyframes w99f{0%,60%{box-shadow:0 0 0 6px var(--sun)}100%{box-shadow:6px 6px 0 var(--rule-soft)}}'+
 '.w99 .doc{font:500 21px/1.36 var(--serif);text-align:justify;hyphens:auto}'+
 '.w99 .doc p{margin:0 0 8px}'+
 '.w99 .ruler{position:relative;height:28px;background:var(--rule-soft);border:2px solid var(--ink);margin-bottom:10px}'+
 '.w99 .ruler .seg{position:absolute;top:0;bottom:0;background:var(--paper);transition:left .4s,width .4s}'+
 '.w99 .ruler .gap{position:absolute;top:0;bottom:0;background:var(--muted);opacity:.55;transition:left .4s,width .4s}'+
 '.w99 .ruler .gap.hi{opacity:1;background:var(--sun)}'+
 '.w99 .ruler .mk{position:absolute;top:2px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid var(--ink);transform:translateX(-7px)}'+
 '.w99 .cn{display:grid;gap:0;transition:all .4s}'+
 '.w99 .cn>div{min-width:0}'+
 '.w99 .doc div,.w99 .doc p{font-size:24px;line-height:1.35}'+
 '.w99 .sel{background:var(--accent-tint)}'+
 '.w99 .hf{position:absolute;left:10px;right:10px;height:30px;font:600 17px var(--body);display:flex;align-items:center;white-space:nowrap;overflow:hidden;color:var(--ink);transition:opacity .3s}'+
 '.w99 .hf.dim{opacity:.45}'+
 '.w99 .hf.edit{outline:2px dashed var(--accent);outline-offset:1px}'+
 '.w99 .hf.top{top:6px}.w99 .hf.bot{bottom:6px}'+
 '.w99 .body{position:absolute;left:14px;right:14px;top:44px;bottom:44px;transition:opacity .3s}'+
 '.w99 .body.dim{opacity:.35}'+
 '.w99 .chk{font:600 20px var(--body);display:flex;flex-direction:column;gap:6px}'+
 '.w99 .chk span:before{content:"☐ ";color:var(--muted)}'+
 '.w99 .chk span.y:before{content:"☑ ";color:var(--accent)}'+
 '</style>';

/* ===== Розриви розділів: книжкові/альбомні сторінки, видалення розриву ===== */
W.secbrk={html:()=>W99CSS+'<div class="w99" style="grid-template-columns:1fr 380px"><div class="row" id="sbR" style="min-height:330px"></div><div style="display:flex;flex-direction:column;gap:14px"><div class="act"><b class="k" id="sbK"></b><p id="sbA"></p></div><div class="tb" id="sbT"></div><p class="small" style="margin:0">Подвійна лінія — <b>Розрив розділу</b> «Наступна сторінка», пунктир — «Неперервно». Обидва видно з увімкненим ¶.</p></div></div>',
 mount(r,d,api){
  /* сторінка: {b:[блоки], o:'p'|'l', s:номер розділу, m:поля вузькі}; блоки: h1..h3 — заголовок пункту, l — рядок, t — таблиця, x — розрив, xd — неперервний розрив, c — текст у 2 стовпці */
  const S=[
   {k:'Один розділ',a:'Розривів немає — весь документ <b>один розділ</b>: усі сторінки книжкові. Широка таблиця з пункту 2 не вміщується.',
    p:[{b:['h1','l','l','l','l','l','h2','l','l'],o:'p',s:1},{b:['t','l','l','h3','l','l','l'],o:'p',s:1,over:1},{b:['l','l','l','l'],o:'p',s:1}]},
   {k:'Розриви ⇒ Наступна сторінка',a:'Курсор перед пунктом 2 ⇒ <b>Макет ⇒ Розриви ⇒ Наступна сторінка</b>. Пункт 2 почався з нової сторінки — це вже <b>розділ 2</b>.',
    p:[{b:['h1','l','l','l','l','l','x'],o:'p',s:1},{b:['h2','l','l','t','l','l','h3','l'],o:'p',s:2,over:1,f:1},{b:['l','l','l','l','l'],o:'p',s:2}]},
   {k:'Ще один розрив',a:'Те саме перед пунктом 3. Тепер у документі <b>3 розділи</b>, і в кожного можуть бути свої параметри сторінки.',
    p:[{b:['h1','l','l','l','l','l','x'],o:'p',s:1},{b:['h2','l','l','t','l','l','x'],o:'p',s:2,over:1},{b:['h3','l','l','l','l','l','l'],o:'p',s:3,f:1}]},
   {k:'Орієнтація ⇒ Альбомна',a:'Курсор у розділі 2 ⇒ <b>Макет ⇒ Орієнтація ⇒ Альбомна</b>. Змінилася лише ця сторінка — таблиця вмістилася.',
    p:[{b:['h1','l','l','l','l','l','x'],o:'p',s:1},{b:['h2','l','t','l','x'],o:'l',s:2,f:1},{b:['h3','l','l','l','l','l','l'],o:'p',s:3}]},
   {k:'Поля для розділу',a:'Для розділу 2 — <b>Макет ⇒ Поля</b> по 1 см. Інші розділи зберегли свої поля.',
    p:[{b:['h1','l','l','l','l','l','x'],o:'p',s:1},{b:['h2','l','t','l','x'],o:'l',s:2,m:1,f:1},{b:['h3','l','l','l','l','l','l'],o:'p',s:3}]},
   {k:'Розриви ⇒ Неперервно',a:'Розрив <b>Неперервно</b> починає новий розділ на <b>тій самій</b> сторінці. Так у пункті 3 частину тексту розміщено у два стовпці.',
    p:[{b:['h1','l','l','l','l','l','x'],o:'p',s:1},{b:['h2','l','t','l','x'],o:'l',s:2,m:1},{b:['h3','l','l','xd','c','xd','l'],o:'p',s:'3–5',f:1}]},
   {k:'Видалили розрив',a:'Видалили розрив після пункту 1: текст <b>над</b> ним став частиною <b>наступного</b> розділу — і сторінка теж стала альбомною!',
    p:[{b:['h1','l','l','l','l','h2','l','t','l','x'],o:'l',s:1,m:1,f:1,warn:1},{b:['h3','l','l','xd','c','xd','l'],o:'p',s:'2–4'}]}];
  const R_=r.querySelector('#sbR'),T=r.querySelector('#sbT');
  [['1 розділ',0],['Розриви',2],['Альбомна',3],['Неперервно',5],['Видалити',6]].forEach(([t,i])=>{const b=el('button','',t);b.dataset.i=i;b.onclick=()=>api.setStep(i);T.append(b)});
  const blk=(x,o)=>{if(x[0]==='h')return'<div class="hd"><i>'+x[1]+'</i><s></s></div>';
   if(x==='l')return'<div class="ln"></div>';
   if(x==='x')return'<div class="brk"></div>';
   if(x==='xd')return'<div class="brk brkc"></div>';
   if(x==='c')return'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+'<div><div class="ln"></div><div class="ln"></div><div class="ln"></div></div>'.repeat(2)+'</div>';
   if(x==='t')return'<div class="tbl" style="grid-template-columns:repeat(6,1fr);width:'+(o==='p'?'150%':'100%')+'">'+'<span></span>'.repeat(12)+'</div>';return''};
  function step(i){const s=S[i];
   R_.innerHTML=s.p.map(p=>{const L=p.o==='l',w=L?300:212,h=L?212:300,pad=p.m?'10px 12px':'22px 26px';
     return'<div class="pgw"><div class="pg'+(p.f?' flash':'')+'" style="width:'+w+'px;height:'+h+'px;padding:'+pad+(p.warn?';outline:4px dashed var(--negative);outline-offset:4px':'')+'"><div'+(p.over?' class="over"':'')+'>'+p.b.map(x=>blk(x,p.o)).join('')+'</div></div>'+
       '<div class="cap'+(p.f?' on':'')+'">Розділ '+p.s+'<br>'+(L?'альбомна':'книжкова')+'</div></div>'}).join('');
   r.querySelector('#sbK').textContent=s.k;r.querySelector('#sbA').innerHTML=s.a;
   T.querySelectorAll('button').forEach(b=>b.classList.toggle('on',+b.dataset.i===i))}
  return{count:S.length-1,step}}};

/* ===== Стовпці: кількість, розділювач, різна ширина, лінійка ===== */
W.colmn={html:()=>W99CSS+'<div class="w99" style="grid-template-columns:1fr 360px"><div class="pg" style="padding:16px 22px 18px;width:100%;height:470px"><div class="ruler" id="cmR"></div><div class="doc" id="cmD"></div></div><div style="display:flex;flex-direction:column;gap:14px"><div class="act"><b class="k" id="cmK"></b><p id="cmA"></p></div><div class="act" style="background:var(--paper)"><b class="k">Вікно «Стовпці»</b><div class="chk" id="cmC"></div></div><div class="tb" id="cmT"></div></div></div>',
 mount(r,d,api){
  const P1='Газети друкують текст у вузьких стовпцях: короткий рядок легше читати.';
  const P2='У Word у стовпцях можна розмістити весь документ або лише фрагмент. Word сам розподіляє текст: коли перший стовпець заповнено, рядки переходять у наступний. Ширину стовпців і проміжок між ними змінюють у вікні «Стовпці» або маркерами на лінійці.';
  const P3='Після фрагмента текст знову йде на всю ширину.';
  /* n — кількість, w — частки ширини, g — проміжок (у частках), sep — розділювач, sel — виділення, brk — неперервні розриви */
  const S=[
   {k:'Один стовпець',a:'Звичайний текст: <b>один стовпець</b> на всю ширину сторінки. На лінійці — лише маркери абзацу.',c:{n:1}},
   {k:'Виділили фрагмент',a:'Виділяємо фрагмент, який хочемо розмістити в стовпцях, — другий абзац.',c:{n:1,sel:1}},
   {k:'Стовпці ⇒ Два',a:'<b>Макет ⇒ Стовпці ⇒ Два</b>. Над і під фрагментом Word сам вставив <b>Розрив розділу (на поточній сторінці)</b>.',c:{n:2,w:[1,1],g:.08,brk:1}},
   {k:'Стовпці ⇒ Три',a:'Три стовпці: рядки коротші, текст «перетікає» зі стовпця в стовпець.',c:{n:3,w:[1,1,1],g:.06,brk:1}},
   {k:'Роздільник',a:'У вікні <b>Стовпці</b> поставили позначку <b>Роздільник</b> — між стовпцями з’явилися вертикальні лінії.',c:{n:3,w:[1,1,1],g:.06,sep:1,brk:1}},
   {k:'Різна ширина',a:'Зняли <b>Стовпці однакової ширини</b>: вузький стовпець ліворуч і широкий праворуч (шаблон <b>Ліворуч</b>).',c:{n:2,w:[1,2.2],g:.06,sep:1,brk:1}},
   {k:'Маркери на лінійці',a:'Перетягнули маркери меж стовпців на лінійці — <b>проміжок</b> між стовпцями збільшився.',c:{n:2,w:[1,2.2],g:.12,sep:1,brk:1,gh:1}},
   {k:'Стовпці ⇒ Один',a:'Скасували стовпці: фрагмент знову в один стовпець. Розриви розділів <b>лишилися</b> — їх бажано видалити.',c:{n:1,brk:1,bh:1}}];
  const R_=r.querySelector('#cmR'),D=r.querySelector('#cmD'),C=r.querySelector('#cmC'),T=r.querySelector('#cmT');
  [['Один',0],['Два',2],['Три',3],['Ліворуч',5],['Лінійка',6]].forEach(([t,i])=>{const b=el('button','',t);b.dataset.i=i;b.onclick=()=>api.setStep(i);T.append(b)});
  const words=P2.split(' ');
  function cols(c){if(c.n===1)return'<p'+(c.sel?' class="sel"':'')+'>'+P2+'</p>';
   const tot=c.w.reduce((a,b)=>a+b,0),gap=Math.round(c.g*100)+'%';
   if(c.n===3||c.w[0]===c.w[1])return'<div style="column-count:'+c.n+';column-gap:'+gap+';column-rule:'+(c.sep?'3px solid var(--ink)':'0 solid transparent')+';margin-bottom:8px">'+P2+'</div>';
   /* різна ширина: ділимо текст пропорційно ширині */
   const cut=Math.round(words.length*c.w[0]/tot),a=words.slice(0,cut).join(' '),b=words.slice(cut).join(' ');
   return'<div class="cn" style="grid-template-columns:'+c.w[0]+'fr '+c.w[1]+'fr;column-gap:'+gap+';margin-bottom:8px"><div style="text-align:left;hyphens:auto">'+a+'</div><div style="'+(c.sep?'border-left:3px solid var(--ink);padding-left:12px;margin-left:-15px':'')+'">'+b+'</div></div>'}
  function ruler(c){let h='';const L=0,Wd=100;
   if(c.n===1){h='<div class="seg" style="left:0;width:100%"></div><div class="mk" style="left:0%"></div><div class="mk" style="left:100%"></div>';return h}
   const tot=c.w.reduce((a,b)=>a+b,0),gTot=c.g*(c.n-1),avail=1-gTot;let x=0;
   c.w.forEach((w,k)=>{const ww=w/tot*avail*100;h+='<div class="seg" style="left:'+x+'%;width:'+ww+'%"></div>';x+=ww;
     if(k<c.n-1){h+='<div class="gap'+(c.gh?' hi':'')+'" style="left:'+x+'%;width:'+(c.g*100)+'%"></div>';x+=c.g*100}});
   h+='<div class="mk" style="left:0%"></div>';return h}
  function step(i){const s=S[i],c=s.c;
   const br=c.brk?'<div class="brk brkc'+(c.bh?' hi':'')+'"></div>':'';
   D.innerHTML='<p>'+P1+'</p>'+br+cols(c)+br+'<p>'+P3+'</p>';
   R_.innerHTML=ruler(c);
   C.innerHTML='<span class="y">Кількість стовпців: <b>'+c.n+'</b></span><span class="'+(c.n>1&&c.w&&c.w[0]===c.w[1]||c.n===3?'y':'')+'">Стовпці однакової ширини</span><span class="'+(c.sep?'y':'')+'">Роздільник</span>';
   r.querySelector('#cmK').textContent=s.k;r.querySelector('#cmA').innerHTML=s.a;
   T.querySelectorAll('button').forEach(b=>b.classList.toggle('on',+b.dataset.i===i))}
  return{count:S.length-1,step}}};

/* ===== Колонтитули: на всіх сторінках, номери, перша сторінка, різні для розділів ===== */
W.hdft={html:()=>W99CSS+'<div class="w99" style="grid-template-columns:1fr 360px"><div class="row" id="hfR" style="min-height:400px"></div><div style="display:flex;flex-direction:column;gap:14px"><div class="act"><b class="k" id="hfK"></b><p id="hfA"></p></div><div class="act" style="background:var(--paper)"><b class="k">Вкладка «Колонтитули»</b><div class="chk" id="hfC"></div></div><div class="tb" id="hfT"></div></div></div>',
 mount(r,d,api){
  const HD='Безпека в мережі',H2='Розділ 2. Паролі';
  /* e — режим редагування колонтитулів, h — верхній, n — номери, first — інші для першої, link — розділ 2 як у попередньому */
  const S=[
   {k:'Без колонтитулів',a:'Реферат на 3 сторінки: титульна сторінка, текст і новий розділ (після розриву розділу).',st:{}},
   {k:'Вставлення ⇒ Верхній колонтитул',a:'Вибрали шаблон і ввели назву. Колонтитул з’явився на <b>кожній</b> сторінці, а основний текст став блідим — його зараз не змінити.',st:{e:1,h:1}},
   {k:'Номер сторінки',a:'<b>Перейти до нижнього колонтитула</b> ⇒ <b>Номер сторінки</b>. Word сам нумерує сторінки.',st:{e:1,h:1,n:1,fo:1}},
   {k:'Закрити колонтитули',a:'<b>Закрити колонтитули</b> або подвійне клацання по тексту: працюємо з основним текстом, колонтитули бліді.',st:{h:1,n:1}},
   {k:'Інші для першої сторінки',a:'На титульній сторінці колонтитул не потрібен: <b>Параметри ⇒ Інші для першої сторінки</b>.',st:{h:1,n:1,first:1,e:1}},
   {k:'Як у попередньому — вимкнено',a:'У розділі 2 вимкнули <b>Як у попередньому</b> і ввели свій текст. Розділ 1 не змінився.',st:{h:1,n:1,first:1,e:1,own:1}}];
  const R_=r.querySelector('#hfR'),C=r.querySelector('#hfC'),T=r.querySelector('#hfT');
  [['Немає',0],['Верхній',1],['Номери',2],['Перша',4],['Розділ 2',5]].forEach(([t,i])=>{const b=el('button','',t);b.dataset.i=i;b.onclick=()=>api.setStep(i);T.append(b)});
  const lines=n=>'<div class="ln"></div>'.repeat(n);
  function step(i){const s=S[i],t=s.st;
   const pages=[{sec:1,body:'<div style="height:60px"></div><div class="hd"><i>Т</i><s></s></div><div style="height:14px"></div>'+lines(2)},{sec:1,body:lines(15)},{sec:2,body:'<div class="hd"><i>2</i><s></s></div>'+lines(13)}];
   R_.innerHTML=pages.map((p,k)=>{
     const showH=t.h&&!(t.first&&k===0),txt=(t.own&&p.sec===2)?H2:HD;
     const showN=t.n&&!(t.first&&k===0);
     const cls=(t.e?' edit':' dim');
     const hdr='<div class="hf top'+(t.h?cls:'')+(t.own&&p.sec===2?' hi':'')+'" style="justify-content:center">'+(showH?txt:'')+'</div>';
     const ftr='<div class="hf bot'+(t.n?cls:'')+(t.fo&&!t.first?' hi':'')+'" style="justify-content:flex-end">'+(showN?String(k+1):'')+'</div>';
     return'<div class="pgw"><div class="pg" style="width:250px;height:354px">'+hdr+'<div class="body'+(t.e?' dim':'')+'">'+p.body+'</div>'+ftr+'</div><div class="cap'+(t.own&&p.sec===2?' on':'')+'">Сторінка '+(k+1)+'<br>розділ '+p.sec+'</div></div>'}).join('');
   C.innerHTML='<span class="'+(t.first?'y':'')+'">Інші для першої сторінки</span><span>Різні для непарних і парних</span><span class="'+(t.own?'':'y')+'">Як у попередньому</span>';
   r.querySelector('#hfK').textContent=s.k;r.querySelector('#hfA').innerHTML=s.a;
   T.querySelectorAll('button').forEach(b=>b.classList.toggle('on',+b.dataset.i===i))}
  return{count:S.length-1,step}}};
}
{
/* sections/9-r2/widgets/word2.js */
/* Віджети уроку 9-8: багаторівневий список, автозаміна, приховані символи, конструктор формул.
   Кожен віджет крокує →: mount повертає {count, step}. Кольори — лише змінними теми. */
const W98CSS='<style>'+
 '.w98{display:grid;gap:26px;flex:1;min-height:0;align-items:start}'+
 '.w98 .pg{border:3px solid var(--ink);padding:22px 30px;font:500 23px/1.45 var(--serif);min-height:0;overflow:hidden}'+
 '.w98 .act{border:3px solid var(--ink);background:var(--paper-alt);padding:16px 20px}'+
 '.w98 .act b.k{display:block;font:600 16px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}'+
 '.w98 .act p{font-size:25px;line-height:1.35;margin:0}'+
 '.w98 .hi{background:var(--sun);color:var(--on-bright);box-shadow:0 0 0 3px var(--sun)}'+
 '.w98 .lg{width:100%;border-collapse:collapse;font-size:21px}'+
 '.w98 .lg td{padding:3px 8px;border-bottom:2px solid var(--rule-soft);line-height:1.2}'+
 '.w98 .lg tr.on td{background:var(--sun);color:var(--on-bright)}'+
 '.w98 .lg td.m{font:700 26px var(--serif);text-align:center;width:56px;color:var(--accent)}'+
 '.w98 .lg tr.on td.m{color:var(--on-bright)}'+
 '.w98 .tb{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}'+
 '.w98 .tb button{border:3px solid var(--ink);background:var(--paper);color:var(--ink);font:700 19px var(--body);padding:5px 12px;cursor:pointer}'+
 '.w98 .tb button.on{background:var(--accent);color:var(--on-accent)}'+
 '.w98 .mk{color:var(--accent);font-weight:700}'+
 '.w98 .ph{display:inline-block;width:36px;height:44px;border:3px dashed var(--muted);vertical-align:middle}'+
 '.w98 .ph.sel{border-color:var(--accent);background:var(--accent-tint)}'+
 '</style>';

/* ===== Багаторівневий список «Пори року» ===== */
W.mlist={html:()=>W98CSS+'<div class="w98" style="grid-template-columns:600px 1fr"><div class="pg paper" id="mlP"></div><div style="display:flex;flex-direction:column;gap:16px"><div class="act"><b class="k" id="mlK"></b><p id="mlA"></p></div><div class="tb" id="mlT"></div><p class="small" style="margin:0"><kbd>Tab</kbd> — рівень нижче<br><kbd>Shift</kbd> + <kbd>Tab</kbd> — рівень вище</p></div></div>',
 mount(r,d,api){
  const TPL={A:['1) a) i)',(n,l)=>[n[0]+')',String.fromCharCode(96+n[1])+')',['i','ii','iii','iv'][n[2]-1]+')'][l]],
             B:['1. 1.1. 1.1.1.',(n,l)=>n.slice(0,l+1).join('.')+'.'],
             C:['◆ ➢ ▪',(n,l)=>['◆','➢','▪'][l]]};
  const base=[['Зима',0],['Грудень',0],['Січень',0],['Лютий',0],['Весна',0],['Березень',0],['Квітень',0],['Травень',0],['Літо',0],['Осінь',0]];
  const S=[
   {k:'Початок',a:'Звичайні абзаци: усі на одному рівні, без номерів.',t:null},
   {k:'Основне ⇒ Абзац',a:'Виділили текст ⇒ <b>Багаторівневий список</b> ⇒ шаблон з бібліотеки.',t:'A'},
   {k:'Tab',a:'Місяці зими — на рівень <b>нижче</b>: клавіша <kbd>Tab</kbd> або кнопка «Збільшити відступ».',t:'A',lv:{1:1,2:1,3:1},h:[1,2,3]},
   {k:'Tab',a:'Те саме для місяців весни.',t:'A',lv:{1:1,2:1,3:1,5:1,6:1,7:1},h:[5,6,7]},
   {k:'Enter',a:'Після «Грудень» натиснули <kbd>Enter</kbd> і ввели новий елемент — він на тому самому рівні.',t:'A',lv:{1:1,2:1,3:1,4:1,6:1,7:1,8:1},ins:true,h:[2]},
   {k:'Tab',a:'«Новий рік» — ще на рівень нижче: це вже <b>третій</b> рівень.',t:'A',lv:{1:1,2:2,3:1,4:1,6:1,7:1,8:1},ins:true,h:[2]},
   {k:'Інший шаблон',a:'Вибрали шаблон <b>1. 1.1. 1.1.1.</b> — номери показують, хто кому підпорядкований.',t:'B',lv:{1:1,2:2,3:1,4:1,6:1,7:1,8:1},ins:true},
   {k:'Інший шаблон',a:'Шаблон з маркерами: кожен рівень має свій маркер і відступ.',t:'C',lv:{1:1,2:2,3:1,4:1,6:1,7:1,8:1},ins:true},
   {k:'Shift + Tab',a:'«Новий рік» — на рівень <b>вище</b>: <kbd>Shift</kbd> + <kbd>Tab</kbd> або «Зменшити відступ».',t:'C',lv:{1:1,2:1,3:1,4:1,6:1,7:1,8:1},ins:true,h:[2]}];
  const P=r.querySelector('#mlP'),T=r.querySelector('#mlT');
  Object.entries(TPL).forEach(([k,v])=>{const b=el('button','',v[0]);b.dataset.t=k;b.onclick=()=>api.setStep(k==='A'?1:k==='B'?6:7);T.append(b)});
  function step(i){const s=S[i];let it=base.map(x=>x.slice());if(s.ins)it.splice(2,0,['Новий рік',0]);
   it=it.map((x,j)=>[x[0],(s.lv&&s.lv[j])||0]);
   const n=[0,0,0];let h='<div style="font-weight:700;margin-bottom:6px">Пори року:</div>';
   it.forEach((x,j)=>{const l=x[1];n[l]++;for(let q=l+1;q<3;q++)n[q]=0;
     const mark=s.t?'<span class="mk" style="display:inline-block;min-width:'+(s.t==='B'?96:54)+'px">'+TPL[s.t][1](n,l)+'</span>':'';
     const hi=s.h&&s.h.includes(j);
     h+='<div style="margin-left:'+(s.t?l*44:0)+'px;transition:margin .3s"><span class="'+(hi?'hi':'')+'">'+mark+x[0]+'</span></div>'});
   P.innerHTML=h;r.querySelector('#mlK').textContent=s.k;r.querySelector('#mlA').innerHTML=s.a;
   T.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.t===s.t))}
  return{count:S.length-1,step}}};

/* ===== Автозаміна послідовностей символів ===== */
W.autocorr={html:()=>W98CSS+'<div class="w98" style="grid-template-columns:1fr 470px"><div class="pg paper" id="acP" style="font-size:25px;line-height:1.6;min-height:420px"></div><table class="lg" id="acT"></table></div>',
 mount(r,d,api){
  const R=[['Весна',' - ',' – ','пора змін','тире'],['','(c)','©',' Шкільна газета','знак авторського права'],['Біт','(r)','®','','зареєстрована марка'],['Super Lab','(tm)','™','','торгова марка'],['Далі буде','...','…','','три крапки'],['Файл ','-->','→',' Зберегти','стрілка'],['A ','<==','⇐',' B','подвійна стрілка'],['вода ','<=>','⇔',' лід','двобічна стрілка'],['Дякую ',':)','☺','','усмішка']];
  const P=r.querySelector('#acP'),T=r.querySelector('#acT');let tm=[];
  T.innerHTML='<tr><td><b>Уводимо</b></td><td class="m" style="color:var(--ink);font:700 21px var(--body)">Стає</td><td><b>Що це</b></td></tr>'+R.map((x,j)=>'<tr data-j="'+j+'" style="cursor:pointer"><td class="mono" style="white-space:pre">'+x[1].replace(/ /g,'·')+'</td><td class="m">'+x[2]+'</td><td>'+x[4]+'</td></tr>').join('');
  T.querySelectorAll('tr[data-j]').forEach(t=>t.onclick=()=>api.setStep(+t.dataset.j+1));
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const line=(x,cur,typed,done)=>'<div>'+esc(x[0])+(cur?(done?'<span class="hi">'+x[2]+'</span>':'<span class="mono" style="color:var(--accent)">'+esc(typed)+'</span><span style="border-left:3px solid var(--ink);margin-left:1px"></span>'):x[2])+(cur&&!done?'':esc(x[3]))+'</div>';
  function step(i){tm.forEach(clearTimeout);tm=[];
   T.querySelectorAll('tr[data-j]').forEach(t=>t.classList.toggle('on',+t.dataset.j===i-1));
   const head='<div style="font:600 16px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:8px">Набираємо в Word</div>';
   if(!i){P.innerHTML=head+'<p style="margin:0;font:500 23px var(--body)">Пробіл або клік: Word сам замінить послідовність символів на спеціальний символ.</p>';return}
   const prev=R.slice(0,i-1).map(x=>line(x)).join(''),x=R[i-1];
   const draw=(typed,done)=>{P.innerHTML=head+prev+line(x,true,typed,done)};
   draw('',false);[...x[1]].forEach((c,k)=>tm.push(setTimeout(()=>draw(x[1].slice(0,k+1),false),160*(k+1))));
   tm.push(setTimeout(()=>draw('',true),160*x[1].length+450))}
  return{count:R.length,step}}};

/* ===== Приховані (недруковані) символи ===== */
W.marks={html:()=>W98CSS+'<div class="w98" style="grid-template-columns:560px 1fr"><div><div class="tb"><button id="mkB" title="Відобразити всі знаки (Ctrl + Shift + 8)">¶ Відобразити всі знаки</button></div><div class="pg paper" id="mkP" style="font-size:22px;line-height:1.7"></div></div><table class="lg" id="mkT"></table></div>',
 mount(r,d,api){
  const K=[['sp','Пропуск','Пропуск','·'],['par','Кінець абзацу','Enter','¶'],['tab','Табуляція','Tab','→'],['br','Розрив рядка','Shift + Enter','↵'],['nbsp','Нерозривний пропуск','Ctrl + Shift + Пропуск','°'],['shy','М’який перенос','Ctrl + дефіс','¬'],['nbh','Нерозривний дефіс','Ctrl + Shift + дефіс','–'],['pb','Розрив сторінки','Ctrl + Enter','⋯']];
  const T=r.querySelector('#mkT'),P=r.querySelector('#mkP'),B=r.querySelector('#mkB');
  T.innerHTML='<tr><td><b>Символ</b></td><td><b>Клавіші</b></td><td class="m" style="color:var(--ink);font:700 21px var(--body)">Знак</td></tr>'+K.map((k,j)=>'<tr data-j="'+j+'" style="cursor:pointer"><td style="white-space:nowrap">'+k[1]+'</td><td style="white-space:nowrap">'+k[2]+'</td><td class="m">'+k[3]+'</td></tr>').join('');
  T.querySelectorAll('tr[data-j]').forEach(t=>t.onclick=()=>api.setStep(+t.dataset.j+2));
  B.onclick=()=>api.setStep(B.classList.contains('on')?0:1);
  /* текст: s — пропуск, p — кінець абзацу, t — табуляція, b — розрив рядка, n — нерозривний пропуск, y — м'який перенос, h — нерозривний дефіс */
  const DOC=[['t','Шкільна','s','екскурсія','p'],['Їдемо','s','о','s','8:00,','s','відстань','s','120','n','км.','b','Збір','s','біля','s','школи','p'],['Керівниця:','s','Олена','s','Коваль','h','Петренко','p'],['Тема:','s','інфор','y','матика','s','навколо','s','нас','p'],['PB']];
  const MAP={s:['sp',' ','·'],p:['par','','¶'],t:['tab','<span style="display:inline-block;width:48px"></span>','<span style="display:inline-block;width:48px;text-align:center">→</span>'],b:['br','<br>','↵<br>'],n:['nbsp',' ','°'],y:['shy','','¬'],h:['nbh','-','–']};
  function step(i){const show=i>=1,cur=i>=2?K[i-2][0]:null;B.classList.toggle('on',show);
   T.querySelectorAll('tr[data-j]').forEach(t=>t.classList.toggle('on',+t.dataset.j===i-2));
   P.innerHTML=DOC.map(par=>{if(par[0]==='PB')return show?'<div style="text-align:center;margin-top:6px"><span class="mk '+(cur==='pb'?'hi':'')+'" style="font:600 17px var(--body)">⋯⋯⋯⋯ Розрив сторінки ⋯⋯⋯⋯</span></div>':'<div style="height:30px"></div>';
     return '<div>'+par.map(w=>{const m=MAP[w];if(!m)return w;const vis=show?'<span class="mk'+(cur===m[0]?' hi':'')+'">'+m[2]+'</span>':m[1];
       if(show&&m[0]==='sp')return '<span class="mk'+(cur==='sp'?' hi':'')+'" style="display:inline-block;width:.5em;text-align:center">·</span>';
       if(show&&m[0]==='nbsp')return '<span class="mk'+(cur==='nbsp'?' hi':'')+'" style="display:inline-block;width:.6em;text-align:center">°</span>';
       return vis}).join('')+'</div>'}).join('')}
  return{count:K.length+1,step}}};

/* ===== Конструктор формул: (3x + 7)/4 = (x − 3)² ===== */
W.eqbuild={html:()=>W98CSS+'<div class="w98" style="grid-template-columns:1fr"><div class="tb" id="eqR"></div><div class="pg paper" style="display:flex;align-items:center;justify-content:center;min-height:250px;font:italic 500 46px/1.2 \'Cambria Math\',\'STIX Two Math\',var(--serif)"><div id="eqA"></div></div><div class="act"><b class="k" id="eqK"></b><p id="eqT"></p></div></div>',
 mount(r,d,api){
  const BT=['Дріб','Індекс','Корінь','Інтеграл','Оператор','Дужка','Функція','Матриця'];
  const R=r.querySelector('#eqR');R.innerHTML='<span style="font:600 16px var(--body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);align-self:center;margin-right:6px">Рівняння ⇒ Структури:</span>'+BT.map(b=>'<button tabindex="-1">'+b+'</button>').join('');
  const ph=s=>'<span class="ph'+(s?' sel':'')+'"></span>';
  const fr=(a,b)=>'<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 6px"><span style="padding:0 6px">'+a+'</span><span style="align-self:stretch;border-top:3px solid currentColor;margin:4px 0"></span><span style="padding:0 6px">'+b+'</span></span>';
  const sup=(a,b)=>a+'<sup style="font-size:.6em;vertical-align:1.1em">'+b+'</sup>';
  const n='<span style="font-style:normal">',e='</span>';
  const L=fr('3'+'<i>x</i>'+n+' + 7'+e,n+'4'+e);
  const S=[
   ['Вставлення ⇒ Символи ⇒ Рівняння','З’являється область для формули і вкладка <b>Рівняння</b>.',null,'<span style="font:500 26px var(--body);font-style:normal;background:var(--paper-alt);border:2px dashed var(--muted);padding:8px 16px;color:var(--muted)">Введіть тут рівняння.</span>'],
   ['Структури ⇒ Дріб','Вибрали шаблон вертикального дробу. Пунктирні рамки — поля для даних.',0,fr(ph(1),ph())],
   ['Чисельник','Клацнули в поле чисельника, увели з клавіатури 3x + 7.',null,fr('3<i>x</i>'+n+' + 7'+e,ph(1))],
   ['Знаменник','Перейшли в знаменник, увели 4.',null,L],
   ['Клавіша →','Курсор — після дробу (висотою з дріб). Увели знак =.',null,L+n+' = '+e+'<span style="border-left:3px solid var(--accent);height:1.6em;display:inline-block;vertical-align:middle"></span>'],
   ['Структури ⇒ Індекс','Вибрали шаблон з верхнім індексом.',1,L+n+' = '+e+sup(ph(1),ph())],
   ['Основа','У поле основи ввели (x − 3).',null,L+n+' = '+e+sup(n+'('+e+'<i>x</i>'+n+' − 3)'+e,ph(1))],
   ['Показник','У поле показника ввели 2.',null,L+n+' = '+e+sup(n+'('+e+'<i>x</i>'+n+' − 3)'+e,n+'2'+e)],
   ['Готово','Клацнули поза рамкою — формула вставлена в текст. Її можна форматувати, як звичайний текст.',null,L+n+' = '+e+sup(n+'('+e+'<i>x</i>'+n+' − 3)'+e,n+'2'+e)]];
  const A=r.querySelector('#eqA');
  function step(i){const s=S[i];R.querySelectorAll('button').forEach((b,j)=>b.classList.toggle('on',j===s[2]));
   A.innerHTML=s[3];A.style.outline=(i>0&&i<8)?'2px solid var(--muted)':'none';A.style.outlineOffset='10px';
   r.querySelector('#eqK').textContent=s[0];r.querySelector('#eqT').innerHTML=s[1]}
  return{count:S.length-1,step}}};
}
start();
