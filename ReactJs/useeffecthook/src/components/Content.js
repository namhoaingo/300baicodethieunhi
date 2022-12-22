import {useState,  useEffect} from "react";

function Content() {
    var [width, setWidth] = useState(window.innerWidth);

    var resizeEventHandle = () => setWidth(window.innerWidth);
    useEffect(() =>{
        console.log("mount");
        window.addEventListener("resize", resizeEventHandle);
        return () => {
            console.log("unmount");
            //window.removeEventListener("resize", resizeEventHandle)
        }
    },[])

    console.log("content render");
    return (
        <div>
           {width}
        </div>
    )
}

export default Content;