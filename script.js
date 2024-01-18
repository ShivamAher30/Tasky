{
  var taskCount = 0;
  var input = document.querySelectorAll(".taskinput");
  input[0].addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      inputvalue();
    }
  });

  function getRandomColor() {
    const neonColorCodes = {
      NeonLightGreen: "#4efd54",
      NeonBlue: "#04d9ff",
      NeonCarrot: "#ff9933",
      NeonFuchsia: "#fe4164",
      NeonGreen: "#0cff0c",
      NeonPink: "#fe019a",
      NeonPurple: "#bc13fe",
      NeonRed: "#ff073a",
      NeonYellow: "#cfff04",
      palegreen: "#98fb98",
      palegoldenrod: "#eee8aa",
    };
    const neonCodes = Object.values(neonColorCodes);
    let index = Math.floor(Math.random(Math.random()) * 11);
    return neonCodes[index];
  }

  function inputvalue() {
    const input = document.getElementsByClassName("taskinput");
    const inputtask = input[0].value;
    console.log(inputtask);
    taskCreate(inputtask);

    input[0].value = "";
    if (taskCount >= 4) {
      console.log("hi");
      var temp = document.querySelectorAll(".box1");
      temp[0].style.height = `${temp[0].offsetHeight + 45}px`;
    }
  }
  function taskfly() {}
  function taskCreate(inputtask) {
    var temp = document.querySelectorAll(".box1");
    var taskbox = document.createElement("div");
    taskbox.innerText = inputtask;
    // height_used+=
    // console.log(height_box)
    taskbox.style.backgroundColor = getRandomColor();

    taskbox.setAttribute("class", "taskbox");
    let tasky = document.querySelectorAll(".taskitems");

    tasky[0].appendChild(taskbox);
    taskCount++;
  }
}
