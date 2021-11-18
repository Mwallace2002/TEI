
    function animate(obj, initVal, lastVal, duration) {

        let startTime = null;

        //get the current timestamp and assign it to the currentTime variable

        let currentTime = Date.now();

        //pass the current timestamp to the step function

        const step = (currentTime ) => {

        //if the start time is null, assign the current time to startTime

            if (!startTime) {
            startTime = currentTime ;
            }

        //calculate the value to be used in calculating the number to be displayed

            const progress = Math.min((currentTime  - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above

            obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value(lastVal)

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        //start animating
        window.requestAnimationFrame(step);
    }

let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');
let text4 = document.getElementById('0104');
let text5 = document.getElementById('0105');
let text6 = document.getElementById('0106');
let text7 = document.getElementById('0107');
let text8 = document.getElementById('0108');
let text9 = document.getElementById('0109');
let text10 = document.getElementById('0110');
let text11 = document.getElementById('0111');
let text12 = document.getElementById('0112');

const load = () =>{

    animate(text1, 0, 60, 4000);
    animate(text2, 0, 25, 3000);
    animate(text3, 0, 40, 2000);
    animate(text4, 0, 80, 1750);
    animate(text5, 0, 15, 1750);
    animate(text6, 0, 5, 1750);
    animate(text7, 0, 100, 1750);
    animate(text8, 0, 90, 1750);
    animate(text9, 0, 75, 1750);
    animate(text10, 0, 0, 1750);
    animate(text11, 0, 10, 1750);
    animate(text12, 0, 35, 1750);


}
