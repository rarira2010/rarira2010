function kiku() {
  kotae=Math.floor(Math.random()*100)+1;
  kaitou=null;//回答を初期化
  alert("はじめます");
  while (kaitou!=kotae) {
    kaitou = prompt("0から１００");
    if (kaitou==kotae) {
      alert("正kai");
    }else if (kaitou>kotae) {
      alert("答えは小さいです");
    }else if (kaitou<kotae) {
      alert("答えはおおきいです");
    }
  }
  console.log(成功);
}
//ここからはkiku()でじっこうするか関数定義を外してください
