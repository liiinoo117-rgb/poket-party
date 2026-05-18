
:root{--main-bg:url("main-bg.jpg");--white:#fff;--ink:#2f2923;--pink:#e7a2b8;--blue:#9ec8dc;--green:#a8c873;--yellow:#ead17c}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--ink);font-family:"Hiragino Kaku Gothic ProN","Yu Gothic","Meiryo",sans-serif;font-size:13px;line-height:1.82;overflow-x:hidden}body:before{content:"";position:fixed;inset:0;z-index:100;pointer-events:none;opacity:.055;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.62' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");mix-blend-mode:multiply}a{color:inherit;text-decoration:none}img{display:block;max-width:100%}button,input,textarea{font:inherit}.site{width:min(100%,520px);min-height:100vh;margin:0 auto;background:#fff;overflow:hidden;position:relative}.top{position:fixed;top:0;left:50%;transform:translateX(-50%);z-index:70;width:min(100%,520px);padding:18px 20px;display:flex;justify-content:space-between;align-items:center;color:rgba(47,41,35,.76);mix-blend-mode:multiply}.brand{font-size:13px;letter-spacing:.18em;font-weight:800;text-transform:uppercase}.menu{display:flex;gap:14px;font-size:10px;letter-spacing:.15em;font-weight:600;text-transform:lowercase}.menu a{opacity:.58}.menu a:hover{opacity:1;text-decoration:underline;text-underline-offset:5px}.hero{min-height:100svh;position:relative;overflow:hidden;isolation:isolate;background:#fff}.hero-photo{position:absolute;inset:0;z-index:-5;background-image:var(--main-bg);background-size:cover;background-position:center}.veil{position:absolute;inset:0;z-index:-3;background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.02) 52%,rgba(255,255,255,.88)),radial-gradient(circle at 50% 43%,rgba(255,255,255,.05),transparent 38%)}.hero-title{position:absolute;left:18px;right:18px;top:50%;transform:translateY(-50%);text-align:center;color:rgba(255,255,255,.96);text-shadow:0 0 16px rgba(47,41,35,.25)}.kicker{margin:0 0 16px;color:rgba(255,255,255,.86);font-size:9px;letter-spacing:.28em;text-transform:uppercase}h1{margin:0;font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(32px,9vw,50px);line-height:.96;letter-spacing:.13em}.sub-script{display:block;margin-top:9px;font-family:Georgia,serif;font-size:10px;font-style:italic;letter-spacing:.06em;color:rgba(255,255,255,.82)}.hero-note{position:absolute;left:22px;bottom:62px;width:196px;padding:10px 13px;border-radius:999px;background:rgba(255,255,255,.58);backdrop-filter:blur(8px);color:rgba(47,41,35,.62);font-size:10px;line-height:1.72}.hero-line{position:absolute;left:24px;right:24px;bottom:42px;height:1px;background:linear-gradient(90deg,rgba(47,41,35,.2),transparent 72%)}section{position:relative;padding:96px 22px;scroll-margin-top:76px}.intro{display:grid;grid-template-columns:40% 1fr;gap:28px;align-items:start;margin-bottom:84px}.section-title{margin:0;color:rgba(47,41,35,.92);font-size:24px;line-height:1.18;font-weight:800;letter-spacing:.01em}.section-note{margin:0;color:rgba(47,41,35,.48);font-size:11px;line-height:1.86}.reveal{opacity:0;transform:translateY(28px);filter:blur(8px);transition:opacity 1.05s ease,transform 1.05s cubic-bezier(.19,1,.22,1),filter 1.05s ease}.reveal.is-visible{opacity:1;transform:translateY(0);filter:blur(0)}.shop-slider{position:relative;margin:0 -22px;padding:0 0 8px}.slider-track{display:grid;grid-auto-flow:column;grid-auto-columns:72%;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:4px 22px 22px;scrollbar-width:none}.slider-track::-webkit-scrollbar{display:none}.product-card{display:block;scroll-snap-align:center;color:var(--ink)}.product-photo{position:relative;aspect-ratio:3/4;overflow:hidden;border-radius:150px 150px 22px 22px;background:#fff;box-shadow:none}.product-card:nth-child(even) .product-photo{border-radius:999px;transform:translateY(18px)}.product-card:nth-child(3n) .product-photo{border-radius:26px 150px 150px 26px;transform:translateY(8px)}.product-photo:before{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.02)),radial-gradient(circle at 50% 18%,rgba(255,255,255,.25),transparent 34%)}.product-photo img{width:100%;height:100%;object-fit:cover;filter:saturate(.9) contrast(.95) brightness(1.04);transition:transform .8s cubic-bezier(.2,.8,.2,1),filter .8s ease}.product-card:active .product-photo img,.product-card:hover .product-photo img{transform:scale(1.025);filter:saturate(.96) contrast(.96) brightness(1.04)}.product-info{padding:26px 2px 0}.product-number{display:block;margin-bottom:7px;color:rgba(47,41,35,.34);font-size:10px;letter-spacing:.18em}.product-info h3{margin:0;color:rgba(47,41,35,.9);font-size:17px;line-height:1.42;font-weight:800;letter-spacing:.01em}.product-info p{margin:8px 0 0;color:rgba(47,41,35,.48);font-size:11px;line-height:1.78}.product-bottom{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:14px}.price{color:rgba(47,41,35,.82);font-size:13px;letter-spacing:.08em;font-weight:800}.view{color:rgba(47,41,35,.62);border-bottom:1px solid rgba(47,41,35,.34);font-size:10px;letter-spacing:.12em;font-weight:800;text-transform:uppercase}.slider-controls{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:22px}.slider-button{width:38px;height:38px;border:1px solid rgba(47,41,35,.16);border-radius:999px;background:#fff;color:rgba(47,41,35,.62);box-shadow:none}.slider-dots{display:flex;gap:7px;align-items:center;justify-content:center}.slider-dot{width:6px;height:6px;border:0;padding:0;border-radius:50%;background:rgba(47,41,35,.22)}.slider-dot.is-active{width:18px;border-radius:999px;background:rgba(221,142,165,.72)}.thin-thought{margin:58px 12px 0;color:rgba(47,41,35,.58);font-size:13px;line-height:2.05}.thin-thought span{display:block;margin-top:10px;color:rgba(47,41,35,.32);font-size:10px;letter-spacing:.18em;text-transform:uppercase}.mood-stage{position:relative;width:min(100%,360px);min-height:452px;margin:44px auto 0}.mood-stage:before{content:"";position:absolute;inset:-10px 22px 0;border-radius:200px 200px 24px 24px;background:linear-gradient(100deg,rgba(255,255,255,.72),rgba(255,255,255,.54),rgba(255,255,255,.72));opacity:.86}.mood-arch{position:absolute;inset:0;border:1px solid rgba(47,41,35,.1);border-radius:999px 999px 32px 32px;transform:rotate(-2deg)}.mood-dot{position:absolute;left:50%;top:22%;width:17px;height:17px;border-radius:50%;background:var(--pink);opacity:.58;box-shadow:none;transform:translate(-50%,-50%);transition:top .35s ease,background .35s ease}.mood-panel{position:absolute;left:50%;top:56%;width:72%;transform:translate(-50%,-50%)}.range-labels{display:flex;justify-content:space-between;margin-bottom:14px;color:rgba(47,41,35,.36);font-size:9px;letter-spacing:.16em;text-transform:uppercase}input[type=range]{width:100%;appearance:none;height:12px;border:1px solid rgba(47,41,35,.14);border-radius:999px;background:linear-gradient(90deg,#e6ddcf,#fff,var(--pink),var(--yellow),var(--blue));outline:none}input[type=range]::-webkit-slider-thumb{appearance:none;width:28px;height:28px;border:1px solid rgba(47,41,35,.18);border-radius:50%;background:var(--white);box-shadow:none}.plain-button{display:inline-block;margin-top:24px;border:0;background:transparent;color:rgba(47,41,35,.58);padding:0;font-size:11px;letter-spacing:.08em;text-decoration:underline;text-underline-offset:5px;cursor:pointer}.letter{margin-top:42px;color:rgba(47,41,35,.64);transition:opacity .24s ease,transform .24s ease}.letter.is-changing{opacity:0;transform:translateY(8px)}.letter h3{margin:0 0 12px;color:rgba(47,41,35,.9);font-size:17px;line-height:1.45;font-weight:800}.letter p{margin:0;font-size:11px;line-height:2;white-space:pre-wrap}.log-space{width:min(100%,380px);min-height:520px;margin:54px auto 0;position:relative}.log-paper{position:relative;padding:28px 22px 34px;background:linear-gradient(90deg,rgba(221,142,165,.16) 0 1px,transparent 1px 100%),repeating-linear-gradient(180deg,transparent 0 31px,rgba(47,41,35,.058) 32px),rgba(255,255,255,.78);background-size:34px 100%,100% 32px,100% 100%;border:1px solid rgba(47,41,35,.11);border-radius:2px 30px 2px 30px;box-shadow:none;transform:rotate(-.7deg)}.log-paper:before{content:"private";position:absolute;right:18px;top:-12px;padding:4px 10px;border:1px solid rgba(47,41,35,.1);border-radius:999px;background:rgba(255,255,255,.9);color:rgba(47,41,35,.34);font-size:9px;letter-spacing:.16em;text-transform:uppercase}.log-paper input,.log-paper textarea{width:100%;border:0;border-bottom:1px solid rgba(47,41,35,.16);background:transparent;color:var(--ink);padding:10px 0;outline:none;border-radius:0;font-size:12px}.log-paper textarea{min-height:136px;resize:vertical;line-height:2.1}.log-list{display:grid;gap:34px;margin-top:58px;padding-left:22px;border-left:1px solid rgba(221,142,165,.42)}.log-entry{position:relative}.log-entry:before{content:"";position:absolute;left:-26px;top:8px;width:7px;height:7px;border-radius:50%;background:rgba(221,142,165,.86);box-shadow:none}.log-entry time{display:block;margin-bottom:8px;color:rgba(47,41,35,.34);font-size:9px;letter-spacing:.14em;text-transform:uppercase}.log-entry h3{margin:0 0 8px;color:rgba(47,41,35,.88);font-size:16px;line-height:1.45;font-weight:800}.log-entry p{margin:0;color:rgba(47,41,35,.56);font-size:11px;line-height:2;white-space:pre-wrap}.delete-entry{margin-top:8px;border:0;padding:0;background:transparent;color:rgba(47,41,35,.32);font-size:10px;text-decoration:underline;text-underline-offset:4px;cursor:pointer}footer{padding:100px 22px 70px;color:rgba(47,41,35,.34);font-size:9px;letter-spacing:.16em;text-align:center;text-transform:uppercase}.detail-hero{min-height:100svh;padding:90px 22px 64px;display:grid;align-content:end;background:#fff}.detail-photo{width:100%;aspect-ratio:3/4;overflow:hidden;border-radius:180px 180px 26px 26px;background:#fff}.detail-photo img{width:100%;height:100%;object-fit:cover;filter:saturate(.92) contrast(.96) brightness(1.04)}.detail-title{margin-top:30px}.detail-title h1{color:rgba(47,41,35,.92);font-family:inherit;font-size:30px;line-height:1.1;letter-spacing:.01em;font-weight:800}.detail-price{margin-top:14px;font-weight:800;letter-spacing:.08em}.detail-body{padding:70px 22px 96px}.detail-body p{margin:0;color:rgba(47,41,35,.58);font-size:13px;line-height:2.1}.specs{margin-top:42px;padding:0;list-style:none;border-top:1px solid rgba(47,41,35,.12)}.specs li{display:flex;justify-content:space-between;gap:20px;padding:14px 0;border-bottom:1px solid rgba(47,41,35,.12);font-size:11px}.buy{display:block;width:100%;margin-top:38px;padding:15px 18px;border:1px solid rgba(47,41,35,.18);border-radius:999px;background:#fff;color:rgba(47,41,35,.86);text-align:center;font-size:12px;letter-spacing:.12em;font-weight:800;text-transform:uppercase}.back-link{display:inline-block;margin-top:44px;border-bottom:1px solid rgba(47,41,35,.34);font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:800}


/* Hero image particle transition */
.hero-photo-next{
  position:absolute;
  inset:0;
  z-index:-5;
  background-size:cover;
  background-position:center;
  opacity:0;
  transition:opacity 1.45s cubic-bezier(.19,1,.22,1);
}
.hero-photo-next.is-active{opacity:1}
.hero-particles{
  position:absolute;
  inset:0;
  z-index:-2;
  width:100%;
  height:100%;
  pointer-events:none;
}
@media (prefers-reduced-motion: reduce){
  .hero-photo-next{transition:none}
  .hero-particles{display:none}
}


/* Pixel-dot hero transition */
.hero-photo,
.hero-photo-next{
  image-rendering:auto;
}
.hero-particles{
  image-rendering: pixelated;
}
.hero.is-pixel-changing .hero-title{
  letter-spacing:.015em;
}


.log-note{
  margin: -20px auto 34px;
  width: min(100%, 380px);
  color: rgba(47,41,35,.5);
  font-size: 11px;
  line-height: 1.9;
}


/* Mood oracle */
.oracle-card{
  margin-top: 34px;
  padding-top: 22px;
  border-top: 1px solid rgba(47,41,35,.12);
}
.oracle-row{
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(47,41,35,.08);
}
.oracle-label{
  color: rgba(47,41,35,.38);
  font-size: 10px;
  letter-spacing: .12em;
}
.oracle-value{
  text-align: right;
  color: rgba(47,41,35,.82);
  font-size: 12px;
  font-weight: 800;
}
.oracle-comment{
  margin-top: 18px;
  color: rgba(47,41,35,.62);
  font-size: 12px;
  line-height: 2;
}


/* Refined slider UI */
.slider-controls,
.slider-dots{
  display:none !important;
}

.slider-ui{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:18px;
  padding:0 22px 12px;
}

.slider-ui-main{
  display:grid;
  gap:3px;
}

.slider-eyebrow{
  color:rgba(47,41,35,.36);
  font-size:10px;
  letter-spacing:.18em;
  text-transform:uppercase;
}

.slider-count{
  color:rgba(47,41,35,.88);
  font-size:18px;
  line-height:1;
  font-weight:800;
  letter-spacing:.04em;
}

.slider-actions{
  display:flex;
  gap:14px;
  align-items:center;
}

.slider-text-button{
  border:0;
  padding:0;
  background:transparent;
  color:rgba(47,41,35,.62);
  font-size:10px;
  line-height:1;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:800;
}

.slider-text-button:active{
  opacity:.45;
}

.slider-progress{
  height:1px;
  margin:0 22px 22px;
  background:rgba(47,41,35,.12);
  overflow:hidden;
}

.slider-progress span{
  display:block;
  width:0%;
  height:100%;
  background:rgba(221,142,165,.78);
  transition:width .28s ease;
}

.slider-track{
  padding-top:0 !important;
}

/* Refined mood/oracle UI */
.mood-stage{
  min-height:520px;
}

.mood-stage::before{
  opacity:.46;
  background:
    linear-gradient(180deg, rgba(255,255,255,.94), rgba(255,255,255,.58)),
    linear-gradient(100deg, rgba(231,162,184,.10), rgba(158,200,220,.08), rgba(183,216,205,.10)) !important;
}

.oracle-panel{
  width:78% !important;
  top:54% !important;
  padding:26px 0 0;
}

.oracle-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:18px;
  margin-bottom:26px;
  padding-bottom:14px;
  border-bottom:1px solid rgba(47,41,35,.14);
}

.oracle-kicker{
  color:rgba(47,41,35,.88);
  font-size:12px;
  line-height:1;
  font-weight:800;
  letter-spacing:.16em;
  text-transform:uppercase;
}

.oracle-index{
  color:rgba(47,41,35,.38);
  font-size:10px;
  line-height:1.4;
  text-align:right;
}

.oracle-panel .range-labels{
  margin-bottom:12px;
  color:rgba(47,41,35,.42);
}

.oracle-panel input[type="range"]{
  height:10px;
  border-color:rgba(47,41,35,.18);
  background:linear-gradient(90deg,#f2f2ee,#ffffff,#e7a2b8,#9ec8dc,#2f2923);
}

.oracle-panel input[type="range"]::-webkit-slider-thumb{
  width:24px;
  height:24px;
  background:#fff;
  border:1px solid rgba(47,41,35,.28);
}

.oracle-send{
  width:100%;
  margin-top:24px;
  padding:13px 16px;
  border:1px solid rgba(47,41,35,.18);
  border-radius:999px;
  background:#fff;
  color:rgba(47,41,35,.86);
  font-size:12px;
  letter-spacing:.18em;
  font-weight:800;
}

.oracle-send:active{
  transform:translateY(1px);
  opacity:.72;
}

.oracle-result{
  margin-top:30px !important;
  padding-top:22px;
  border-top:1px solid rgba(47,41,35,.12);
}

.oracle-result h3{
  margin-bottom:13px !important;
  font-size:21px !important;
  line-height:1.28 !important;
  color:rgba(47,41,35,.94) !important;
}

.oracle-result p{
  color:rgba(47,41,35,.62) !important;
  font-size:12px !important;
  line-height:2 !important;
}

.oracle-card{
  margin-top:24px !important;
  padding-top:18px !important;
}

.oracle-row{
  padding:12px 0 !important;
}

.oracle-value{
  font-size:13px !important;
  color:rgba(47,41,35,.92) !important;
}

.oracle-comment{
  margin-top:18px !important;
  padding-left:14px;
  border-left:1px solid rgba(221,142,165,.48);
  color:rgba(47,41,35,.68) !important;
  font-size:12px !important;
  line-height:2.05 !important;
}


/* Premium polish layer */
:root{
  --hairline: rgba(47,41,35,.115);
  --hairline-strong: rgba(47,41,35,.19);
  --ui-muted: rgba(47,41,35,.48);
  --ui-ink: rgba(47,41,35,.92);
}

/* top navigation */
.top{
  padding:16px 20px !important;
  background:linear-gradient(180deg,rgba(255,255,255,.72),rgba(255,255,255,.34));
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  border-bottom:1px solid rgba(47,41,35,.055);
  mix-blend-mode:normal !important;
}
.brand{
  letter-spacing:.2em !important;
}
.menu{
  gap:16px !important;
}
.menu a{
  position:relative;
}
.menu a::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:-5px;
  height:1px;
  background:currentColor;
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .28s ease;
}
.menu a:hover::after{
  transform:scaleX(1);
}

/* hero typography refinement */
.hero-title{
  top:48% !important;
}
.hero-title::after{
  content:"";
  display:block;
  width:44px;
  height:1px;
  margin:18px auto 0;
  background:rgba(255,255,255,.58);
}
.kicker{
  margin-bottom:18px !important;
}
.sub-script{
  margin-top:12px !important;
}
.hero-note{
  border:1px solid rgba(47,41,35,.09);
}

/* section contrast */
.section-title{
  font-size:26px !important;
  letter-spacing:-.01em !important;
}
.section-note{
  padding-top:2px;
}

