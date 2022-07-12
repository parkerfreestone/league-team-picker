import { ListGroup, Badge } from "react-bootstrap";

const SummonerItem = ({ name, level }) => {
    return (
        <ListGroup.Item
            as="li"
            key={name}
            className="d-flex justify-content-center align-items-center"
        >
            <Badge bg="primary" pill>
                {level}
            </Badge>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
            </div>

        </ListGroup.Item>
    );
}

export default SummonerItem;