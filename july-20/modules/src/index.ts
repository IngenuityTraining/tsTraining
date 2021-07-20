import {Box} from "./Box";
import {gsap} from "gsap";

onload = () => {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    /*let box = new Box({
        x: 10,
        y: 10,
        width: 100,
        height: 20,
        color: "red"
    });*/

    let box = Box.getInstance();
    box.x = 10;
    box.y = 10;
    box.w = 100;
    box.h = 20;

    box.draw(context);
    console.log(box);

    let tween = gsap.fromTo(box, {x:0, y:0},{
        x: 500,
        y: 400,
        duration: 2,
        ease: 'sine.out',
        yoyo: true,
        yoyoEase: 'rough.out',
        repeat: 1,
        onUpdate: ()=> {
            context.clearRect(0,0, canvas.width, canvas.height);
            console.log("box ", box.x);
            box.draw(context);
        }
    });

    tween.play();
}