/* slider: simple premium UI */
.slider-ui{
  padding:0 22px 14px !important;
  align-items:center !important;
}
.slider-eyebrow{
  color:rgba(47,41,35,.34) !important;
  font-size:9px !important;
  letter-spacing:.22em !important;
}
.slider-count{
  margin-top:4px;
  font-family:Georgia,"Times New Roman",serif;
  font-weight:normal !important;
  font-size:22px !important;
  letter-spacing:.02em !important;
}
.slider-actions{
  gap:18px !important;
}
.slider-text-button{
  position:relative;
  font-size:9px !important;
  letter-spacing:.2em !important;
}
.slider-text-button::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:-6px;
  height:1px;
  background:rgba(47,41,35,.36);
  transform:scaleX(.28);
  transform-origin:left;
  transition:transform .28s ease, opacity .28s ease;
  opacity:.7;
}
.slider-text-button:active::after,
.slider-text-button:hover::after{
  transform:scaleX(1);
}
.slider-progress{
  height:2px !important;
  margin:0 22px 26px !important;
  background:rgba(47,41,35,.075) !important;
}
.slider-progress span{
  background:linear-gradient(90deg,rgba(221,142,165,.9),rgba(158,200,220,.76)) !important;
}
.slider-track{
  gap:18px !important;
}
.product-card{
  transition:opacity .35s ease, transform .35s ease;
  opacity:.54;
}
.product-card.is-current{
  opacity:1;
}
.product-card.is-current .product-photo{
  border-color:rgba(47,41,35,.16);
}
.product-photo{
  border:1px solid rgba(47,41,35,.075);
  background:#fff !important;
}
.product-info{
  padding-top:24px !important;
}
.product-number{
  letter-spacing:.22em !important;
}
.product-info h3{
  font-size:18px !important;
  letter-spacing:-.01em !important;
}
.product-bottom{
  padding-top:2px;
}

/* mood/oracle: cleaner, more high-end */
.mood-stage{
  min-height:560px !important;
}
.mood-stage::before{
  inset:-18px 12px 0 !important;
  opacity:.72 !important;
  border:1px solid rgba(47,41,35,.07);
  background:
    linear-gradient(180deg,rgba(255,255,255,.98),rgba(255,255,255,.72)),
    radial-gradient(circle at 50% 18%,rgba(231,162,184,.13),transparent 34%),
    radial-gradient(circle at 80% 74%,rgba(158,200,220,.10),transparent 34%) !important;
}
.mood-arch{
  border-color:rgba(47,41,35,.13) !important;
}
.mood-dot{
  width:13px !important;
  height:13px !important;
  opacity:.78 !important;
}
.oracle-panel{
  width:80% !important;
  top:53% !important;
}
.oracle-top{
  margin-bottom:24px !important;
  padding-bottom:16px !important;
  border-bottom:1px solid var(--hairline) !important;
}
.oracle-kicker{
  font-family:Georgia,"Times New Roman",serif;
  font-size:15px !important;
  letter-spacing:.04em !important;
  text-transform:none !important;
  font-weight:normal !important;
}
.oracle-index{
  font-size:9px !important;
  letter-spacing:.12em;
  color:rgba(47,41,35,.4) !important;
}
.oracle-panel .range-labels{
  margin-bottom:10px !important;
}
.oracle-panel input[type="range"]{
  height:8px !important;
  border:1px solid rgba(47,41,35,.13) !important;
  background:linear-gradient(90deg,#f7f7f4,#fff,#e7a2b8,#9ec8dc,#302923) !important;
}
.oracle-send{
  margin-top:22px !important;
  padding:14px 18px !important;
  border-color:rgba(47,41,35,.2) !important;
  letter-spacing:.24em !important;
  transition:background .25s ease, color .25s ease, border-color .25s ease, transform .16s ease;
}
.oracle-send:hover{
  background:#2f2923;
  color:#fff;
  border-color:#2f2923 !important;
}
.oracle-result{
  margin-top:32px !important;
  padding-top:24px !important;
}
.oracle-result h3{
  font-family:Georgia,"Times New Roman",serif;
  font-weight:normal !important;
  font-size:26px !important;
  letter-spacing:.01em !important;
}
.oracle-result p{
  margin-top:0 !important;
}
.oracle-card{
  border-top:1px solid rgba(47,41,35,.12) !important;
}
.oracle-row{
  align-items:baseline;
}
.oracle-label{
  white-space:nowrap;
}
.oracle-value{
  font-weight:800 !important;
  letter-spacing:.02em;
}
.oracle-comment{
  border-left-color:rgba(221,142,165,.64) !important;
}

/* log polish */
.log-paper{
  border-color:rgba(47,41,35,.14) !important;
  background:
    linear-gradient(90deg,rgba(221,142,165,.11) 0 1px,transparent 1px 100%),
    repeating-linear-gradient(180deg,transparent 0 31px,rgba(47,41,35,.045) 32px),
    rgba(255,255,255,.86) !important;
}
.log-entry h3{
  letter-spacing:-.01em;
}
footer{
  letter-spacing:.2em !important;
}


/* Premium oracle upgrade */
.mood-stage{
  min-height:610px !important;
  width:min(100%,372px) !important;
}
.mood-stage::before{
  inset:-22px 8px 0 !important;
  border-radius:230px 230px 30px 30px !important;
  border:1px solid rgba(47,41,35,.08);
  background:
    linear-gradient(180deg, rgba(255,255,255,.985), rgba(255,255,255,.76)),
    radial-gradient(circle at 50% 12%, rgba(255,208,223,.22), transparent 30%),
    radial-gradient(circle at 78% 72%, rgba(199,226,236,.16), transparent 32%),
    linear-gradient(90deg, rgba(47,41,35,.03) 1px, transparent 1px),
    linear-gradient(180deg, rgba(47,41,35,.03) 1px, transparent 1px) !important;
  background-size:auto, auto, auto, 18px 18px, 18px 18px !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
}
.mood-arch{
  inset:10px 10px 0 !important;
  border-radius:999px 999px 30px 30px !important;
  border-color:rgba(47,41,35,.11) !important;
}
.mood-dot{
  width:14px !important;
  height:14px !important;
  border:3px solid rgba(255,255,255,.95);
  box-shadow:0 0 0 1px rgba(47,41,35,.10), 0 8px 18px rgba(255,204,217,.18);
  opacity:1 !important;
}
.oracle-panel{
  width:84% !important;
  top:53% !important;
}
.oracle-shell{
  position:relative;
}
.oracle-shell::before,
.oracle-shell::after{
  content:"";
  position:absolute;
  pointer-events:none;
}
.oracle-shell::before{
  top:-12px;
  right:-2px;
  width:38px;
  height:38px;
  border-top:1px solid rgba(47,41,35,.13);
  border-right:1px solid rgba(47,41,35,.13);
  opacity:.45;
}
.oracle-shell::after{
  left:-10px;
  top:72px;
  width:20px;
  height:20px;
  background:radial-gradient(circle, rgba(231,162,184,.52) 0 1px, transparent 1.6px);
  background-size:6px 6px;
  opacity:.4;
}
.oracle-top{
  gap:14px !important;
  margin-bottom:22px !important;
  padding-bottom:18px !important;
  border-bottom:1px solid rgba(47,41,35,.11) !important;
}
.oracle-heading-wrap{
  display:grid;
  gap:8px;
}
.oracle-kicker{
  font-family:Georgia,"Times New Roman",serif;
  font-size:17px !important;
  letter-spacing:.03em !important;
  color:rgba(47,41,35,.94) !important;
}
.oracle-sub{
  color:rgba(47,41,35,.42);
  font-size:10px;
  letter-spacing:.12em;
  text-transform:uppercase;
  line-height:1.7;
}
.oracle-readout{
  min-width:74px;
  padding:8px 10px 9px;
  border:1px solid rgba(47,41,35,.10);
  border-radius:16px;
  background:rgba(255,255,255,.7);
  text-align:right;
}
.readout-label{
  display:block;
  color:rgba(47,41,35,.38);
  font-size:9px;
  letter-spacing:.16em;
}
.readout-value{
  display:block;
  margin-top:4px;
  color:rgba(47,41,35,.92);
  font-size:24px;
  line-height:1;
  font-family:Georgia,"Times New Roman",serif;
  font-weight:normal;
}
.oracle-meter{
  padding:16px 14px 18px;
  border:1px solid rgba(47,41,35,.09);
  border-radius:20px;
  background:linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.68));
}
.oracle-panel .range-labels{
  margin-bottom:10px !important;
  color:rgba(47,41,35,.46) !important;
  font-size:9px !important;
  letter-spacing:.18em !important;
}
.oracle-scale{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:10px;
  margin-bottom:12px;
}
.oracle-scale span{
  display:block;
  height:1px;
  background:rgba(47,41,35,.12);
}
.oracle-panel input[type="range"]{
  height:9px !important;
  border:1px solid rgba(47,41,35,.14) !important;
  background:linear-gradient(90deg, #fbfaf8 0%, #fff 24%, #f5d6e3 50%, #cee5ef 74%, #2f2923 100%) !important;
}
.oracle-panel input[type="range"]::-webkit-slider-thumb{
  width:26px !important;
  height:26px !important;
  border:1px solid rgba(47,41,35,.18) !important;
  background:linear-gradient(180deg, #fff, #f7f3f5) !important;
  box-shadow:0 2px 10px rgba(47,41,35,.08);
}
.oracle-panel input[type="range"]::-moz-range-thumb{
  width:26px !important;
  height:26px !important;
  border:1px solid rgba(47,41,35,.18) !important;
  background:linear-gradient(180deg, #fff, #f7f3f5) !important;
  box-shadow:0 2px 10px rgba(47,41,35,.08);
  border-radius:50%;
}
.oracle-foot{
  display:flex;
  justify-content:space-between;
  gap:12px;
  margin-top:12px;
  color:rgba(47,41,35,.44);
  font-size:9px;
  letter-spacing:.14em;
}
.oracle-foot span:last-child{
  color:rgba(47,41,35,.74);
}
.oracle-send{
  position:relative;
  width:100%;
  margin-top:18px !important;
  padding:15px 18px !important;
  border:1px solid rgba(47,41,35,.18) !important;
  background:linear-gradient(180deg, rgba(255,255,255,.98), rgba(249,246,247,.92)) !important;
  color:rgba(47,41,35,.92) !important;
  box-shadow:0 1px 0 rgba(255,255,255,.8) inset;
}
.oracle-send span{
  position:relative;
  z-index:1;
}
.oracle-send::before{
  content:"";
  position:absolute;
  inset:1px;
  border-radius:999px;
  background:linear-gradient(90deg, rgba(255,225,236,.74), rgba(255,255,255,.2), rgba(220,236,245,.7));
  opacity:.85;
}
.oracle-send:hover{
  color:#2f2923 !important;
  background:linear-gradient(180deg, #fff, #fff) !important;
  transform:translateY(-1px);
}
.oracle-result{
  position:relative;
  margin-top:24px !important;
  padding:18px 16px 2px !important;
  border:1px solid rgba(47,41,35,.09);
  border-radius:22px;
  background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.76));
}
.oracle-result::after{
  content:"";
  position:absolute;
  inset:10px;
  border:1px solid rgba(47,41,35,.05);
  border-radius:16px;
  pointer-events:none;
}
.oracle-result-head{
  display:flex;
  justify-content:space-between;
  gap:10px;
  margin-bottom:14px;
  color:rgba(47,41,35,.38);
  font-size:9px;
  letter-spacing:.18em;
  text-transform:uppercase;
}
.oracle-result h3{
  margin-bottom:12px !important;
  font-size:28px !important;
  letter-spacing:.015em !important;
}
.oracle-result p{
  font-size:12px !important;
  line-height:2.05 !important;
}
.oracle-card{
  margin-top:18px !important;
  padding-top:16px !important;
  border-top:1px solid rgba(47,41,35,.10) !important;
}
.oracle-row{
  border-bottom:1px solid rgba(47,41,35,.08) !important;
}
.oracle-label{
  font-size:9px !important;
  letter-spacing:.18em !important;
}
.oracle-value{
  font-family:Georgia,"Times New Roman",serif;
  font-size:15px !important;
  font-weight:normal !important;
}
.oracle-comment{
  margin-top:16px !important;
  padding:2px 0 0 14px;
  border-left:1px solid rgba(221,142,165,.58) !important;
}
@media (max-width:420px){
  .oracle-panel{width:85% !important}
  .oracle-result h3{font-size:25px !important}
  .readout-value{font-size:22px}
}


/* Portfolio + dream cart update */
.portfolio-block{margin:0 -22px 86px}
.portfolio-ui{margin-top:-10px}
.portfolio-track{grid-auto-columns:74%}
.portfolio-photo{border-radius:18px!important;background:#fff;aspect-ratio:1/1}
.portfolio-card:nth-child(even) .portfolio-photo,
.portfolio-card:nth-child(3n) .portfolio-photo{border-radius:18px!important;transform:none!important}
.portfolio-photo img{object-fit:contain!important;padding:7px;background:#fff;filter:saturate(.92) contrast(.98) brightness(1.02)!important}
.portfolio-note{margin:-52px 12px 88px;color:rgba(47,41,35,.42);font-size:10px;letter-spacing:.14em;line-height:1.9;text-transform:uppercase}
.dream-product{cursor:pointer}
.dream-product .view{min-width:max-content;font-size:9px!important}
.dream-toast{position:fixed;left:50%;bottom:28px;z-index:120;width:min(88%,360px);transform:translate(-50%,18px);opacity:0;pointer-events:none;padding:15px 18px;border:1px solid rgba(47,41,35,.15);border-radius:999px;background:rgba(255,255,255,.86);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);color:rgba(47,41,35,.82);font-size:12px;letter-spacing:.08em;text-align:center;transition:opacity .38s ease,transform .38s cubic-bezier(.19,1,.22,1)}
.dream-toast.is-visible{opacity:1;transform:translate(-50%,0)}
.social-section{padding:74px 22px 34px}
.social-inner{padding-top:34px;border-top:1px solid rgba(47,41,35,.12)}
.social-kicker{margin:0 0 10px;color:rgba(47,41,35,.34);font-size:10px;letter-spacing:.22em;text-transform:uppercase}
.social-inner h2{margin:0 0 26px;color:rgba(47,41,35,.92);font-size:22px;line-height:1.2;font-weight:800;letter-spacing:.01em}
.social-links{display:grid;gap:14px}
.social-links a{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid rgba(47,41,35,.09);color:rgba(47,41,35,.68);font-size:12px;letter-spacing:.06em}
.social-icon{display:grid;place-items:center;flex:0 0 auto;width:30px;height:30px;border:1px solid rgba(47,41,35,.14);border-radius:999px;color:rgba(47,41,35,.72);font-size:13px}
footer{padding-top:34px!important}


/* Portfolio/detail diary refinement */
.product-card,
.portfolio-card{
  opacity:1 !important;
}
.product-card.is-current,
.portfolio-card.is-current{
  opacity:1 !important;
}
.product-photo,
.portfolio-photo{
  border:0 !important;
  box-shadow:none !important;
  background:transparent !important;
}
.product-photo::before,
.portfolio-photo::before{
  display:none !important;
}
.product-photo img,
.portfolio-photo img{
  opacity:1 !important;
}

/* Portfolio uses the same visual rhythm as product slider */
.portfolio-block{
  margin:0 -22px 86px !important;
}
.portfolio-track{
  grid-auto-columns:72% !important;
}
.portfolio-photo{
  aspect-ratio:3/4 !important;
  border-radius:150px 150px 22px 22px !important;
  overflow:hidden;
}
.portfolio-card:nth-child(even) .portfolio-photo{
  border-radius:999px !important;
  transform:translateY(18px) !important;
}
.portfolio-card:nth-child(3n) .portfolio-photo{
  border-radius:26px 150px 150px 26px !important;
  transform:translateY(8px) !important;
}
.portfolio-photo img{
  width:100% !important;
  height:100% !important;
  object-fit:cover !important;
  padding:0 !important;
  background:transparent !important;
  filter:saturate(.92) contrast(.98) brightness(1.02) !important;
}
.portfolio-note{
  margin:-52px 12px 88px !important;
}

/* Product first-image whitening fix */
.shop-slider .product-photo{
  background:transparent !important;
}
.shop-slider .product-photo img{
  object-fit:cover !important;
  filter:saturate(.94) contrast(.98) brightness(1.02) !important;
}
.shop-slider .product-bottom{
  align-items:flex-end;
}
.shop-slider .view{
  max-width:118px;
  text-align:right;
  line-height:1.45;
}

/* Mood: softer, fewer borders */
.mood-stage::before{
  border:0 !important;
  box-shadow:none !important;
  background:
    linear-gradient(180deg, rgba(255,255,255,.98), rgba(255,255,255,.72)),
    radial-gradient(circle at 50% 12%, rgba(255,208,223,.18), transparent 31%),
    radial-gradient(circle at 78% 72%, rgba(199,226,236,.13), transparent 34%),
    linear-gradient(90deg, rgba(47,41,35,.022) 1px, transparent 1px),
    linear-gradient(180deg, rgba(47,41,35,.022) 1px, transparent 1px) !important;
}
.mood-arch{
  border-color:rgba(47,41,35,.055) !important;
}
.oracle-readout,
.oracle-meter,
.oracle-result{
  border:0 !important;
  box-shadow:none !important;
}
.oracle-top{
  border-bottom:0 !important;
  padding-bottom:8px !important;
}
.oracle-meter{
  background:
    linear-gradient(180deg, rgba(255,255,255,.84), rgba(255,255,255,.52)),
    radial-gradient(circle at 20% 20%, rgba(231,162,184,.10), transparent 30%) !important;
}
.oracle-result{
  background:
    linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.62)),
    radial-gradient(circle at 82% 22%, rgba(158,200,220,.10), transparent 38%) !important;
}
.oracle-result::after{
  display:none !important;
}
.oracle-card{
  border-top:0 !important;
  padding-top:12px !important;
}
.oracle-row{
  border-bottom:0 !important;
  padding:8px 0 !important;
}
.oracle-comment{
  border-left:0 !important;
  padding-left:0 !important;
}
.feeling-total{
  display:flex;
  justify-content:space-between;
  gap:12px;
  margin-top:12px;
  color:rgba(47,41,35,.42);
  font-size:9px;
  letter-spacing:.14em;
}
.feeling-total strong{
  color:rgba(47,41,35,.78);
  font-weight:800;
  letter-spacing:.08em;
}

/* Diary warning */
.diary-warning{
  margin-top:12px;
  color:rgba(160,72,92,.72);
  font-size:11px;
  line-height:1.8;
  opacity:0;
  transform:translateY(-4px);
  transition:opacity .25s ease, transform .25s ease;
}
.diary-warning.is-visible{
  opacity:1;
  transform:translateY(0);
}
\n
/* Cloud storage status */
.cloud-status{
  margin-top:6px;
  color:rgba(47,41,35,.32);
  font-size:9px;
  letter-spacing:.14em;
  text-align:right;
}


/* Final polish: square portfolio / softer oracle / spotify */
.portfolio-track{
  grid-auto-columns:72% !important;
}
.portfolio-photo{
  aspect-ratio:1 / 1 !important;
  border-radius:18px !important;
  transform:none !important;
  border:0 !important;
  box-shadow:none !important;
  background:transparent !important;
}
.portfolio-card:nth-child(even) .portfolio-photo,
.portfolio-card:nth-child(3n) .portfolio-photo{
  border-radius:18px !important;
  transform:none !important;
}
.portfolio-photo::before{
  display:none !important;
}
.portfolio-photo img{
  width:100% !important;
  height:100% !important;
  object-fit:contain !important;
  padding:0 !important;
  background:transparent !important;
}

/* Mood: remove hard borders from buttons/cards */
.oracle-send{
  border:0 !important;
  outline:0 !important;
  box-shadow:none !important;
  background:
    radial-gradient(circle at 22% 25%, rgba(255,220,232,.72), transparent 36%),
    linear-gradient(90deg, rgba(255,255,255,.96), rgba(244,238,242,.82), rgba(228,240,246,.82)) !important;
}
.oracle-send::before{
  display:none !important;
}
.oracle-readout,
.oracle-meter,
.oracle-result,
.oracle-card,
.oracle-row{
  border:0 !important;
  box-shadow:none !important;
}
.oracle-top{
  border-bottom:0 !important;
}
.oracle-comment{
  border-left:0 !important;
  padding-left:0 !important;
}
.mood-arch{
  border-color:rgba(47,41,35,.035) !important;
}




/* Surgical-girly atmosphere upgrade */
:root{
  --pink:#d48ea2 !important;
  --blue:#b7d7e1 !important;
  --green:#b9c6ac !important;
  --yellow:#d8c48a !important;
}
html,body{
  background:#f7f5f1 !important;
}
body{
  color:rgba(40,34,31,.92) !important;
  background-image:
    radial-gradient(circle at 10% 12%, rgba(228,214,220,.28), transparent 26%),
    radial-gradient(circle at 80% 22%, rgba(192,214,220,.14), transparent 28%),
    linear-gradient(180deg, #faf8f4 0%, #f6f2ed 100%) !important;
}
.top{
  background:linear-gradient(180deg,rgba(255,255,255,.78),rgba(248,244,240,.56)) !important;
}
.hero .veil{
  background:
    linear-gradient(180deg, rgba(248,245,242,.04), rgba(43,34,31,.16)),
    radial-gradient(circle at 30% 18%, rgba(221,165,182,.12), transparent 28%),
    radial-gradient(circle at 78% 72%, rgba(182,210,219,.10), transparent 34%) !important;
  mix-blend-mode:multiply;
}
.hero-title{
  text-shadow:0 0 22px rgba(36,30,28,.18) !important;
}
.kicker{
  color:rgba(255,255,255,.82) !important;
}
h1{
  letter-spacing:.16em !important;
}
.sub-script{
  color:rgba(255,255,255,.72) !important;
}
.hero-note{
  background:rgba(252,248,245,.62) !important;
  color:rgba(55,46,42,.68) !important;
  box-shadow:0 8px 26px rgba(64,48,47,.06);
}
.hero-line{
  background:linear-gradient(90deg,rgba(67,54,51,.18),rgba(205,187,190,.18),transparent 78%) !important;
}
.section-title,
.product-info h3,
.social-inner h2,
.music-title{
  color:rgba(40,34,31,.95) !important;
}
.section-note,
.thin-thought,
.portfolio-note,
.product-info p,
.log-intro,
.social-links a,
.hero-note,
.oracle-result p{
  color:rgba(63,53,49,.66) !important;
}
.slider-count{
  color:rgba(45,38,35,.9) !important;
}
.slider-progress,
.portfolio-progress{
  background:rgba(48,38,35,.06) !important;
}
.slider-progress span,
.portfolio-progress span{
  background:linear-gradient(90deg, rgba(205,132,151,.82), rgba(186,209,217,.64), rgba(216,193,139,.52)) !important;
}
.product-photo,
.portfolio-photo{
  background:linear-gradient(180deg, rgba(255,255,255,.85), rgba(248,244,241,.62)) !important;
}
.product-photo img,
.portfolio-photo img{
  filter:saturate(.82) contrast(1) brightness(1.01) !important;
}
.product-card .product-number,
.portfolio-card .product-number{
  color:rgba(83,69,65,.34) !important;
}
.product-bottom .price{
  color:rgba(77,65,61,.48) !important;
}
.product-bottom .view{
  color:rgba(107,76,86,.78) !important;
}
.mood-section{
  background:
    radial-gradient(circle at 14% 18%, rgba(222,198,206,.17), transparent 24%),
    radial-gradient(circle at 82% 16%, rgba(190,210,220,.12), transparent 28%) !important;
}
.mood-stage{
  min-height:620px !important;
}
.mood-stage::before{
  background:
    linear-gradient(180deg, rgba(255,255,255,.96), rgba(249,245,242,.7)),
    radial-gradient(circle at 50% 12%, rgba(220,176,191,.14), transparent 28%),
    radial-gradient(circle at 72% 72%, rgba(186,208,215,.10), transparent 30%),
    linear-gradient(90deg, rgba(53,44,40,.018) 1px, transparent 1px),
    linear-gradient(180deg, rgba(53,44,40,.018) 1px, transparent 1px) !important;
  background-size:auto,auto,auto,20px 20px,20px 20px !important;
}
.mood-arch{
  border-color:rgba(46,38,35,.028) !important;
}
.mood-dot{
  box-shadow:0 0 0 5px rgba(255,255,255,.48), 0 8px 24px rgba(191,158,170,.12) !important;
}
.oracle-kicker{
  color:rgba(39,33,31,.94) !important;
}
.oracle-sub,
.oracle-index,
.readout-label,
.range-labels,
.oracle-foot,
.feeling-total,
.cloud-status{
  color:rgba(70,58,55,.42) !important;
}
.oracle-readout{
  background:rgba(255,255,255,.42) !important;
}
.readout-value,
.oracle-result h3,
.oracle-value,
.feeling-total strong{
  color:rgba(40,34,31,.9) !important;
}
.oracle-meter{
  background:
    linear-gradient(180deg, rgba(255,255,255,.78), rgba(252,248,245,.54)),
    radial-gradient(circle at 18% 18%, rgba(220,171,188,.08), transparent 30%) !important;
}
.oracle-scale span{
  background:rgba(52,43,39,.08) !important;
}
.oracle-panel input[type="range"]{
  border:0 !important;
  background:linear-gradient(90deg,#fbfaf8 0%, #fff 24%, #efd1db 50%, #cfe1e7 74%, #544746 100%) !important;
}
.oracle-panel input[type="range"]::-webkit-slider-thumb{
  border:0 !important;
  background:linear-gradient(180deg,#fff,#f9f4f7) !important;
  box-shadow:0 4px 14px rgba(70,55,57,.08) !important;
}
.oracle-panel input[type="range"]::-moz-range-thumb{
  border:0 !important;
  background:linear-gradient(180deg,#fff,#f9f4f7) !important;
  box-shadow:0 4px 14px rgba(70,55,57,.08) !important;
}
.oracle-send{
  border:0 !important;
  background:
    radial-gradient(circle at 22% 20%, rgba(232,196,208,.46), transparent 30%),
    linear-gradient(90deg, rgba(255,255,255,.95), rgba(246,240,243,.82), rgba(233,241,245,.78)) !important;
  color:rgba(42,35,32,.92) !important;
  box-shadow:0 10px 26px rgba(82,60,67,.06) !important;
}
.oracle-send:hover{
  background:
    radial-gradient(circle at 22% 20%, rgba(232,196,208,.54), transparent 30%),
    linear-gradient(90deg, rgba(255,255,255,.98), rgba(248,243,246,.9), rgba(234,243,247,.86)) !important;
}
.oracle-result{
  background:
    linear-gradient(180deg, rgba(255,255,255,.88), rgba(251,248,246,.62)),
    radial-gradient(circle at 78% 24%, rgba(190,211,219,.10), transparent 32%) !important;
}
.diary-paper,
.log-paper{
  background:
    linear-gradient(90deg, rgba(212,141,162,.08) 0 1px, transparent 1px 100%),
    repeating-linear-gradient(180deg, transparent 0 31px, rgba(50,40,38,.038) 32px),
    rgba(255,255,255,.78) !important;
}
.social-inner{
  border-top-color:rgba(48,39,36,.08) !important;
}
.social-icon{
  border:0 !important;
  background:rgba(255,255,255,.58);
}


/* Personality test entry */
.test-entry-section{
  padding:86px 22px 34px;
}
.test-entry-inner{
  padding-top:34px;
  background:
    radial-gradient(circle at 18% 10%, rgba(212,142,162,.12), transparent 30%),
    radial-gradient(circle at 88% 82%, rgba(183,215,225,.10), transparent 34%);
}
.test-entry-kicker{
  margin:0 0 12px;
  color:rgba(47,41,35,.34);
  font-size:10px;
  letter-spacing:.22em;
  text-transform:uppercase;
}
.test-entry-inner h2{
  margin:0 0 14px;
  color:rgba(40,34,31,.94);
  font-size:26px;
  line-height:1.15;
  font-weight:800;
}
.test-entry-inner p{
  margin:0;
  max-width:320px;
  color:rgba(63,53,49,.62);
  font-size:12px;
  line-height:2;
}
.test-entry-link{
  display:inline-block;
  margin-top:28px;
  padding:13px 0;
  color:rgba(75,54,61,.82);
  font-size:11px;
  letter-spacing:.18em;
  font-weight:800;
  border-bottom:1px solid rgba(75,54,61,.28);
}


/* Diagnosis entry reposition + eerie tone */
.test-entry-section{
  padding: 14px 22px 72px !important;
}
.test-entry-inner{
  padding-top: 16px !important;
  background:
    radial-gradient(circle at 18% 10%, rgba(212,142,162,.09), transparent 28%),
    radial-gradient(circle at 88% 82%, rgba(183,215,225,.08), transparent 32%),
    linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,0)) !important;
}
.test-entry-inner h2{
  letter-spacing: .01em;
}
.test-entry-inner p{
  color: rgba(63,53,49,.68) !important;
}
.test-entry-link{
  color: rgba(76,53,63,.82) !important;
  border-bottom-color: rgba(76,53,63,.22) !important;
}


/* Palette + site map + playful upgrade */
:root{
  --palette-plum:#7f626f;
  --palette-lilac:#88868e;
  --palette-blush:#d5bcb8;
  --palette-rose:#c09a9b;
  --palette-deep:#424552;
  --palette-cloud:#e0dbda;
  --palette-milk:#f4f3f2;
}
body{
  background-image:
    radial-gradient(circle at 10% 12%, rgba(192,154,155,.22), transparent 24%),
    radial-gradient(circle at 82% 16%, rgba(127,98,111,.10), transparent 28%),
    linear-gradient(180deg, #f6f3f1 0%, #f1ece8 100%) !important;
}
.top{
  background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(244,239,236,.5)) !important;
}
.hero .veil{
  background:
    linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.03) 48%, rgba(255,255,255,.9)),
    radial-gradient(circle at 50% 32%, rgba(213,188,184,.16), transparent 30%),
    radial-gradient(circle at 72% 74%, rgba(127,98,111,.10), transparent 32%) !important;
}
.hero-note{
  background:rgba(248,244,242,.68) !important;
}
.hero-line,
.slider-progress span,
.portfolio-progress span{
  background:linear-gradient(90deg, rgba(127,98,111,.75), rgba(192,154,155,.66), rgba(136,134,142,.52)) !important;
}
.product-photo img,
.portfolio-photo img{
  filter:saturate(.86) contrast(.98) brightness(1.02) !important;
}
.section-note,
.product-info p,
.portfolio-note,
.thin-thought,
.log-note,
.social-links a{
  color:rgba(66,69,82,.68) !important;
}
.view,
.social-icon,
.slider-arrow{
  color:rgba(86,71,80,.78) !important;
}

/* Site map */
.map-section{
  padding:74px 22px 24px;
}
.site-map-board{
  position:relative;
  min-height:430px;
  margin-top:18px;
  border-radius:36px;
  overflow:hidden;
  background:
    radial-gradient(circle at 22% 18%, rgba(192,154,155,.18), transparent 25%),
    radial-gradient(circle at 78% 30%, rgba(127,98,111,.12), transparent 26%),
    radial-gradient(circle at 46% 74%, rgba(255,255,255,.44), transparent 28%),
    linear-gradient(180deg, rgba(255,255,255,.76), rgba(244,239,236,.52));
  box-shadow:0 12px 40px rgba(66,69,82,.05);
}
.map-whisper{
  position:absolute;
  left:18px;
  top:16px;
  color:rgba(66,69,82,.36);
  font-size:10px;
  letter-spacing:.24em;
  text-transform:uppercase;
}
.map-fog{
  position:absolute;
  border-radius:999px;
  filter:blur(26px);
  opacity:.62;
  pointer-events:none;
}
.map-fog-a{
  width:140px;
  height:90px;
  left:16%;
  top:10%;
  background:rgba(255,255,255,.56);
}
.map-fog-b{
  width:180px;
  height:96px;
  right:8%;
  bottom:11%;
  background:rgba(213,188,184,.18);
}
.map-node{
  position:absolute;
  display:flex;
  flex-direction:column;
  gap:4px;
  padding:14px 16px;
  min-width:118px;
  border-radius:18px;
  background:rgba(255,255,255,.62);
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  color:rgba(44,39,36,.9);
  transition:transform .28s ease, background .28s ease, box-shadow .28s ease;
  box-shadow:0 10px 24px rgba(66,69,82,.045);
}
.map-node strong{
  font-size:13px;
  line-height:1.25;
  font-weight:800;
}
.map-node em{
  color:rgba(66,69,82,.52);
  font-style:normal;
  font-size:9px;
  letter-spacing:.14em;
  text-transform:uppercase;
}
.map-node:active,
.map-node:hover{
  transform:translateY(-2px) scale(1.01);
  background:rgba(255,255,255,.76);
}
.node-objects{left:18px; top:70px; width:132px;}
.node-mood{right:22px; top:56px; width:124px;}
.node-test{left:50%; top:162px; transform:translateX(-50%); width:140px;}
.node-log{left:22px; bottom:38px; width:148px;}
.node-social{right:24px; bottom:46px; width:132px;}
.node-test:active,
.node-test:hover{transform:translateX(-50%) translateY(-2px) scale(1.01);}
.map-thread{
  position:absolute;
  border-top:1px dashed rgba(127,98,111,.24);
  transform-origin:left center;
  pointer-events:none;
}
.t1{left:126px; top:132px; width:120px; transform:rotate(16deg);}
.t2{right:140px; top:128px; width:102px; transform:rotate(154deg);}
.t3{left:122px; bottom:114px; width:118px; transform:rotate(-14deg);}
.t4{right:130px; bottom:116px; width:110px; transform:rotate(194deg);}

.test-entry-inner{
  background:
    radial-gradient(circle at 22% 12%, rgba(127,98,111,.12), transparent 28%),
    radial-gradient(circle at 82% 72%, rgba(213,188,184,.16), transparent 34%),
    linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,0)) !important;
}
.test-entry-link{
  border-bottom-color:rgba(127,98,111,.24) !important;
}
.social-icon{
  border-color:rgba(127,98,111,.12) !important;
  background:rgba(255,255,255,.58);
}

