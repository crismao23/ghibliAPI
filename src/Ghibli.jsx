import {createSignal} from 'solid-js'
import { Card, ListGroup, ListGroupItem  } from "solid-bootstrap";


const Ghibli = () =>{
    const [getInfo, setInfo] = createSignal([])

    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => {
        setInfo(data)
    })
    return(
        <>
            <h1>Studio Ghibli</h1>
            <div className='justify-content-center'>
                <div className="d-flex flex-wrap w-100 justify-content-center">
                    {getInfo().map(result =>{
                        return(
                            <Card class="card" className='m-2'>
                                <Card.Img variant="top" src={result.movie_banner} />
                                <Card.Body>
                                    <Card.Title>{result.title}</Card.Title>
                                    <Card.Text>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem><b>Year:</b> {result.release_date}</ListGroupItem>
                                            <ListGroupItem><b>Score: </b>{result.rt_score}</ListGroupItem>
                                            <ListGroupItem><b>Duration: </b>{result.running_time} minutes</ListGroupItem>
                                            <ListGroupItem>{result.description}</ListGroupItem>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>

        </>

    )
}
export default Ghibli