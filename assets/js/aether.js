(() => {
'use strict';

const STORE_KEY = 'aether.workspace.v1';
const MODULES = [
  {id:'overview',en:'Overview',fa:'نمای کلی',icon:'grid',group:'core'},
  {id:'workspace',en:'Workspace',fa:'فضای کار',icon:'check-square',group:'core'},
  {id:'files',en:'Files',fa:'فایل‌ها',icon:'folder',group:'core'},
  {id:'studio',en:'Studio',fa:'استودیو',icon:'code',group:'core'},
  {id:'vault',en:'Vault',fa:'گاوصندوق',icon:'shield',group:'core'},
  {id:'network',en:'Network',fa:'شبکه',icon:'share',group:'tools'},
  {id:'terminal',en:'Terminal',fa:'ترمینال',icon:'terminal',group:'tools'},
  {id:'analytics',en:'Analytics',fa:'تحلیل داده',icon:'chart',group:'tools'},
  {id:'control',en:'Control',fa:'مرکز کنترل',icon:'sliders',group:'system'},
  {id:'codeforge',en:'Code Forge',fa:'کد فورج',icon:'layers',group:'system'}
];
const ICONS = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  'check-square':'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m7 12 3 3 7-7"/>',
  folder:'<path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/><path d="M3 10h18"/>',
  code:'<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/>',
  shield:'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11"/><path d="m9 12 2 2 4-4"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.4M8.7 13.3l6.6 4.4"/>',
  terminal:'<path d="m4 17 6-5-6-5M12 19h8"/>',
  chart:'<path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 6-7"/>',
  sliders:'<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 20h16"/>',
  upload:'<path d="M12 16V4m-5 5 5-5 5 5M4 20h16"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  note:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  zap:'<path d="m13 2-3 9h7l-6 11 2-9H6z"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"/>',
  edit:'<path d="m4 16.5-.8 4.3 4.3-.8L20 7.5 16.5 4zM14.5 6l3.5 3.5"/>',
  external:'<path d="M14 3h7v7M21 3l-10 10"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.5 9A7 7 0 0 1 18 6l2 6M4 12l2 6a7 7 0 0 0 12.5-3"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  play:'<path d="m8 5 11 7-11 7z"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12"/><circle cx="12" cy="12" r="3"/>'
};
const icon = name => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.grid) + '</svg>';
const $ = id => document.getElementById(id);
const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const tx = (en, fa) => state.lang === 'fa' ? fa : en;
const nowStamp = () => new Date().toLocaleString(state.lang === 'fa' ? 'fa-IR' : 'en-GB', {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
const seedTasks = [
  {id:101,title:'Map the AETHER core architecture',detail:'Define module boundaries and shared interaction patterns.',priority:'high',done:false,created:Date.now()-86400000},
  {id:102,title:'Review the responsive workspace shell',detail:'Check sidebar, mobile dock, and touch targets.',priority:'medium',done:false,created:Date.now()-54000000},
  {id:103,title:'Document Code Forge engineering direction',detail:'Keep organization facts grounded in public sources.',priority:'low',done:true,created:Date.now()-108000000},
  {id:104,title:'Prepare a local workspace backup',detail:'Export important browser data before larger changes.',priority:'medium',done:false,created:Date.now()-40000000}
];
const defaults = {
  lang:'en',view:'overview',tasks:seedTasks,
  files:[{id:201,name:'AETHER-brief.md',type:'Markdown',content:'# AETHER\\n\\nA local-first digital operating environment by Code Forge.\\n\\nOne responsive application. Desktop and mobile. No AI API dependency.',updated:Date.now()-2500000},{id:202,name:'workspace-notes.txt',type:'Text',content:'Build in public. Keep the core local-first. Ship working modules, not empty routes.',updated:Date.now()-9000000}],
  notes:[{id:301,title:'AETHER project brief',body:'AETHER is a unified digital operating environment.\\n\\nPrinciples\\n- One responsive experience across phone and desktop\\n- Local-first data ownership\\n- English primary, Persian secondary\\n- No AI API or hosted model dependency\\n- Real modules, documented boundaries',updated:Date.now()}],
  activeNote:301,studio:{html:'<main class="card"><div class="tag">AETHER / STUDIO</div><h1>Hello, builder.</h1><p>Prototype an interface in your local browser sandbox.</p><button id="demo">Run interaction</button><p id="status">Waiting for input…</p></main>',css:'body{font-family:system-ui;background:#0b0d10;color:#edf2f6;padding:30px}.card{max-width:560px;margin:30px auto;padding:28px;border:1px solid #d8e0e9;border-radius:18px;background:#151a20;box-shadow:0 20px 50px #0006}.tag{font-size:10px;letter-spacing:.2em;color:#aab6c2}h1{font-size:36px;letter-spacing:-.06em}p{color:#9aa7b3}button{padding:10px 14px;border-radius:8px;border:1px solid #fff;background:#f1f4f7;color:#111;cursor:pointer}',js:'document.getElementById("demo").addEventListener("click",()=>{document.getElementById("status").textContent="Your local preview is alive."})'},
  settings:{particles:true,glow:true,compact:false},activity:[{title:'AETHER workspace initialized',detail:'Local environment is ready',time:Date.now()}]
};
let state = loadState();
function loadState(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
    if(!saved) return structuredClone(defaults);
    return Object.assign(structuredClone(defaults),saved,{settings:Object.assign({},defaults.settings,saved.settings||{}),studio:Object.assign({},defaults.studio,saved.studio||{})});
  }catch(e){return structuredClone(defaults)}
}
function persist(){try{localStorage.setItem(STORE_KEY,JSON.stringify(state))}catch(e){toast(tx('Storage is full. Export your workspace or remove large files.','فضای ذخیره‌سازی پر شده است؛ نسخه پشتیبان بگیر یا فایل‌های حجیم را حذف کن.'))}}
function activity(title,detail){state.activity.unshift({title,detail,time:Date.now()});state.activity=state.activity.slice(0,8);persist()}
function toast(message,detail){const node=document.createElement('div');node.className='toast';node.innerHTML=esc(message)+(detail?'<small>'+esc(detail)+'</small>':'');$('toast-stack').appendChild(node);setTimeout(()=>node.remove(),3400)}
function openView(id){if(!MODULES.some(m=>m.id===id))id='overview';state.view=id;persist();if(location.hash!=='#'+id)location.hash=id;render();closeSidebar()}
function renderNav(){
  const nav=$('primary-nav');
  nav.innerHTML=MODULES.map((m,i)=>'<button class="nav-item '+(state.view===m.id?'active':'')+'" data-view="'+m.id+'">'+icon(m.icon)+'<span>'+tx(m.en,m.fa)+'</span>'+(m.id==='vault'?'<em>LOCAL</em>':'')+'</button>').join('');
  const dock=['overview','workspace','studio','terminal','codeforge'];
  $('mobile-dock').innerHTML=dock.map(id=>{const m=MODULES.find(x=>x.id===id);return '<button class="dock-item '+(state.view===id?'active':'')+'" data-view="'+id+'">'+icon(m.icon)+'<span>'+tx(m.en,m.fa)+'</span></button>'}).join('');
}
function shellLanguage(){
  document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='fa'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');const map={workspace:['WORKSPACE','فضای کار'],localRuntime:['LOCAL RUNTIME','اجرای محلی'],searchCommand:['Search or jump to…','جست‌وجو یا رفتن به…'],localFirst:['LOCAL-FIRST BY DESIGN','محلی‌محور از ابتدا'],allSystemsNominal:['ALL SYSTEMS NOMINAL','تمام سامانه‌ها عادی']};if(map[k])el.textContent=map[k][state.lang==='fa'?1:0]});
  $('language-toggle').textContent=state.lang==='en'?'FA':'EN';
}
function pageHead(kicker,title,desc,actions){return '<div class="page-head"><div><div class="eyebrow">'+kicker+'</div><h1 class="page-title">'+title+'</h1><p class="page-description">'+desc+'</p></div><div class="head-actions">'+(actions||'')+'</div></div>'}
function panel(title,subtitle,body,extra){return '<section class="panel panel-pad '+(extra||'')+'"><div class="panel-head"><div><div class="panel-title">'+title+'</div>'+(subtitle?'<div class="panel-subtitle">'+subtitle+'</div>':'')+'</div></div>'+body+'</section>'}
function statCard(label,value,foot,ic){return '<div class="panel stat-card"><div class="stat-top"><span>'+label+'</span><span class="stat-icon">'+icon(ic)+'</span></div><div class="stat-number">'+value+'</div><div class="stat-foot">'+foot+'</div></div>'}
function emptyState(title,desc,action,label){return '<div class="empty-state"><div class="empty-symbol">＋</div><strong>'+title+'</strong><p>'+desc+'</p>'+(action?'<button class="btn small" data-action="'+action+'">'+label+'</button>':'')+'</div>'}
function overviewView(){
  const total=state.tasks.length,done=state.tasks.filter(t=>t.done).length,open=total-done,files=state.files.length,notes=state.notes.length;
  const quick=[['workspace','check-square',tx('Manage tasks','مدیریت وظایف'),tx('Keep work moving','پیشبرد کارها')],['files','folder',tx('Browse files','مرور فایل‌ها'),tx('Local file space','فضای فایل محلی')],['studio','code',tx('Open Studio','باز کردن استودیو'),tx('Build and preview','ساخت و پیش‌نمایش')],['network','share',tx('Network tools','ابزارهای شبکه'),tx('Inspect local input','تحلیل ورودی محلی')]];
  const recent=state.activity.slice(0,4).map(a=>'<div class="activity-item"><span class="activity-mark">'+icon('clock')+'</span><div class="activity-copy"><strong>'+esc(a.title)+'</strong><small>'+esc(a.detail)+'</small></div><span class="activity-time">'+new Date(a.time).toLocaleTimeString(state.lang==='fa'?'fa-IR':'en-GB',{hour:'2-digit',minute:'2-digit'})+'</span></div>').join('');
  const next=state.tasks.find(t=>!t.done);
  const moduleRows=MODULES.slice(1,7).map(m=>'<div class="module-row"><span class="module-icon">'+icon(m.icon)+'</span><span class="module-info"><strong>'+tx(m.en,m.fa)+'</strong><small>'+moduleDescription(m.id)+'</small></span><i class="module-indicator"></i></div>').join('');
  return pageHead('SYSTEM / 00','AETHER <span class="outline">COMMAND DECK</span>',tx('A unified local workspace for building, organizing, and operating your digital work.','یک فضای کاری یکپارچه و محلی برای ساختن، سازمان‌دهی و مدیریت کارهای دیجیتال.'),'<button class="btn ghost" data-action="export-workspace">'+icon('download')+tx('Export workspace','خروجی فضای کار')+'</button><button class="btn primary" data-view="workspace">'+icon('plus')+tx('New task','وظیفه جدید')+'</button>')+
  '<section class="panel hero-console"><div class="hero-copy"><div class="eyebrow">LOCAL-FIRST / CROSS-PLATFORM</div><h2 class="hero-title">One space.<br><span class="shine">Many systems.</span></h2><p>'+tx('AETHER connects your tools in one responsive environment. Your workspace stays on this device, with no AI service or external API required.','AETHER ابزارهای تو را در یک محیط واکنش‌گرا کنار هم قرار می‌دهد. فضای کارت روی همین دستگاه می‌ماند و به سرویس هوش مصنوعی یا API خارجی نیاز ندارد.')+'</p><div class="head-actions"><button class="btn primary" data-view="workspace">'+tx('Enter workspace','ورود به فضای کار')+' ↗</button><button class="btn ghost" data-view="codeforge">'+tx('Meet the makers','آشنایی با سازندگان')+'</button></div></div><div class="hero-art"><div class="core-orbit"><span class="orbit-node n1"></span><span class="orbit-node n2"></span><span class="orbit-node n3"></span><div class="core-center">A</div></div></div></section>'+
  '<div class="grid cols-4" style="margin-top:14px">'+statCard(tx('OPEN TASKS','وظایف باز'),open,tx(done+' completed',''+done+' تکمیل‌شده'),'check-square')+statCard(tx('LOCAL FILES','فایل‌های محلی'),files,tx('Stored in this browser','ذخیره در این مرورگر'),'folder')+statCard(tx('STUDIO NOTES','یادداشت‌های استودیو'),notes,tx('Private workspace content','محتوای فضای کار شخصی'),'note')+statCard(tx('COMPLETION','میزان تکمیل'),(total?Math.round(done/total*100):0)+'%',tx('Task completion rate','نرخ تکمیل وظایف'),'chart')+'</div>'+
  '<div class="grid cols-2" style="margin-top:14px"><div class="panel panel-pad"><div class="panel-head"><div><div class="panel-title">'+tx('QUICK ACCESS','دسترسی سریع')+'</div><div class="panel-subtitle">'+tx('Jump into an active system','ورود سریع به یک سامانه')+'</div></div></div><div class="quick-grid">'+quick.map(q=>'<button class="quick-card" data-view="'+q[0]+'"><span class="quick-icon">'+icon(q[1])+'</span><span><strong>'+q[2]+'</strong><small>'+q[3]+'</small></span></button>').join('')+'</div><div style="margin-top:19px"><div class="panel-head"><div><div class="panel-title">'+tx('CURRENT FOCUS','تمرکز فعلی')+'</div><div class="panel-subtitle">'+tx('Your next unfinished task','وظیفه بعدی که تکمیل نشده')+'</div></div></div>'+(next?'<div class="task-row"><button class="task-check" data-action="toggle-task" data-id="'+next.id+'"></button><div class="task-content"><strong>'+esc(next.title)+'</strong><small>'+esc(next.detail||'')+'</small></div><span class="pill '+next.priority+'">'+tx(next.priority.toUpperCase(),{high:'زیاد',medium:'متوسط',low:'کم'}[next.priority])+'</span></div>':emptyState(tx('All clear','همه‌چیز مرتب است'),tx('There are no open tasks.','وظیفه بازی باقی نمانده است.'),'',''))+'</div></div>'+
  '<div class="panel panel-pad"><div class="panel-head"><div><div class="panel-title">'+tx('SYSTEM ACTIVITY','فعالیت سامانه')+'</div><div class="panel-subtitle">'+tx('Recent local workspace events','رویدادهای اخیر فضای کار')+'</div></div><button class="panel-action" data-view="analytics">'+tx('View analytics','مشاهده تحلیل')+' ↗</button></div><div class="activity-list">'+(recent||'<div class="activity-time">No activity yet</div>')+'</div></div></div>'+
  '<div class="grid cols-2" style="margin-top:14px">'+panel(tx('SYSTEM MODULES','ماژول‌های سامانه'),tx('Available in this environment','قابل استفاده در این محیط'),'<div class="module-list">'+moduleRows+'</div>')+panel(tx('RUNTIME SNAPSHOT','وضعیت اجرا'),tx('This browser session · no remote services','نشست همین مرورگر · بدون سرویس راه‌دور'),'<div class="settings-row"><div class="settings-copy"><strong>'+tx('Local data layer','لایه داده محلی')+'</strong><small>Browser storage / device scope</small></div><span class="pill low">ACTIVE</span></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('AI & external APIs','هوش مصنوعی و API خارجی')+'</strong><small>'+tx('No dependency configured','هیچ وابستگی‌ای تنظیم نشده')+'</small></div><span class="pill low">NONE</span></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('Offline shell','پوسته آفلاین')+'</strong><small>Service worker cache</small></div><span class="pill low">READY</span></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('Interface language','زبان رابط')+'</strong><small>'+ (state.lang==='en'?'English / فارسی':'فارسی / English')+'</small></div><button class="btn small ghost" id="language-inline">'+tx('Switch','تغییر')+'</button></div>')+'</div>';
}
function moduleDescription(id){const d={workspace:tx('Tasks, priorities, and progress','وظایف، اولویت‌ها و پیشرفت'),files:tx('Local text files and exports','فایل‌های متنی و خروجی محلی'),studio:tx('Notes and live code sandbox','یادداشت و محیط اجرای کد'),vault:tx('Encrypted private records','اطلاعات خصوصی رمزگذاری‌شده'),network:tx('Offline network utilities','ابزارهای شبکه آفلاین'),terminal:tx('Built-in command console','کنسول فرمان داخلی'),analytics:tx('Metrics from local workspace','شاخص‌های فضای کار محلی'),control:tx('Preferences and runtime','تنظیمات و وضعیت اجرا'),codeforge:tx('Organization documentation','مستندات سازمان')};return d[id]||''}
function workspaceView(){
  const filters=['all','open','done'];
  const filter=window.taskFilter||'all';
  const tasks=state.tasks.filter(t=>filter==='all'||(filter==='done'?t.done:!t.done));
  const list=tasks.map(t=>'<div class="task-row '+(t.done?'completed':'')+'"><button class="task-check '+(t.done?'done':'')+'" data-action="toggle-task" data-id="'+t.id+'" aria-label="Toggle task">'+(t.done?'✓':'')+'</button><div class="task-content"><strong>'+esc(t.title)+'</strong><small>'+esc(t.detail||tx('No description','بدون توضیحات'))+' · '+new Date(t.created).toLocaleDateString(state.lang==='fa'?'fa-IR':'en-GB')+'</small></div><span class="pill '+t.priority+'">'+tx(t.priority.toUpperCase(),{high:'زیاد',medium:'متوسط',low:'کم'}[t.priority])+'</span><div class="row-actions"><button class="mini-action" data-action="edit-task" data-id="'+t.id+'" aria-label="Edit">'+icon('edit')+'</button><button class="mini-action" data-action="delete-task" data-id="'+t.id+'" aria-label="Delete">'+icon('trash')+'</button></div></div>').join('');
  return pageHead('WORKSPACE / 01',tx('Work <span class="outline">management</span>','مدیریت <span class="outline">کارها</span>'),tx('A practical task space for planning, prioritizing, and finishing work. All records are stored locally in this browser.','فضایی کاربردی برای برنامه‌ریزی، اولویت‌بندی و تکمیل کارها. تمام اطلاعات در همین مرورگر ذخیره می‌شود.'),'<button class="btn ghost" data-action="export-workspace">'+icon('download')+tx('Backup','پشتیبان')+'</button><button class="btn primary" data-action="new-task">'+icon('plus')+tx('Create task','ساخت وظیفه')+'</button>')+
  '<div class="grid cols-3" style="margin-bottom:14px">'+statCard(tx('TOTAL TASKS','کل وظایف'),state.tasks.length,tx('Across your workspace','در کل فضای کار'),'check-square')+statCard(tx('IN PROGRESS','در حال انجام'),state.tasks.filter(t=>!t.done).length,tx('Still on your list','در فهرست باقی‌مانده'),'clock')+statCard(tx('COMPLETED','تکمیل‌شده'),state.tasks.filter(t=>t.done).length,tx('Marked as finished','علامت‌گذاری‌شده به‌عنوان تمام‌شده'),'zap')+'</div>'+
  '<section class="panel panel-pad"><div class="panel-head"><div><div class="panel-title">'+tx('TASK BOARD','تابلوی وظایف')+'</div><div class="panel-subtitle">'+tx('Track your work without leaving the environment','بدون خروج از محیط، کارهایت را پیگیری کن')+'</div></div><div class="segment-control">'+filters.map(f=>'<button class="'+(filter===f?'active':'')+'" data-filter="'+f+'">'+tx(f==='all'?'All':f==='open'?'Open':'Done',f==='all'?'همه':f==='open'?'باز':'تمام‌شده')+'</button>').join('')+'</div></div><div class="task-list">'+(list||emptyState(tx('Nothing in this view','چیزی برای نمایش نیست'),tx('Create a task or switch the filter.','یک وظیفه بساز یا فیلتر را تغییر بده.'),'new-task',tx('Add a task','افزودن وظیفه')) )+'</div></section>';
}
function filesView(){
  const cards=state.files.map(f=>'<article class="file-card"><div class="file-icon">'+esc((f.name.split('.').pop()||'FILE').slice(0,4).toUpperCase())+'</div><strong title="'+esc(f.name)+'">'+esc(f.name)+'</strong><small>'+esc(f.type||'Text')+' · '+new Date(f.updated||Date.now()).toLocaleDateString(state.lang==='fa'?'fa-IR':'en-GB')+'</small><div class="file-card-foot"><button class="btn small ghost" data-action="open-file" data-id="'+f.id+'">'+tx('Open','باز کردن')+'</button><button class="mini-action" data-action="delete-file" data-id="'+f.id+'">'+icon('trash')+'</button></div></article>').join('');
  return pageHead('FILES / 02',tx('Local <span class="outline">file space</span>','فضای <span class="outline">فایل محلی</span>'),tx('Create, import, edit, and export text files directly in your browser. Files remain on this device.','فایل‌های متنی را مستقیماً در مرورگر بساز، وارد کن، ویرایش کن و خروجی بگیر. فایل‌ها روی همین دستگاه می‌مانند.'),'<button class="btn ghost" data-action="import-files">'+icon('upload')+tx('Import file','وارد کردن فایل')+'</button><button class="btn primary" data-action="new-file">'+icon('plus')+tx('New file','فایل جدید')+'</button>')+
  '<div class="toolbar"><div class="search-field"><input class="field" id="file-search" placeholder="'+tx('Search local files…','جست‌وجوی فایل‌های محلی…')+'"></div><span class="pill">'+state.files.length+' '+tx('ITEMS','مورد')+'</span></div><div class="file-grid" id="file-grid">'+(cards||'<div class="panel">'+emptyState(tx('Your file space is empty','فضای فایل خالی است'),tx('Create a text file or import one from this device.','یک فایل متنی بساز یا از دستگاه وارد کن.'),'new-file',tx('Create file','ساخت فایل'))+'</div>')+'</div><input id="file-picker" type="file" multiple hidden>';
}
function studioView(){
  return pageHead('STUDIO / 03',tx('Build <span class="outline">and explore</span>','بساز و <span class="outline">آزمایش کن</span>'),tx('A focused local studio: capture notes and prototype HTML, CSS, and JavaScript in an isolated preview.','یک استودیوی محلی برای یادداشت‌برداری و نمونه‌سازی HTML، CSS و JavaScript در پیش‌نمایشی ایزوله.'),'<button class="btn ghost" data-action="new-note">'+icon('plus')+tx('New note','یادداشت جدید')+'</button><button class="btn primary" data-action="run-code">'+icon('play')+tx('Run preview','اجرای پیش‌نمایش')+'</button>')+
  '<div class="grid cols-2" style="margin-bottom:14px"><section class="panel"><div class="panel-head panel-pad" style="padding-bottom:0"><div><div class="panel-title">'+tx('NOTEBOOK','دفتر یادداشت')+'</div><div class="panel-subtitle">'+tx('Autosaved to this browser','ذخیره خودکار در همین مرورگر')+'</div></div><button class="btn small ghost" data-action="new-note">'+tx('Add note','یادداشت جدید')+'</button></div><div class="note-layout"><div class="note-list" id="note-list">'+renderNoteList()+'</div><div class="note-editor"><input id="note-title" class="note-title-input" value="'+esc((state.notes.find(n=>n.id===state.activeNote)||state.notes[0]||{title:''}).title)+'" placeholder="'+tx('Untitled note','یادداشت بدون عنوان')+'"><textarea id="note-body" class="note-body-input" placeholder="'+tx('Start writing…','شروع به نوشتن کن…')+'">'+esc((state.notes.find(n=>n.id===state.activeNote)||state.notes[0]||{body:''}).body)+'</textarea><div class="panel-subtitle" id="note-save-state">'+tx('Changes save automatically','تغییرات به‌صورت خودکار ذخیره می‌شوند')+'</div></div></div></section>'+
  '<section class="panel editor-panel"><div class="editor-top"><div class="editor-tabs"><button class="editor-tab active" data-editor="html">HTML</button><button class="editor-tab" data-editor="css">CSS</button><button class="editor-tab" data-editor="js">JS</button></div><span class="pill">LOCAL SANDBOX</span></div><textarea id="code-editor" class="code-editor" spellcheck="false">'+esc(state.studio[currentEditor])+'</textarea><div class="editor-top"><span class="panel-subtitle">'+tx('Preview output','خروجی پیش‌نمایش')+'</span><button class="btn small" data-action="run-code">'+icon('play')+tx('Run','اجرا')+'</button></div><iframe id="code-preview" class="preview-frame" title="Isolated code preview" sandbox="allow-scripts"></iframe></section></div>';
}
function renderNoteList(){return state.notes.map(n=>'<button class="note-entry '+(n.id===state.activeNote?'active':'')+'" data-action="select-note" data-id="'+n.id+'"><strong>'+esc(n.title||tx('Untitled note','یادداشت بدون عنوان'))+'</strong><small>'+new Date(n.updated).toLocaleDateString(state.lang==='fa'?'fa-IR':'en-GB')+'</small></button>').join('')||'<div class="panel-subtitle">'+tx('No notes yet','هنوز یادداشتی نیست')+'</div>'}
let currentEditor='html';
function applyPreview(){const frame=$('code-preview');if(!frame)return;const h=state.studio.html||'';const c=state.studio.css||'';const j=(state.studio.js||'').replace(/<\/script/gi,'<\\/script');frame.srcdoc='<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+c+'</style></head><body>'+h+'<script>'+j+'<\/script></body></html>'}
let vaultKey=null,vaultRecords=[];
function vaultView(){
  const ready=!!localStorage.getItem('aether.vault.salt');
  if(!vaultKey)return pageHead('VAULT / 04',tx('Private <span class="outline">vault</span>','گاوصندوق <span class="outline">شخصی</span>'),tx('A browser-local encrypted notebook. Your passphrase is never stored by AETHER.','دفترچه‌ای رمزگذاری‌شده و محلی. AETHER گذرواژه تو را ذخیره نمی‌کند.'),'')+
    '<div class="grid cols-2"><section class="panel panel-pad"><div class="eyebrow">AES-256-GCM / PBKDF2</div><div class="panel-title">'+(ready?tx('UNLOCK VAULT','باز کردن گاوصندوق'):tx('CREATE YOUR VAULT','ساخت گاوصندوق'))+'</div><p class="page-description">'+tx('Records are encrypted in this browser before they are saved. Use a strong passphrase and keep a separate backup.','اطلاعات پیش از ذخیره در همین مرورگر رمزگذاری می‌شوند. از گذرواژه قوی استفاده کن و نسخه پشتیبان جداگانه نگه دار.')+'</p><form data-form="vault-unlock" class="form-grid" style="margin-top:20px"><label><span class="field-label">'+tx('PASSPHRASE','گذرواژه')+'</span><input class="field" type="password" name="passphrase" minlength="8" required autocomplete="current-password" placeholder="'+tx('At least 8 characters','حداقل ۸ نویسه')+'"></label><button class="btn primary" type="submit">'+(ready?tx('Unlock vault','باز کردن گاوصندوق'):tx('Create encrypted vault','ساخت گاوصندوق رمزگذاری‌شده'))+'</button><div class="panel-subtitle" id="vault-message">'+tx('The encryption key exists only in memory while unlocked.','کلید رمزگذاری فقط هنگام باز بودن، در حافظه موقت نگهداری می‌شود.')+'</div></form></section><section class="panel panel-pad"><div class="panel-title">'+tx('SECURITY MODEL','مدل امنیتی')+'</div><div class="module-list" style="margin-top:15px"><div class="module-row"><span class="module-icon">'+icon('lock')+'</span><span class="module-info"><strong>AES-GCM 256-bit</strong><small>'+tx('Authenticated encryption for each record','رمزگذاری احرازشده برای هر رکورد')+'</small></span></div><div class="module-row"><span class="module-icon">'+icon('shield')+'</span><span class="module-info"><strong>PBKDF2 / SHA-256</strong><small>'+tx('Passphrase-based key derivation','استخراج کلید از گذرواژه')+'</small></span></div><div class="module-row"><span class="module-icon">'+icon('globe')+'</span><span class="module-info"><strong>'+tx('Device-local storage','ذخیره‌سازی روی دستگاه')+'</strong><small>'+tx('No upload or cloud sync','بدون بارگذاری یا همگام‌سازی ابری')+'</small></span></div></div></section></div>';
  const items=vaultRecords.map((r,i)=>'<div class="task-row"><span class="activity-mark">'+icon('lock')+'</span><div class="task-content"><strong>'+esc(r.title)+'</strong><small>'+new Date(r.created).toLocaleString(state.lang==='fa'?'fa-IR':'en-GB')+'</small></div><button class="mini-action" data-action="delete-vault" data-id="'+i+'">'+icon('trash')+'</button></div>').join('');
  return pageHead('VAULT / 04',tx('Private <span class="outline">vault</span>','گاوصندوق <span class="outline">شخصی</span>'),tx('Encrypted records are unlocked in memory for this session only.','رکوردهای رمزگذاری‌شده فقط در مدت این نشست در حافظه باز هستند.'),'<button class="btn ghost" data-action="lock-vault">'+icon('lock')+tx('Lock vault','قفل کردن')+'</button><button class="btn primary" data-action="new-vault-item">'+icon('plus')+tx('New secure note','یادداشت امن')+'</button>')+
  '<section class="panel panel-pad"><div class="panel-head"><div><div class="panel-title">'+tx('ENCRYPTED RECORDS','رکوردهای رمزگذاری‌شده')+'</div><div class="panel-subtitle">'+vaultRecords.length+' '+tx('records decrypted in memory','رکورد بازشده در حافظه')+'</div></div><span class="pill low">UNLOCKED</span></div><div class="task-list">'+(items||emptyState(tx('Vault is empty','گاوصندوق خالی است'),tx('Add a secure note. Its contents will be encrypted before storage.','یک یادداشت امن بساز؛ محتوای آن پیش از ذخیره رمزگذاری می‌شود.'),'new-vault-item',tx('Create secure note','ساخت یادداشت امن')) )+'</div></section>';
}
function bytesToB64(bytes){let s='';bytes.forEach(b=>s+=String.fromCharCode(b));return btoa(s)}
function b64ToBytes(s){return Uint8Array.from(atob(s),c=>c.charCodeAt(0))}
async function deriveVaultKey(pass,salt){const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt:salt,iterations:210000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
async function encryptVaultItem(obj){const iv=crypto.getRandomValues(new Uint8Array(12));const data=new TextEncoder().encode(JSON.stringify(obj));const cipher=await crypto.subtle.encrypt({name:'AES-GCM',iv:iv},vaultKey,data);return {iv:bytesToB64(iv),cipher:bytesToB64(new Uint8Array(cipher))}}
async function decryptVaultItem(item){const data=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64ToBytes(item.iv)},vaultKey,b64ToBytes(item.cipher));return JSON.parse(new TextDecoder().decode(data))}
async function loadVaultRecords(){const arr=JSON.parse(localStorage.getItem('aether.vault.entries')||'[]');vaultRecords=[];for(const item of arr){vaultRecords.push(await decryptVaultItem(item))}}
async function networkView(){
  return pageHead('NETWORK / 05',tx('Network <span class="outline">toolkit</span>','ابزارهای <span class="outline">شبکه</span>'),tx('Offline utilities for inspecting values and doing local calculations. No remote probes or external API calls are made.','ابزارهای آفلاین برای تحلیل ورودی‌ها و محاسبات محلی؛ هیچ پویش راه‌دور یا فراخوانی API انجام نمی‌شود.'),'')+
  '<div class="grid cols-2"><section class="panel panel-pad"><div class="panel-title">'+tx('URL INSPECTOR','تحلیل‌گر نشانی')+'</div><div class="panel-subtitle">'+tx('Parse a URL locally','تجزیه نشانی به‌صورت محلی')+'</div><form data-form="url-check" style="margin-top:15px"><input class="field" name="url" required placeholder="https://example.com/path?mode=local"><button class="btn primary" style="margin-top:10px" type="submit">'+tx('Inspect URL','تحلیل نشانی')+'</button></form><div id="url-result"></div></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('IPV4 SUBNET CALCULATOR','محاسبه‌گر زیرشبکه IPv4')+'</div><div class="panel-subtitle">'+tx('Calculate a network range from an address and prefix','محاسبه بازه شبکه با نشانی و پیشوند')+'</div><form data-form="subnet-check" class="form-grid" style="margin-top:15px"><div class="grid cols-2"><input class="field" name="ip" required placeholder="192.168.1.10"><input class="field" name="prefix" type="number" min="0" max="32" value="24" required></div><button class="btn primary" type="submit">'+tx('Calculate subnet','محاسبه زیرشبکه')+'</button></form><div id="subnet-result"></div></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('SHA-256 HASH','هش SHA-256')+'</div><div class="panel-subtitle">'+tx('Hash a text value locally in this browser','محاسبه هش متن در همین مرورگر')+'</div><form data-form="hash-check" style="margin-top:15px"><textarea class="text-area" name="text" placeholder="'+tx('Text to hash…','متن برای هش…')+'"></textarea><button class="btn primary" style="margin-top:10px" type="submit">'+tx('Generate hash','تولید هش')+'</button></form><div id="hash-result"></div></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('IDENTIFIERS','شناسه‌ها')+'</div><div class="panel-subtitle">'+tx('Generate local identifiers with browser crypto','ساخت شناسه با رمزنگاری مرورگر')+'</div><div class="tool-result"><strong>UUID v4</strong><code id="uuid-result">'+(crypto.randomUUID?crypto.randomUUID():'Available in modern browsers')+'</code><button class="btn small ghost" style="margin-top:9px" data-action="new-uuid">'+tx('Generate new','تولید جدید')+'</button></div></section></div>';
}
function ipToNumber(ip){const p=ip.split('.');if(p.length!==4||p.some(x=>!/^\d{1,3}$/.test(x)||Number(x)>255))throw new Error('Invalid IPv4 address');return p.reduce((n,x)=>(n*256+Number(x))>>>0,0)>>>0}
function numberToIp(n){return [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.')}
function terminalView(){
  if(!window.terminalLines)window.terminalLines=[{kind:'system',text:'AETHER SHELL [application console] · v1.0.0'},{kind:'muted',text:tx('Type "help" to list available commands. This console does not run operating-system commands.','برای دیدن فرمان‌ها help را وارد کن. این کنسول فرمان‌های سیستم‌عامل را اجرا نمی‌کند.')}];
  return pageHead('TERMINAL / 06',tx('Command <span class="outline">console</span>','کنسول <span class="outline">فرمان</span>'),tx('A built-in command interface for navigating and inspecting AETHER. It is not a system shell.','رابط فرمان داخلی برای جابه‌جایی و بررسی AETHER؛ این محیط ترمینال سیستم‌عامل نیست.'),'<button class="btn ghost" data-action="clear-terminal">'+tx('Clear output','پاک کردن خروجی')+'</button>')+
  '<div class="terminal-window"><div class="terminal-bar"><i class="terminal-dot"></i><i class="terminal-dot"></i><i class="terminal-dot"></i><span>AETHER / LOCAL CONSOLE</span></div><div class="terminal-output" id="terminal-output">'+window.terminalLines.map(l=>'<div class="terminal-line '+l.kind+'">'+esc(l.text)+'</div>').join('')+'</div><form class="terminal-input-row" data-form="terminal-command"><span class="terminal-prompt">aether@local:~$</span><input class="terminal-input" name="command" id="terminal-command" autocomplete="off" spellcheck="false" placeholder="'+tx('Type a command…','یک فرمان وارد کن…')+'"><button class="btn small" type="submit">'+tx('Enter','اجرا')+'</button></form></div>'+
  '<div class="grid cols-3" style="margin-top:13px"><div class="org-stat"><strong>help</strong><small>'+tx('LIST COMMANDS','فهرست فرمان‌ها')+'</small></div><div class="org-stat"><strong>open</strong><small>'+tx('OPEN A MODULE','باز کردن ماژول')+'</small></div><div class="org-stat"><strong>status</strong><small>'+tx('RUNTIME SNAPSHOT','وضعیت اجرا')+'</small></div></div>';
}
function analyticsView(){
  const total=state.tasks.length,done=state.tasks.filter(t=>t.done).length,open=total-done,pct=total?Math.round(done/total*100):0;
  const bars=[state.tasks.filter(t=>t.priority==='low').length,state.tasks.filter(t=>t.priority==='medium').length,state.tasks.filter(t=>t.priority==='high').length];
  const labels=[tx('Low','کم'),tx('Medium','متوسط'),tx('High','زیاد')],max=Math.max(1,...bars);
  return pageHead('ANALYTICS / 07',tx('Workspace <span class="outline">intelligence</span>','تحلیل <span class="outline">فضای کار</span>'),tx('A live view of data already stored in this browser. No tracking service is involved.','نمایی زنده از داده‌هایی که در همین مرورگر ذخیره شده‌اند؛ بدون سرویس ردیابی.'),'<button class="btn ghost" data-action="export-workspace">'+icon('download')+tx('Export data','خروجی داده‌ها')+'</button>')+
  '<div class="grid cols-3" style="margin-bottom:14px">'+statCard(tx('TASK VOLUME','حجم وظایف'),total,tx('Total records','کل رکوردها'),'check-square')+statCard(tx('FILE INVENTORY','فهرست فایل‌ها'),state.files.length,tx('Local file entries','ورودی فایل‌های محلی'),'folder')+statCard(tx('NOTES','یادداشت‌ها'),state.notes.length,tx('Studio documents','اسناد استودیو'),'note')+'</div>'+
  '<div class="grid cols-2"><section class="panel panel-pad"><div class="panel-head"><div><div class="panel-title">'+tx('TASK COMPLETION','تکمیل وظایف')+'</div><div class="panel-subtitle">'+tx('Current completion ratio','نسبت تکمیل فعلی')+'</div></div></div><div class="ring-wrap"><div class="ring-chart" style="--progress:'+pct+'%"><strong>'+pct+'%</strong></div><div class="legend"><div class="legend-item"><i class="legend-dot"></i>'+done+' '+tx('Completed','تکمیل‌شده')+'</div><div class="legend-item"><i class="legend-dot"></i>'+open+' '+tx('Open','باز')+'</div><div class="legend-item"><i class="legend-dot"></i>'+total+' '+tx('Total','مجموع')+'</div></div></div></section>'+
  '<section class="panel panel-pad"><div class="panel-head"><div><div class="panel-title">'+tx('PRIORITY DISTRIBUTION','توزیع اولویت')+'</div><div class="panel-subtitle">'+tx('Tasks by selected priority','وظایف بر اساس اولویت')+'</div></div></div><div class="chart-bars">'+bars.map((n,i)=>'<div class="chart-column"><span style="height:'+Math.max(3,n/max*100)+'%"></span><small>'+labels[i]+'</small><small>'+n+'</small></div>').join('')+'</div></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('LOCAL STORAGE FOOTPRINT','نمای کلی داده‌های محلی')+'</div><p class="page-description">'+tx('AETHER currently keeps workspace records in browser storage. The browser controls the actual quota and eviction policy.','AETHER رکوردهای فضای کار را در ذخیره‌سازی مرورگر نگه می‌دارد. سهمیه و سیاست حذف داده در اختیار خود مرورگر است.')+'</p><div class="settings-row"><div class="settings-copy"><strong>'+tx('Task records','رکورد وظایف')+'</strong><small>'+state.tasks.length+' '+tx('items','مورد')+'</small></div><span class="pill low">LOCAL</span></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('File contents','محتوای فایل‌ها')+'</strong><small>'+state.files.length+' '+tx('items','مورد')+'</small></div><span class="pill low">LOCAL</span></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('Encrypted vault','گاوصندوق رمزگذاری‌شده')+'</strong><small>'+JSON.parse(localStorage.getItem('aether.vault.entries')||'[]').length+' '+tx('encrypted records','رکورد رمزگذاری‌شده')+'</small></div><span class="pill low">AES-GCM</span></div></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('DATA OWNERSHIP','مالکیت داده')+'</div><div class="metric-big">'+tx('100%','۱۰۰٪')+'</div><div class="metric-caption">'+tx('of workspace records remain in this browser in this release.','از رکوردهای فضای کار در این نسخه داخل همین مرورگر می‌مانند.')+'</div><div class="progress-line" style="margin-top:17px"><span style="width:100%"></span></div><p class="panel-subtitle">'+tx('No account, remote sync, analytics beacon, or AI endpoint is configured.','هیچ حساب کاربری، همگام‌سازی راه‌دور، ابزار ردیابی یا درگاه هوش مصنوعی تنظیم نشده است.')+'</p></section></div>';
}
function controlView(){
  return pageHead('CONTROL / 08',tx('System <span class="outline">control</span>','مرکز <span class="outline">کنترل</span>'),tx('Tune the local interface, manage backups, and review runtime capabilities.','رابط محلی را تنظیم کن، نسخه پشتیبان بگیر و قابلیت‌های محیط را بررسی کن.'),'')+
  '<div class="grid cols-2"><section class="panel panel-pad"><div class="panel-title">'+tx('INTERFACE PREFERENCES','ترجیحات رابط')+'</div><div class="settings-row"><div class="settings-copy"><strong>'+tx('Particle field','میدان ذرات')+'</strong><small>'+tx('Animated white particles and connecting filaments','ذرات سفید متحرک و خطوط اتصال')+'</small></div><button class="toggle '+(state.settings.particles?'on':'')+'" data-action="toggle-particles" aria-label="Toggle particles"></button></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('Ambient glow','درخشش محیطی')+'</strong><small>'+tx('Soft luminous layers and interface bloom','لایه‌های نور و درخشش رابط')+'</small></div><button class="toggle '+(state.settings.glow?'on':'')+'" data-action="toggle-glow" aria-label="Toggle glow"></button></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('Interface language','زبان رابط')+'</strong><small>'+tx('English primary · Persian secondary','انگلیسی اصلی · فارسی دوم')+'</small></div><div class="segment-control"><button class="'+(state.lang==='en'?'active':'')+'" data-action="set-language" data-lang="en">EN</button><button class="'+(state.lang==='fa'?'active':'')+'" data-action="set-language" data-lang="fa">FA</button></div></div></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('WORKSPACE DATA','داده‌های فضای کار')+'</div><p class="page-description">'+tx('Export a portable JSON snapshot or restore one you previously exported. Import replaces the current workspace records.','یک نسخه JSON قابل انتقال خروجی بگیر یا نسخه قبلی را بازیابی کن. وارد کردن، اطلاعات فعلی فضای کار را جایگزین می‌کند.')+'</p><div class="head-actions" style="margin-top:18px"><button class="btn primary" data-action="export-workspace">'+icon('download')+tx('Export backup','خروجی پشتیبان')+'</button><button class="btn ghost" data-action="import-backup">'+icon('upload')+tx('Import backup','وارد کردن پشتیبان')+'</button></div><input id="backup-picker" type="file" accept="application/json,.json" hidden></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('RUNTIME CAPABILITIES','قابلیت‌های محیط اجرا')+'</div><div class="settings-row"><div class="settings-copy"><strong>Progressive Web App</strong><small>'+tx('Installable shell with offline cache','پوسته قابل نصب با حافظه آفلاین')+'</small></div><span class="pill low">READY</span></div><div class="settings-row"><div class="settings-copy"><strong>Web Crypto</strong><small>AES-GCM / PBKDF2</small></div><span class="pill low">'+(window.crypto&&crypto.subtle?'AVAILABLE':'UNAVAILABLE')+'</span></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('External services','سرویس‌های خارجی')+'</strong><small>'+tx('No remote API configured','هیچ API راه‌دوری تنظیم نشده')+'</small></div><span class="pill low">NONE</span></div><div class="settings-row"><div class="settings-copy"><strong>'+tx('Responsive layout','چیدمان واکنش‌گرا')+'</strong><small>'+tx('Desktop sidebar · mobile dock','نوار کناری دسکتاپ · نوار موبایل')+'</small></div><span class="pill low">ACTIVE</span></div></section>'+
  '<section class="panel panel-pad"><div class="panel-title">'+tx('ABOUT THIS BUILD','درباره این نسخه')+'</div><div class="metric-big">1.0.0</div><div class="metric-caption">'+tx('AETHER initial public foundation','نسخه پایه عمومی AETHER')+'</div><p class="page-description">'+tx('Built as one static, modular web application for GitHub Pages. Data is browser-local and is not synchronized between devices.','ساخته‌شده به‌صورت یک برنامه وب ماژولار و ایستا برای GitHub Pages. داده‌ها محلی هستند و بین دستگاه‌ها همگام‌سازی نمی‌شوند.')+'</p><a class="btn ghost" style="margin-top:12px" href="https://github.com/Code-ForgeHQ/Code-ForgeHQ.github.io" target="_blank" rel="noreferrer">'+tx('Source repository','مخزن کد')+' ↗</a></section></div>';
}
function codeforgeView(){
  return pageHead('ORGANIZATION / 09',tx('Built by <span class="outline">Code Forge</span>','ساخته‌شده توسط <span class="outline">Code Forge</span>'),tx('The team space behind AETHER: project direction, engineering principles, public repositories, and ways to contribute.','گروه سازنده AETHER؛ مسیر پروژه، اصول مهندسی، مخازن عمومی و راه‌های مشارکت.'),'<a class="btn primary" href="https://github.com/Code-ForgeHQ" target="_blank" rel="noreferrer">'+icon('external')+'GitHub Organization</a>')+
  '<section class="codeforge-hero"><div><div class="eyebrow">ENGINEERING ORGANIZATION / OPEN SOURCE</div><h2 class="hero-title" style="font-size:clamp(30px,4vw,48px)">CODE <span class="shine">FORGE</span></h2><p class="page-description">'+tx('A software engineering group and the organization publishing the AETHER project. Explore its public work through the official GitHub organization.','یک گروه مهندسی نرم‌افزار و سازمان منتشرکننده پروژه AETHER. فعالیت‌های عمومی آن را از طریق سازمان رسمی گیت‌هاب دنبال کن.')+'</p><div class="head-actions" style="margin-top:17px"><a class="btn primary" href="https://github.com/Code-ForgeHQ" target="_blank" rel="noreferrer">'+tx('Explore organization','مشاهده سازمان')+' ↗</a><a class="btn ghost" href="https://github.com/orgs/Code-ForgeHQ/repositories" target="_blank" rel="noreferrer">'+tx('Public repositories','مخازن عمومی')+' ↗</a></div></div><div class="codeforge-monogram">CF</div></section>'+
  '<div class="grid cols-3 org-stats" style="margin-top:14px"><div class="org-stat"><strong>AETHER</strong><small>'+tx('FLAGSHIP OPEN PROJECT','پروژه متن‌باز شاخص')+'</small></div><div class="org-stat"><strong>OPEN</strong><small>'+tx('PUBLIC DEVELOPMENT','توسعه عمومی')+'</small></div><div class="org-stat"><strong>LOCAL-FIRST</strong><small>'+tx('PROJECT ENGINEERING CHARTER','منشور مهندسی پروژه')+'</small></div></div>'+
  '<div class="grid cols-2" style="margin-top:14px">'+panel(tx('MISSION & DIRECTION','مأموریت و مسیر'),tx('The engineering charter adopted for AETHER','منشور مهندسی انتخاب‌شده برای AETHER'),'<p class="page-description">'+tx('Build practical software systems with clear boundaries, careful interaction design, and transparent technical constraints. Prefer useful capabilities over decorative placeholders.','سامانه‌های نرم‌افزاری کاربردی با مرزبندی روشن، طراحی تعاملی دقیق و محدودیت‌های فنی شفاف بسازیم. قابلیت واقعی را به صفحات تزئینی ترجیح بدهیم.')+'</p><div class="module-list" style="margin-top:13px"><div class="module-row"><span class="module-icon">'+icon('layers')+'</span><span class="module-info"><strong>'+tx('Modular engineering','مهندسی ماژولار')+'</strong><small>'+tx('Independent systems, shared experience','سامانه‌های مستقل با تجربه یکپارچه')+'</small></span></div><div class="module-row"><span class="module-icon">'+icon('globe')+'</span><span class="module-info"><strong>'+tx('Cross-platform by default','چندسکویی از ابتدا')+'</strong><small>'+tx('Phone, tablet, and desktop layouts','چیدمان موبایل، تبلت و دسکتاپ')+'</small></span></div><div class="module-row"><span class="module-icon">'+icon('shield')+'</span><span class="module-info"><strong>'+tx('Privacy-aware foundations','زیرساخت آگاه به حریم خصوصی')+'</strong><small>'+tx('Local-first storage and explicit boundaries','ذخیره‌سازی محلی و مرزهای روشن')+'</small></span></div></div>')+
  panel(tx('ENGINEERING PRINCIPLES','اصول مهندسی'),tx('How this project is intended to be built','رویکرد توسعه این پروژه'),'<div class="settings-row"><div class="settings-copy"><strong>01 / '+tx('Function before decoration','عملکرد پیش از تزئین')+'</strong><small>'+tx('Each system should solve a real task.','هر سامانه باید مسئله‌ای واقعی را حل کند.')+'</small></div></div><div class="settings-row"><div class="settings-copy"><strong>02 / '+tx('Transparent limitations','محدودیت‌های شفاف')+'</strong><small>'+tx('Document what the product does and does not do.','قابلیت‌ها و محدودیت‌ها را مستند کنیم.')+'</small></div></div><div class="settings-row"><div class="settings-copy"><strong>03 / '+tx('Respect user data','احترام به داده کاربر')+'</strong><small>'+tx('Local storage, encryption, and explicit export.','ذخیره‌سازی محلی، رمزگذاری و خروجی شفاف.')+'</small></div></div><div class="settings-row"><div class="settings-copy"><strong>04 / '+tx('Accessible interaction','تعامل دسترس‌پذیر')+'</strong><small>'+tx('Keyboard, touch, readable contrast, reduced motion.','کیبورد، لمس، کنتراست خوانا و حرکت کمتر.')+'</small></div></div>')+'</div>'+
  '<div class="grid cols-2" style="margin-top:14px">'+panel(tx('PUBLIC PROJECT LINKS','پیوندهای عمومی پروژه'),tx('Official organization destinations','مقصدهای رسمی سازمان'),'<div class="module-list"><a class="module-row" href="https://github.com/Code-ForgeHQ" target="_blank" rel="noreferrer"><span class="module-icon">'+icon('layers')+'</span><span class="module-info"><strong>Code Forge / GitHub</strong><small>github.com/Code-ForgeHQ</small></span><span class="external-mark">↗</span></a><a class="module-row" href="https://github.com/orgs/Code-ForgeHQ/repositories" target="_blank" rel="noreferrer"><span class="module-icon">'+icon('folder')+'</span><span class="module-info"><strong>'+tx('Repository directory','فهرست مخازن')+'</strong><small>Public organization repositories</small></span><span class="external-mark">↗</span></a><a class="module-row" href="https://github.com/Code-ForgeHQ/Code-ForgeHQ.github.io" target="_blank" rel="noreferrer"><span class="module-icon">'+icon('code')+'</span><span class="module-info"><strong>AETHER source</strong><small>Code-ForgeHQ.github.io</small></span><span class="external-mark">↗</span></a></div>')+
  panel(tx('PEOPLE & PARTICIPATION','اعضا و مشارکت'),tx('Use live public sources for current information','برای اطلاعات به‌روز از منابع عمومی استفاده کن'),'<p class="page-description">'+tx('This page does not invent a member list or contributor count. Current public members, maintainers, and repository contributors can change, so the official organization profile and repository contributor pages remain the source of truth.','این صفحه فهرست اعضا یا تعداد مشارکت‌کنندگان را حدس نمی‌زند. اعضا، نگه‌دارندگان و مشارکت‌کنندگان عمومی ممکن است تغییر کنند؛ بنابراین پروفایل رسمی سازمان و صفحه مشارکت‌کنندگان مخازن مرجع معتبر هستند.')+'</p><a class="btn ghost" style="margin-top:14px" href="https://github.com/orgs/Code-ForgeHQ/people" target="_blank" rel="noreferrer">'+tx('View public members','مشاهده اعضای عمومی')+' ↗</a>')+'</div>'+
  '<div class="panel panel-pad" style="margin-top:14px"><div class="panel-head"><div><div class="panel-title">'+tx('DOCUMENTATION LIBRARY','کتابخانه مستندات')+'</div><div class="panel-subtitle">'+tx('Project-level documentation stored in this repository','مستندات پروژه در همین مخزن')+'</div></div></div><div class="quick-grid"><a class="quick-card" href="./docs/ORGANIZATION.md" target="_blank"><span class="quick-icon">'+icon('layers')+'</span><span><strong>ORGANIZATION.md</strong><small>'+tx('Group and project context','معرفی گروه و پروژه')+'</small></span></a><a class="quick-card" href="./docs/ARCHITECTURE.md" target="_blank"><span class="quick-icon">'+icon('grid')+'</span><span><strong>ARCHITECTURE.md</strong><small>'+tx('System structure','ساختار سامانه')+'</small></span></a><a class="quick-card" href="./docs/ROADMAP.md" target="_blank"><span class="quick-icon">'+icon('chart')+'</span><span><strong>ROADMAP.md</strong><small>'+tx('Milestones and direction','نقشه راه و مراحل')+'</small></span></a><a class="quick-card" href="./CONTRIBUTING.md" target="_blank"><span class="quick-icon">'+icon('share')+'</span><span><strong>CONTRIBUTING.md</strong><small>'+tx('How to contribute','روش مشارکت')+'</small></span></a></div></div>';
}
function render(){
  shellLanguage();renderNav();
  const views={overview:overviewView,workspace:workspaceView,files:filesView,studio:studioView,vault:vaultView,network:networkView,terminal:terminalView,analytics:analyticsView,control:controlView,codeforge:codeforgeView};
  const m=MODULES.find(x=>x.id===state.view)||MODULES[0];
  $('current-section').textContent=(state.lang==='fa'?m.fa:m.en).toUpperCase();
  Promise.resolve(views[state.view]()).then(html=>{if(state.view===m.id){$('view-root').innerHTML=html;if(state.view==='studio')applyPreview();if(state.view==='terminal')scrollTerminal();}});
}
function scrollTerminal(){const out=$('terminal-output');if(out)out.scrollTop=out.scrollHeight}
function closeSidebar(){$('sidebar').classList.remove('open');$('mobile-backdrop').classList.remove('open')}
function openModal(title,body){$('modal-card').innerHTML='<div class="modal-head"><h3>'+title+'</h3><button class="modal-close" data-action="close-modal">'+icon('close')+'</button></div>'+body;$('modal-layer').classList.add('open');$('modal-layer').setAttribute('aria-hidden','false')}
function closeModal(){$('modal-layer').classList.remove('open');$('modal-layer').setAttribute('aria-hidden','true');$('modal-card').innerHTML=''}
function newTaskModal(task){
  const t=task||{title:'',detail:'',priority:'medium'};
  openModal(task?tx('Edit task','ویرایش وظیفه'):tx('Create a task','ساخت وظیفه'),'<form data-form="task" class="form-grid"><input type="hidden" name="id" value="'+(task?task.id:'')+'"><label><span class="field-label">'+tx('TITLE','عنوان')+'</span><input class="field" name="title" required maxlength="100" value="'+esc(t.title)+'" placeholder="'+tx('What needs to be done?','چه کاری باید انجام شود؟')+'"></label><label><span class="field-label">'+tx('DETAILS','جزئیات')+'</span><textarea class="text-area" name="detail" maxlength="500" placeholder="'+tx('Add context or a next step…','جزئیات یا گام بعدی…')+'">'+esc(t.detail||'')+'</textarea></label><label><span class="field-label">'+tx('PRIORITY','اولویت')+'</span><select class="select-field" name="priority"><option value="low" '+(t.priority==='low'?'selected':'')+'>'+tx('Low','کم')+'</option><option value="medium" '+(t.priority==='medium'?'selected':'')+'>'+tx('Medium','متوسط')+'</option><option value="high" '+(t.priority==='high'?'selected':'')+'>'+tx('High','زیاد')+'</option></select></label><div class="form-actions"><button type="button" class="btn ghost" data-action="close-modal">'+tx('Cancel','انصراف')+'</button><button class="btn primary" type="submit">'+tx('Save task','ذخیره وظیفه')+'</button></div></form>');
}
function newFileModal(file){
  const f=file||{name:'',content:''};
  openModal(file?tx('Edit local file','ویرایش فایل محلی'):tx('Create a local file','ساخت فایل محلی'),'<form data-form="file" class="form-grid"><input type="hidden" name="id" value="'+(file?file.id:'')+'"><label><span class="field-label">'+tx('FILE NAME','نام فایل')+'</span><input class="field" name="name" required value="'+esc(f.name)+'" placeholder="notes.md"></label><label><span class="field-label">'+tx('CONTENT','محتوا')+'</span><textarea class="text-area" name="content" style="min-height:220px" spellcheck="false">'+esc(f.content||'')+'</textarea></label><div class="form-actions"><button type="button" class="btn ghost" data-action="close-modal">'+tx('Cancel','انصراف')+'</button><button class="btn primary" type="submit">'+tx('Save file','ذخیره فایل')+'</button></div></form>');
}
function newNote(){
  const n={id:Date.now(),title:tx('Untitled note','یادداشت بدون عنوان'),body:'',updated:Date.now()};state.notes.unshift(n);state.activeNote=n.id;persist();activity('Created a studio note','Studio');render();toast(tx('Note created','یادداشت ساخته شد'));
}
function newVaultItemModal(){openModal(tx('New secure record','رکورد امن جدید'),'<form data-form="vault-item" class="form-grid"><label><span class="field-label">'+tx('RECORD TITLE','عنوان رکورد')+'</span><input class="field" name="title" required maxlength="90"></label><label><span class="field-label">'+tx('PRIVATE CONTENT','محتوای خصوصی')+'</span><textarea class="text-area" name="body" required style="min-height:180px"></textarea></label><div class="form-actions"><button type="button" class="btn ghost" data-action="close-modal">'+tx('Cancel','انصراف')+'</button><button class="btn primary" type="submit">'+tx('Encrypt and save','رمزگذاری و ذخیره')+'</button></div></form>')}
function exportBlob(name,content,type){const blob=new Blob([content],{type:type||'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function exportWorkspace(){const backup={format:'AETHER-WORKSPACE',version:1,exportedAt:new Date().toISOString(),state:{lang:state.lang,tasks:state.tasks,files:state.files,notes:state.notes,activeNote:state.activeNote,studio:state.studio,settings:state.settings,activity:state.activity}};exportBlob('aether-workspace-backup.json',JSON.stringify(backup,null,2),'application/json');toast(tx('Workspace backup exported','نسخه پشتیبان صادر شد'),tx('Keep it somewhere safe. Vault records are not included.','در جای امن نگهش دار؛ رکوردهای گاوصندوق در این خروجی نیستند.'))}
function runTerminal(command){
  const cmd=command.trim();if(!cmd)return;const parts=cmd.split(/\s+/);const key=parts[0].toLowerCase();const arg=parts.slice(1).join(' ');
  const add=(text,kind)=>window.terminalLines.push({text:text,kind:kind||'output'});
  add('aether@local:~$ '+cmd,'system');
  if(key==='clear'){window.terminalLines=[];render();return}
  if(key==='help'){add('help       Show available commands');add('about      AETHER runtime information');add('modules    List available modules');add('status     Local workspace snapshot');add('date       Current local date and time');add('whoami     Workspace identity');add('version    Application version');add('ls         List local workspace collections');add('tasks      Show open tasks');add('open NAME  Navigate to a module');add('clear      Clear this console');}
  else if(key==='about')add('AETHER v1.0.0 · local-first digital operating environment by Code Forge.');
  else if(key==='modules')add(MODULES.map(m=>m.id).join('  ·  '));
  else if(key==='status')add('tasks='+state.tasks.length+' | files='+state.files.length+' | notes='+state.notes.length+' | locale='+state.lang+' | storage=local');
  else if(key==='date')add(new Date().toString());
  else if(key==='whoami')add('Code Forge / local workspace owner');
  else if(key==='version')add('AETHER 1.0.0 / static-web');
  else if(key==='ls')add('workspace/  files/  studio/  vault/  analytics/  docs/');
  else if(key==='tasks')state.tasks.filter(t=>!t.done).forEach(t=>add('['+t.priority.toUpperCase()+'] '+t.title));
  else if(key==='open'){const m=MODULES.find(x=>x.id===arg.toLowerCase());if(m){add('Opening module: '+m.en);state.view=m.id;persist();location.hash=m.id;render()}else add('Unknown module. Try: open workspace','error')}
  else if(key==='lang'){if(arg==='fa'||arg==='en'){state.lang=arg;persist();add('Language set to '+arg);render()}else add('Usage: lang en | lang fa')}
  else add('Unknown command. Type "help" for the command list.','error');
  window.terminalLines=window.terminalLines.slice(-90);render();scrollTerminal();
}
function renderCommandResults(query){
  const q=(query||'').toLowerCase();const items=MODULES.filter(m=>(m.en+' '+m.fa+' '+m.id).toLowerCase().includes(q));
  $('command-results').innerHTML=items.map((m,i)=>'<button class="command-result '+(i===0?'selected':'')+'" data-command-view="'+m.id+'">'+icon(m.icon)+tx(m.en,m.fa)+'<small>'+m.id.toUpperCase()+'</small></button>').join('')||'<div class="empty-state">'+tx('No matching modules','ماژولی پیدا نشد')+'</div>';
}
function openCommand(){ $('command-overlay').classList.add('open');$('command-overlay').setAttribute('aria-hidden','false');$('command-input').value='';renderCommandResults('');setTimeout(()=>$('command-input').focus(),20)}
function closeCommand(){$('command-overlay').classList.remove('open');$('command-overlay').setAttribute('aria-hidden','true')}
function handleClick(e){
  const view=e.target.closest('[data-view]');if(view){openView(view.dataset.view);return}
  const cmdView=e.target.closest('[data-command-view]');if(cmdView){openView(cmdView.dataset.commandView);closeCommand();return}
  const filter=e.target.closest('[data-filter]');if(filter){window.taskFilter=filter.dataset.filter;render();return}
  const tab=e.target.closest('[data-editor]');if(tab){saveEditorValue();currentEditor=tab.dataset.editor;render();document.querySelectorAll('[data-editor]').forEach(x=>x.classList.toggle('active',x.dataset.editor===currentEditor));return}
  const action=e.target.closest('[data-action]');if(!action)return;
  const id=Number(action.dataset.id);
  switch(action.dataset.action){
    case 'new-task':newTaskModal();break;
    case 'edit-task':newTaskModal(state.tasks.find(t=>t.id===id));break;
    case 'toggle-task':{const t=state.tasks.find(x=>x.id===id);if(t){t.done=!t.done;persist();activity(t.done?'Completed a task':'Reopened a task',t.title);render()}break}
    case 'delete-task':state.tasks=state.tasks.filter(t=>t.id!==id);persist();activity('Removed a task','Workspace');render();toast(tx('Task removed','وظیفه حذف شد'));break;
    case 'new-file':newFileModal();break;
    case 'edit-file':newFileModal(state.files.find(f=>f.id===id));break;
    case 'open-file':{const f=state.files.find(x=>x.id===id);if(f)newFileModal(f);break}
    case 'delete-file':state.files=state.files.filter(f=>f.id!==id);persist();activity('Deleted a local file','Files');render();toast(tx('File deleted','فایل حذف شد'));break;
    case 'import-files':$('file-picker').click();break;
    case 'new-note':newNote();break;
    case 'select-note':state.activeNote=id;persist();render();break;
    case 'run-code':saveEditorValue();applyPreview();toast(tx('Preview refreshed','پیش‌نمایش به‌روز شد'));break;
    case 'lock-vault':vaultKey=null;vaultRecords=[];render();toast(tx('Vault locked','گاوصندوق قفل شد'));break;
    case 'new-vault-item':newVaultItemModal();break;
    case 'delete-vault':deleteVaultRecord(id);break;
    case 'clear-terminal':window.terminalLines=[];render();break;
    case 'toggle-particles':state.settings.particles=!state.settings.particles;if(particleController)particleController.refresh();persist();render();break;
    case 'toggle-glow':state.settings.glow=!state.settings.glow;document.querySelectorAll('.ambient').forEach(x=>x.style.display=state.settings.glow?'':'none');if(particleController)particleController.refresh();persist();render();break;
    case 'set-language':state.lang=action.dataset.lang;persist();render();break;
    case 'export-workspace':exportWorkspace();break;
    case 'import-backup':$('backup-picker').click();break;
    case 'close-modal':closeModal();break;
    case 'new-uuid':$('uuid-result').textContent=crypto.randomUUID?crypto.randomUUID():'UUID generation unavailable';break;
  }
}
function saveEditorValue(){const input=$('code-editor');if(input)state.studio[currentEditor]=input.value;persist()}
async function deleteVaultRecord(index){const arr=JSON.parse(localStorage.getItem('aether.vault.entries')||'[]');arr.splice(index,1);localStorage.setItem('aether.vault.entries',JSON.stringify(arr));vaultRecords.splice(index,1);persist();render();toast(tx('Encrypted record removed','رکورد رمزگذاری‌شده حذف شد'))}
async function handleSubmit(e){
  const form=e.target.closest('form[data-form]');if(!form)return;e.preventDefault();const data=new FormData(form);const kind=form.dataset.form;
  if(kind==='task'){const id=Number(data.get('id'));const item={title:String(data.get('title')).trim(),detail:String(data.get('detail')||'').trim(),priority:String(data.get('priority')),created:Date.now()};if(!item.title)return;if(id){const old=state.tasks.find(t=>t.id===id);if(old)Object.assign(old,item)}else state.tasks.unshift(Object.assign({id:Date.now()},item));persist();activity(id?'Updated a task':'Created a task',item.title);closeModal();render();toast(tx('Task saved','وظیفه ذخیره شد'))}
  if(kind==='file'){const id=Number(data.get('id'));const name=String(data.get('name')).trim().replace(/[\\/:*?"<>|]/g,'-');const item={name:name,content:String(data.get('content')||''),type:(name.split('.').pop()||'text').toUpperCase(),updated:Date.now()};if(!name)return;if(id){const old=state.files.find(f=>f.id===id);if(old)Object.assign(old,item)}else state.files.unshift(Object.assign({id:Date.now()},item));persist();activity('Saved a local file',name);closeModal();render();toast(tx('File saved locally','فایل به‌صورت محلی ذخیره شد'))}
  if(kind==='vault-unlock'){
    if(!crypto.subtle){$('vault-message').textContent=tx('Web Crypto is unavailable. Use the HTTPS GitHub Pages site or localhost.','رمزنگاری مرورگر در دسترس نیست؛ از سایت HTTPS یا localhost استفاده کن.');return}
    const pass=String(data.get('passphrase'));let salt;
    try{const stored=localStorage.getItem('aether.vault.salt');if(stored){salt=b64ToBytes(stored);vaultKey=await deriveVaultKey(pass,salt);await loadVaultRecords()}else{if(pass.length<8)throw new Error('Passphrase must be at least 8 characters.');salt=crypto.getRandomValues(new Uint8Array(16));localStorage.setItem('aether.vault.salt',bytesToB64(salt));vaultKey=await deriveVaultKey(pass,salt);vaultRecords=[];localStorage.setItem('aether.vault.entries','[]')}render();toast(tx('Vault unlocked','گاوصندوق باز شد'))}
    catch(err){vaultKey=null;vaultRecords=[];const msg=tx('Could not unlock. Check your passphrase.','باز کردن ناموفق بود؛ گذرواژه را بررسی کن.');const target=$('vault-message');if(target)target.textContent=msg;else toast(msg)}
  }
  if(kind==='vault-item'){const item={title:String(data.get('title')).trim(),body:String(data.get('body')),created:Date.now()};if(!item.title||!item.body)return;const enc=await encryptVaultItem(item);const arr=JSON.parse(localStorage.getItem('aether.vault.entries')||'[]');arr.unshift(enc);localStorage.setItem('aether.vault.entries',JSON.stringify(arr));vaultRecords.unshift(item);closeModal();render();toast(tx('Record encrypted and saved','رکورد رمزگذاری و ذخیره شد'))}
  if(kind==='url-check'){try{const u=new URL(String(data.get('url')));if(!['http:','https:'].includes(u.protocol))throw new Error('Only HTTP and HTTPS URLs are supported.');$('url-result').innerHTML='<div class="tool-result"><strong>'+tx('Parsed locally','تجزیه محلی')+'</strong><code>protocol: '+esc(u.protocol)+'</code><code>host: '+esc(u.host)+'</code><code>path: '+esc(u.pathname)+'</code><code>origin: '+esc(u.origin)+'</code></div>'}catch(err){$('url-result').innerHTML='<div class="tool-result"><strong>'+tx('Invalid URL','نشانی نامعتبر')+'</strong></div>'}}
  if(kind==='subnet-check'){try{const ip=ipToNumber(String(data.get('ip')).trim()),prefix=Number(data.get('prefix'));if(prefix<0||prefix>32)throw new Error('prefix');const mask=prefix===0?0:(0xffffffff<<(32-prefix))>>>0;const network=(ip&mask)>>>0;const broadcast=(network|(~mask))>>>0;const count=prefix===32?1:prefix===31?2:Math.max(0,Math.pow(2,32-prefix)-2);$('subnet-result').innerHTML='<div class="tool-result"><strong>'+tx('Calculated range','بازه محاسبه‌شده')+'</strong><code>Network: '+numberToIp(network)+'/'+prefix+'</code><code>Mask: '+numberToIp(mask)+'</code><code>Broadcast: '+numberToIp(broadcast)+'</code><code>Usable addresses: '+count.toLocaleString()+'</code></div>'}catch(err){$('subnet-result').innerHTML='<div class="tool-result"><strong>'+tx('Invalid IPv4 address or prefix','نشانی IPv4 یا پیشوند نامعتبر')+'</strong></div>'}}
  if(kind==='hash-check'){try{const bytes=new TextEncoder().encode(String(data.get('text')||''));const hash=await crypto.subtle.digest('SHA-256',bytes);const hex=Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,'0')).join('');$('hash-result').innerHTML='<div class="tool-result"><strong>SHA-256</strong><code>'+hex+'</code><button class="btn small ghost" style="margin-top:8px" data-copy="'+hex+'">'+tx('Copy hash','کپی هش')+'</button></div>'}catch(err){$('hash-result').textContent=tx('Web Crypto unavailable','رمزنگاری مرورگر در دسترس نیست')}}
  if(kind==='terminal-command'){const input=form.querySelector('[name=command]');runTerminal(String(data.get('command')||''));if(input)input.value=''}
}
function handleInput(e){
  if(e.target.id==='command-input')renderCommandResults(e.target.value);
  if(e.target.id==='file-search'){const q=e.target.value.toLowerCase();document.querySelectorAll('.file-card').forEach(card=>card.style.display=card.textContent.toLowerCase().includes(q)?'':'none')}
  if(e.target.id==='code-editor'){state.studio[currentEditor]=e.target.value;persist()}
  if(e.target.id==='note-title'||e.target.id==='note-body'){const n=state.notes.find(x=>x.id===state.activeNote);if(n){n.title=$('note-title').value;n.body=$('note-body').value;n.updated=Date.now();persist();const status=$('note-save-state');if(status)status.textContent=tx('Saved just now','همین الان ذخیره شد')}}
}
function handleChange(e){
  if(e.target.id==='file-picker'){Array.from(e.target.files||[]).forEach(file=>{if(file.size>1024*1024){toast(tx('File skipped','فایل رد شد'),file.name+' > 1 MB');return}const reader=new FileReader();reader.onload=()=>{state.files.unshift({id:Date.now()+Math.random(),name:file.name,content:String(reader.result||''),type:file.type||'Text',updated:Date.now()});persist();activity('Imported a local file',file.name);if(state.view==='files')render();toast(tx('File imported','فایل وارد شد'),file.name)};reader.readAsText(file)});e.target.value=''}
  if(e.target.id==='backup-picker'){const file=e.target.files&&e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const backup=JSON.parse(reader.result);if(backup.format!=='AETHER-WORKSPACE'||!backup.state)throw new Error('Invalid backup');if(!confirm(tx('This replaces your current workspace records. Continue?','این کار اطلاعات فعلی فضای کار را جایگزین می‌کند. ادامه می‌دهی؟')))return;state=Object.assign(state,backup.state);persist();render();toast(tx('Workspace restored','فضای کار بازیابی شد'))}catch(err){toast(tx('Backup could not be imported','پشتیبان قابل وارد کردن نیست'))}};reader.readAsText(file);e.target.value=''}
}
function handleKey(e){
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand()}
  if(e.key==='Escape'){closeCommand();closeModal();closeSidebar()}
  if(e.key==='Enter'&&e.target.id==='command-input'){const first=$('command-results').querySelector('[data-command-view]');if(first){openView(first.dataset.commandView);closeCommand()}}
  if(e.target.id==='code-editor'&&e.key==='Tab'){e.preventDefault();const t=e.target,start=t.selectionStart,end=t.selectionEnd;t.value=t.value.slice(0,start)+'  '+t.value.slice(end);t.selectionStart=t.selectionEnd=start+2;state.studio[currentEditor]=t.value;persist()}
}
function initParticles(){
  const canvas=$('particle-field'),ctx=canvas&&canvas.getContext('2d',{alpha:true,desynchronized:true});
  if(!ctx)return {refresh:()=>{}};
  let w=0,h=0,dpr=1,points=[],pointer={x:-1000,y:-1000},rafId=0,lastFrame=0,visible=!document.hidden;
  const motionQuery=window.matchMedia?window.matchMedia('(prefers-reduced-motion: reduce)'):null;
  const reduced=!!(motionQuery&&motionQuery.matches);
  const cores=navigator.hardwareConcurrency||4,memory=navigator.deviceMemory||4;
  const mobile=window.matchMedia&&window.matchMedia('(max-width: 820px)').matches;
  const maxPoints=Math.min(mobile?48:84,cores<=4||memory<=4?48:84);
  const frameInterval=1000/30;
  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,1.35);
    w=window.innerWidth;h=window.innerHeight;
    const pixelCap=1900000,scale=Math.min(1,Math.sqrt(pixelCap/Math.max(1,w*h*dpr*dpr)));
    const actualDpr=dpr*scale;
    canvas.width=Math.max(1,Math.floor(w*actualDpr));canvas.height=Math.max(1,Math.floor(h*actualDpr));
    canvas.style.width=w+'px';canvas.style.height=h+'px';
    ctx.setTransform(actualDpr,0,0,actualDpr,0,0);
    const count=Math.min(maxPoints,Math.max(22,Math.round(w*h/19000)));
    points=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.1+.35,a:Math.random()*.48+.16,phase:Math.random()*7}));
    drawStatic();
  }
  function drawStatic(){
    ctx.clearRect(0,0,w,h);
    for(const p of points){ctx.beginPath();ctx.fillStyle='rgba(245,249,255,'+(p.a*.7)+')';ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}
  }
  function stop(){if(rafId){cancelAnimationFrame(rafId);rafId=0}}
  function refresh(){
    if(!state.settings.particles){stop();ctx.clearRect(0,0,w,h);return}if(!visible||reduced){stop();drawStatic();return}
    if(!rafId){lastFrame=0;rafId=requestAnimationFrame(frame)}
  }
  function frame(time){
    rafId=0;
    if(!state.settings.particles||!visible||reduced)return;
    if(time-lastFrame<frameInterval){rafId=requestAnimationFrame(frame);return}
    lastFrame=time;
    ctx.clearRect(0,0,w,h);
    const pulse=state.settings.glow?1:.52,cellSize=112,cells=new Map();
    for(let i=0;i<points.length;i++){
      const p=points[i];p.x+=p.vx;p.y+=p.vy;p.phase+=.018;
      if(p.x<-8)p.x=w+8;if(p.x>w+8)p.x=-8;if(p.y<-8)p.y=h+8;if(p.y>h+8)p.y=-8;
      const gx=Math.floor(p.x/cellSize),gy=Math.floor(p.y/cellSize),key=gx+':'+gy;
      if(!cells.has(key))cells.set(key,[]);cells.get(key).push(i);
    }
    for(let i=0;i<points.length;i++){
      const p=points[i],alpha=p.a*(.76+.24*Math.sin(p.phase))*pulse;
      ctx.beginPath();ctx.fillStyle='rgba(245,249,255,'+alpha+')';ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
      if(state.settings.glow&&i%4===0){ctx.beginPath();ctx.fillStyle='rgba(255,255,255,'+(alpha*.11)+')';ctx.arc(p.x,p.y,p.r*3.2,0,Math.PI*2);ctx.fill()}
      const gx=Math.floor(p.x/cellSize),gy=Math.floor(p.y/cellSize);
      for(let ox=-1;ox<=1;ox++)for(let oy=-1;oy<=1;oy++){
        const near=cells.get((gx+ox)+':'+(gy+oy));if(!near)continue;
        for(const j of near){if(j<=i)continue;const q=points[j],dx=p.x-q.x,dy=p.y-q.y,dd=dx*dx+dy*dy;if(dd<cellSize*cellSize){const a=(1-Math.sqrt(dd)/cellSize)*.105*pulse;ctx.beginPath();ctx.strokeStyle='rgba(225,233,242,'+a+')';ctx.lineWidth=.5;ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}
      }
      const dx=p.x-pointer.x,dy=p.y-pointer.y,dist=dx*dx+dy*dy;
      if(dist<145*145){const d=Math.sqrt(dist);ctx.beginPath();ctx.strokeStyle='rgba(255,255,255,'+((1-d/145)*.12*pulse)+')';ctx.lineWidth=.65;ctx.moveTo(p.x,p.y);ctx.lineTo(pointer.x,pointer.y);ctx.stroke()}
    }
    rafId=requestAnimationFrame(frame);
  }
  function onVisibility(){visible=!document.hidden;refresh()}
  window.addEventListener('resize',resize,{passive:true});
  window.addEventListener('pointermove',e=>{if(!mobile){pointer.x=e.clientX;pointer.y=e.clientY}},{passive:true});
  window.addEventListener('pointerleave',()=>{pointer.x=-1000;pointer.y=-1000},{passive:true});
  document.addEventListener('visibilitychange',onVisibility);
  if(motionQuery&&motionQuery.addEventListener)motionQuery.addEventListener('change',refresh);
  resize();refresh();
  return {refresh};
}
let particleController=null;
function init(){
  render();
  $('mobile-menu').addEventListener('click',()=>{$('sidebar').classList.toggle('open');$('mobile-backdrop').classList.toggle('open')});
  $('mobile-backdrop').addEventListener('click',closeSidebar);
  $('language-toggle').addEventListener('click',()=>{state.lang=state.lang==='en'?'fa':'en';persist();render()});
  $('command-open').addEventListener('click',openCommand);
  $('command-overlay').addEventListener('click',e=>{if(e.target===$('command-overlay'))closeCommand()});
  $('command-input').addEventListener('input',e=>renderCommandResults(e.target.value));
  $('modal-layer').addEventListener('click',e=>{if(e.target===$('modal-layer'))closeModal()});
  document.addEventListener('click',e=>{const copy=e.target.closest('[data-copy]');if(copy){navigator.clipboard.writeText(copy.dataset.copy).then(()=>toast(tx('Copied to clipboard','در کلیپ‌بورد کپی شد'))).catch(()=>toast(copy.dataset.copy));return}handleClick(e)});
  document.addEventListener('submit',handleSubmit);
  document.addEventListener('input',handleInput);
  document.addEventListener('change',handleChange);
  document.addEventListener('keydown',handleKey);
  $('profile-menu').addEventListener('click',()=>openView('codeforge'));
  window.addEventListener('hashchange',()=>{const id=location.hash.replace('#','');if(MODULES.some(m=>m.id===id)){state.view=id;persist();render()}});
  if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
  setInterval(()=>{$('system-clock').textContent=new Date().toLocaleTimeString(state.lang==='fa'?'fa-IR':'en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'})},1000);
  document.querySelectorAll('.ambient').forEach(x=>x.style.display=state.settings.glow?'':'none');
  particleController=initParticles();
  requestAnimationFrame(()=>requestAnimationFrame(()=>$('boot-screen').classList.add('done')));
  if(location.hash&&MODULES.some(m=>m.id===location.hash.slice(1))){state.view=location.hash.slice(1);render()}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();