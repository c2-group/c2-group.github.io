$(document).ready(function () {
  document.querySelectorAll('a').forEach(ele => {
    if (ele.href.endsWith('pdf')) {
      ele.download = ele.innerText
    }
  })
})