const friend = {
  name: "ieva",
  eyes: 3,
  img:
    "https://web.facebook.com/photo/?fbid=10216292776687654&set=a.1389969864870",
};

const template = document.querySelector("template").content;
const copy = template.cloneNode(true);
copy.querySelector("h1").textContent = friend.name;
copy.querySelector("p").textContent = "${friend.eyes}";
const parent = document.querySelector("main");

parent.appendChild(copy);
