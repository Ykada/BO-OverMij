var c = document.getElementById("canvas");
var g = c.getContext("2d");

let particles = [];

for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    });
    SetRandomParticleMovements(particles[i]);
}

function SetRandomParticleMovements(p)
{
    p.xmove = -1 + (Math.random() * 3);
    p.switchDir = Math.random() * 10;
}

setInterval(() => { 
    
    g.clearRect(0, 0, canvas.width, canvas.height);
    g.fillStyle = "#a9a9a9";
    g.globalAlpha = 0.5;


   for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        g.fillRect(p.x, p.y, 1, 1);

       p.switchDir--;
        if (p.switchDir <= 0)
        {
            SetRandomParticleMovements(p);
        }
        p.x += p.xmove;
        p.y+=0.2+Math.random();
        if (p.y > canvas.height) {
            p.x = Math.random() * canvas.width;
            p.y = -10;
        }
    }

}, 30);

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}