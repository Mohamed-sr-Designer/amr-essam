/* ============ CONFIG ============
   whatsapp: Amr's number in international format, digits only (e.g. "201001234567").
   When set, the lead form opens WhatsApp with the request pre-filled.
   When empty, the request is copied and the visitor is sent to Instagram DM. */
const CONFIG = { whatsapp: "201066784167", instagram: "https://www.instagram.com/_amr_essam_/" };

/* ============ I18N ============ */
const AR = {
  "nav.results":"النتائج","nav.cases":"دراسات حالة","nav.method":"المنهج","nav.reels":"الريلز","nav.cta":"اطلب مراجعة مجانية",
  "hero.status":"متاح لحسابات إعلانية جديدة · الربع الأول 2027",
  "hero.eyebrow":"Senior Performance Marketer · ميديا باير",
  "hero.t1":"ميزانية تدخل.","hero.t2":"مبيعات تطلع.",
  "hero.lede":"أنا عمرو عصام. بحوّل ميزانيات Meta وTikTok لأرقام حقيقية في حسابك: هيكلة مبنية على الداتا، استهداف دقيق، اختبار كريتيف مستمر، وتحسين يومي.",
  "hero.cta1":"احجز مراجعة مجانية لحسابك","hero.cta2":"شوف الإثباتات",
  "hero.fc1":"Results ROAS","hero.fc1s":"قيمة الشراء","hero.fc2":"إجمالي المبيعات",
  "tot.k1":"ROAS إجمالي","tot.s1":"صرف 8,081 ج.م ← مشتريات 94,960 ج.م",
  "tot.k2":"مبيعات يوم واحد","tot.s2":"642 أوردر · تحويل 2.52%",
  "tot.k3":"نمو المتجر","tot.s3":"إجمالي المبيعات مقارنة بالفترة السابقة",
  "tot.k4":"قيمة مشتريات متتبَّعة","tot.s4":"آخر 30 يوم · حساب واحد",
  "cur":"ج.م",
  "res.kicker":"النتائج","res.title":"الوكالات بتبعت بريزنتيشن.<br><span class=\"accent\">أنا ببعت سكرين شوت.</span>",
  "res.lede":"صفوف حقيقية من حساب إعلاني شغال لمتجر إلكتروني، آخر 30 يوم. أسماء البراندات سرية. الأرقام لأ.",
  "res.range":"آخر 30 يوم: 20 سبتمبر 2026 إلى 19 أكتوبر 2026",
  "res.c1":"المجموعة الإعلانية","res.c2":"المصروف","res.c3":"Results ROAS","res.c4":"قيمة المشتريات",
  "res.total":"إجمالي الحساب","res.spent":"إجمالي الصرف","res.blended":"إجمالي","res.tot":"الإجمالي","res.per":"لكل 1,000",
  "res.note":"الأرقام بالجنيه المصري من تقارير Ads Manager. الـ ROAS الإجمالي = إجمالي قيمة المشتريات ÷ إجمالي الصرف.",
  "res.active":"شغالة · قيمة الشراء","res.killed":"اتقفلت بقاعدة الاختبار",
  "cases.kicker":"دراسات حالة","cases.title":"ثلاث حسابات.<br>قاعدة واحدة: <span class=\"accent\">كل جنيه يتحاسب.</span>",
  "case1.tag":"متجر إلكتروني · Meta Ads","case1.t":"ثلاث مجموعات إعلانية فوق 7x ROAS في نفس الشهر",
  "case1.p":"تقسيم جماهير دقيق، تبديل الكريتيف أول ما يبان عليه التعب، ونقل الميزانية يوميًا للي بيكسب. أفضل مجموعة رجّعت 12.97x، وأضعف مجموعة ناجحة عدّت 7.97x.",
  "case1.s1":"أعلى ROAS لمجموعة","case1.s2":"ROAS إجمالي","case1.s3":"أقل CPM بالجنيه",
  "case2.tag":"متجر Shopify · نمو","case2.t":"إجمالي المبيعات زاد 361% عن الفترة السابقة",
  "case2.p":"من أسابيع ثابتة لقمم متكررة. من 1 سبتمبر لـ 17 أكتوبر قفل على 137,897 ج.م إجمالي مبيعات، الأوردرات اتضاعفت 3 مرات وإيراد الشحن زاد معاها.",
  "case2.s1":"إجمالي المبيعات","case2.s2":"الأوردرات","case2.s3":"إجمالي المبيعات بالجنيه",
  "case3.tag":"متجر إلكتروني · سكيل","case3.t":"631 ألف جنيه مبيعات في يوم واحد",
  "case3.p":"سكيل لمتجر بيبيع أصلًا: 642 أوردر في يوم واحد بمعدل تحويل 2.52%، وأكتر من 50 أوردر لسه مستني الشحن آخر اليوم.",
  "case3.s1":"إجمالي المبيعات بالجنيه","case3.s2":"أوردر في يوم","case3.s3":"معدل التحويل",
  "view":"شوف الإثبات ↗",
  "svc.kicker":"اللي بشغّله","svc.title":"منصتين.<br><span class=\"accent\">مسؤولية كاملة.</span>",
  "svc.lede":"مفيش تسليم لجونيور. اللي بيكلمك هو نفسه اللي جوه الحساب الإعلاني.",
  "svc.m":"Meta Ads","svc.mp":"حملات فيسبوك وإنستجرام مبنية على المبيعات والليدز المؤهلة: هيكلة الحساب، Pixel وConversions API، وAdvantage+ جنب الاختبار اليدوي.",
  "svc.t":"TikTok Ads","svc.tp":"كريتيف نيتيف، Spark Ads واختبار سريع للهوكس للبراندات اللي محتاجة وصول ومبيعات من جمهور أصغر.",
  "svc.a":"استهداف الجمهور","svc.ap":"Lookalikes، تجميع اهتمامات ونوافذ ريتارجتنج متفصلة على الفانل بتاعك، مش على تمبلت.",
  "svc.c":"اختبار الكريتيف","svc.cp":"هوكس، زوايا وفورمات بتتختبر على جولات منظمة. اللي بيكسب بيكبر، واللي بيخسر بيتقفل قبل ما ياكل الميزانية.",
  "ind.kicker":"المجالات","ind.title":"أسواق مختلفة.<br><span class=\"accent\">نفس الهوس.</span>",
  "ind.1":"براندات التجارة الإلكترونية","ind.1k":"ROAS · متوسط الأوردر · تكرار الشراء",
  "ind.2":"شركات العقارات","ind.2k":"ليدز مؤهلة · تكلفة الليد",
  "ind.3":"العيادات والرعاية الصحية","ind.3k":"حجوزات فعلية",
  "ind.4":"قطاع السيارات","ind.4k":"تيست درايف · زيارات المعرض",
  "ind.5":"أي بيزنس عايز يكبر","ind.5k":"أي رقم بيحرّك أرباحك",
  "m.kicker":"المنهج","m.title":"الدايرة اللي<br><span class=\"accent\">مبتقفش.</span>",
  "m.1":"مراجعة","m.1p":"التراكينج، تاريخ الحساب، العرض والهوامش. بنلاقي فين الفلوس بتضيع قبل ما نصرف أكتر.",
  "m.2":"هيكلة","m.2p":"الحملات بتتبني من جديد، كل حملة على هدف واحد، بتسميات واضحة وميزانيات تتقري من نظرة.",
  "m.3":"اختبار","m.3p":"جماهير وكريتيف على جولات محكومة. كل اختبار ليه فرضية وقاعدة إيقاف.",
  "m.4":"سكيل","m.4p":"الميزانية بتمشي ورا الإثبات. اللي بيكسب ياخد مساحة، والـ CPM والفريكونسي تحت المراقبة.",
  "m.5":"تقرير","m.5p":"أرقام أسبوعية بلغة بسيطة: صرفنا كام، رجع كام، وهنغيّر إيه بعد كده.",
  "calc.kicker":"حسبة سريعة","calc.title":"هل الـ ROAS بتاعك<br><span class=\"accent\">مكسب فعلًا؟</span>",
  "calc.lede":"ROAS 3x ممكن يكون خسارة. حط أرقامك وشوف خط التعادل بتاعك.",
  "calc.spend":"الصرف الإعلاني الشهري (ج.م)","calc.rev":"الإيراد من الإعلانات (ج.م)","calc.margin":"هامش الربح (%)",
  "calc.roas":"الـ ROAS بتاعك","calc.be":"ROAS التعادل","calc.profit":"الربح بعد الإعلانات",
  "calc.good":"أنت فوق خط التعادل. الخطوة الجاية: سكيل من غير ما الـ ROAS يقع.","calc.bad":"أنت تحت خط التعادل. الإعلانات بتاكل من هامشك، وده بالظبط اللي المراجعة بتلاقيه.",
  "reels.kicker":"الريلز","reels.title":"قدام الكاميرا،<br><span class=\"accent\">من غير تجميل.</span>",
  "reels.lede":"كلام مباشر عن الميديا باينج والتسعير وإيه اللي بيحرّك الحساب الإعلاني بجد. دوس عشان تتفرج بالصوت.",
  "lead.kicker":"يلا نتكلم أرقام","lead.title":"خد مراجعة مجانية<br><span class=\"accent\">لحسابك الإعلاني.</span>",
  "lead.lede":"قولي إنت فين دلوقتي. خلال 48 ساعة هتوصلك قراءة قصيرة وصريحة: الفلوس بتضيع فين وإيه أول حاجة هغيّرها. من غير بريزنتيشن.",
  "lead.l1":"فحص التراكينج والبيكسل","lead.l2":"مراجعة هيكلة الحساب وتوزيع الميزانية","lead.l3":"ثلاث مكاسب سريعة تطبقها الأسبوع ده",
  "f.q1":"بتبيع إيه؟","f.i1":"تجارة إلكترونية","f.i2":"عقارات","f.i3":"عيادة / رعاية صحية","f.i4":"سيارات","f.i5":"حاجة تانية",
  "f.q2":"بتعلن فين دلوقتي؟","f.p4":"لسه مبدأتش","f.next":"التالي ←","f.back":"→ رجوع",
  "f.q3":"الميزانية الإعلانية الشهرية","f.b1":"أقل من 25 ألف ج.م","f.b2":"من 25 لـ 75 ألف ج.م","f.b3":"من 75 لـ 200 ألف ج.م","f.b4":"أكتر من 200 ألف ج.م",
  "f.q4":"الهدف الأساسي","f.g1":"مبيعات أكتر","f.g2":"ROAS أحسن","f.g3":"ليدز مؤهلة","f.g4":"إطلاق براند جديد",
  "f.name":"اسمك","f.brand":"البراند / الموقع","f.phone":"رقم الواتساب","f.msg":"في حاجة لازم أعرفها؟",
  "f.err":"من فضلك اكتب اسمك ورقم الواتساب.","f.send":"ابعت طلب المراجعة",
  "f.doneT":"الطلب وصل.","f.doneP":"شكرًا. عمرو هيكلمك على واتساب خلال 48 ساعة. عايز توفّر الوقت؟",
  "f.doneP2":"طلبك اتنسخ. افتح الإنستجرام والصقه في رسالة لعمرو وهيرد عليك خلال 48 ساعة.","f.dm":"ابعت على إنستجرام ↗",
  "foot.role":"Senior Performance Marketer · Meta Ads · TikTok Ads",
  "reel":"ريل","pricing":"استراتيجية التسعير"
};
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el=>EN[el.dataset.i18n]=el.textContent);
document.querySelectorAll("[data-i18n-html]").forEach(el=>EN[el.dataset.i18nHtml]=el.innerHTML);
Object.assign(EN,{
  "res.active":"Active · Value, purchase","res.killed":"Cut by test rule",
  "calc.good":"You're above break-even. Next step: scale without letting ROAS slide.",
  "calc.bad":"You're under break-even. Ads are eating your margin, and that's exactly what an audit finds.",
  "f.doneP2":"Your request is copied. Open Instagram and paste it in a DM to Amr. He replies within 48 hours.",
  "reel":"Reel","pricing":"Pricing strategy"
});
let lang = "en";
try{ lang = localStorage.getItem("ae-lang") || "en"; }catch(e){}
const t = k => (lang==="ar" ? AR[k] : EN[k]) ?? EN[k] ?? k;

