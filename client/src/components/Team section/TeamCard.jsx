import { Card } from 'react-bootstrap';
// Stili per le card del team
import '../../styles/components/Cards.css';

const TeamCard = ({ member, index }) => {
    return (
        <Card 
            
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <Card.Body className="team-card-body text-center">
                <div className="team-avatar">
                    <i className={`bi bi-${member.icon}`}></i>
                </div>

                <h4>{member.name}</h4>
                <h6 className="team-role">{member.role}</h6>
                
                <div>
                    {member.experience} di esperienza
                </div>
                
                <p>{member.description}</p>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;