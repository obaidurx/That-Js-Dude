const cards = [
  {
    title: "Angular2 Tutorial",
    des: "If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you",
  },
  {
    title: "50 Dev tool Tips",
    des: "If you have some idea about dev tool and want to become a master..this is the right video for your",
  },
  {
    title: "scope & closure",
    des: "Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand.",
  },
  {
    title: "Angular2 Tutorial",
    des: "If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you",
  },
  {
    title: "Interview Questions",
    des: "If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the",
  },
  {
    title: "Angular Interview Question",
    des: "A complete guideline to prepare for angular interviews. Also, you can use these questions to verify your expertise in angular.",
  },
  {
    title: "React Workshop for beginners",
    des: "This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help.",
  },
  {
    title: "array",
    des: "Array is the mostly used Data stucture. And in Javascript it is at least 3 one of the key data structure that you have to use to master. This video will tell you 15 hidden features that witll make u expert in JavaScript array.",
  },
];

const loadCards = () => {
  let cardsContainer = "";
  cards.map(
    (cardHtml) =>
      (cardsContainer += `
    <div class="card">
    <h2>${cardHtml.title}</h2>
    <p>${cardHtml.des}</p>
    <button class="signIn btn view">View details>></button>
  </div>
    `)
  );
  document.getElementById("card-container").innerHTML = cardsContainer;
};

loadCards();
