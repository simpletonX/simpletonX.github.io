
// page_module assemblyPath
// --- >

const assemblyPath = {
  // jquery
  jQueryScript: "./../../assembly/jquery.js",
  // animation library
  simpleAnimations: "./../../assembly/simple-element-animation.css",
  // Simple-element
  simpleStyle: "./../../assembly/simple-element.css",
  simpleScript: "./../../assembly/simple-element.js",
  // mainStyle
  styleSheet: "./style/style.css"
}

for (let ele in assemblyPath) {
  document.querySelector('head').innerHTML += `
    ${ assemblyPath[ele].indexOf("css") > -1 ? `
      <link rel="stylesheet" href="${ assemblyPath[ele] }" />
    ` : `
      <script src="${ assemblyPath[ele] }"></script>
    ` }
  `
}

window.addEventListener('load', function () {
  document.body.innerHTML += "<script src=\"./main.js\"></script>"
})