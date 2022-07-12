import { ListGroup } from "react-bootstrap";
import SummonerItem from "./SummonerItem";

const TeamList = ({ teamName, teamList }) => {

    let listItems = teamList.map((summoner) =>
        <SummonerItem name={summoner.name} level={summoner.summonerLevel} />
    )

    Object.values(teamList);

    return (



        <ListGroup as="ol" >
            <ListGroup.Item
                as="li"
                key={-1}
                className="bg-dark text-white fw-bold"
            >
                {teamName}
            </ListGroup.Item>
            {listItems}
        </ListGroup>
    );
}

export default TeamList;

<ListGroup.Item
    as="li"
    key={1}
    className="d-flex justify-content-center align-items-center"
>
    <div className="ms-2 me-auto">
        <div className="fw-bold">No Team Data</div>
    </div>

</ListGroup.Item>