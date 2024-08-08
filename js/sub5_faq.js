document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/sub5_faq.json")
    .then((res) => res.json())
    .then((res) => {
      const data = res.black;
      const a = document.querySelector(".faq_wrap ul");
      const col = ["blue", "green", "purple", "yell"];

      data.forEach((item) => {
        let t;

        switch (item.t) {
          case "예약":
            t = col[0];
            break;
          case "시설":
            t = col[1];
            break;
          case "오시는길":
            t = col[2];
            break;
          case "기타":
            t = col[3];
            break;
        }

        a.innerHTML += `
            <li>
            <div class="question reservation">
            <span class="${t}">${item.t}</span>
                <p>${item.q}</p>
                <button><img src="./img/icon/icon_comunity_faq_arrow-bottom.svg" /></button>
                </div>
                <div class="answer">
                ${item.a}
                </div>
                </li>`;

        console.log(item);
      });

      const b = a.querySelectorAll(".question");
      const answer = document.querySelectorAll(".answer");
      b.forEach((v, i) => {
        v.onclick = function () {
          answer[i].classList.add("active");
        };
      });
    });
});