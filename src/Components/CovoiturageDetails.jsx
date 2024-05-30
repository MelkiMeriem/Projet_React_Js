import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function CovoiturageDetails({ Covoiturage }) {
    return (
        <Card>
            <Card.Header as="h5">{Covoiturage.Depart} -> {Covoiturage.Arrive}</Card.Header>
            <Card.Body>
                <Card.Title>{Covoiturage.Date}</Card.Title>
                <Card.Text>Aller : {Covoiturage.Aller}</Card.Text>
                <Card.Text>Retour : {Covoiturage.Retour}</Card.Text>
                <Card.Text>Proposé par : {Covoiturage.User.UserName}</Card.Text>
                <Button  variant="primary">Choisir le covoiturage </Button>
            </Card.Body>
        </Card>
    );
}

