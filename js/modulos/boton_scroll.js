const d = document,
  w = window;

export default function scollTopButon(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {
        //console.log(w.pageYOffset, d.documentElement.scrollTop); //con cualquiera de las 2 se puede hacer
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        }
        else {
            $scrollBtn.classList.add("hidden");
        }
    });

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });

}