function applyLang(){
  const ar = lang==="ar";
  document.documentElement.lang = ar?"ar":"en";
  document.documentElement.dir = ar?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{ const v=t(el.dataset.i18n); if(v!=null) el.textContent=v; });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{ const v=t(el.dataset.i18nHtml); if(v!=null) el.innerHTML=v; });
  document.getElementById("langBtn").textContent = ar?"EN":"عربي";
  renderTable(); renderReels(); calc();
}
document.getElementById("langBtn").addEventListener("click",()=>{
  lang = lang==="ar"?"en":"ar";
  try{ localStorage.setItem("ae-lang",lang); }catch(e){}
  applyLang();
});

/* ============ NAV ============ */
const nav = document.getElementById("nav");
addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>30),{passive:true});

/* ============ COUNTERS ============ */
const fmt = (n,d)=>n.toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d});
function runCount(el){
  const to=parseFloat(el.dataset.to), d=+el.dataset.dec||0, dur=1800, s=performance.now();
  const step=now=>{ const p=Math.min(1,(now-s)/dur), e=1-Math.pow(1-p,4); el.textContent=fmt(to*e,d); if(p<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* ============ ADS TABLE ============ */
const ROWS = [
  {n:"Ad set 01", spend:1036.93, roas:12.97, value:13449, cpm:162.17, on:true},
  {n:"Ad set 02", spend:1317.46, roas:11.57, value:15246, cpm:130.36, on:true},
  {n:"Ad set 03", spend:1928.08, roas:7.97,  value:15364, cpm:162.47, on:true},
  {n:"Test 04",   spend:225.77,  roas:0,     value:0,     cpm:187.05, on:false},
];
let sortK=null, sortDir=-1;
function renderTable(){
  const body=document.getElementById("amBody");
  let rows=[...ROWS];
  if(sortK) rows.sort((a,b)=>(a[sortK]-b[sortK])*sortDir);
  const maxR=Math.max(...ROWS.map(r=>r.roas));
  body.innerHTML = rows.map(r=>`
    <div class="am-row am-body-row" role="row">
      <span class="name" role="cell"><i class="tog ${r.on?"":"off"}"></i><span>${lang==="ar"?r.n.replace("Ad set","مجموعة").replace("Test","اختبار"):r.n}<em>${t(r.on?"res.active":"res.killed")}</em></span></span>
      <span class="num" role="cell">${fmt(r.spend,2)}</span>
      <span class="num ${r.roas?"accent":""}" role="cell">${r.roas?fmt(r.roas,2)+"x":"0.00x"}<span class="bar"><i data-w="${(r.roas/maxR*100).toFixed(0)}"></i></span></span>
      <span class="num" role="cell">${fmt(r.value,2)}</span>
      <span class="num hide-sm" role="cell">${fmt(r.cpm,2)}</span>
    </div>`).join("");
  requestAnimationFrame(()=>body.querySelectorAll(".bar i").forEach(i=>{ if(tableSeen) i.style.width=i.dataset.w+"%"; }));
}
let tableSeen=false;
document.querySelectorAll(".sort").forEach(b=>b.addEventListener("click",()=>{
  const k=b.dataset.k; sortDir = sortK===k ? -sortDir : -1; sortK=k;
  document.querySelectorAll(".sort").forEach(x=>x.classList.toggle("on",x===b));
  renderTable();
}));

/* ============ REELS ============ */
const REELS = [
  {id:"r03",d:"0:23"},{id:"r04",d:"0:25",k:"pricing"},{id:"r02",d:"0:28"},{id:"r06",d:"0:43"},{id:"r09",d:"0:27"},
  {id:"r01",d:"0:32"},{id:"r05",d:"0:29"},{id:"r07",d:"0:30"},{id:"r08",d:"0:30"},{id:"r10",d:"0:39"}
];
function renderReels(){
  const tr=document.getElementById("reelTrack");
  tr.innerHTML = REELS.map((r,i)=>`
    <div class="reel" data-id="${r.id}" tabindex="0" role="button" aria-label="${t("reel")} ${i+1}">
      <img src="assets/reels/${r.id}.jpg" alt="" loading="lazy">
      <div class="reel-info"><div><b>${r.k?t(r.k):t("reel")+" "+String(i+1).padStart(2,"0")}</b><span class="mono">${r.d} · @_amr_essam_</span></div><span class="play">▶</span></div>
    </div>`).join("");
  tr.querySelectorAll(".reel").forEach(el=>{
    let v;
    el.addEventListener("mouseenter",()=>{
      if(matchMedia("(hover:none)").matches) return;
      if(!v){ v=document.createElement("video"); v.src=`assets/reels/${el.dataset.id}.mp4`; v.muted=true; v.loop=true; v.playsInline=true; v.preload="none"; el.prepend(v); }
      v.play().then(()=>el.classList.add("playing")).catch(()=>{});
    });
    el.addEventListener("mouseleave",()=>{ if(v){ v.pause(); el.classList.remove("playing"); } });
    const open=()=>openLB(`<video src="assets/reels/${el.dataset.id}.mp4" controls autoplay playsinline></video>`);
    el.addEventListener("click",open);
    el.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); open(); } });
  });
}
const track=()=>document.getElementById("reelTrack");
const scrollReels=dir=>{ const w=track().querySelector(".reel").offsetWidth+16; track().scrollBy({left:dir*w*2*(lang==="ar"?-1:1),behavior:"smooth"}); };
document.getElementById("rNext").onclick=()=>scrollReels(1);
document.getElementById("rPrev").onclick=()=>scrollReels(-1);

