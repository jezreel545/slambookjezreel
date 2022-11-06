const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.content-container');

/* Active id tab */
let active = 0;

const panelData = [
  `
   <h1>Hello There, Welcome to my Slambook</h1>
   <img src="/img/me.jpg" alt="me">
   <p>I'm Jezreel Rezhen Cruspe Lazarte, was born in September 26, 2001 currently living in Makati City </p>
   <h2>My Education</h2>
   <h3>Kindergarten</h3>
   <img src="/img/kinder.jpg" alt="kinder">
   <p>I studied Kindergarten Between 2006 to 2008 at Angels montessori school in Makati </p>
   <h3>Elementary</h3>
   <img src="/img/elementary.jpg" alt="elemntary">
   <p>I studied primary education at Victoria School in Makati Grade 1 to Grade 6 between 2008-2013</p>
   <h3>Highschool</h3>
   <img src="/img/hs.jpg" alt="hs">
   <p>When I reached Highschool I stayed at my hometown in Tagaytay and study in Tagaytay-Mendez Acadamy from Grade 7 - 10 </p>
   <h3>Senior highschool</h3>
   <img src="/img/shs.jpg" alt="">
   <p>Senior High school is the best years I took Science Technology Engineering and Mathematics Strand at University of Makati between Grade 11 to 12</p>
   <h3>College</h3>
   <img src="/img/college.jpg">
   <p>Currently Im taking up Bachelor of Science in Computer Engineer in polytechnic University of the Philippines</p>
   <h2>My Hobbies</h2>
   <h3>Playing Video Games</h3>
    <ul>
      <li>DOTA 2</li>
      <li>CSGO</li>
   </ul>
   <h3>Photography</h3>
   <h3>Cycling</h3>
    `,
  `
   <h1>My few shots doing Photography</h1>
   <img class="img1" src="img/CSC_0472.jpg" alt="">
   <img src="img/DSC_4526.jpg">
   <img src="img/DSC_5378.jpg">
   <img src="img/DSC_7096.jpg">
   <img src="img/DSC_7830.jpg" alt="">
   <img src="img/DSC_9541.jpg">
   `,
  `
   <h1>How to Contact me</h1>
   <ul>
      <a href="https://www.facebook.com/Jezxc">Facebook</a>
      <a href="https://www.instagram.com/akosijezy/">Instagram</a>
      <a href="https://twitter.com/jez_lazarte">Twitter</a>
   </ul>
   <p>For Formal invitation you can email me <a href = "jezreellazarte@gmail.com">jezreellazarte@gmail.com</a></p>
   `
];

/* Sets menu content to inital page, this will serve to set the contaiers inner html to the panel that matches */

container.innerHTML = `
   <div class ="panel">
      ${panelData[active]}
   </div>
`;

/* loops through tabs */
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    /* sets active to current tab index */
    active = i;
    /* resets menu content on tab click */
    container.innerHTML = `
         <div class ="panel">
            ${panelData[active]}
         </div>
      `;
    /* Remove transition */
    container.style.transition = "none";
    /* Hides the container */
    container.style.opactiy = "0";
    /* Loop through tabs again to reset active css on clicked tab by removing class*/
    for (let i = 0; i < tabs.length; i++) {
      /* This removes the class */
      tabs[i].classList.remove('active');
    }
    /* This wil add active class to clicked tab */
    tabs[i].classList.add('active');
    /* Waits 100ms before running the code inside */
    setTimeout(() => {
      container.style.transition = "300ms";
      /* Shows container */
      container.style.opactiy = "1";
    }, 100);
  });
}
