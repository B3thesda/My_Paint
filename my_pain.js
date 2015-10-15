/*jslint browser:true node:true indent:4 */
/*global $*/

//document.addEventListener('DOMContentLoaded', function () {})

$(function () {
    "use strict";
    var startmouseX,
        startmouseY,
        endmouseX,
        endmouseY,
        keur,
        click = false,
        sec = document.getElementById('sec'),
        context = sec.getContext('2d');

    $('#sec').mousedown(function (e) {
        startmouseX = e.pageX - this.offsetLeft;
        startmouseY = e.pageY - this.offsetTop;
        click = true;
    });

    $('#sec').mousemove(function (e) {
        if (click) {
            if ($('#outil').val() === "pinceaux") {
                context.beginPath();
                context.strokeStyle = $('#color').val();
                context.lineWidth = $('#width').val();
                context.lineJoin = "round";
                if ($('#shadow')[0].checked === true) {
                    context.shadowBlur = $('#shadowPath').val();
                    context.shadowColor = "black";
                } else if ($('#shadow')[0].checked === false) {
                    context.shadowBlur = 0;
                    context.shadowColor = "white";
                }
                context.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
                context.lineTo(e.pageX - this.offsetLeft + 1, e.pageY - this.offsetTop + 1);
                context.closePath();
                context.stroke();
            }
            if ($('#outil').val() === "gomme") {
                context.beginPath();
                context.strokeStyle = "white";
                context.lineWidth = $('#width').val();
                context.lineJoin = "round";
                if ($('#shadow')[0].checked === true) {
                    context.shadowBlur = 0;
                    context.shadowColor = "white";
                }
                context.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
                context.lineTo(e.pageX - this.offsetLeft + 1, e.pageY - this.offsetTop + 1);
                context.closePath();
                context.stroke();
            }
        }
    });
    $('#sec').mouseleave(function () {
        click = false;
    });

    $('#sec').mouseup(function (e) {
        endmouseX = e.pageX - this.offsetLeft;
        endmouseY = e.pageY - this.offsetTop;
        click = false;

        if ($('#outil').val() === "trais") {
            context.beginPath();
            context.strokeStyle = $('#color').val();
            context.lineWidth = $('#width').val();
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.moveTo(startmouseX, startmouseY);
            context.lineTo(endmouseX, endmouseY);
            context.closePath();
            context.stroke();
        }
        if ($('#outil').val() === "rectangle") {
            context.beginPath();
            context.strokeStyle = $('#color').val();
            context.lineWidth = $('#width').val();
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.rect(startmouseX, startmouseY, endmouseX - startmouseX, endmouseY - startmouseY);
            context.stroke();
        }
        if ($('#outil').val() === "rectangleP") {
            context.beginPath();
            context.fillStyle = $('#color').val();
            context.lineWidth = $('#width').val();
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.fillRect(startmouseX, startmouseY, endmouseX - startmouseX, endmouseY - startmouseY);
            context.stroke();
        }
        if ($('#outil').val() === "circle") {
            context.beginPath();
            context.strokeStyle = $('#color').val();
            context.lineWidth = $('#width').val();
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.arc(startmouseX, startmouseY, Math.sqrt(((endmouseX - startmouseX) * (endmouseX - startmouseX)) + ((endmouseY - startmouseY) * (endmouseY - startmouseY))), 0, 2 * Math.PI);
            context.stroke();
        }
        if ($('#outil').val() === "circle full") {
            context.beginPath();
            context.fillStyle = $('#color').val();
            context.lineWidth = $('#width').val();
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.arc(startmouseX, startmouseY, Math.sqrt(((endmouseX - startmouseX) * (endmouseX - startmouseX)) + ((endmouseY - startmouseY) * (endmouseY - startmouseY))), 0, 2 * Math.PI);
            context.fill();
        }
        if ($('#outil').val() === "keur keur") {
            keur = Math.sqrt(((endmouseX - startmouseX) * (endmouseX - startmouseX)) + ((endmouseY - startmouseY) * (endmouseY - startmouseY)) / 2);
            // arc n01
            context.beginPath();
            context.strokeStyle = $('#color').val;
            context.lineWidth = $('#width').val;
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.arc(startmouseX - keur, startmouseY, keur, 0, Math.PI, true);
            context.stroke();
            // arc n02
            context.beginPath();
            context.strokeStyle = $('#color').val;
            context.lineWidth = $('#width').val;
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.arc(startmouseX + keur, startmouseY, keur, 0, Math.PI, true);
            context.stroke();
            // trai 1
            context.beginPath();
            context.strokeStyle = $('#color').val();
            context.lineWidth = $('#width').val();
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.moveTo(startmouseX - keur * 2, startmouseY);
            context.lineTo(startmouseX, startmouseY + 60 + keur);
            context.closePath();
            context.stroke();
            // trai 2
            context.beginPath();
            context.strokeStyle = $('#color').val();
            context.lineWidth = $('#width').val();
            context.lineJoin = "round";
            if ($('#shadow')[0].checked === true) {
                context.shadowBlur = $('#shadowPath').val();
                context.shadowColor = "black";
            } else if ($('#shadow')[0].checked === false) {
                context.shadowBlur = 0;
                context.shadowColor = "white";
            }
            context.moveTo(startmouseX + keur * 2, startmouseY);
            context.lineTo(startmouseX, startmouseY + 60 + keur);
            context.closePath();
            context.stroke();
        }
    });

    $('#clear').click(function () {
        context.clearRect(0, 0, sec.width, sec.height);
    });
});