/* ============ LIGHTBOX ============ */
const lb=document.getElementById("lb"), lbIn=document.getElementById("lbIn");
function openLB(html){ lbIn.innerHTML=html; lb.hidden=false; document.body.style.overflow="hidden"; }
function closeLB(){ lb.hidden=true; lbIn.innerHTML=""; document.body.style.overflow=""; }
document.getElementById("lbX").onclick=closeLB;
lb.addEventListener("click",e=>{ if(e.target===lb) closeLB(); });
addEventListener("keydown",e=>{ if(e.key==="Escape"&&!lb.hidden) closeLB(); });
document.querySelectorAll(".case-shot").forEach(b=>b.addEventListener("click",()=>openLB(`<img src="${b.dataset.src}" alt="">`)));

/* ============ CALCULATOR ============ */
const $=id=>document.getElementById(id);
function calc(){
  const s=+$("cSpend").value||0, r=+$("cRev").value||0, m=(+$("cMargin").value||1)/100;
  $("cMarginOut").textContent=Math.round(m*100)+"%";
  const roas=s?r/s:0, be=1/m, profit=r*m-s;
  $("oRoas").textContent=fmt(roas,2)+"x";
  $("oBe").textContent=fmt(be,2)+"x";
  $("oProfit").textContent=(profit<0?"-":"")+(lang==="ar"?"":"EGP ")+fmt(Math.abs(profit),0)+(lang==="ar"?" ج.م":"");
  $("oProfit").style.color=profit<0?"#FF7A7A":"var(--up)";
  const v=$("oVerdict"); const ok=roas>=be;
  v.textContent=t(ok?"calc.good":"calc.bad"); v.classList.toggle("bad",!ok);
}
["cSpend","cRev","cMargin"].forEach(id=>$(id).addEventListener("input",calc));

