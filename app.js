window.addEventListener('DOMContentLoaded',()=>{
  let box = document.getElementById('box');
  let xy = 3;
  let count = 0;

  for(let i = 0; i < xy; i++){
    let tr = document.createElement("tr");
    for(let j = 0;j < xy; j++){
      let td = document.createElement("td");
      const option = {once:true};

      td.className = `cell${j}-${i}`;
      tr.appendChild(td);
      
      td.addEventListener('click',(event)=>{
        let self = event.target;
        let pice = count++ %2 == 0? "o":'x';
        self.textContent = pice;
        if(count == xy * xy){
          setTimeout(() => {
            alert('終了しました。');
          },300);
        }

      },option);
    }
    box.appendChild(tr);
  }
});