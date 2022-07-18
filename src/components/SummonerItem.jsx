import { ListGroup, Badge, Image, Button } from "react-bootstrap";
import { FileX } from "react-bootstrap-icons";

const SummonerItem = ({
    name,
    level,
    icon,
    removeSummoner,
    parentList
}) => {

    const ICON_URL = "https://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/"

    return (
        <ListGroup.Item
            as="li"
            key={name}
            className="d-flex justify-content-center align-items-center"
        >
            <Image
                rounded
                src={`${ICON_URL}${icon}.png`}
                className="me-2"
                width="50px"
            />
            <Badge
                bg="primary"
                pill
            >
                {level}
            </Badge>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
            </div>
            {
                parentList === "Summoner Bank"
                    ? <Button
                        variant="danger"
                        onClick={() => removeSummoner(name)}
                    >
                        <FileX
                            size={25}
                        />
                    </Button>
                    : <a>Greg</a>
            }

        </ListGroup.Item>
    );
}

export default SummonerItem;