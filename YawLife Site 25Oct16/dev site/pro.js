/* Set the coordinate of the center image */
$("#center").css('top', 200);
$("#center").css('left', 200);

var pos = $('#center').position();
var radiusSat = $('#sat1').width() * 0.5;
var radius = $('#center').width() * 0.5;
var cx = pos.left + radius;
var cy = pos.top + radius;
var x, y, angle = 0 ;
var angles = [];
var spc = (2 * Math.PI) / 6;
///var deg2rad = Math.PI / 180;
var i = 0;

for(;i < 6; i++) {
    angles.push(angle);
    angle += spc;
}

/// space out radius
radius += (radiusSat + 70);

loop();

function loop() {

    for(var i = 0; i < angles.length; i++) {

        angle = angles[i];

        ///x = cx + radius * Math.cos(angle * deg2rad);
        ///y = cy + radius * Math.sin(angle * deg2rad);

        x = cx + radius * Math.cos(angle);
        y = cy + radius * Math.sin(angle);

        $('#sat' + i).css({left:x - radiusSat, top:y - radiusSat});

 /// Change time of full rotation
        angles[i] += 0.004;
        if (angles[i] > (Math.PI * 2))
           angles[i] -= (Math.PI * 2);
    }

    requestAnimationFrame(loop);
}
/*
var sat1 = document.getElementById("sat1");
var sat2 = document.getElementById("sat2");
var sat3 = document.getElementById("sat3");
var sat4 = document.getElementById("sat4");
var sat5 = document.getElementById("sat5");

TweenMax.to(sat0, 10, {bezier:{type:'quadratic', values:[{x:0, y:0},{x:100, y:0},{x:100, y:100},
															{x:100, y:200},{x:0, y:200},
															{x:-100, y:200},{x:-100, y:100},
															{x:-100, y:0},{x:0, y:0}]}
															, ease:Linear.easeNone});
TweenMax.to(sat1, 10, {bezier:{type:'quadratic', values:[{x:0, y:0},{x:100, y:0},{x:100, y:100},
															{x:100, y:200},{x:0, y:200},
															/{x:-100, y:200},{x:-100, y:100},
															{x:-100, y:0},{x:0, y:0}]}
															, ease:Linear.easeNone});
TweenMax.to(sat2, 10, {bezier:{type:'quadratic', values:[{x:0, y:0},{x:100, y:0},{x:100, y:100},
															{x:100, y:200},{x:0, y:200},
															{x:-100, y:200},{x:-100, y:100},
															{x:-100, y:0},{x:0, y:0}]}
															, ease:Linear.easeNone});
TweenMax.to(sat3, 10, {bezier:{type:'quadratic', values:[{x:0, y:0},{x:100, y:0},{x:100, y:100},
															{x:100, y:200},{x:0, y:200},
															{x:-100, y:200},{x:-100, y:100},
															{x:-100, y:0},{x:0, y:0}]}
															, ease:Linear.easeNone});
TweenMax.to(sat4, 10, {bezier:{type:'quadratic', values:[{x:0, y:0},{x:100, y:0},{x:100, y:100},
															{x:100, y:200},{x:0, y:200},
															{x:-100, y:200},{x:-100, y:100},
															{x:-100, y:0},{x:0, y:0}]}
															, ease:Linear.easeNone});
*/
