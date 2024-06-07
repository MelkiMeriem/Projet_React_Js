import Card from 'react-bootstrap/Card';
import {inConstructor} from "eslint-plugin-react/lib/util/ast.js";
import PropTypes from "prop-types";

function CovoiturageCard({details}) {

    return (
        <Card className={"Card"} style={{ width: '18rem' , height:'14rem' }}>
            <Card.Body>
                <Card.Title>
                    {details.départ}->{details.arrivé}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {details.AllerEtRetour && <p>
                        Aller et retour
                    </p>}
                    {!details.AllerEtRetour && <p>
                        Aller seulement
                    </p>}
                </Card.Subtitle>
                <Card.Text>
                    Heure départ : {details.heureDepart}
                    {details.AllerEtRetour && <p>  Heure Retour : {details.heureRetour}</p>}
                    Nombre des places disponibles :{details.NbrePlace}



                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

    );

    // eslint-disable-next-line no-unreachable
    CovoiturageCard.propTypes = {
        details: PropTypes.shape({
                id: PropTypes.string,
                départ: PropTypes.string,
                arrivé: PropTypes.string,
                destination: PropTypes.string,
                time: PropTypes.string,
                price: PropTypes.number,
                AllerEtRetour:PropTypes.bool,
                heureDepart: PropTypes.string,
                heureRetour: PropTypes.string,
                NbrePlace: PropTypes.number,
                prix: PropTypes.number,
                quotidien:PropTypes.bool,
                JourDéb:PropTypes.string,
                JourFin:PropTypes.string,
                DateDébut:PropTypes.string,
                OwnerEmail:PropTypes.string,
            }
        )}
}
export default CovoiturageCard;