@media (max-width:430px){
  .site-map-board{min-height:410px}
  .node-objects{width:118px}
  .node-mood{width:112px}
  .node-test{width:124px}
  .node-log{width:136px}
  .node-social{width:116px}
}


/* Floorplan map redesign */
.map-section{
  padding:74px 22px 28px;
}
.floorplan-board{
  position:relative;
  min-height:520px;
  margin-top:18px;
  border-radius:30px;
  overflow:hidden;
  background:
    linear-gradient(90deg, rgba(123,104,96,.08) 1px, transparent 1px),
    linear-gradient(180deg, rgba(123,104,96,.08) 1px, transparent 1px),
    linear-gradient(180deg, rgba(255,255,255,.92), rgba(245,240,236,.76));
  background-size:28px 28px, 28px 28px, auto;
  box-shadow:0 12px 40px rgba(66,69,82,.05);
}
.plan-level,
.plan-caption,
.plan-note{
  position:absolute;
  color:rgba(79,68,62,.46);
  font-size:10px;
  letter-spacing:.16em;
  text-transform:uppercase;
}
.plan-level{ right:18px; top:16px; font-weight:800; color:rgba(79,68,62,.7); }
.plan-caption{ left:18px; top:16px; }
.plan-note-left{ left:22px; bottom:24px; }
.plan-note-right{ right:18px; bottom:24px; }
.plan-shell{
  position:relative;
  width:290px;
  height:370px;
  margin:84px auto 56px;
}
.plan-room{
  position:absolute;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:10px 8px;
  border:2px solid rgba(98,73,58,.88);
  background:rgba(255,255,255,.56);
  color:rgba(52,44,39,.92);
  transition:background .24s ease, transform .24s ease, box-shadow .24s ease;
}
.plan-room:hover,
.plan-room:active{
  background:rgba(255,250,247,.88);
  transform:translateY(-1px);
  box-shadow:0 10px 22px rgba(92,70,60,.08);
}
.plan-room-name{
  font-size:15px;
  line-height:1.25;
  font-weight:800;
}
.plan-room-sub{
  margin-top:6px;
  font-size:9px;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:rgba(79,68,62,.54);
}
.room-objects{
  left:0;
  top:0;
  width:164px;
  height:128px;
}
.room-mood{
  right:0;
  top:0;
  width:82px;
  height:64px;
}
.room-test{
  right:0;
  top:64px;
  width:82px;
  height:112px;
}
.room-log{
  left:0;
  top:176px;
  width:118px;
  height:128px;
}
.room-social{
  right:0;
  top:176px;
  width:118px;
  height:128px;
}
.plan-hall{
  position:absolute;
  border:2px solid rgba(98,73,58,.88);
  background:rgba(255,255,255,.34);
}
.hall-top{
  left:164px;
  top:64px;
  width:44px;
  height:52px;
  border-left:0;
}
.hall-center{
  left:118px;
  top:176px;
  width:54px;
  height:66px;
  border-top:0;
}
.plan-hall::before,
.plan-hall::after{
  content:"";
  position:absolute;
  background:rgba(98,73,58,.88);
}
.hall-top::before{
  left:18px; bottom:-62px; width:2px; height:62px;
}
.hall-top::after{
  left:18px; bottom:-12px; width:44px; height:2px;
}
.hall-center::before{
  left:-48px; top:20px; width:48px; height:2px;
}
.hall-center::after{
  right:-46px; top:20px; width:46px; height:2px;
}
.plan-door{
  position:absolute;
  width:20px;
  height:10px;
  background:linear-gradient(180deg, rgba(245,240,236,1), rgba(245,240,236,1));
  border-top:2px solid rgba(98,73,58,.88);
  border-radius:18px 18px 0 0;
}
.door-objects{ left:136px; top:122px; transform:rotate(90deg); }
.door-mood{ right:74px; top:58px; }
.door-test{ right:74px; top:170px; transform:rotate(180deg); }
.door-log{ left:110px; top:206px; transform:rotate(90deg); }
.door-social{ right:110px; top:206px; transform:rotate(-90deg); }
.plan-stairs{
  position:absolute;
  right:8px;
  top:86px;
  width:52px;
  height:48px;
  background:
    repeating-linear-gradient(90deg,
      rgba(98,73,58,.88) 0 2px,
      transparent 2px 11px);
  opacity:.44;
}
.plan-stairs::before{
  content:"stairs";
  position:absolute;
  left:-2px;
  top:-18px;
  color:rgba(79,68,62,.42);
  font-size:8px;
  letter-spacing:.12em;
  text-transform:uppercase;
}
.plan-balcony{
  position:absolute;
  left:88px;
  bottom:0;
  width:112px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:2px solid rgba(98,73,58,.45);
  color:rgba(79,68,62,.62);
  font-size:10px;
  letter-spacing:.08em;
  text-transform:uppercase;
}
.plan-balcony::before,
.plan-balcony::after{
  content:"";
  position:absolute;
  top:-2px;
  width:22px;
  height:2px;
  background:rgba(98,73,58,.88);
}
.plan-balcony::before{ left:-22px; }
.plan-balcony::after{ right:-22px; }
@media (max-width:430px){
  .floorplan-board{ min-height:500px; }
  .plan-shell{ width:262px; height:344px; margin-top:86px; }
  .room-objects{ width:148px; height:120px; }
  .room-mood{ width:74px; height:60px; }
  .room-test{ width:74px; height:104px; top:60px; }
  .room-log{ width:108px; height:118px; top:164px; }
  .room-social{ width:108px; height:118px; top:164px; }
  .hall-top{ left:148px; top:60px; width:40px; height:48px; }
  .hall-center{ left:108px; top:164px; width:48px; height:60px; }
  .door-objects{ left:121px; top:114px; }
  .door-mood{ right:68px; top:54px; }
  .door-test{ right:68px; top:158px; }
  .door-log{ left:100px; top:190px; }
  .door-social{ right:100px; top:190px; }
  .plan-stairs{ right:6px; top:80px; width:46px; height:44px; }
  .plan-balcony{ left:77px; width:106px; height:36px; }
}


