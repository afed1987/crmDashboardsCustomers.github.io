(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i="data:image/svg+xml,%3csvg%20width='37'%20height='37'%20viewBox='0%200%2037%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5003%2034.8876C17.4674%2034.8876%2016.419%2034.6564%2015.602%2034.1784L7.12284%2029.2914C3.66951%2026.9634%203.45367%2026.6089%203.45367%2022.9551V14.0443C3.45367%2010.3905%203.65409%2010.0359%207.04576%207.73887L15.5865%202.80553C17.2053%201.86512%2019.749%201.86512%2021.3678%202.80553L29.8778%207.70803C33.3311%2010.0359%2033.547%2010.3905%2033.547%2014.0443V22.9397C33.547%2026.5934%2033.3465%2026.948%2029.9549%2029.2451L21.414%2034.1784C20.5815%2034.6564%2019.5332%2034.8876%2018.5003%2034.8876ZM18.5003%204.42428C17.8528%204.42428%2017.2207%204.54762%2016.7736%204.8097L8.29451%209.7122C5.78159%2011.408%205.78159%2011.408%205.78159%2014.0443V22.9397C5.78159%2025.5759%205.78159%2025.5759%208.35617%2027.318L16.7736%2032.1743C17.6832%2032.6984%2019.3328%2032.6984%2020.2424%2032.1743L28.7215%2027.2718C31.219%2025.5759%2031.219%2025.5759%2031.219%2022.9397V14.0443C31.219%2011.408%2031.219%2011.408%2028.6445%209.66595L20.227%204.8097C19.7799%204.54762%2019.1478%204.42428%2018.5003%204.42428Z'%20fill='black'/%3e%3cpath%20d='M18.5%2024.2812C15.3088%2024.2812%2012.7188%2021.6912%2012.7188%2018.5C12.7188%2015.3088%2015.3088%2012.7188%2018.5%2012.7188C21.6912%2012.7188%2024.2812%2015.3088%2024.2812%2018.5C24.2812%2021.6912%2021.6912%2024.2812%2018.5%2024.2812ZM18.5%2015.0312C16.5883%2015.0312%2015.0312%2016.5883%2015.0312%2018.5C15.0312%2020.4117%2016.5883%2021.9688%2018.5%2021.9688C20.4117%2021.9688%2021.9688%2020.4117%2021.9688%2018.5C21.9688%2016.5883%2020.4117%2015.0312%2018.5%2015.0312Z'%20fill='black'/%3e%3c/svg%3e",n="/assets/person-C2FA1jJc.png";document.querySelector(".logo img").src=`${i}`;document.querySelector(".manager__icon img").src=`${n}`;
