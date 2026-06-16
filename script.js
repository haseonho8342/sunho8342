// ============================
// Portfolio V3.0
// ============================

// 페이지 로드
document.addEventListener("DOMContentLoaded", () => {

    createParticles();

    showContent("c");

    skillAnimation();

    scrollAnimation();

    activateNavigation();

    smoothScroll();

});


// ============================
// 배경 파티클 생성
// ============================

function createParticles(){

    const container = document.getElementById("particles");

    if(!container) return;

    for(let i=0;i<60;i++){

        const particle = document.createElement("div");

        particle.classList.add("particle");

        const size = Math.random()*6+2;

        particle.style.width = size+"px";

        particle.style.height = size+"px";

        particle.style.left = Math.random()*100+"%";

        particle.style.top = Math.random()*100+"%";

        particle.style.animationDuration =

        (Math.random()*20+15)+"s";

        particle.style.animationDelay =

        Math.random()*5+"s";

        container.appendChild(particle);

    }

}


// ============================
// C / C++ / Python / Java Web
// ============================

function showContent(language){

const content=document.getElementById("study-content");

if(language==="c"){

content.innerHTML=`

<h2>C Language</h2>

<ul>

<li>✔ 변수 및 자료형</li>

<li>✔ 연산자</li>

<li>✔ 조건문</li>

<li>✔ 반복문</li>

<li>✔ 배열</li>

<li>✔ 함수</li>

<li>✔ 포인터</li>

<li>✔ 구조체</li>

<li>✔ 파일 입출력</li>

<li>✔ 알고리즘 기초</li>

</ul>

`;

}

else if(language==="cpp"){

content.innerHTML=`

<h2>C++</h2>

<ul>

<li>✔ 객체지향 프로그래밍</li>

<li>✔ 클래스</li>

<li>✔ 생성자</li>

<li>✔ 소멸자</li>

<li>✔ 상속</li>

<li>✔ 다형성</li>

<li>✔ 캡슐화</li>

<li>✔ STL 기초</li>

</ul>

`;

}

else if(language==="python"){

content.innerHTML=`

<h2>Python</h2>

<ul>

<li>✔ OpenCV</li>

<li>✔ TensorFlow</li>

<li>✔ YOLO</li>

<li>✔ MNIST 숫자 인식</li>

<li>✔ 객체 인식</li>

<li>✔ 거리 측정 알고리즘</li>

<li>✔ 음성 안내 시스템</li>

<li>✔ Raspberry Pi 연동</li>

</ul>

`;

}

else{

content.innerHTML=`

<h2>Java Web Programming</h2>

<ul>

<li>✔ HTML</li>

<li>✔ CSS</li>

<li>✔ JavaScript</li>

<li>✔ JSP</li>

<li>✔ Servlet</li>

<li>✔ JDBC</li>

<li>✔ CRUD 구현</li>

<li>✔ 웹 페이지 제작</li>

</ul>

`;

}

}


// ============================
// Skill Animation
// ============================

function skillAnimation(){

const bars=document.querySelectorAll(".bar div");

const observer=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width=

entry.target.dataset.width;

entry.target.style.width=

width+"%";

}

});

},{threshold:0.5});

bars.forEach(bar=>{

observer.observe(bar);

});

}


// ============================
// Scroll Animation
// ============================

function scrollAnimation(){

const targets=

document.querySelectorAll(

'.profile-card,.capstone-card,.certificate-card,.contact-card,.timeline-item,.feature,.skill'

);

targets.forEach(item=>{

item.classList.add("hidden");

});

const observer=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

targets.forEach(item=>{

observer.observe(item);

});

}


// ============================
// Navigation 활성화
// ============================

function activateNavigation(){

const sections=

document.querySelectorAll("section");

const navLinks=

document.querySelectorAll("nav a");

window.addEventListener(

"scroll",

()=>{

let current="";

sections.forEach(section=>{

const top=

section.offsetTop-200;

const height=

section.clientHeight;

if(pageYOffset>=top){

current=

section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")

===

"#"+current

){

link.classList.add("active");

}

});

}

);

}


// ============================
// Smooth Scroll
// ============================

function smoothScroll(){

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

const target=

document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

}

);

});

}