/* Floorplan map 3D refinement */
.floorplan-board{
  min-height:560px;
  background:
    linear-gradient(90deg, rgba(123,104,96,.07) 1px, transparent 1px),
    linear-gradient(180deg, rgba(123,104,96,.07) 1px, transparent 1px),
    radial-gradient(circle at 18% 16%, rgba(255,255,255,.48), transparent 20%),
    linear-gradient(180deg, rgba(255,255,255,.95), rgba(241,235,231,.82));
  background-size:26px 26px, 26px 26px, auto, auto;
  box-shadow:
    0 18px 46px rgba(72,61,56,.08),
    inset 0 1px 0 rgba(255,255,255,.8);
}
.floorplan-board::before{
  content:"";
  position:absolute;
  inset:12px;
  border-radius:22px;
  border:1px solid rgba(136,119,112,.15);
  pointer-events:none;
}
.floorplan-board::after{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 84% 14%, rgba(127,98,111,.08), transparent 18%),
    radial-gradient(circle at 14% 84%, rgba(213,188,184,.10), transparent 24%);
  pointer-events:none;
}
.plan-level{ right:22px; top:18px; font-size:11px; letter-spacing:.2em; }
.plan-caption{ left:22px; top:20px; }
.plan-note-left{ left:24px; bottom:22px; }
.plan-note-right{ right:22px; bottom:22px; }
.plan-shell{
  width:308px;
  height:386px;
  margin:92px auto 62px;
  transform:translateX(2px);
}
.plan-shell::before{
  content:"";
  position:absolute;
  left:18px;
  right:18px;
  bottom:-22px;
  height:28px;
  border-radius:50%;
  background:radial-gradient(ellipse at center, rgba(96,77,69,.18), rgba(96,77,69,0));
  filter:blur(10px);
  pointer-events:none;
}
.plan-room,
.plan-hall,
.plan-balcony{
  --face:#fffdfa;
  --line:rgba(98,73,58,.92);
  --top:#f3ebe6;
  --side:#e2d6cf;
  --depth:12px;
}
.plan-room{
  overflow:visible;
  border:2px solid var(--line);
  background:linear-gradient(180deg, rgba(255,255,255,.98), rgba(252,248,244,.92));
  box-shadow:0 8px 16px rgba(96,77,69,.08);
  isolation:isolate;
}
.plan-room::before,
.plan-room::after,
.plan-hall::before,
.plan-hall::after,
.plan-balcony::before,
.plan-balcony::after{
  content:"";
  position:absolute;
  pointer-events:none;
}
.plan-room::before,
.plan-hall::before,
.plan-balcony::before{
  left:8px;
  right:-2px;
  bottom:calc(var(--depth) * -1);
  height:var(--depth);
  border:2px solid var(--line);
  border-top:0;
  background:linear-gradient(180deg, var(--side), rgba(219,207,198,.94));
  transform:skewX(45deg);
  transform-origin:left top;
  z-index:-1;
}
.plan-room::after,
.plan-hall::after,
.plan-balcony::after{
  top:8px;
  right:calc(var(--depth) * -1);
  bottom:-2px;
  width:var(--depth);
  border:2px solid var(--line);
  border-left:0;
  background:linear-gradient(180deg, rgba(232,223,216,.98), rgba(210,196,186,.94));
  transform:skewY(45deg);
  transform-origin:left top;
  z-index:-1;
}
.plan-room:hover,
.plan-room:active{
  background:linear-gradient(180deg, rgba(255,255,255,1), rgba(255,249,245,.96));
  transform:translate(-1px,-2px);
  box-shadow:0 14px 28px rgba(92,70,60,.12);
}
.plan-room-name{
  font-size:14px;
  letter-spacing:.01em;
}
.plan-room-sub{
  margin-top:5px;
  font-size:8px;
  letter-spacing:.16em;
}
.room-objects{ left:0; top:0; width:174px; height:132px; }
.room-mood{ right:0; top:0; width:88px; height:68px; }
.room-test{ right:0; top:68px; width:88px; height:116px; }
.room-log{ left:0; top:184px; width:124px; height:132px; }
.room-social{ right:0; top:184px; width:124px; height:132px; }
.plan-hall{
  position:absolute;
  border:2px solid var(--line);
  background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(246,238,233,.76));
  box-shadow:0 7px 14px rgba(96,77,69,.06);
  z-index:0;
}
.hall-top{ left:174px; top:68px; width:46px; height:54px; border-left:0; }
.hall-center{ left:124px; top:184px; width:58px; height:70px; border-top:0; }
.hall-top::before{ left:8px; right:-2px; bottom:-12px; height:12px; }
.hall-top::after{ top:8px; right:-12px; bottom:-2px; width:12px; }
.hall-center::before{ left:8px; right:-2px; bottom:-12px; height:12px; }
.hall-center::after{ top:8px; right:-12px; bottom:-2px; width:12px; }
.hall-top > *, .hall-center > *{display:none}
/* corridor connectors */
.hall-top .stub, .hall-center .stub {display:none}
.hall-top:empty::marker, .hall-center:empty::marker {content:"";}
.hall-top-shadow, .hall-center-shadow {display:none;}
.hall-top-vert, .hall-center-h, .hall-center-r {display:none;}
/* use box shadows for connector lines */
.hall-top{ box-shadow: 18px 64px 0 -22px rgba(98,73,58,.92), 18px 64px 0 -20px rgba(255,255,255,.8), 18px 64px 0 -18px rgba(98,73,58,.92), 18px 52px 44px -28px rgba(96,77,69,.06); }
.hall-center{ box-shadow: -52px 22px 0 -27px rgba(98,73,58,.92), -52px 22px 0 -25px rgba(255,255,255,.86), -52px 22px 0 -23px rgba(98,73,58,.92), 56px 22px 0 -27px rgba(98,73,58,.92), 56px 22px 0 -25px rgba(255,255,255,.86), 56px 22px 0 -23px rgba(98,73,58,.92), 0 10px 22px rgba(96,77,69,.06); }
.plan-door{
  width:22px;
  height:12px;
  background:linear-gradient(180deg, rgba(241,235,231,1), rgba(241,235,231,1));
  border-top:2px solid rgba(98,73,58,.92);
  border-radius:20px 20px 0 0;
  box-shadow:0 2px 4px rgba(96,77,69,.04);
}
.door-objects{ left:145px; top:126px; transform:rotate(90deg); }
.door-mood{ right:80px; top:62px; }
.door-test{ right:80px; top:178px; transform:rotate(180deg); }
.door-log{ left:116px; top:214px; transform:rotate(90deg); }
.door-social{ right:116px; top:214px; transform:rotate(-90deg); }
.plan-stairs{
  right:10px;
  top:92px;
  width:56px;
  height:52px;
  border:2px solid rgba(98,73,58,.78);
  background:
    linear-gradient(180deg, rgba(255,255,255,.9), rgba(245,239,234,.7)),
    repeating-linear-gradient(90deg, rgba(98,73,58,.82) 0 2px, transparent 2px 11px);
  background-blend-mode:normal;
  box-shadow:0 8px 16px rgba(96,77,69,.06);
}
.plan-stairs::after{
  content:"";
  position:absolute;
  top:8px;
  right:-12px;
  bottom:-2px;
  width:12px;
  border:2px solid rgba(98,73,58,.78);
  border-left:0;
  background:linear-gradient(180deg, rgba(226,214,207,.96), rgba(208,195,185,.94));
  transform:skewY(45deg);
  transform-origin:left top;
}
.plan-balcony{
  left:96px;
  bottom:0;
  width:116px;
  height:42px;
  border:2px solid rgba(98,73,58,.54);
  background:linear-gradient(180deg, rgba(255,255,255,.82), rgba(244,238,233,.74));
  box-shadow:0 7px 14px rgba(96,77,69,.05);
}
.plan-balcony::before{ left:8px; right:-2px; bottom:-12px; height:12px; border-color:rgba(98,73,58,.54); border-top:0; }
.plan-balcony::after{ top:8px; right:-12px; bottom:-2px; width:12px; border-color:rgba(98,73,58,.54); border-left:0; }
.plan-balcony{
  color:rgba(79,68,62,.72);
  font-size:10px;
  letter-spacing:.12em;
}
.plan-balcony span{ position:relative; z-index:2; }
.plan-balcony::marker{ content:""; }
.plan-balcony::before{ content:""; }
.plan-balcony::after{ content:""; }
.plan-note{ letter-spacing:.18em; }
@media (max-width:430px){
  .floorplan-board{ min-height:532px; }
  .plan-shell{ width:278px; height:356px; margin-top:92px; }
  .room-objects{ width:158px; height:122px; }
  .room-mood{ width:80px; height:64px; }
  .room-test{ width:80px; height:108px; top:64px; }
  .room-log{ width:114px; height:122px; top:172px; }
  .room-social{ width:114px; height:122px; top:172px; }
  .hall-top{ left:158px; top:64px; width:42px; height:50px; }
  .hall-center{ left:114px; top:172px; width:54px; height:64px; }
  .hall-top{ box-shadow: 17px 58px 0 -21px rgba(98,73,58,.92), 17px 58px 0 -19px rgba(255,255,255,.8), 17px 58px 0 -17px rgba(98,73,58,.92), 18px 48px 40px -28px rgba(96,77,69,.06); }
  .hall-center{ box-shadow: -48px 20px 0 -25px rgba(98,73,58,.92), -48px 20px 0 -23px rgba(255,255,255,.86), -48px 20px 0 -21px rgba(98,73,58,.92), 50px 20px 0 -25px rgba(98,73,58,.92), 50px 20px 0 -23px rgba(255,255,255,.86), 50px 20px 0 -21px rgba(98,73,58,.92), 0 10px 22px rgba(96,77,69,.06); }
  .door-objects{ left:130px; top:116px; }
  .door-mood{ right:72px; top:58px; }
  .door-test{ right:72px; top:166px; }
  .door-log{ left:106px; top:200px; }
  .door-social{ right:106px; top:200px; }
  .plan-stairs{ right:8px; top:88px; width:50px; height:48px; }
  .plan-balcony{ left:84px; width:108px; height:38px; }
}


/* Floorplan map worldview refinement */
.map-section{
  padding:74px 22px 28px;
}
.floorplan-board{
  min-height:590px;
  border-radius:40px;
  background:
    radial-gradient(circle at 16% 14%, rgba(255,255,255,.55), transparent 18%),
    radial-gradient(circle at 82% 20%, rgba(196,162,171,.16), transparent 20%),
    radial-gradient(circle at 28% 84%, rgba(138,121,133,.12), transparent 24%),
    linear-gradient(180deg, rgba(253,250,247,.98), rgba(240,233,229,.92));
  background-size:auto;
  box-shadow:
    0 22px 56px rgba(72,61,56,.08),
    inset 0 1px 0 rgba(255,255,255,.84);
}
.floorplan-board::before{
  inset:14px;
  border-radius:30px;
  border:1px solid rgba(136,119,112,.10);
}
.floorplan-board::after{
  background:
    radial-gradient(circle at 84% 14%, rgba(127,98,111,.08), transparent 18%),
    radial-gradient(circle at 14% 84%, rgba(213,188,184,.08), transparent 24%),
    radial-gradient(circle at 56% 46%, rgba(255,255,255,.20), transparent 22%);
}
.plan-level,
.plan-caption,
.plan-note{
  color:rgba(84,69,74,.54);
}
.plan-level{ right:24px; top:20px; }
.plan-caption{ left:24px; top:20px; }
.plan-note-left{ left:24px; bottom:26px; }
.plan-note-right{ right:24px; bottom:26px; }
.plan-shell{
  width:324px;
  height:410px;
  margin:96px auto 62px;
  transform:none;
}
.plan-shell::before{
  left:26px;
  right:26px;
  bottom:-18px;
  height:34px;
  background:radial-gradient(ellipse at center, rgba(96,77,69,.12), rgba(96,77,69,0));
}
.plan-room,
.plan-hall,
.plan-balcony{
  --line:rgba(103,79,67,.92);
  --side:#e4d8d0;
}
.plan-room{
  padding:14px 10px;
  background:
    radial-gradient(circle at 24% 18%, rgba(255,255,255,.36), transparent 22%),
    linear-gradient(180deg, rgba(255,255,255,.98), rgba(252,248,244,.94));
}
.plan-room-name{
  font-size:14px;
  line-height:1.28;
  font-weight:800;
  letter-spacing:.01em;
  word-break:keep-all;
}
.plan-room-sub{
  margin-top:5px;
  font-size:8px;
  line-height:1.4;
  letter-spacing:.18em;
  color:rgba(92,76,80,.54);
}
.room-objects{ left:0; top:0; width:182px; height:140px; }
.room-mood{ right:0; top:0; width:94px; height:78px; }
.room-test{ right:0; top:78px; width:94px; height:124px; }
.room-log{ left:0; top:202px; width:132px; height:140px; }
.room-social{ right:0; top:202px; width:132px; height:140px; }
.hall-top{ left:182px; top:78px; width:48px; height:58px; border-left:0; }
.hall-center{ left:132px; top:202px; width:60px; height:74px; border-top:0; }
.hall-top{ box-shadow: 18px 68px 0 -24px rgba(103,79,67,.92), 18px 68px 0 -22px rgba(255,255,255,.84), 18px 68px 0 -20px rgba(103,79,67,.92), 18px 54px 40px -28px rgba(96,77,69,.05); }
.hall-center{ box-shadow: -56px 24px 0 -29px rgba(103,79,67,.92), -56px 24px 0 -27px rgba(255,255,255,.86), -56px 24px 0 -25px rgba(103,79,67,.92), 60px 24px 0 -29px rgba(103,79,67,.92), 60px 24px 0 -27px rgba(255,255,255,.86), 60px 24px 0 -25px rgba(103,79,67,.92), 0 10px 22px rgba(96,77,69,.05); }
.plan-door{ width:22px; height:12px; }
.door-objects{ left:152px; top:134px; transform:rotate(90deg); }
.door-mood{ right:84px; top:72px; }
.door-test{ right:84px; top:196px; transform:rotate(180deg); }
.door-log{ left:124px; top:234px; transform:rotate(90deg); }
.door-social{ right:124px; top:234px; transform:rotate(-90deg); }
.plan-stairs{
  right:12px;
  top:104px;
  width:58px;
  height:56px;
}
.plan-balcony{
  left:104px;
  bottom:0;
  width:120px;
  height:44px;
  font-size:10px;
  letter-spacing:.16em;
}
.plan-balcony::before{ left:8px; right:-2px; bottom:-12px; height:12px; }
.plan-balcony::after{ top:8px; right:-12px; bottom:-2px; width:12px; }
.plan-charm{
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  min-width:30px;
  height:30px;
  padding:0 8px;
  border-radius:999px;
  color:rgba(92,76,80,.66);
  font-size:9px;
  letter-spacing:.16em;
  text-transform:uppercase;
  background:rgba(255,255,255,.46);
  box-shadow:0 8px 18px rgba(92,76,80,.05);
  pointer-events:none;
}
.charm-lamb{ left:-6px; bottom:94px; }
.charm-ribbon{ right:-8px; top:28px; }
.charm-bottle{ right:-6px; bottom:100px; }
.charm-star{
  left:200px;
  top:-10px;
  min-width:auto;
  width:24px;
  height:24px;
  font-size:14px;
  color:rgba(170,139,152,.72);
}
@media (max-width:430px){
  .floorplan-board{ min-height:548px; }
  .plan-shell{ width:282px; height:364px; margin-top:96px; }
  .plan-room{ padding:12px 8px; }
  .plan-room-name{ font-size:13px; }
  .plan-room-sub{ font-size:7px; }
  .room-objects{ width:160px; height:126px; }
  .room-mood{ width:82px; height:70px; }
  .room-test{ width:82px; height:112px; top:70px; }
  .room-log{ width:116px; height:126px; top:182px; }
  .room-social{ width:116px; height:126px; top:182px; }
  .hall-top{ left:160px; top:70px; width:44px; height:52px; }
  .hall-center{ left:116px; top:182px; width:54px; height:66px; }
  .hall-top{ box-shadow: 16px 60px 0 -22px rgba(103,79,67,.92), 16px 60px 0 -20px rgba(255,255,255,.84), 16px 60px 0 -18px rgba(103,79,67,.92), 18px 52px 38px -28px rgba(96,77,69,.05); }
  .hall-center{ box-shadow: -48px 22px 0 -26px rgba(103,79,67,.92), -48px 22px 0 -24px rgba(255,255,255,.86), -48px 22px 0 -22px rgba(103,79,67,.92), 52px 22px 0 -26px rgba(103,79,67,.92), 52px 22px 0 -24px rgba(255,255,255,.86), 52px 22px 0 -22px rgba(103,79,67,.92), 0 10px 22px rgba(96,77,69,.05); }
  .door-objects{ left:131px; top:120px; }
  .door-mood{ right:72px; top:64px; }
  .door-test{ right:72px; top:176px; }
  .door-log{ left:108px; top:212px; }
  .door-social{ right:108px; top:212px; }
  .plan-stairs{ right:8px; top:94px; width:50px; height:50px; }
  .plan-balcony{ left:90px; width:104px; height:38px; }
  .charm-lamb{ left:-4px; bottom:86px; }
  .charm-ribbon{ right:-4px; top:26px; }
  .charm-bottle{ right:-4px; bottom:92px; }
  .charm-star{ left:174px; top:-10px; }
}


