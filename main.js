let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #5B8FB9;">Sumergiéndome en Bases de datos y aprendizaje automático</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
