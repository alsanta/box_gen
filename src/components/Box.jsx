import React, { useState } from 'react';

const Box = (props) => {
    const [colorPicker,setColorPicker] = useState('');

    const [boxList,setBoxList] = useState([])

    const changeHandler = (e) =>{
        console.log(colorPicker);
        setColorPicker({
            ...colorPicker,[e.target.name]:e.target.value
        })
    }

    const addBox = (e)=>{
        e.preventDefault();
        setBoxList([...boxList,colorPicker]);
        setColorPicker({
            colorPicker:""
        })
    }

    return (
        <>
        <div>
            <form onSubmit={(e)=>addBox(e)} >
                <input onChange={(e)=>changeHandler(e)} className ="me-3 mt-3" type="color" name="colorPicker" value={colorPicker} />
                <input className="btn btn-success" type="submit" />
            </form>
            {boxList.map((color,i)=>{
                return <div key={i} style={{display:'inline-block' ,flexWrap:'wrap' ,backgroundColor:color.colorPicker, width:"100px", height:"100px"}} className="mt-3 me-3">

                </div>
            })
            }
        </div>
        </>
    );
}

export default Box;