/* Minimal floorplan UI refinement */
.floorplan-board--minimal{
  min-height: 540px;
  border-radius: 34px;
  background:
    radial-gradient(circle at 18% 14%, rgba(255,255,255,.52), transparent 18%),
    radial-gradient(circle at 82% 20%, rgba(196,162,171,.10), transparent 20%),
    linear-gradient(180deg, rgba(252,249,246,.98), rgba(241,234,229,.94));
  box-shadow: 0 18px 46px rgba(72,61,56,.07), inset 0 1px 0 rgba(255,255,255,.84);
}
.floorplan-board--minimal::before,
.floorplan-board--minimal::after,
.floorplan-board--minimal .plan-charm,
.floorplan-board--minimal .plan-note,
.floorplan-board--minimal .plan-level,
.floorplan-board--minimal .plan-caption{display:none !important;}
.plan-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:22px 24px 0;
  color:rgba(84,69,74,.48);
  font-size:10px;
  letter-spacing:.18em;
  text-transform:uppercase;
}
.plan-shell--minimal{
  position:relative;
  width:308px;
  height:376px;
  margin:44px auto 78px;
}
.plan-shell--minimal::before{
  content:"";
  position:absolute;
  left:28px;
  right:28px;
  bottom:-22px;
  height:28px;
  border-radius:50%;
  background:radial-gradient(ellipse at center, rgba(96,77,69,.10), rgba(96,77,69,0));
  pointer-events:none;
}
.floorplan-board--minimal .plan-room,
.floorplan-board--minimal .plan-core,
.floorplan-board--minimal .plan-stairs,
.floorplan-board--minimal .plan-balcony--minimal{
  box-sizing:border-box;
}
.floorplan-board--minimal .plan-room{
  position:absolute;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:14px 10px;
  border:2px solid rgba(103,79,67,.92);
  background:linear-gradient(180deg, rgba(255,255,255,.97), rgba(251,247,243,.95));
  color:rgba(52,44,39,.92);
  text-align:center;
  box-shadow:0 8px 18px rgba(96,77,69,.04);
  transition:transform .22s ease, background .22s ease, box-shadow .22s ease;
}
.floorplan-board--minimal .plan-room:hover,
.floorplan-board--minimal .plan-room:active{
  transform:translateY(-1px);
  background:linear-gradient(180deg, rgba(255,255,255,1), rgba(255,250,247,.98));
  box-shadow:0 12px 24px rgba(96,77,69,.07);
}
.floorplan-board--minimal .plan-room-name{
  font-size:14px;
  line-height:1.35;
  font-weight:800;
  letter-spacing:.01em;
  white-space:normal;
  word-break:keep-all;
}
.floorplan-board--minimal .plan-room-sub{
  margin-top:6px;
  font-size:8px;
  line-height:1.4;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:rgba(92,76,80,.52);
}
.floorplan-board--minimal .room-objects{ left:0; top:0; width:176px; height:132px; }
.floorplan-board--minimal .room-mood{ right:0; top:0; width:86px; height:74px; }
.floorplan-board--minimal .room-test{ right:0; top:74px; width:86px; height:112px; }
.floorplan-board--minimal .room-log{ left:0; top:186px; width:126px; height:126px; }
.floorplan-board--minimal .room-social{ right:0; top:186px; width:126px; height:126px; }
.floorplan-board--minimal .plan-core{
  position:absolute;
  border:2px solid rgba(103,79,67,.92);
  background:rgba(255,255,255,.58);
}
.floorplan-board--minimal .core-a{
  left:176px;
  top:74px;
  width:44px;
  height:52px;
  border-left:0;
}
.floorplan-board--minimal .core-b{
  left:126px;
  top:186px;
  width:50px;
  height:62px;
  border-top:0;
}
.floorplan-board--minimal .core-a::before{
  content:"";
  position:absolute;
  left:18px;
  top:52px;
  width:2px;
  height:60px;
  background:rgba(103,79,67,.92);
}
.floorplan-board--minimal .core-b::before,
.floorplan-board--minimal .core-b::after{
  content:"";
  position:absolute;
  top:20px;
  height:2px;
  background:rgba(103,79,67,.92);
}
.floorplan-board--minimal .core-b::before{ left:-50px; width:50px; }
.floorplan-board--minimal .core-b::after{ right:-50px; width:50px; }
.floorplan-board--minimal .plan-door{
  position:absolute;
  width:20px;
  height:10px;
  background:rgba(245,239,234,1);
  border-top:2px solid rgba(103,79,67,.92);
  border-radius:18px 18px 0 0;
}
.floorplan-board--minimal .door-objects{ left:146px; top:126px; transform:rotate(90deg); }
.floorplan-board--minimal .door-mood{ right:78px; top:68px; }
.floorplan-board--minimal .door-test{ right:78px; top:180px; transform:rotate(180deg); }
.floorplan-board--minimal .door-log{ left:118px; top:214px; transform:rotate(90deg); }
.floorplan-board--minimal .door-social{ right:118px; top:214px; transform:rotate(-90deg); }
.floorplan-board--minimal .plan-stairs{
  position:absolute;
  right:10px;
  top:94px;
  width:50px;
  height:48px;
  border:2px solid rgba(103,79,67,.72);
  background:
    linear-gradient(180deg, rgba(255,255,255,.88), rgba(245,239,234,.72)),
    repeating-linear-gradient(90deg, rgba(103,79,67,.72) 0 2px, transparent 2px 10px);
}
.floorplan-board--minimal .plan-balcony--minimal{
  position:absolute;
  left:98px;
  bottom:18px;
  width:112px;
  height:28px;
  border:2px solid rgba(103,79,67,.62);
  border-top:0;
  border-radius:0 0 14px 14px;
  background:rgba(255,255,255,.42);
}
.floorplan-board--minimal .plan-balcony-label{
  position:absolute;
  left:0;
  right:0;
  bottom:-14px;
  text-align:center;
  color:rgba(84,69,74,.54);
  font-size:9px;
  letter-spacing:.18em;
  text-transform:uppercase;
}
@media (max-width:430px){
  .floorplan-board--minimal{ min-height:512px; }
  .plan-head{ padding:20px 20px 0; font-size:9px; }
  .plan-shell--minimal{ width:278px; height:344px; margin:42px auto 76px; }
  .floorplan-board--minimal .plan-room-name{ font-size:13px; }
  .floorplan-board--minimal .plan-room-sub{ font-size:7px; }
  .floorplan-board--minimal .room-objects{ width:156px; height:122px; }
  .floorplan-board--minimal .room-mood{ width:80px; height:68px; }
  .floorplan-board--minimal .room-test{ width:80px; height:104px; top:68px; }
  .floorplan-board--minimal .room-log{ width:114px; height:118px; top:172px; }
  .floorplan-board--minimal .room-social{ width:114px; height:118px; top:172px; }
  .floorplan-board--minimal .core-a{ left:156px; top:68px; width:40px; height:48px; }
  .floorplan-board--minimal .core-a::before{ left:16px; top:48px; height:56px; }
  .floorplan-board--minimal .core-b{ left:114px; top:172px; width:42px; height:58px; }
  .floorplan-board--minimal .core-b::before{ left:-42px; width:42px; }
  .floorplan-board--minimal .core-b::after{ right:-42px; width:42px; }
  .floorplan-board--minimal .door-objects{ left:128px; top:116px; }
  .floorplan-board--minimal .door-mood{ right:72px; top:62px; }
  .floorplan-board--minimal .door-test{ right:72px; top:166px; }
  .floorplan-board--minimal .door-log{ left:106px; top:198px; }
  .floorplan-board--minimal .door-social{ right:106px; top:198px; }
  .floorplan-board--minimal .plan-stairs{ right:10px; top:86px; width:46px; height:42px; }
  .floorplan-board--minimal .plan-balcony--minimal{ left:88px; width:100px; bottom:14px; }
  .floorplan-board--minimal .plan-balcony-label{ bottom:-12px; font-size:8px; }
}


/* Refined perspective floorplan */
.floorplan-board--minimal{
  min-height: 556px;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(255,255,255,.985), rgba(251,251,251,.97));
  box-shadow: 0 18px 42px rgba(46,42,48,.05), inset 0 1px 0 rgba(255,255,255,.92);
}
.floorplan-board--minimal .plan-head{
  padding: 22px 26px 0;
  color: rgba(66,63,70,.42);
  font-size: 10px;
  letter-spacing: .16em;
}
.floorplan-board--minimal .plan-shell--minimal{
  width: 316px;
  height: 392px;
  margin: 42px auto 88px;
  transform: perspective(1200px) rotateX(13deg) rotateZ(-8deg) translateZ(0);
  transform-style: preserve-3d;
}
.floorplan-board--minimal .plan-shell--minimal::before{
  left: 34px;
  right: 34px;
  bottom: -30px;
  height: 22px;
  background: radial-gradient(ellipse at center, rgba(38,34,41,.10), rgba(38,34,41,0));
  filter: blur(6px);
}
.floorplan-board--minimal .plan-room,
.floorplan-board--minimal .plan-core,
.floorplan-board--minimal .plan-stairs,
.floorplan-board--minimal .plan-balcony--minimal,
.floorplan-board--minimal .plan-door,
.floorplan-board--minimal .plan-balcony-label{
  transform-style: preserve-3d;
}
.floorplan-board--minimal .plan-room,
.floorplan-board--minimal .plan-core,
.floorplan-board--minimal .plan-stairs,
.floorplan-board--minimal .plan-balcony--minimal{
  border-color: rgba(60,56,63,.82);
}
.floorplan-board--minimal .plan-room{
  padding: 14px 10px;
  border: 1.5px solid rgba(60,56,63,.82);
  background: linear-gradient(180deg, rgba(255,255,255,.99), rgba(254,254,254,.97));
  box-shadow: 0 8px 18px rgba(40,36,42,.035);
}
.floorplan-board--minimal .plan-room::before,
.floorplan-board--minimal .plan-room::after,
.floorplan-board--minimal .plan-core::before,
.floorplan-board--minimal .plan-core::after,
.floorplan-board--minimal .plan-stairs::before,
.floorplan-board--minimal .plan-stairs::after,
.floorplan-board--minimal .plan-balcony--minimal::before,
.floorplan-board--minimal .plan-balcony--minimal::after{
  content: "";
  position: absolute;
  pointer-events: none;
}
.floorplan-board--minimal .plan-room::before,
.floorplan-board--minimal .plan-core::before,
.floorplan-board--minimal .plan-stairs::before,
.floorplan-board--minimal .plan-balcony--minimal::before{
  left: 6px;
  right: -1px;
  bottom: -9px;
  height: 9px;
  border: 1.5px solid rgba(60,56,63,.52);
  border-top: 0;
  background: linear-gradient(180deg, rgba(239,241,245,.92), rgba(232,235,239,.88));
  transform: skewX(45deg);
  transform-origin: left top;
  z-index: -1;
}
.floorplan-board--minimal .plan-room::after,
.floorplan-board--minimal .plan-core::after,
.floorplan-board--minimal .plan-stairs::after,
.floorplan-board--minimal .plan-balcony--minimal::after{
  top: 6px;
  right: -9px;
  bottom: -1px;
  width: 9px;
  border: 1.5px solid rgba(60,56,63,.52);
  border-left: 0;
  background: linear-gradient(180deg, rgba(233,236,241,.96), rgba(224,228,233,.90));
  transform: skewY(45deg);
  transform-origin: left top;
  z-index: -1;
}
.floorplan-board--minimal .plan-room:hover,
.floorplan-board--minimal .plan-room:active{
  transform: translate3d(0,-2px,18px);
  background: linear-gradient(180deg, rgba(255,255,255,1), rgba(252,252,252,.98));
  box-shadow: 0 14px 28px rgba(40,36,42,.06);
}
.floorplan-board--minimal .plan-room-name{
  font-size: 13px;
  line-height: 1.36;
  color: rgba(36,34,39,.92);
  letter-spacing: .01em;
}
.floorplan-board--minimal .plan-room-sub{
  margin-top: 6px;
  font-size: 7px;
  line-height: 1.45;
  letter-spacing: .22em;
  color: rgba(92,94,102,.48);
}
.floorplan-board--minimal .room-objects{ left:0; top:0; width:178px; height:134px; }
.floorplan-board--minimal .room-mood{ right:0; top:0; width:88px; height:76px; }
.floorplan-board--minimal .room-test{ right:0; top:76px; width:88px; height:116px; }
.floorplan-board--minimal .room-log{ left:0; top:192px; width:128px; height:130px; }
.floorplan-board--minimal .room-social{ right:0; top:192px; width:128px; height:130px; }
.floorplan-board--minimal .plan-core{
  position: absolute;
  border: 1.5px solid rgba(60,56,63,.82);
  background: linear-gradient(180deg, rgba(255,255,255,.90), rgba(248,249,251,.84));
}
.floorplan-board--minimal .core-a{ left:178px; top:76px; width:44px; height:54px; border-left:0; }
.floorplan-board--minimal .core-b{ left:128px; top:192px; width:50px; height:64px; border-top:0; }
.floorplan-board--minimal .core-a::before{ left:18px; top:54px; width:1.5px; height:62px; background: rgba(60,56,63,.82); border:0; transform:none; }
.floorplan-board--minimal .core-a::after{ top:6px; right:-9px; bottom:-1px; width:9px; }
.floorplan-board--minimal .core-b::before{ left:-50px; top:20px; width:50px; height:1.5px; background: rgba(60,56,63,.82); border:0; transform:none; }
.floorplan-board--minimal .core-b::after{ right:-50px; top:20px; width:50px; height:1.5px; background: rgba(60,56,63,.82); border:0; transform:none; }
.floorplan-board--minimal .plan-door{
  width: 18px;
  height: 9px;
  background: rgba(255,255,255,.96);
  border-top: 1.5px solid rgba(60,56,63,.82);
  border-radius: 18px 18px 0 0;
  z-index: 3;
}
.floorplan-board--minimal .door-objects{ left:148px; top:128px; transform: rotate(90deg); }
.floorplan-board--minimal .door-mood{ right:79px; top:70px; }
.floorplan-board--minimal .door-test{ right:79px; top:186px; transform: rotate(180deg); }
.floorplan-board--minimal .door-log{ left:120px; top:220px; transform: rotate(90deg); }
.floorplan-board--minimal .door-social{ right:120px; top:220px; transform: rotate(-90deg); }
.floorplan-board--minimal .plan-stairs{
  position: absolute;
  right: 8px;
  top: 96px;
  width: 54px;
  height: 50px;
  border: 1.5px solid rgba(60,56,63,.62);
  background:
    linear-gradient(180deg, rgba(255,255,255,.95), rgba(249,249,250,.86)),
    repeating-linear-gradient(90deg, rgba(60,56,63,.38) 0 1.5px, transparent 1.5px 10px);
}
.floorplan-board--minimal .plan-balcony--minimal{
  position: absolute;
  left: 100px;
  bottom: 22px;
  width: 114px;
  height: 24px;
  border: 1.5px solid rgba(60,56,63,.58);
  border-top: 0;
  border-radius: 0 0 14px 14px;
  background: rgba(255,255,255,.38);
}
.floorplan-board--minimal .plan-balcony-label{
  position: absolute;
  left: 0;
  right: 0;
  bottom: -28px;
  text-align: center;
  color: rgba(66,63,70,.50);
  font-size: 8px;
  letter-spacing: .22em;
  text-transform: uppercase;
}
@media (max-width:430px){
  .floorplan-board--minimal{ min-height: 524px; }
  .floorplan-board--minimal .plan-head{ padding: 20px 22px 0; font-size: 9px; }
  .floorplan-board--minimal .plan-shell--minimal{
    width: 286px;
    height: 356px;
    margin: 40px auto 84px;
    transform: perspective(1000px) rotateX(12deg) rotateZ(-7deg);
  }
  .floorplan-board--minimal .plan-room-name{ font-size: 12px; }
  .floorplan-board--minimal .plan-room-sub{ font-size: 7px; }
  .floorplan-board--minimal .room-objects{ width: 160px; height: 124px; }
  .floorplan-board--minimal .room-mood{ width: 80px; height: 70px; }
  .floorplan-board--minimal .room-test{ width: 80px; height: 106px; top: 70px; }
  .floorplan-board--minimal .room-log{ width: 116px; height: 120px; top: 176px; }
  .floorplan-board--minimal .room-social{ width: 116px; height: 120px; top: 176px; }
  .floorplan-board--minimal .core-a{ left:160px; top:70px; width:40px; height:50px; }
  .floorplan-board--minimal .core-a::before{ left:16px; top:50px; height:56px; }
  .floorplan-board--minimal .core-b{ left:116px; top:176px; width:44px; height:58px; }
  .floorplan-board--minimal .core-b::before{ left:-44px; width:44px; top:18px; }
  .floorplan-board--minimal .core-b::after{ right:-44px; width:44px; top:18px; }
  .floorplan-board--minimal .door-objects{ left:130px; top:118px; }
  .floorplan-board--minimal .door-mood{ right:71px; top:64px; }
  .floorplan-board--minimal .door-test{ right:71px; top:170px; }
  .floorplan-board--minimal .door-log{ left:108px; top:204px; }
  .floorplan-board--minimal .door-social{ right:108px; top:204px; }
  .floorplan-board--minimal .plan-stairs{ right:7px; top:88px; width:48px; height:44px; }
  .floorplan-board--minimal .plan-balcony--minimal{ left:90px; width:102px; bottom:18px; }
  .floorplan-board--minimal .plan-balcony-label{ bottom:-24px; }
}


