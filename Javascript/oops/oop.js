function makeClor(r,g,b) {
    const color={}
    color.r=r;
    color.g=g;
    color.b=b;
    color.rgb=function () {
        const {r,g,b}=this;
        return `rgb(${r},${g},${b})`
    }
    return color;
}
const firstColor=makeClor(35,200,150)
firstColor.rgb()