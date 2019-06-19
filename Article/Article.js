// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => {
       this.expandArticle()});

    this.closeBtn = domElement.querySelector(".closeBtn");
    this.closeBtn.addEventListener("click", () => {
      this.closeArticle()});
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  
    if(this.domElement.classList.length > 1) {
      TweenLite.to(this.domElement, 1, {height: '450px'});
    }
    else {
      TweenLite.to(this.domElement, 1, {height: '50px'});
    }
  }









  closeArticle(){
    container.removeChild(this.domElement);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.


- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let container = document.querySelector(".articles");
let articles = document.querySelectorAll(".article");
articles.forEach(article => new Article(article));

// let addButton = document.querySelector(".addArticle");
addButton.addEventListener("click", () => {
  articleBuilder({
    h2: "Testing Article Builder!",
    date: "June 19th, 2019",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  })
});


function articleBuilder(sample){
  const article = document.createElement("div");
  article.classList.add("article");
  const h2 = document.createElement("h2");
  h2.textContent = sample.h2;
  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = sample.date;
  const p1 = document.createElement("p");
  p1.textContent = sample.p1;
  const p2 = document.createElement("p");
  p2.textContent = sample.p2;
  const expandBtn = document.createElement("span");
  expandBtn.classList.add("expandButton");
  expandBtn.textContent = "expand";
  const closeBtn = document.createElement("span");
  closeBtn.classList.add("closeBtn");
  closeBtn.textContent = "Click to Close";

  container.appendChild(article);
  article.appendChild(h2);
  article.appendChild(date);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(expandBtn);
  article.appendChild(closeBtn);

  const product = new Article(article);
  return product;
}


