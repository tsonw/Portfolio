function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Ẩn menu khi click bên ngoài
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}

function openFullscreen(div) {
    const overlay = document.getElementById('overlay');
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = img.src;
    overlay.style.display = 'flex';
  }
  
  function closeFullscreen() {
    document.getElementById('overlay').style.display = 'none';
  }