import './ServiceCard.scss';

type ServiceCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  buttonText?: string;
};

const CardService = ({
  title,
  description,
  benefits,
  buttonText = 'Solicitar Orçamento',
}: ServiceCardProps) => {
  return (
    <div className="service-card">
      <h3 className="service-card__title">{title}</h3>

      <p className="service-card__description">
        {description}
      </p>

      <div className="service-card__benefits">
        <span className="service-card__benefits-title">
          Principais Benefícios:
        </span>

        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>
              <span className="check">✔</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="https://wa.me/+5585989096804"
        target="_blank"
        rel="noopener noreferrer"
        className="service-card__button"
      >
        {buttonText}
        <span className="arrow">→</span>
      </a>
    </div>
  );
};

export default CardService;
