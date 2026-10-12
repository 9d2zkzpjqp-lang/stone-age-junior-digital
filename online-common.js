import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from './config.js';
export const configured = /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(SUPABASE_URL) && SUPABASE_PUBLISHABLE_KEY.length>20;
const supabaseModule=configured?await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.0/+esm'):null;
export const db=configured?supabaseModule.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}}):null;
export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const cleanCode=s=>String(s||'').trim().toUpperCase();
export async function guestAuth(){
 if(!db)throw Error('Supabase ist noch nicht konfiguriert. Öffne zunächst die README.');
 const {data:{session},error} = await db.auth.getSession(); if(error)throw error;
 if(session)return session;
 const resp=await db.auth.signInAnonymously(); if(resp.error)throw resp.error;
 return resp.data.session;
}
export async function rpc(name,params={}){
 if(!db)throw Error('Supabase ist noch nicht konfiguriert. Siehe README.');
 const {data,error}=await db.rpc(name,params);if(error)throw Error(error.message);return data;
}
export const GOOD=['tooth','fish','arrow','berry','pot'];
export const ICON={tooth:'🦷',fish:'🐟',arrow:'🪨',berry:'🫐',pot:'🏺',dog:'🐕'};
export const NAMES={tooth:'Zahn',fish:'Fisch',arrow:'Pfeilspitze',berry:'Beeren',pot:'Krug',dog:'Hund'};
export const COLORS={blue:'#2b76ce',green:'#64aa22',yellow:'#e3a71c',pink:'#cf83ad'};
export const PATH=[
 {id:'house',name:'Bauplatz',x:45.6,y:47.4},
 {id:'dog',name:'Hundefeld',x:18.4,y:51.0},
 {id:'tooth',name:'Zahnfeld',x:13.3,y:26.5},
 {id:'berry',name:'Beerenfeld',x:38.3,y:13.1},
 {id:'pot',name:'Krugfeld',x:66.2,y:21.1},
 {id:'arrow',name:'Pfeilspitzenfeld',x:89.5,y:17.0},
 {id:'fish',name:'Fischfeld',x:90.5,y:54.0},
 {id:'trade',name:'Tauschfeld',x:65.4,y:85.0}
];
export function tileImage(value){
 const numMap={1:9,2:3,3:14,4:6,5:8,6:4};
 const nameMap={tooth:1,fish:2,arrow:5,dog:7,house:10,trade:11,berry:12,pot:13};
 const i=typeof value==='number'?numMap[value]:nameMap[value];
 return `assets/wald_vorderseite_${String(i).padStart(2,'0')}.png`;
}
export const hutImage=id=>`assets/huette_${String(id+1).padStart(2,'0')}.png`;
