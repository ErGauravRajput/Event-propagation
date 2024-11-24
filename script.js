const callOuter=(event)=>{
    console.log(event);
    console.table([{Description:"I am Outer Div",
        Target:event.target,
        CurrentTarget:event.CurrentTarget,
        },]);
}

const callMiddle=(event)=>{
    console.table([{Description:"I am Middle Div",
        Target:event.target,
        CurrentTarget:event.CurrentTarget,
        },]);
}

const callInner=(event)=>{
    console.table([{Description:"I am Inner Div",
        Target:event.target,
        CurrentTarget:event.CurrentTarget,
        },]);
}
// document.getElementById("outer").addEventListener("click", callOuter);
// document.getElementById("middle").addEventListener("click", callMiddle);
// document.getElementById("inner").addEventListener("click", callInner);

//true for capturing phase
document.getElementById("outer").addEventListener("click", callOuter,true);
document.getElementById("middle").addEventListener("click", callMiddle,true);
document.getElementById("inner").addEventListener("click", callInner,true);