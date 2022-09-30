import {VscFilePdf} from "react-icons/vsc"

export function Posts() {
    return(
        <button onClick={() => 
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data))
        }>
            <VscFilePdf/>
            Traer datos</button>
    )
}