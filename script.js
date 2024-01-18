function getRandomColor()
{
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
    palegoldenrod:"#eee8aa"

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
}
function taskfly() {}
function taskCreate(inputtask) {
  var taskbox = document.createElement("div");
  taskbox.innerText = inputtask;
  taskbox.style.backgroundColor = getRandomColor();

  taskbox.setAttribute("class", "taskbox");
  let tasky = document.querySelectorAll(".tasky");

  tasky[0].appendChild(taskbox);
}
