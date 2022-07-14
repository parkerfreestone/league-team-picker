import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import SummonerItem from "./SummonerItem";

const TeamList = ({ teamName, teamList, theme }) => {

    const [isEmpty, setIsEmpty] = useState(true);

    let listItems = teamList.map((summoner) =>
        <SummonerItem
            name={summoner.name}
            level={summoner.summonerLevel}
            icon={summoner.profileIconId}
            key={summoner.puuid}
        />
    )

    useEffect(() => {
        teamList.length === 0
            ? setIsEmpty(true)
            : setIsEmpty(false);
    }, [teamList]);

    return (
        <ListGroup as="ol" >
            <ListGroup.Item
                as="li"
                key={-1}
                className={`bg-${theme} text-white fw-bold`}
            >
                {teamName}
            </ListGroup.Item>
            {!isEmpty
                ? listItems
                : <ListGroup.Item
                    as="li"
                    key={-1000}
                >
                    No Summoners Specified
                </ListGroup.Item>
            }
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