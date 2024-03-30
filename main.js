let header = document.querySelector("header")

let options = {
    rootMargin: "0px", //デフォルトで０.marginとほぼ同じ。
    threshold: 0.3, //閾値は0.2。これが１になると完全に画面におさまってから発動する
}




// 特定の位置でactiveを付加する関数

const setItemActive = (entries) => {
    // console.log(entries)
    entries.map((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("nonedisplay")
        } else{
            entry.target.classList.remove("nonedisplay")
        }
    })
}