/* Clue house map */
.clue-plan-board{
  position:relative;
  min-height:590px;
  border-radius:34px;
  background:linear-gradient(180deg, rgba(255,255,255,.99), rgba(252,252,252,.985));
  box-shadow:0 18px 42px rgba(34,31,37,.05), inset 0 1px 0 rgba(255,255,255,.92);
  overflow:hidden;
}
.clue-plan-board::before{
  content:"";
  position:absolute;
  inset:14px;
  border-radius:26px;
  border:1px solid rgba(38,34,39,.06);
  pointer-events:none;
}
.clue-plan-meta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:22px 24px 0;
  color:rgba(58,54,61,.42);
  font-size:10px;
  letter-spacing:.18em;
  text-transform:uppercase;
}
.clue-plan-shell{
  position:relative;
  width:314px;
  height:430px;
  margin:36px auto 86px;
}
.clue-plan-shell::before{
  content:"";
  position:absolute;
  left:38px;
  right:38px;
  bottom:-24px;
  height:24px;
  background:radial-gradient(ellipse at center, rgba(38,34,39,.08), rgba(38,34,39,0));
  filter:blur(8px);
  pointer-events:none;
}
.clue-room,
.clue-corridor,
.clue-stairs,
.clue-balcony,
.clue-link{
  position:absolute;
  box-sizing:border-box;
  background:rgba(255,255,255,.92);
}
.clue-room{
  display:flex;
  align-items:center;
  justify-content:center;
  padding:14px 10px;
  border:1.35px solid rgba(35,32,39,.86);
  color:rgba(33,31,37,.94);
  text-align:center;
  text-decoration:none;
  transition:background .22s ease, transform .22s ease, box-shadow .22s ease;
}
.clue-room:hover,
.clue-room:active{
  background:rgba(252,250,253,.98);
  transform:translateY(-1px);
  box-shadow:0 10px 18px rgba(35,32,39,.05);
}
.clue-room-name{
  font-size:14px;
  line-height:1.45;
  font-weight:800;
  letter-spacing:.01em;
}
.room-objects{ left:10px; top:32px; width:166px; height:116px; }
.room-mood{ right:20px; top:34px; width:92px; height:68px; }
.room-test{ right:0; top:112px; width:112px; height:128px; }
.room-log{ left:24px; top:242px; width:114px; height:122px; }
.room-social{ right:24px; top:270px; width:128px; height:94px; }
.clue-corridor{
  border:1.35px solid rgba(35,32,39,.86);
}
.corridor-top{ left:176px; top:58px; width:48px; height:48px; border-left:0; }
.corridor-mid{ left:138px; top:214px; width:52px; height:52px; border-top:0; }
.clue-link{
  background:rgba(35,32,39,.86);
}
.link-down{ left:197px; top:106px; width:1.35px; height:108px; }
.link-left{ left:90px; top:234px; width:48px; height:1.35px; }
.link-right{ left:190px; top:234px; width:58px; height:1.35px; }
.clue-door{
  position:absolute;
  width:18px;
  height:9px;
  background:rgba(255,255,255,1);
  border-top:1.35px solid rgba(35,32,39,.86);
  border-radius:18px 18px 0 0;
  z-index:3;
}
.door-objects{ left:146px; top:142px; transform:rotate(90deg); }
.door-mood{ left:214px; top:96px; }
.door-test{ left:215px; top:236px; transform:rotate(180deg); }
.door-log{ left:128px; top:230px; transform:rotate(90deg); }
.door-social{ left:236px; top:230px; transform:rotate(-90deg); }
.clue-stairs{
  right:22px;
  top:146px;
  width:44px;
  height:40px;
  border:1.15px solid rgba(35,32,39,.62);
  background:
    linear-gradient(180deg, rgba(255,255,255,.94), rgba(250,250,251,.88)),
    repeating-linear-gradient(90deg, rgba(35,32,39,.40) 0 1.15px, transparent 1.15px 8px);
}
.clue-balcony{
  position:absolute;
  left:110px;
  bottom:26px;
  width:96px;
  height:22px;
  border:1.25px solid rgba(35,32,39,.58);
  border-top:0;
  border-radius:0 0 12px 12px;
  background:rgba(255,255,255,.52);
}
.clue-balcony-label{
  position:absolute;
  left:0;
  right:0;
  bottom:-28px;
  text-align:center;
  color:rgba(58,54,61,.48);
  font-size:8px;
  letter-spacing:.22em;
  text-transform:uppercase;
}
.clue-ornament{
  position:absolute;
  fill:none;
  stroke:rgba(40,36,42,.82);
  stroke-width:1.45;
  stroke-linecap:round;
  stroke-linejoin:round;
  pointer-events:none;
}
.ornament-star{ width:70px; height:70px; left:122px; top:-2px; }
.ornament-vine{ width:74px; height:118px; right:6px; top:8px; }
.ornament-candle-left{ width:56px; height:96px; left:-6px; top:128px; }
.ornament-candle-right{ width:56px; height:96px; right:-8px; top:246px; }
.ornament-ribbon{ width:96px; height:56px; left:106px; bottom:62px; }
@media (max-width:430px){
  .clue-plan-board{ min-height:566px; }
  .clue-plan-meta{ padding:20px 20px 0; font-size:9px; }
  .clue-plan-shell{ width:286px; height:412px; margin:34px auto 84px; }
  .clue-room-name{ font-size:13px; }
  .room-objects{ left:6px; top:38px; width:150px; height:108px; }
  .room-mood{ right:16px; top:40px; width:82px; height:64px; }
  .room-test{ right:0; top:112px; width:102px; height:118px; }
  .room-log{ left:18px; top:236px; width:106px; height:114px; }
  .room-social{ right:18px; top:262px; width:118px; height:88px; }
  .corridor-top{ left:156px; top:60px; width:44px; height:44px; }
  .corridor-mid{ left:124px; top:206px; width:50px; height:50px; }
  .link-down{ left:175px; top:104px; width:1.35px; height:102px; }
  .link-left{ left:74px; top:225px; width:50px; height:1.35px; }
  .link-right{ left:174px; top:225px; width:56px; height:1.35px; }
  .door-objects{ left:126px; top:140px; }
  .door-mood{ left:190px; top:94px; }
  .door-test{ left:191px; top:226px; }
  .door-log{ left:114px; top:221px; }
  .door-social{ left:218px; top:221px; }
  .clue-stairs{ right:18px; top:144px; width:40px; height:36px; }
  .clue-balcony{ left:96px; bottom:28px; width:90px; }
  .clue-balcony-label{ bottom:-26px; }
  .ornament-star{ width:62px; height:62px; left:112px; top:0; }
  .ornament-vine{ width:64px; height:104px; right:4px; top:14px; }
  .ornament-candle-left{ width:48px; height:84px; left:-2px; top:132px; }
  .ornament-candle-right{ width:48px; height:84px; right:-2px; top:252px; }
  .ornament-ribbon{ width:88px; height:50px; left:96px; bottom:64px; }
}


/* Premium diagnosis entry */
.test-entry-section{
  position:relative;
  padding: 78px 22px 98px !important;
}
.test-entry-section::before{
  content:"";
  display:block;
  width:100%;
  max-width:560px;
  height:1px;
  margin:0 auto 28px;
  background:linear-gradient(90deg, rgba(90,79,88,0), rgba(90,79,88,.14), rgba(90,79,88,0));
}
.test-entry-inner{
  position:relative;
  padding-top: 0 !important;
  background:none !important;
}
.test-entry-headline-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  margin-bottom:16px;
}
.test-entry-kicker{
  margin:0 !important;
  color:rgba(58,54,61,.34) !important;
  font-size:10px;
  letter-spacing:.22em;
  text-transform:uppercase;
}
.test-entry-mark{
  color:rgba(121,97,110,.52);
  font-size:17px;
  line-height:1;
}
.test-entry-panel{
  position:relative;
  overflow:hidden;
  border-radius:34px;
  padding:26px 24px 24px;
  background:
    radial-gradient(circle at 16% 18%, rgba(214,174,186,.12), transparent 28%),
    radial-gradient(circle at 84% 16%, rgba(179,198,212,.10), transparent 26%),
    radial-gradient(circle at 72% 72%, rgba(255,255,255,.34), transparent 22%),
    linear-gradient(180deg, rgba(255,255,255,.94), rgba(250,248,247,.92));
  box-shadow:
    0 20px 44px rgba(45,39,47,.06),
    inset 0 1px 0 rgba(255,255,255,.78);
}
.test-entry-panel::before{
  content:"";
  position:absolute;
  inset:12px;
  border-radius:26px;
  border:1px solid rgba(72,60,67,.08);
  pointer-events:none;
}
.test-entry-panel::after{
  content:"";
  position:absolute;
  left:24px;
  right:24px;
  top:22px;
  height:1px;
  background:linear-gradient(90deg, rgba(80,68,77,0), rgba(80,68,77,.10), rgba(80,68,77,0));
  pointer-events:none;
}
.test-entry-mini{
  display:inline-block;
  margin-bottom:12px;
  color:rgba(94,81,89,.48);
  font-size:10px;
  letter-spacing:.22em;
  text-transform:uppercase;
}
.test-entry-panel h2{
  margin:0 0 14px;
  color:rgba(34,31,37,.94);
  font-size:30px;
  line-height:1.12;
  font-weight:800;
  letter-spacing:.01em;
}
.test-entry-copy{
  margin:0;
  max-width:340px;
  color:rgba(58,51,56,.72);
  font-size:13px;
  line-height:1.95;
}
.test-entry-features{
  display:flex;
  flex-wrap:wrap;
  gap:8px 10px;
  margin-top:18px;
}
.test-entry-features span{
  display:inline-flex;
  align-items:center;
  min-height:28px;
  padding:0 12px;
  border-radius:999px;
  background:rgba(255,255,255,.58);
  color:rgba(86,72,80,.62);
  font-size:9px;
  letter-spacing:.16em;
  text-transform:uppercase;
  box-shadow:0 6px 12px rgba(45,39,47,.03);
}
.test-entry-link{
  display:inline-flex !important;
  align-items:center;
  justify-content:center;
  min-width:176px;
  margin-top:24px !important;
  padding:14px 18px !important;
  border:0 !important;
  border-radius:999px;
  background:linear-gradient(90deg, rgba(99,80,91,.90), rgba(128,103,116,.82));
  color:#fff !important;
  font-size:11px;
  letter-spacing:.18em;
  font-weight:800;
  box-shadow:0 12px 24px rgba(77,62,72,.14);
}
.test-entry-small{
  margin:14px 0 0;
  max-width:320px;
  color:rgba(96,84,93,.48);
  font-size:11px;
  line-height:1.8;
}
.test-entry-aside{
  position:absolute;
  right:18px;
  top:18px;
  bottom:18px;
  width:122px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:18px;
}
.test-entry-orb{
  position:relative;
  width:104px;
  height:104px;
  border-radius:50%;
}
.orb-ring,
.orb-core{
  position:absolute;
  inset:0;
  border-radius:50%;
}
.orb-ring-a{
  border:1px solid rgba(97,80,91,.18);
  transform:scale(1);
}
.orb-ring-b{
  border:1px dashed rgba(97,80,91,.16);
  transform:scale(.76);
}
.orb-core{
  inset:24px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:radial-gradient(circle at 30% 30%, rgba(255,255,255,.95), rgba(246,240,242,.90));
  color:rgba(79,64,72,.72);
  font-size:12px;
  letter-spacing:.18em;
  box-shadow:0 8px 20px rgba(77,62,72,.08);
}
.test-entry-side-note{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
  color:rgba(94,81,89,.34);
  font-size:9px;
  letter-spacing:.18em;
  text-transform:uppercase;
}
@media (max-width:430px){
  .test-entry-section{
    padding:70px 22px 88px !important;
  }
  .test-entry-panel{
    padding:24px 20px 22px;
    border-radius:28px;
  }
  .test-entry-panel h2{
    font-size:28px;
  }
  .test-entry-copy{
    max-width:100%;
    padding-right:0;
  }
  .test-entry-aside{
    position:relative;
    right:auto;
    top:auto;
    bottom:auto;
    width:100%;
    margin-top:24px;
    flex-direction:row;
    justify-content:space-between;
  }
  .test-entry-orb{
    width:88px;
    height:88px;
    flex:0 0 auto;
  }
  .orb-core{
    inset:20px;
    font-size:11px;
  }
  .test-entry-side-note{
    align-items:flex-end;
    text-align:right;
    gap:6px;
  }
}


/* Integrated concept copy */
.concept-section{
  padding:76px 22px 34px;
}
.concept-inner{
  position:relative;
  padding:32px 0 24px;
}
.concept-inner::before{
  content:"";
  position:absolute;
  left:0;
  right:0;
  top:0;
  height:1px;
  background:linear-gradient(90deg, rgba(60,54,62,0), rgba(60,54,62,.12), rgba(60,54,62,0));
}
.concept-kicker{
  margin:0 0 14px;
  color:rgba(58,54,61,.38);
  font-size:10px;
  letter-spacing:.22em;
  text-transform:uppercase;
}
.concept-inner h2{
  margin:0 0 18px;
  color:rgba(36,32,38,.94);
  font-size:28px;
  line-height:1.18;
  font-weight:800;
}
.concept-inner p{
  margin:0;
  max-width:390px;
  color:rgba(58,51,56,.68);
  font-size:13px;
  line-height:2.05;
}
.clue-plan-board .room-test{
  background:
    radial-gradient(circle at 50% 20%, rgba(127,98,111,.07), transparent 34%),
    rgba(255,255,255,.94);
}
.clue-plan-board .room-test .clue-room-name{
  color:rgba(69,49,61,.96);
}


