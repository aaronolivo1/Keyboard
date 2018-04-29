var WKEY1canvas = document.getElementById("Keyboard1");
var ctx1 = WKEY1canvas.getContext('2d');
ctx1.fillStyle = "white";
ctx1.beginPath();
ctx1.moveTo(100,0);
ctx1.lineTo(100,568);
ctx1.lineTo(203,568);
ctx1.lineTo(203,368);
ctx1.lineTo(173,368);
ctx1.lineTo(173,0);
ctx1.closePath();
ctx1.fill();
ctx1.stroke();
ctx1.fillStyle = "black";
ctx1.font = "40px Arial";
ctx1.fillStyle = "black";
ctx1.fillText("C", 110, 565);

var WKEY2canvas = document.getElementById("Keyboard1");
var ctx2 = WKEY2canvas.getContext('2d');
ctx2.fillStyle = "white";
ctx2.beginPath();
ctx2.moveTo(203,368);
ctx2.lineTo(203,568);
ctx2.lineTo(306,568);
ctx2.lineTo(306,368);
ctx2.lineTo(276,368);
ctx2.lineTo(276,0);
ctx2.lineTo(233,0);
ctx2.lineTo(233,368);
ctx2.closePath();
ctx2.fill();
ctx2.stroke();
ctx2.fillStyle = "black";
ctx2.font = "40px Arial";
ctx2.fillStyle = "black";
ctx2.fillText("D", 213, 565);

var WKEY3canvas = document.getElementById("Keyboard1");
var ctx3 = WKEY3canvas.getContext('2d');
ctx3.fillStyle = "white";
ctx3.beginPath();
ctx3.moveTo(306,368);
ctx3.lineTo(306,568);
ctx3.lineTo(409,568);
ctx3.lineTo(409,0);
ctx3.lineTo(336,0);
ctx3.lineTo(336,368);
ctx3.closePath();
ctx3.fill();
ctx3.stroke();
ctx3.fillStyle = "black";
ctx3.font = "40px Arial";
ctx3.fillStyle = "black";
ctx3.fillText("E", 316, 565);

var WKEY4canvas = document.getElementById("Keyboard1");
var ctx4 = WKEY4canvas.getContext('2d');
ctx4.fillStyle = "white";
ctx4.beginPath();
ctx4.moveTo(409,0);
ctx4.lineTo(409,568);
ctx4.lineTo(512,568);
ctx4.lineTo(512,368);
ctx4.lineTo(482,368);
ctx4.lineTo(482,0);
ctx4.closePath();
ctx4.fill();
ctx4.stroke();
ctx4.fillStyle = "black";
ctx4.font = "40px Arial";
ctx4.fillStyle = "black";
ctx4.fillText("F", 419, 565);

var WKEY5canvas = document.getElementById("Keyboard1");
var ctx5 = WKEY5canvas.getContext('2d');
ctx5.fillStyle = "white";
ctx5.beginPath();
ctx5.moveTo(512,368);
ctx5.lineTo(512,568);
ctx5.lineTo(615,568);
ctx5.lineTo(615,368);
ctx5.lineTo(585,368);
ctx5.lineTo(585,0);
ctx5.lineTo(542,0);
ctx5.lineTo(542,368);
ctx5.closePath();
ctx5.fill();
ctx5.stroke();
ctx5.fillStyle = "black";
ctx5.font = "40px Arial";
ctx5.fillStyle = "black";
ctx5.fillText("G", 522, 565);

var WKEY6canvas = document.getElementById("Keyboard1");
var ctx6 = WKEY6canvas.getContext('2d');
ctx6.fillStyle = "white";
ctx6.beginPath();
ctx6.moveTo(615,368);
ctx6.lineTo(615,568);
ctx6.lineTo(718,568);
ctx6.lineTo(718,368);
ctx6.lineTo(688,368);
ctx6.lineTo(688,0);
ctx6.lineTo(645,0);
ctx6.lineTo(645,368);
ctx6.closePath();
ctx6.fill();
ctx6.stroke();
ctx6.fillStyle = "black";
ctx6.font = "40px Arial";
ctx6.fillStyle = "black";
ctx6.fillText("A", 625, 565);

var WKEY7canvas = document.getElementById("Keyboard1");
var ctx7 = WKEY7canvas.getContext('2d');
ctx7.fillStyle = "white";
ctx7.beginPath();
ctx7.moveTo(718,368);
ctx7.lineTo(718,568);
ctx7.lineTo(821,568);
ctx7.lineTo(821,0);
ctx7.lineTo(748,0);
ctx7.lineTo(748,368);
ctx7.closePath();
ctx7.fill();
ctx7.stroke();
ctx7.fillStyle = "black";
ctx7.font = "40px Arial";
ctx7.fillStyle = "black";
ctx7.fillText("B", 728, 565);

