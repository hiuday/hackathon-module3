
const table = document.querySelector(".TranslateTextarea") as HTMLTextAreaElement;
const input = document.querySelector(".TranslateInput") as HTMLInputElement;
const output = document.querySelector(".TranslateOutput") as HTMLInputElement;
// cơ sở dữ liệu kiểu type script
type Dictionary = {[key:string]:string};
const dictionaryDB : Dictionary[]=[
    {
        dog: "chó"
    },
    {
        cat:"mèo"
    },
    
    {
        fish:"cá"
    },
    {
        bird:"chim"
    },
    {
      cow:"bò"
    }
];
localStorage.setItem("dictionary", JSON.stringify(dictionaryDB));
// Lấy dữ liệu từ LocalStorage
const getdictionaryDB = localStorage.getItem("dictionary");
const translateDB = getdictionaryDB ? JSON.parse(getdictionaryDB) : {};
table.addEventListener("submit", (e) => {
    e.preventDefault();
    const valueInput = input.value.toLowerCase().trim();
  console.log(valueInput);
  for (const key in dictionaryDB) {
    if (valueInput === "") {
      output.innerHTML = "nhập từ vựng";
      return;
    }
    if (valueInput === key) {
      output.innerHTML = dictionaryDB[key];
      break;
    } else {
      output.innerHTML = "chưa có từ vựng";
    }
  }
});

function TranslateDelete() {
  
}


