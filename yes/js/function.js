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
  console.log("成功");
}


function kansu() {
    window.open("index.html","_blank");
}

function kansu2() {
  name= navigator.appCodeName
  alert(name)
}

function reload() {
  location.reload()
}

function kansu3() {
  alert("test")
}

function tasizan() {
  aaaaa=Math.floor(Math.random()*100)+1;
  tasikotae= 100-aaaaa
  tasikaitou=null;
  while (tasikotae!=tasikaitou) {
    alert(aaaaa+"にたすと１００になる数をこたえてね")
    tasikaitou=prompt()
    if (tasikotae==tasikaitou) {
      alert("正解")
    }else if (tasikotae!=tasikaitou) {
      alert("違うよ")
    }
  }
}


function tasizan2() {
  aaaaa=Math.floor(Math.random()*200)+1;
  tasikotae= 100-aaaaa
  tasikaitou=null;
  while (tasikotae!=tasikaitou) {
    alert(aaaaa+"にたすと１００になる数をこたえてね")
    tasikaitou=prompt()
    if (tasikotae==tasikaitou) {
      alert("正解")
    }else if (tasikotae!=tasikaitou) {
      alert("違うよ")
    }
  }
}