var WKEY8canvas = document.getElementById("Keyboard1");
var ctx8 = WKEY8canvas.getContext('2d');
ctx8.fillStyle = "white";
ctx8.beginPath();
ctx8.moveTo(821,0);
ctx8.lineTo(821,568);
ctx8.lineTo(924,568);
ctx8.lineTo(924,0);
ctx8.closePath();
ctx8.fill();
ctx8.stroke();
ctx8.fillStyle = "black";
ctx8.font = "40px Arial";
ctx8.fillStyle = "black";
ctx8.fillText("C", 831, 565);

var BKEY1canvas = document.getElementById("Keyboard1");
var ctx9 = BKEY1canvas.getContext('2d');
ctx9.fillStyle = "black";
ctx9.beginPath();
ctx9.moveTo(173,0);
ctx9.lineTo(173,368);
ctx9.lineTo(233,368);
ctx9.lineTo(233,0);
ctx9.closePath();
ctx9.fill();
ctx9.stroke();
ctx9.fillStyle = "white";
ctx9.font = "20px Arial";
ctx9.fillText("D♭", 183, 363);
ctx9.fillText("C♯", 183, 333);

var BKEY2canvas = document.getElementById("Keyboard1");
var ctx10 = BKEY2canvas.getContext('2d');
ctx10.fillStyle = "black";
ctx10.beginPath();
ctx10.moveTo(276,0);
ctx10.lineTo(276,368);
ctx10.lineTo(336,368);
ctx10.lineTo(336,0);
ctx10.closePath();
ctx10.fill();
ctx10.stroke();
ctx10.fillStyle = "white";
ctx10.font = "20px Arial";
ctx10.fillText("E♭", 286, 363);
ctx10.fillText("D♯", 286, 333);

var BKEY3canvas = document.getElementById("Keyboard1");
var ctx11 = BKEY3canvas.getContext('2d');
ctx11.fillStyle = "black";
ctx11.beginPath();
ctx11.moveTo(482,0);
ctx11.lineTo(482,368);
ctx11.lineTo(542,368);
ctx11.lineTo(542,0);
ctx11.closePath();
ctx11.fill();
ctx11.stroke();
ctx11.fillStyle = "white";
ctx11.font = "20px Arial";
ctx11.fillText("G♭", 492, 363);
ctx11.fillText("F♯", 492, 333);

var BKEY4canvas = document.getElementById("Keyboard1");
var ctx12 = BKEY4canvas.getContext('2d');
ctx12.fillStyle = "black";
ctx12.beginPath();
ctx12.moveTo(585,0);
ctx12.lineTo(585,368);
ctx12.lineTo(645,368);
ctx12.lineTo(645,0);
ctx12.closePath();
ctx12.fill();
ctx12.stroke();
ctx12.fillStyle = "white";
ctx12.font = "20px Arial";
ctx12.fillText("A♭", 595, 363);
ctx12.fillText("G♯", 595, 333);

var BKEY5canvas = document.getElementById("Keyboard1");
var ctx13 = BKEY5canvas.getContext('2d');
ctx13.fillStyle = "black";
ctx13.beginPath();
ctx13.moveTo(688,0);
ctx13.lineTo(688,368);
ctx13.lineTo(748,368);
ctx13.lineTo(748,0);
ctx13.closePath();
ctx13.fill();
ctx13.stroke();
ctx13.fillStyle = "white";
ctx13.font = "20px Arial";
ctx13.fillText("B♭", 698, 363);
ctx13.fillText("A♯", 698, 333);

var returnToTitle = document.getElementById("Keyboard1");
var ctx14 = returnToTitle.getContext('2d');
ctx14.fillStyle = "yellow";
ctx14.beginPath();
ctx14.moveTo(930,10);
ctx14.lineTo(930,50);
ctx14.lineTo(1150,50);
ctx14.lineTo(1150,10);
ctx14.closePath();
ctx14.fill();
ctx14.stroke();
ctx14.fillStyle = "black";
ctx14.font = "40px, Arial";
ctx14.fillText("Return to Title Screen", 932, 48);

function goToTitle() {
  window.location='titleScreen.html';
}

returnToTitle.addEventListener('click', (event) => {
  const pos = {
    x: event.clientX,
    y: event.clientY
  };
  if((pos.x >= 931 && pos.x <= 1149)&&(pos.y >= 10 && pos.y <= 50))
  {
    goToTitle();
  }
})

 BKEY1canvas.addEventListener('click', (event) => {
     const pos = {
         x: event.clientX,
         y: event.clientY
       };
         if((pos.x >= 174 && pos.x <= 232)&&(pos.y >= 0 && pos.y <= 368))
         {
                      var audio1 = document.getElementById("BKEY1A");
           audio1.play();
         }
         }
  );

   BKEY2canvas.addEventListener('click', (event) => {
     const pos = {
         x: event.clientX,
         y: event.clientY
       };
         if((pos.x >= 277 && pos.x <= 335)&&(pos.y >= 0 && pos.y <= 368)){
           var audio1 = document.getElementById("BKEY2A");
           audio1.play();
          }
     }
  );

    BKEY3canvas.addEventListener('click', (event) => {
      const pos = {
          x: event.clientX,
          y: event.clientY
        };
          if((pos.x >= 483 && pos.x <= 541)&&(pos.y >= 0 && pos.y <= 368)){
            var audio1 = document.getElementById("BKEY3A");
            audio1.play();
 }
      }
   );

     BKEY4canvas.addEventListener('click', (event) => {
       const pos = {
           x: event.clientX,
           y: event.clientY
         };
           if((pos.x >= 586 && pos.x <= 644)&&(pos.y >= 0 && pos.y <= 368))
           {
             var audio1 = document.getElementById("BKEY4A");
             audio1.play();
                       }
       }
    );