/* Ominous refined reduction */
body{
  background-image:
    radial-gradient(circle at 12% 10%, rgba(72,57,68,.10), transparent 24%),
    radial-gradient(circle at 82% 18%, rgba(53,50,58,.07), transparent 28%),
    linear-gradient(180deg, #f8f7f6 0%, #f2eeee 100%) !important;
}
.hero-note{
  background:rgba(255,255,255,.56) !important;
  color:rgba(38,34,40,.66) !important;
}
.concept-section{
  padding:88px 22px 26px !important;
}
.concept-inner{
  padding:34px 0 18px !important;
}
.concept-inner h2{
  max-width:360px;
  font-size:24px !important;
  line-height:1.34 !important;
  letter-spacing:.01em;
}
.concept-inner p{
  max-width:340px !important;
  color:rgba(42,37,43,.66) !important;
  font-size:12px !important;
  line-height:2.05 !important;
}
.concept-kicker,
.section-note,
.test-entry-kicker,
.clue-plan-meta,
.product-info p,
.thin-thought,
.log-note{
  color:rgba(48,43,52,.46) !important;
}
.map-section{
  padding-top:74px !important;
}
.clue-plan-board{
  background:linear-gradient(180deg, rgba(255,255,255,.99), rgba(250,250,250,.98)) !important;
}
.clue-room{
  background:rgba(255,255,255,.94) !important;
}
.clue-room-name{
  color:rgba(31,29,35,.92) !important;
}
.test-entry-section{
  padding-top:92px !important;
}
.test-entry-panel{
  background:
    radial-gradient(circle at 78% 12%, rgba(71,57,68,.08), transparent 26%),
    linear-gradient(180deg, rgba(255,255,255,.96), rgba(250,250,250,.92)) !important;
}
.test-entry-panel h2{
  font-size:28px !important;
}
.test-entry-copy{
  max-width:300px !important;
  font-size:12px !important;
  line-height:1.95 !important;
}
.test-entry-features span{
  background:rgba(255,255,255,.64) !important;
}
.test-entry-link{
  background:linear-gradient(90deg, rgba(50,43,52,.92), rgba(90,71,83,.86)) !important;
}
.log-section{
  padding-top:90px !important;
}
.log-paper{
  background:
    repeating-linear-gradient(180deg, transparent 0 31px, rgba(36,32,38,.032) 32px),
    rgba(255,255,255,.82) !important;
}
@media (max-width:430px){
  .concept-section{ padding-top:78px !important; }
  .test-entry-section{ padding-top:82px !important; }
}


/* Refine text, lines, map depth */
.concept-inner h2{
  max-width:340px !important;
  font-size:23px !important;
  line-height:1.32 !important;
}
.concept-inner p{
  max-width:300px !important;
  font-size:12px !important;
  line-height:1.92 !important;
}
.section-note{
  max-width:260px;
  line-height:1.8 !important;
}
.clue-plan-board{
  box-shadow:0 16px 36px rgba(34,31,37,.045), inset 0 1px 0 rgba(255,255,255,.95) !important;
}
.clue-room,
.clue-corridor,
.clue-stairs,
.clue-balcony{
  border-width:1px !important;
}
.clue-link{
  opacity:.78;
}
.clue-room,
.clue-corridor,
.clue-stairs,
.clue-balcony,
.clue-door{
  transform:none !important;
}
.clue-room,
.clue-corridor,
.clue-stairs,
.clue-balcony{
  position:absolute;
  box-shadow:0 8px 12px rgba(34,31,37,.035);
}
.clue-room::before,
.clue-corridor::before,
.clue-stairs::before,
.clue-balcony::before,
.clue-room::after,
.clue-corridor::after,
.clue-stairs::after,
.clue-balcony::after{
  content:"";
  position:absolute;
  pointer-events:none;
}
.clue-room::before,
.clue-corridor::before,
.clue-stairs::before,
.clue-balcony::before{
  left:4px;
  right:-1px;
  bottom:-6px;
  height:6px;
  border:1px solid rgba(35,32,39,.26);
  border-top:0;
  background:rgba(238,238,241,.95);
  transform:skewX(45deg);
  transform-origin:left top;
}
.clue-room::after,
.clue-corridor::after,
.clue-stairs::after,
.clue-balcony::after{
  top:4px;
  right:-6px;
  bottom:-1px;
  width:6px;
  border:1px solid rgba(35,32,39,.26);
  border-left:0;
  background:rgba(232,232,236,.95);
  transform:skewY(45deg);
  transform-origin:left top;
}
.clue-room-name{
  font-size:13px !important;
  letter-spacing:.02em !important;
}
.clue-plan-meta,
.concept-kicker,
.test-entry-kicker,
.oracle-kicker,
.readout-label,
.log-note{
  letter-spacing:.18em !important;
}
.oracle-top{
  align-items:flex-start;
}
.oracle-sub{
  display:none !important;
}
.oracle-readout{
  min-width:auto !important;
}
.readout-label{
  display:none !important;
}
.readout-value{
  font-size:20px !important;
}
.oracle-foot{
  gap:10px !important;
  font-size:10px !important;
}
.feeling-total{
  margin-top:10px !important;
  font-size:10px !important;
  letter-spacing:.08em;
}
.oracle-result{
  margin-top:18px !important;
}
.oracle-result h3{
  font-size:16px !important;
}
.oracle-result p{
  max-width:240px;
  font-size:12px !important;
  line-height:1.8 !important;
}
.test-entry-copy{
  max-width:280px !important;
}
.test-entry-features{
  gap:6px 8px !important;
}
.test-entry-features span{
  min-height:24px !important;
  padding:0 10px !important;
  font-size:8px !important;
}
.test-entry-link{
  min-width:154px !important;
}
@media (max-width:430px){
  .concept-inner p{max-width:280px !important;}
  .clue-room::before,
  .clue-corridor::before,
  .clue-stairs::before,
  .clue-balcony::before{height:5px; bottom:-5px;}
  .clue-room::after,
  .clue-corridor::after,
  .clue-stairs::after,
  .clue-balcony::after{width:5px; right:-5px;}
  .oracle-result p{max-width:100%;}
}


/* --- UI refinement: more whitespace, clearer hierarchy, more inorganic typography --- */
:root{
  --ui-sans:-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","Hiragino Sans","Yu Gothic UI","Yu Gothic","Meiryo",sans-serif;
}

body,
button,
input,
textarea,
select,
a,
p,
span,
div,
li{
  font-family:var(--ui-sans) !important;
}

body{
  font-size:13px !important;
  line-height:1.92 !important;
  letter-spacing:.01em;
}

h1,
h2,
h3,
.brand,
.section-title,
.concept-inner h2,
.test-entry-inner h2,
.oracle-result h3,
.product-info h3,
.clue-room-name{
  font-family:var(--ui-sans) !important;
  font-style:normal !important;
}

h1{
  font-weight:700 !important;
  font-size:clamp(30px,8.2vw,46px) !important;
  line-height:1.02 !important;
  letter-spacing:.09em !important;
}

.sub-script{
  font-family:var(--ui-sans) !important;
  font-style:normal !important;
  font-size:10px !important;
  letter-spacing:.18em !important;
  opacity:.9;
}

.hero-title{
  top:47% !important;
  left:24px !important;
  right:24px !important;
}

.hero-note{
  left:26px !important;
  bottom:72px !important;
  width:210px !important;
  padding:12px 14px !important;
  line-height:1.8 !important;
}

.hero-line{
  left:26px !important;
  right:26px !important;
  bottom:48px !important;
}

section{
  padding:112px 26px !important;
}

.intro{
  gap:36px !important;
  margin-bottom:94px !important;
}

.section-title{
  font-size:26px !important;
  line-height:1.14 !important;
  letter-spacing:.015em !important;
  font-weight:700 !important;
}

.section-note,
.concept-inner p,
.test-entry-copy,
.log-note,
.oracle-result p,
.product-info p,
.thin-thought{
  font-size:12px !important;
  line-height:1.92 !important;
}

.concept-section{
  padding-top:96px !important;
  padding-bottom:52px !important;
}

.concept-inner{
  padding:42px 0 34px !important;
}

.concept-kicker,
.slider-eyebrow,
.test-entry-kicker,
.oracle-kicker,
.log-note,
.product-number,
.kicker,
.menu,
.brand,
.slider-text-button,
.test-entry-mini{
  letter-spacing:.22em !important;
}

.portfolio-block,
.shop-slider,
.mood-stage,
.test-entry-section,
.log-section,
.map-section,
.concept-section{
  margin-top:0 !important;
}

.portfolio-block{
  margin-bottom:40px !important;
}

.slider-ui,
.portfolio-ui{
  padding:0 26px 16px !important;
}

.slider-progress,
.portfolio-progress{
  margin:0 26px 28px !important;
}

.slider-track,
.portfolio-track{
  gap:22px !important;
  padding:8px 26px 34px !important;
}

.product-info{
  padding:30px 4px 0 !important;
}

.product-info h3{
  font-size:18px !important;
  font-weight:700 !important;
  line-height:1.38 !important;
}

.product-info p{
  margin-top:10px !important;
  color:rgba(47,41,35,.56) !important;
}

.product-bottom{
  margin-top:18px !important;
}

.price{
  font-size:12px !important;
  letter-spacing:.12em !important;
}

.view{
  border-bottom-color:rgba(47,41,35,.22) !important;
}

/* cleaner, less chatgpt-like controls */
.slider-button,
.slider-text-button,
.oracle-send,
.test-entry-link,
.diary-form button,
.result-back,
.share-button,
button{
  box-shadow:none !important;
  filter:none !important;
}

.oracle-send,
.test-entry-link,
.diary-form button,
.result-back,
.share-button{
  background:#fff !important;
  color:rgba(42,39,45,.88) !important;
  border:1px solid rgba(47,41,35,.14) !important;
  border-radius:999px !important;
  text-shadow:none !important;
}

.oracle-send{
  margin-top:28px !important;
  padding:14px 18px !important;
}

.test-entry-link{
  min-width:164px !important;
  margin-top:26px !important;
  padding:13px 18px !important;
  display:inline-flex !important;
  align-items:center;
  justify-content:center;
}

.slider-text-button{
  color:rgba(47,41,35,.52) !important;
}

.slider-text-button:hover,
.menu a:hover,
.test-entry-link:hover,
.oracle-send:hover{
  opacity:.84;
}

/* soften diagnosis area and remove heavy decorative shadows */
.test-entry-section{
  padding-top:124px !important;
  padding-bottom:104px !important;
}

.test-entry-inner{
  padding-top:8px !important;
}

.test-entry-panel{
  padding:32px 28px 30px !important;
  border-radius:30px !important;
  box-shadow:none !important;
  background:
    radial-gradient(circle at 82% 10%, rgba(71,57,68,.055), transparent 22%),
    linear-gradient(180deg, rgba(255,255,255,.98), rgba(252,252,252,.96)) !important;
}

.test-entry-panel::before{
  inset:0 !important;
  border-radius:30px !important;
  border:1px solid rgba(72,60,67,.06) !important;
}

.test-entry-panel::after{
  display:none !important;
}

.test-entry-panel h2{
  font-size:29px !important;
  margin-bottom:16px !important;
}

.test-entry-features{
  margin-top:20px !important;
  gap:8px !important;
}

.test-entry-features span{
  background:rgba(255,255,255,.72) !important;
  box-shadow:none !important;
  border:1px solid rgba(47,41,35,.08);
  color:rgba(47,41,35,.58) !important;
}

.test-entry-orb,
.orb-core,
.orb-ring,
.orb-ring-a,
.orb-ring-b{
  box-shadow:none !important;
}

.orb-core{
  background:rgba(255,255,255,.78) !important;
  border:1px solid rgba(97,80,91,.10);
}

/* more air around map and diary */
.map-section{
  padding-top:118px !important;
  padding-bottom:118px !important;
}

.clue-plan-board{
  margin-top:20px !important;
}

.log-section{
  padding-top:112px !important;
}

.log-paper{
  margin-top:18px !important;
  padding:28px 24px 26px !important;
}

.diary-form textarea{
  min-height:104px !important;
}

/* mood section: less text density and more space */
.mood-section{
  padding-top:116px !important;
  padding-bottom:108px !important;
}

.mood-stage{
  min-height:560px !important;
}

.oracle-panel{
  width:80% !important;
  top:55% !important;
  padding-top:30px !important;
}

.oracle-top{
  margin-bottom:30px !important;
  padding-bottom:16px !important;
}

.oracle-result{
  margin-top:26px !important;
  padding-top:20px !important;
}

.feeling-total{
  margin-top:14px !important;
}

@media (max-width:430px){
  section{ padding:96px 24px !important; }
  .intro{ grid-template-columns:1fr !important; gap:18px !important; margin-bottom:72px !important; }
  .concept-section{ padding-top:84px !important; }
  .slider-ui, .portfolio-ui{ padding:0 24px 14px !important; }
  .slider-progress, .portfolio-progress{ margin:0 24px 24px !important; }
  .slider-track, .portfolio-track{ gap:18px !important; padding:8px 24px 30px !important; }
  .test-entry-section{ padding-top:106px !important; padding-bottom:92px !important; }
  .test-entry-panel{ padding:28px 22px 24px !important; }
  .test-entry-panel h2{ font-size:27px !important; }
  .hero-note{ width:198px !important; left:24px !important; }
}


/* --- Luxury layout: section backgrounds, no-card feeling, premium map --- */
.site{
  background:#fff !important;
}

section{
  border-radius:0 !important;
}

.concept-section{
  background:#fff !important;
}

.refined-map-section,
.map-section{
  background:#f7f7f6 !important;
}

#objects{
  background:#fff !important;
}

.mood-section{
  background:#f2f2f1 !important;
}

.test-entry-section{
  position:relative;
  overflow:hidden;
  background:#fff !important;
}

.log-section{
  background:#f7f7f6 !important;
}

.social-section,
footer{
  background:#fff !important;
}

/* remove section card/panel feeling */
.concept-inner,
.test-entry-inner,
.test-entry-panel,
.mood-panel,
.oracle-panel,
.log-paper,
.clue-plan-board,
.floorplan-board,
.site-map-board{
  box-shadow:none !important;
  border-radius:0 !important;
}

.test-entry-panel,
.mood-panel,
.oracle-panel,
.log-paper{
  background:transparent !important;
}

.test-entry-panel::before,
.test-entry-panel::after,
.concept-inner::before,
.clue-plan-board::before,
.clue-plan-board::after,
.floorplan-board::before,
.floorplan-board::after{
  display:none !important;
}

.test-entry-section{
  padding-top:132px !important;
  padding-bottom:132px !important;
}

.test-entry-inner{
  padding:0 !important;
  background:none !important;
}

.test-entry-panel{
  padding:0 !important;
}

.test-entry-headline-row{
  margin-bottom:28px !important;
}

.test-entry-copy{
  max-width:310px !important;
}

.test-entry-aside{
  display:none !important;
}

.test-entry-features{
  margin-top:28px !important;
}

.test-entry-features span{
  border:0 !important;
  border-bottom:1px solid rgba(33,31,37,.14) !important;
  border-radius:0 !important;
  background:transparent !important;
  padding:0 0 5px !important;
  min-height:auto !important;
}

.test-entry-link,
.oracle-send,
.diary-form button{
  box-shadow:none !important;
  background:transparent !important;
  border:1px solid rgba(33,31,37,.16) !important;
  color:rgba(33,31,37,.88) !important;
}

.test-entry-link:hover,
.oracle-send:hover,
.diary-form button:hover{
  background:rgba(33,31,37,.035) !important;
}

/* Luxury SVG floorplan */
.refined-map-section{
  padding-top:126px !important;
  padding-bottom:136px !important;
}

.luxury-plan{
  position:relative;
  margin:0 auto;
  max-width:380px;
}

.luxury-plan-meta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:0 4px 24px;
  color:rgba(33,31,37,.42);
  font-size:10px;
  letter-spacing:.22em;
  text-transform:uppercase;
}

.luxury-plan-svg{
  width:100%;
  height:auto;
  display:block;
  overflow:visible;
}

.lux-room path,
.lux-corridor,
.lux-balcony{
  fill:rgba(255,255,255,.74);
  stroke:rgba(30,28,34,.78);
  stroke-width:1.15;
  vector-effect:non-scaling-stroke;
  transition:fill .22s ease, stroke .22s ease, transform .22s ease;
}

.lux-room:hover path,
.lux-room:active path{
  fill:rgba(255,255,255,.96);
  stroke:rgba(30,28,34,.96);
}

.lux-room text{
  fill:rgba(30,28,34,.86);
  font-family:var(--ui-sans), -apple-system, BlinkMacSystemFont, sans-serif;
  font-size:13px;
  font-weight:600;
  letter-spacing:.06em;
  pointer-events:none;
}

.plan-lines path,
.plan-stairs path{
  fill:none;
  stroke:rgba(30,28,34,.45);
  stroke-width:0.9;
  vector-effect:non-scaling-stroke;
  stroke-linecap:round;
}

.balcony-label,
.plan-small-label{
  fill:rgba(30,28,34,.38);
  font-family:var(--ui-sans), -apple-system, BlinkMacSystemFont, sans-serif;
  font-size:9px;
  letter-spacing:.18em;
  text-transform:uppercase;
}

.plan-small-label{
  font-size:8px;
}

.portfolio-block,
.shop-slider{
  background:transparent !important;
}

.product-photo{
  box-shadow:none !important;
}

@media (max-width:430px){
  .refined-map-section{
    padding-top:108px !important;
    padding-bottom:118px !important;
  }
  .luxury-plan{
    max-width:330px;
  }
  .lux-room text{
    font-size:12px;
  }
}