/* ============ LEAD FORM ============ */
const form=$("leadForm"); let step=1;
function goStep(n){
  step=n;
  form.querySelectorAll(".step").forEach(s=>s.classList.toggle("on",+s.dataset.step===n));
  form.querySelectorAll(".steps span").forEach(s=>s.classList.toggle("on",+s.dataset.step<=n));
}
form.querySelectorAll(".pills").forEach(g=>g.addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  if(g.classList.contains("multi")) b.classList.toggle("sel");
  else { g.querySelectorAll("button").forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); }
}));
form.querySelectorAll(".next").forEach(b=>b.onclick=()=>goStep(step+1));
form.querySelectorAll(".back").forEach(b=>b.onclick=()=>goStep(step-1));
const pick=name=>[...form.querySelectorAll(`.pills[data-name="${name}"] .sel`)].map(b=>b.dataset.v).join(", ")||"-";
form.addEventListener("submit",async e=>{
  e.preventDefault();
  const name=form.name.value.trim(), phone=form.phone.value.trim();
  form.name.classList.toggle("bad",!name); form.phone.classList.toggle("bad",!phone);
  if(!name||!phone){ $("formErr").classList.add("show"); return; }
  $("formErr").classList.remove("show");
  const msg=[
    "New audit request (website)",
    `Name: ${name}`, `Brand: ${form.brand.value.trim()||"-"}`, `WhatsApp: ${phone}`,
    `Industry: ${pick("industry")}`, `Platforms: ${pick("platforms")}`,
    `Budget: ${pick("budget")}`, `Goal: ${pick("goal")}`,
    `Notes: ${form.msg.value.trim()||"-"}`
  ].join("\n");
  try{ const all=JSON.parse(localStorage.getItem("ae-leads")||"[]"); all.push({t:Date.now(),msg}); localStorage.setItem("ae-leads",JSON.stringify(all)); }catch(_){}
  const doneP=form.querySelector('.done p');
  if(CONFIG.whatsapp){
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
  } else {
    try{ await navigator.clipboard.writeText(msg); }catch(_){}
    doneP.dataset.i18n="f.doneP2"; doneP.textContent=t("f.doneP2");
  }
  goStep(4);
});

/* ============ REVEAL ============ */
const io=new IntersectionObserver(es=>es.forEach(en=>{
  if(!en.isIntersecting) return;
  const el=en.target;
  el.classList.add("in");
  el.querySelectorAll?.(".count").forEach(c=>{ if(!c.dataset.done){ c.dataset.done=1; runCount(c);} });
  if(el.classList.contains("am")){ tableSeen=true; el.querySelectorAll(".bar i").forEach(i=>i.style.width=i.dataset.w+"%"); }
  io.unobserve(el);
}),{threshold:.18});
document.querySelectorAll(".sec-head,.am,.case,.svc-card,.ind li,.loop,.calc,.reels,.lead-copy,.form,.totals,.float-card").forEach(el=>{
  if(!el.classList.contains("float-card")&&!el.classList.contains("totals")) el.classList.add("rv");
  io.observe(el);
});

applyLang();