BKEY5canvas.addEventListener('click', (event) => {
  const pos = {
      x: event.clientX,
      y: event.clientY
    };
      if((pos.x >= 689 && pos.x <= 747)&&(pos.y >= 0 && pos.y <= 368))
      {
        var audio1 = document.getElementById("BKEY5A");
        audio1.play();
                  }
  }
  );

WKEY1canvas.addEventListener('click', (event) => {
const pos = {
x: event.clientX,
y: event.clientY
    };
        if((pos.x >= 101 && pos.x <= 172)&&(pos.y >= 0 && pos.y <= 367))
        {
          var audio1 = document.getElementById("WKEY1A");
          audio1.play();
        }
         if((pos.x >= 101 && pos.x <= 202)&&(pos.y >= 368 && pos.y <= 568))
        {
          var audio1 = document.getElementById("WKEY1A");
          audio1.play();
        }
  });

  WKEY2canvas.addEventListener('click', (event) => {
  const pos = {
  x: event.clientX,
  y: event.clientY
      };
          if((pos.x >= 234 && pos.x <= 275)&&(pos.y >= 0 && pos.y <= 367))
          {
            var audio1 = document.getElementById("WKEY2A");
            audio1.play();
          }
           if((pos.x >= 204 && pos.x <= 305)&&(pos.y >= 368 && pos.y <= 568))
          {
            var audio1 = document.getElementById("WKEY2A");
            audio1.play();
          }
    });

    WKEY3canvas.addEventListener('click', (event) => {
    const pos = {
    x: event.clientX,
    y: event.clientY
        };
            if((pos.x >= 337 && pos.x <= 408)&&(pos.y >= 0 && pos.y <= 367))
            {
              var audio1 = document.getElementById("WKEY3A");
              audio1.play();
            }
             if((pos.x >= 307 && pos.x <= 408)&&(pos.y >= 368 && pos.y <= 568))
            {
              var audio1 = document.getElementById("WKEY3A");
              audio1.play();
            }
      });

      WKEY4canvas.addEventListener('click', (event) => {
      const pos = {
      x: event.clientX,
      y: event.clientY
          };
              if((pos.x >= 410 && pos.x <= 481)&&(pos.y >= 0 && pos.y <= 367))
              {
                var audio1 = document.getElementById("WKEY4A");
                audio1.play();
              }
               if((pos.x >= 410 && pos.x <= 511)&&(pos.y >= 368 && pos.y <= 568))
              {
                var audio1 = document.getElementById("WKEY4A");
                audio1.play();
              }
        });

        WKEY5canvas.addEventListener('click', (event) => {
        const pos = {
        x: event.clientX,
        y: event.clientY
            };
                if((pos.x >= 543 && pos.x <= 584)&&(pos.y >= 0 && pos.y <= 367))
                {
                  var audio1 = document.getElementById("WKEY5A");
                  audio1.play();
                }
                 if((pos.x >= 513 && pos.x <= 614)&&(pos.y >= 368 && pos.y <= 568))
                {
                  var audio1 = document.getElementById("WKEY5A");
                  audio1.play();
                }
          });

          WKEY6canvas.addEventListener('click', (event) => {
          const pos = {
          x: event.clientX,
          y: event.clientY
              };
                  if((pos.x >= 646 && pos.x <= 687)&&(pos.y >= 0 && pos.y <= 367))
                  {
                    var audio1 = document.getElementById("WKEY6A");
                    audio1.play();
                  }
                   if((pos.x >= 614 && pos.x <= 717)&&(pos.y >= 368 && pos.y <= 568))
                  {
                    var audio1 = document.getElementById("WKEY6A");
                    audio1.play();
                  }
            });

            WKEY7canvas.addEventListener('click', (event) => {
            const pos = {
            x: event.clientX,
            y: event.clientY
                };
                    if((pos.x >= 749 && pos.x <= 820)&&(pos.y >= 0 && pos.y <= 367))
                    {
                      var audio1 = document.getElementById("WKEY7A");
                      audio1.play();
                    }
                     if((pos.x >= 719 && pos.x <= 820)&&(pos.y >= 368 && pos.y <= 568))
                    {
                      var audio1 = document.getElementById("WKEY7A");
                      audio1.play();
                    }
              });

              WKEY8canvas.addEventListener('click', (event) => {
              const pos = {
              x: event.clientX,
              y: event.clientY
                  };
                      if((pos.x >= 822 && pos.x <= 923)&&(pos.y >= 0 && pos.y <= 568))
                      {
                        var audio1 = document.getElementById("WKEY8A");
                        audio1.play();
                      }

                });
