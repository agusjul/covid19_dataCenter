window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("navbar").style.backgroundColor = "#130947";
      document.getElementById("navbar").style.transition = "0.3s";
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
      document.getElementById("navbar").style.transition = "0.3s";
    }
  }

  