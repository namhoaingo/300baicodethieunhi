const courses = [{
    id: 1,
    name:"course 1",
    price: 10
},
{
    id: 2,
    name:"course 2",
    price: 20
}]



function CourseItem(props){
    console.log(props)
    return (
        <div>
            <h2 onClick={props.onClick}>Hello</h2>
        </div>
    )
}

function App(){
    const handleClick= () => console.log(3)    

    return(
        <div id="wrapper">
            {
                courses.map((course, index) => {
                    return <CourseItem key={index} cource={course} onClick={handleClick}></CourseItem>
                })
            }
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))