/* --- Pro 3D map: pastel palette, no brown --- */
.map-3d-gallery{
  background:
    radial-gradient(circle at 15% 20%, rgba(243, 214, 227, 0.52), transparent 22%),
    radial-gradient(circle at 86% 14%, rgba(219, 226, 248, 0.58), transparent 20%),
    radial-gradient(circle at 78% 78%, rgba(222, 234, 229, 0.62), transparent 22%),
    linear-gradient(180deg, #ffffff 0%, #f7f7fb 54%, #fbfbfd 100%) !important;
}

.pro-map-shell{
  position:relative;
  margin:0 auto;
  max-width:396px;
}

.pro-map-meta{
  margin:0 8px 18px;
  color:rgba(78, 79, 104, 0.46);
}

.pro-map-svg{
  width:100%;
  height:auto;
  display:block;
  overflow:visible;
}

.map-floor-shadow{
  fill:rgba(168, 170, 205, 0.16);
  filter:blur(4px);
}

.plan-plate{
  fill:url(#floorGlow);
  stroke:rgba(82, 79, 108, 0.46);
  stroke-width:1.1;
  vector-effect:non-scaling-stroke;
}

.plate-ridge{
  fill:none;
  stroke:rgba(145, 143, 178, 0.38);
  stroke-width:0.9;
  vector-effect:non-scaling-stroke;
}

.depth-top,
.depth-side,
.depth-front{
  stroke:rgba(76, 74, 97, 0.44);
  stroke-width:1;
  vector-effect:non-scaling-stroke;
}
.depth-top{ fill:rgba(255,255,255,0.82); }
.depth-side{ fill:rgba(208, 213, 237, 0.82); }
.depth-front{ fill:rgba(233, 221, 240, 0.84); }

.room-face{
  stroke:rgba(67, 65, 88, 0.74);
  stroke-width:1.12;
  vector-effect:non-scaling-stroke;
  transition:transform .22s ease, filter .22s ease, opacity .22s ease;
}
.face-objects{ fill:url(#wallPink); }
.face-mood{ fill:url(#wallBlue); }
.face-test{ fill:url(#wallLilac); }
.face-log{ fill:url(#wallMint); }
.face-social{ fill:url(#wallRose); }

.room-3d text{
  fill:rgba(40, 40, 56, 0.88);
  font-family:var(--ui-sans), -apple-system, BlinkMacSystemFont, sans-serif;
  font-size:14px;
  font-weight:700;
  letter-spacing:.04em;
  pointer-events:none;
}
.room-3d text.mini{
  fill:rgba(76, 76, 98, 0.54);
  font-size:9px;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:600;
}

.room-3d:hover .room-face,
.room-3d:active .room-face{
  filter:brightness(1.04) saturate(1.04);
}
.room-3d:hover + .room-depth .depth-top,
.room-3d:active + .room-depth .depth-top{ opacity:1; }

.corridor-plate{
  fill:rgba(255,255,255,0.92);
  stroke:rgba(74, 72, 94, 0.62);
  stroke-width:1;
  vector-effect:non-scaling-stroke;
}
.corridor-edge{
  fill:rgba(224, 228, 244, 0.58);
  stroke:rgba(74, 72, 94, 0.35);
  stroke-width:1;
  vector-effect:non-scaling-stroke;
}

.door-swings path,
.plan-stairs-3d path{
  fill:none;
  stroke:rgba(95, 88, 120, 0.48);
  stroke-width:1;
  stroke-linecap:round;
  vector-effect:non-scaling-stroke;
}

.map-notes text{
  fill:rgba(88, 87, 112, 0.4);
  font-family:var(--ui-sans), -apple-system, BlinkMacSystemFont, sans-serif;
  font-size:8.5px;
  letter-spacing:.2em;
  text-transform:uppercase;
}

/* override older map styles */
.map-3d-gallery .luxury-plan,
.map-3d-gallery .luxury-plan-svg{ all:unset; }
.map-3d-gallery .luxury-plan-meta{ display:flex; justify-content:space-between; align-items:center; }

/* diagnosis page palette align, no brown */
.test-entry-section{
  background:
    radial-gradient(circle at 82% 20%, rgba(231,219,244,.42), transparent 20%),
    radial-gradient(circle at 18% 84%, rgba(214,232,227,.42), transparent 20%),
    linear-gradient(180deg, #ffffff 0%, #fafafe 100%) !important;
}

@media (max-width:430px){
  .pro-map-shell{ max-width:344px; }
  .room-3d text{ font-size:12.5px; }
  .room-3d text.mini{ font-size:8px; }
}


/* --- Flat architectural floor plan --- */
.map-flat-architect{
  background:
    radial-gradient(circle at 16% 18%, rgba(241, 212, 226, 0.46), transparent 22%),
    radial-gradient(circle at 86% 14%, rgba(218, 226, 246, 0.52), transparent 18%),
    radial-gradient(circle at 78% 82%, rgba(218, 234, 229, 0.48), transparent 20%),
    linear-gradient(180deg, #ffffff 0%, #f8f8fc 58%, #fbfbfd 100%) !important;
}

.flat-plan-shell{
  position:relative;
  margin:0 auto;
  max-width:364px;
}

.flat-plan-meta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:0 8px 18px;
  color:rgba(63, 63, 78, 0.42);
}

.flat-plan-svg{
  width:100%;
  height:auto;
  display:block;
  overflow:visible;
}

.flat-plan-paper{
  fill:rgba(255,255,255,0.78);
}

.plan-structure .outer-wall,
.plan-structure .inner-wall{
  fill:none;
  stroke:#18181c;
  vector-effect:non-scaling-stroke;
  stroke-linecap:square;
}
.plan-structure .outer-wall{ stroke-width:8; }
.plan-structure .inner-wall{ stroke-width:6; }

.room-surface{
  fill:rgba(255,255,255,0.01);
  transition:fill .2s ease;
}
.room-area a:hover .room-surface,
.room-area a:active .room-surface{ fill:rgba(236, 225, 242, 0.34); }
.room-area-test a:hover .room-surface,
.room-area-test a:active .room-surface{ fill:rgba(224, 233, 244, 0.42); }
.room-area-social a:hover .room-surface,
.room-area-social a:active .room-surface{ fill:rgba(230, 241, 236, 0.42); }

.room-name,
.room-sub,
.v-label,
.plan-notes-flat text{
  font-family:var(--ui-sans), -apple-system, BlinkMacSystemFont, sans-serif;
  fill:#1c1c21;
}

.room-name{
  font-size:20px;
  font-weight:500;
  letter-spacing:.04em;
  text-anchor:middle;
}
.room-sub{
  font-size:8.5px;
  letter-spacing:.18em;
  text-transform:uppercase;
  fill:rgba(28, 28, 33, 0.46);
  text-anchor:middle;
}
.v-label{
  writing-mode:vertical-rl;
  text-orientation:upright;
  font-size:13px;
  font-weight:500;
  letter-spacing:.08em;
  text-anchor:middle;
}
.v-label-small{
  font-size:12px;
}

.plan-stairs-flat .stair-box,
.plan-stairs-flat line,
.plan-openings .door-arc,
.plan-openings .window-mark,
.plan-openings .door-gap,
.plan-stairs-flat .stair-arrow,
.plan-notes-flat text{
  vector-effect:non-scaling-stroke;
}

.plan-stairs-flat .stair-box,
.plan-stairs-flat line{
  fill:none;
  stroke:#2a2a31;
  stroke-width:1.4;
}
.plan-stairs-flat .stair-arrow{
  fill:none;
  stroke:#2a2a31;
  stroke-width:1.2;
  stroke-linecap:round;
  stroke-linejoin:round;
}

.plan-openings .door-gap{
  stroke:#ffffff;
  stroke-width:9;
}
.plan-openings .door-arc{
  fill:none;
  stroke:#1d1d22;
  stroke-width:1.6;
}
.plan-openings .window-mark{
  stroke:#1d1d22;
  stroke-width:1.8;
}

.plan-notes-flat text{
  font-size:8px;
  letter-spacing:.18em;
  text-transform:uppercase;
  fill:rgba(28, 28, 33, 0.34);
}

@media (max-width:430px){
  .flat-plan-shell{ max-width:332px; }
  .room-name{ font-size:18px; }
  .v-label{ font-size:12px; }
  .room-sub{ font-size:8px; }
}


/* --- Opening visual: instant first-view image --- */
:root{
  --main-bg:url("hero-main-01.jpg");
}
.hero-photo,
.hero-photo-next{
  background-size:cover !important;
  background-position:center center !important;
  background-repeat:no-repeat !important;
}
.hero-photo{
  background-image:url("hero-main-01.jpg");
}
.hero::after{
  content:"";
  position:absolute;
  inset:0;
  z-index:-4;
  pointer-events:none;
  background:
    linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.03) 42%, rgba(255,255,255,.88) 100%),
    radial-gradient(circle at 50% 42%, rgba(255,255,255,.05), transparent 38%);
}
.veil{
  background:linear-gradient(180deg,rgba(255,255,255,.00),rgba(255,255,255,.03) 52%,rgba(255,255,255,.9)) !important;
}
.hero-title{
  color:rgba(255,255,255,.94) !important;
  text-shadow:0 1px 18px rgba(24,20,26,.22),0 0 1px rgba(24,20,26,.45) !important;
}
.hero-note{
  background:rgba(255,255,255,.50) !important;
}
@media (max-width:430px){
  .hero-photo,
  .hero-photo-next{
    background-position:center top !important;
  }
}


/* --- Final refinement: portfolio titles only / lighter floor plan --- */
.portfolio-card .product-number,
.portfolio-card .product-info p,
.portfolio-card .product-bottom{display:none !important;}
.portfolio-card .product-info{padding:12px 6px 2px !important;min-height:auto !important;display:flex !important;align-items:flex-start !important;justify-content:flex-start !important;}
.portfolio-card .product-info h3{margin:0 !important;font-size:14px !important;line-height:1.4 !important;letter-spacing:.06em !important;font-weight:600 !important;}
.portfolio-card .product-photo img{padding:0 !important;background:transparent !important;}

.plan-structure .outer-wall,
.plan-structure .inner-wall{stroke:rgba(35,38,46,0.62) !important;stroke-linecap:butt !important;}
.plan-structure .outer-wall{stroke-width:3.4 !important;}
.plan-structure .inner-wall{stroke-width:1.8 !important;}
.plan-stairs-flat .stair-box,
.plan-stairs-flat line{stroke:rgba(42,45,56,0.54) !important;stroke-width:1.05 !important;}
.plan-stairs-flat .stair-arrow{stroke:rgba(42,45,56,0.54) !important;stroke-width:0.95 !important;}
.plan-openings .door-gap{stroke:#fff !important;stroke-width:5.6 !important;}
.plan-openings .door-arc{stroke:rgba(35,38,46,0.56) !important;stroke-width:1.0 !important;}
.plan-openings .window-mark{stroke:rgba(35,38,46,0.56) !important;stroke-width:1.15 !important;}
.room-name,.room-sub,.v-label,.plan-notes-flat text{fill:rgba(25,27,34,0.82) !important;}
.room-name{font-size:18px !important;letter-spacing:.08em !important;font-weight:500 !important;}
.room-sub{font-size:8px !important;fill:rgba(25,27,34,0.46) !important;}
.v-label{font-size:11.5px !important;letter-spacing:.16em !important;}
.v-label-small{font-size:11px !important;}
.flat-plan-paper{fill:rgba(255,255,255,0.9) !important;}
.flat-plan-meta span{color:rgba(34,36,46,0.58) !important;}


/* --- final polish: centered dream products + no extra section background --- */
.dream-product .product-photo,
.dream-product:nth-child(even) .product-photo,
.dream-product:nth-child(3n) .product-photo{
  border-radius:24px !important;
  transform:none !important;
  background:transparent !important;
}
.dream-product .product-photo::before{
  background:none !important;
}
.dream-product .product-photo img{
  width:100% !important;
  height:100% !important;
  object-fit:contain !important;
  object-position:center center !important;
  padding:14px !important;
  background:transparent !important;
}
.refined-map-section,
.map-section,
.map-flat-architect,
#objects{
  background:transparent !important;
}
.flat-plan-paper{
  fill:none !important;
}
.flat-plan-shell,
.portfolio-block,
.portfolio-track,
.portfolio-ui{
  background:transparent !important;
}
.portfolio-photo,
.portfolio-photo img{
  background:transparent !important;
}


/* --- ui refresh + cleaner fake product presentation --- */
.shop-section,
.portfolio-section,
.map-section{
  padding-top:86px !important;
}
.shop-section .intro,
.portfolio-section .intro,
.map-section .intro{
  display:grid;
  gap:10px;
  margin-bottom:28px;
}
.shop-slider{
  margin:0 !important;
  padding:0 !important;
}
.slider-track{
  grid-auto-columns:78% !important;
  gap:24px !important;
  padding:4px 2px 30px !important;
}
.dream-product{
  display:grid;
  align-content:start;
  -webkit-tap-highlight-color:transparent;
}
.dream-product .product-photo,
.dream-product:nth-child(even) .product-photo,
.dream-product:nth-child(3n) .product-photo{
  aspect-ratio:1 / 1.18 !important;
  border-radius:26px !important;
  transform:none !important;
  background:transparent !important;
  box-shadow:none !important;
}
.dream-product .product-photo::before{
  background:none !important;
}
.dream-product .product-photo img{
  width:100% !important;
  height:100% !important;
  object-fit:contain !important;
  object-position:center center !important;
  padding:0 !important;
  background:transparent !important;
  filter:none !important;
}
.dream-product .product-info{
  padding:18px 2px 0 !important;
}
.dream-product .product-number{
  margin-bottom:8px !important;
  color:rgba(47,41,35,.30) !important;
}
.dream-product .product-info h3{
  font-size:18px !important;
  font-weight:700 !important;
  letter-spacing:.02em !important;
}
.dream-product .product-info p{
  margin-top:8px !important;
  color:rgba(47,41,35,.52) !important;
  font-size:11px !important;
  line-height:1.72 !important;
}
.dream-product .product-bottom{
  margin-top:14px !important;
  padding-top:12px !important;
  border-top:1px solid rgba(47,41,35,.08);
}
.dream-product .price{
  font-size:13px !important;
}
.dream-product .view{
  border-bottom:none !important;
  color:rgba(47,41,35,.56) !important;
  letter-spacing:.14em !important;
}
.slider-controls{
  margin-top:10px !important;
}
.slider-button{
  width:42px !important;
  height:42px !important;
  border:1px solid rgba(47,41,35,.10) !important;
  background:rgba(255,255,255,.72) !important;
}
.portfolio-card .product-photo,
.portfolio-card:nth-child(even) .product-photo,
.portfolio-card:nth-child(3n) .product-photo{
  border-radius:18px !important;
  transform:none !important;
  background:transparent !important;
}
.portfolio-card .product-info{
  padding-top:14px !important;
}
.portfolio-card .product-info p,
.portfolio-card .product-bottom,
.portfolio-note{
  display:none !important;
}
.portfolio-card .product-info h3{
  font-size:16px !important;
  line-height:1.5 !important;
  font-weight:700 !important;
}
.portfolio-track,
.portfolio-block,
.portfolio-ui,
.portfolio-section,
.refined-map-section,
.map-section{
  background:transparent !important;
}
.flat-plan-paper{
  fill:none !important;
}
.flat-plan-meta{
  margin:0 2px 16px !important;
  color:rgba(47,41,35,.34) !important;
  font-size:10px !important;
  letter-spacing:.18em !important;
}
.plan-structure .outer-wall,
.plan-structure .inner-wall{
  stroke:#2f3138 !important;
}
.plan-structure .outer-wall{
  stroke-width:4.2 !important;
}
.plan-structure .inner-wall{
  stroke-width:2.4 !important;
}
.plan-stairs-flat .stair-box,
.plan-stairs-flat line{
  stroke-width:1 !important;
}
.plan-stairs-flat .stair-arrow,
.plan-openings .door-arc,
.plan-openings .window-mark{
  stroke-width:1.05 !important;
}
.plan-openings .door-gap{
  stroke-width:4.4 !important;
}
.room-name{
  font-size:17px !important;
  letter-spacing:.08em !important;
  fill:rgba(28,28,33,.88) !important;
}
.room-sub{
  font-size:7.5px !important;
  letter-spacing:.18em !important;
}
.v-label{
  font-size:11px !important;
  letter-spacing:.12em !important;
}
.room-area a:hover .room-surface,
.room-area a:active .room-surface{
  fill:rgba(0,0,0,.035) !important;
}


/* --- opening loading overlay --- */
body.is-preloading{overflow:hidden;background:#fff!important;}body.is-preloading:before{opacity:0!important;}
body.is-preloading .site{opacity:0;}
body.is-loaded .site{opacity:1;}
.site{transition:opacity 1.35s cubic-bezier(.22,1,.36,1);}
.loading-screen{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:clamp(40px,7vw,100px);background:#fff!important;opacity:1;visibility:visible;transition:opacity 1.45s cubic-bezier(.22,1,.36,1),visibility 1.45s ease;}
.loading-screen.is-fadeout{opacity:0;visibility:hidden;pointer-events:none;}
.loading-screen__inner{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;width:min(100%,520px);background:#fff;transition:transform 1.35s cubic-bezier(.22,1,.36,1),opacity 1.35s ease;will-change:transform,opacity;}
.loading-screen.is-fadeout .loading-screen__inner{transform:translateY(-10px) scale(.99);opacity:0;}
.loading-screen__image{display:block;width:min(100%,420px);height:auto;object-fit:contain;filter:grayscale(1) contrast(1.06);animation:loadingFloat 2.8s ease-in-out infinite;}
.loading-screen__text{display:flex;align-items:flex-end;justify-content:center;gap:0.18em;color:#111;font-size:clamp(12px,2vw,15px);letter-spacing:0.44em;text-transform:uppercase;font-weight:500;padding-left:0.44em;}
.loading-screen__text span{display:inline-block;animation:loadingBounce 1.15s ease-in-out infinite;}
.loading-screen__text span:nth-child(1){animation-delay:0s;}
.loading-screen__text span:nth-child(2){animation-delay:.08s;}
.loading-screen__text span:nth-child(3){animation-delay:.16s;}
.loading-screen__text span:nth-child(4){animation-delay:.24s;}
.loading-screen__text span:nth-child(5){animation-delay:.32s;}
.loading-screen__text span:nth-child(6){animation-delay:.40s;}
.loading-screen__text span:nth-child(7){animation-delay:.48s;}
@keyframes loadingFloat{0%,100%{opacity:.9;transform:translateY(0) scale(1)}50%{opacity:1;transform:translateY(-5px) scale(1.012)}}
@keyframes loadingBounce{0%,100%{transform:translateY(0);opacity:.42}20%{opacity:1}45%{transform:translateY(-8px);opacity:1}60%{transform:translateY(0);opacity:.9}}


/* --- white loading / white product slider patch --- */
body, .site, #objects, .shop-slider, .slider-track, #sliderTrack{background:#fff;}
.shop-slider{padding:0 0 8px;background:#fff;}
#sliderTrack{background:#fff;}
.product-photo{display:flex;align-items:center;justify-content:center;background:#fff;}
.product-photo:before{display:none;}
.product-photo img{width:auto;height:auto;max-width:100%;max-height:100%;object-fit:contain;filter:none;}
#shopSlider .product-photo img{width:auto!important;height:auto!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;}
#shopSlider .product-photo{background:#fff!important;overflow:hidden;}
#shopSlider .product-card{background:transparent;}
#shopSlider .slider-ui, #shopSlider .slider-progress, #shopSlider .slider-track{background:#fff;}


/* --- strict white + original product images --- */
html, body, .site{background:#fff!important;}
body:before{display:none!important;opacity:0!important;background:none!important;}
body.is-preloading{background:#fff!important;}
.loading-screen{background:#fff!important;}
.loading-screen__inner{background:#fff!important;}
#objects, #shopSlider, #shopSlider .slider-ui, #shopSlider .slider-progress, #sliderTrack, .shop-slider{background:#fff!important;}
#shopSlider .slider-track{grid-auto-columns:82%!important;gap:26px!important;padding:6px 22px 34px!important;align-items:start!important;}
#shopSlider .product-card{background:#fff!important;scroll-snap-align:center;}
#shopSlider .product-photo,
#shopSlider .product-card:nth-child(even) .product-photo,
#shopSlider .product-card:nth-child(3n) .product-photo{aspect-ratio:auto!important;height:auto!important;min-height:0!important;display:block!important;overflow:visible!important;border-radius:0!important;background:#fff!important;box-shadow:none!important;transform:none!important;}
#shopSlider .product-photo:before{display:none!important;content:none!important;background:none!important;}
#shopSlider .product-photo img{display:block!important;width:100%!important;height:auto!important;max-width:100%!important;max-height:none!important;object-fit:initial!important;object-position:center!important;padding:0!important;margin:0 auto!important;background:#fff!important;filter:none!important;transform:none!important;transition:none!important;}
#shopSlider .product-card:hover .product-photo img,
#shopSlider .product-card:active .product-photo img{transform:none!important;filter:none!important;}
#shopSlider .product-info{padding:20px 2px 0!important;background:#fff!important;}
#shopSlider .product-bottom{border-top:1px solid rgba(47,41,35,.08);padding-top:12px;}


/* --- mobile touch highlight for floor plan --- */
.flat-plan-svg .room-surface{
  transition: fill .45s ease, opacity .45s ease;
}
.room-area a.is-touched .room-surface,
.room-area a:focus .room-surface,
.room-area a:focus-visible .room-surface{
  fill: rgba(0,0,0,.038) !important;
}
.room-area-test a.is-touched .room-surface,
.room-area-test a:focus .room-surface,
.room-area-test a:focus-visible .room-surface{
  fill: rgba(208,220,242,.56) !important;
}
.room-area-objects a.is-touched .room-surface,
.room-area-objects a:focus .room-surface,
.room-area-objects a:focus-visible .room-surface{
  fill: rgba(241,223,237,.58) !important;
}
.room-area-mood a.is-touched .room-surface,
.room-area-mood a:focus .room-surface,
.room-area-mood a:focus-visible .room-surface{
  fill: rgba(237,229,246,.56) !important;
}
.room-area-social a.is-touched .room-surface,
.room-area-social a:focus .room-surface,
.room-area-social a:focus-visible .room-surface{
  fill: rgba(224,239,231,.60) !important;
}
.room-area-log a.is-touched .room-surface,
.room-area-log a:focus .room-surface,
.room-area-log a:focus-visible .room-surface{
  fill: rgba(233,238,246,.58) !important;
}

/* --- product slider: no gray behind images --- */
#shopSlider,
#shopSlider .slider-ui,
#shopSlider .slider-progress,
#shopSlider .slider-track,
#sliderTrack,
#sliderTrack .product-card,
#sliderTrack .product-photo,
#sliderTrack .product-info{
  background:#fff !important;
}
#sliderTrack .product-photo{
  padding:0 !important;
  border-radius:0 !important;
}
#sliderTrack .product-photo img{
  background:#fff !important;
}


/* --- diagnosis entry background image update --- */
.test-entry-section{
  background:
    linear-gradient(90deg,
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,.98) 18%,
      rgba(255,255,255,.92) 34%,
      rgba(255,255,255,.76) 52%,
      rgba(255,255,255,.48) 72%,
      rgba(255,255,255,.20) 100%),
    url("diagnosis-room-bg.jpg") right center / cover no-repeat !important;
}
.test-entry-section::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(180deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,.06) 100%);
  pointer-events:none;
}
.test-entry-inner,
.test-entry-panel,
.test-entry-copy-zone,
.test-entry-aside{
  position:relative;
  z-index:1;
}

/* keep product area pure white */
#shopSlider,
#shopSlider .slider-ui,
#shopSlider .slider-progress,
#shopSlider .slider-track,
#sliderTrack,
#sliderTrack .product-card,
#sliderTrack .product-photo,
#sliderTrack .product-info{
  background:#fff !important;
}
#sliderTrack .product-photo,
#sliderTrack .product-photo img{
  background:#fff !important;
}


/* --- public diary board status --- */
.board-status{
  margin:12px auto 32px;
  max-width:520px;
  color:rgba(32,32,36,.46);
  font-size:10px;
  letter-spacing:.16em;
  text-transform:uppercase;
}
.log-entry[aria-live],
.log-list{
  scroll-margin-top:90px;
}
.plain-button:disabled{
  opacity:.45;
  pointer-events:none;
}


/* --- public board admin / visitors / image diary --- */
.board-meta{
  width:min(100%,380px);
  margin:-16px auto 34px;
  display:grid;
  gap:10px;
  color:rgba(47,41,35,.46);
  font-size:10px;
  letter-spacing:.12em;
}
.board-status,
.visitor-status{
  margin:0;
}
.visitor-status strong{
  color:rgba(47,41,35,.86);
  font-size:13px;
  letter-spacing:.08em;
}
.admin-tools{
  display:flex;
  gap:12px;
  align-items:center;
  margin-top:2px;
}
.admin-button{
  border:0;
  border-bottom:1px solid rgba(47,41,35,.24);
  padding:0 0 4px;
  background:transparent;
  color:rgba(47,41,35,.46);
  font-size:10px;
  letter-spacing:.16em;
  text-transform:uppercase;
  cursor:pointer;
}
.admin-button-exit{
  color:rgba(135,54,68,.65);
}
.diary-image-label{
  display:inline-flex;
  align-items:center;
  gap:8px;
  margin-top:16px;
  color:rgba(47,41,35,.52);
  font-size:11px;
  letter-spacing:.08em;
  border-bottom:1px solid rgba(47,41,35,.20);
  padding-bottom:4px;
  cursor:pointer;
}
.diary-image-label input{
  position:absolute;
  inline-size:1px;
  block-size:1px;
  opacity:0;
  pointer-events:none;
}
.diary-image-name{
  margin:10px 0 0;
  color:rgba(47,41,35,.36);
  font-size:10px;
  line-height:1.6;
}
.log-entry-image{
  display:block;
  width:100%;
  margin:14px 0 0;
  border-radius:18px;
  background:#fff;
}
.delete-entry{
  display:none;
}
body.is-admin .delete-entry{
  display:inline-block;
  color:rgba(135,54,68,.72);
}
body.is-admin .board-status::after{
  content:" / admin mode";
  color:rgba(135,54,68,.72);
}


/* --- diary image display fix --- */
.log-entry-image{
  display:block !important;
  width:100% !important;
  max-height:420px;
  object-fit:contain;
  margin:16px 0 0;
  border-radius:18px;
  background:#fff;
}
.diary-image-name{
  min-height:1.4em;
}
