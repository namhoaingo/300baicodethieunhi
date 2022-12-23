import { useState } from "react";

function Material({materials, setMaterial}){

    const [selectedMaterial, setSelectedMaterial] = useState(null);

    return (
        <>
            Display Material here
            {/* <ul>
                {materials ?? materials.map((material) =>{
                    <div>
                            {material}
                    </div>  
                })}    
            </ul> */}
        </>
    )

}

export default Material;