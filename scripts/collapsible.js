document.querySelectorAll('.collapsible').forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Collapse others if you want only one open at a time:
    document.querySelectorAll('.collapsible').forEach(function(c) {
      if (c !== btn) c.classList.remove('active');
    });
    document.querySelectorAll('.content').forEach(function(cont) {
      if (cont.previousElementSibling !== btn) {
        cont.style.maxHeight = null;
      }
    });

    btn.classList.toggle('active');
    var content = btn.nextElementSibling;
    if (btn.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "14px 18px";
    } else {
      content.style.maxHeight = null;
      content.style.padding = "0 18px";
    }
  });
});
