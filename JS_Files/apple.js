const apple = document.getElementById("apple");
document.body.style.overflow = 'hidden'


const resetApple = () => {
  
  let x = Math.random() * window.innerWidth*.555;
  let y = window.innerHeight; 
  apple.style.left = `${x}px`;
  apple.style.top = `${y}px`;


  const velocity = Math.random() * 100 + 150; 
  const angle = Math.random() * 30 + 60; 

  const angleRadians = (angle * Math.PI) / 180;

  
  const gravity = 9.8; 
  const timeStep = 0.12; 

  
  let velocityX = velocity * Math.cos(angleRadians);
  let velocityY = velocity * Math.sin(angleRadians);


  let time = 0;

  const maxHeight = y - (velocityY * velocityY) / (2 * gravity); 
  if (maxHeight < 0) {
    const scale = Math.sqrt((2 * gravity * (y - window.innerHeight * 0.2)) / (velocityY * velocityY));
    velocityX *= scale;
    velocityY *= scale;
  }


  const animateApple = () => {

    const newX = x + velocityX * time;
    const newY = y - (velocityY * time - 0.5 * gravity * time * time);

    


    apple.style.left = `${newX}px`;
    apple.style.top = `${newY}px`;

    
    if (newY > window.innerHeight) {
      resetApple();
      return;
    }

    if (velocityY - gravity * time <= 0 && newY < maxHeight) {
      velocityY = -Math.abs(velocityY); 
    }


    time += timeStep;


    requestAnimationFrame(animateApple);
  };

  animateApple();
};

resetApple();










