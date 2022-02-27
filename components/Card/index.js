import PropTypes from 'prop-types';
import styles from 'styles/Card.module.scss';
import { FaUserCircle } from 'react-icons/fa';

export default function Card({ data, type }) {
  const translateToFileName = (name) =>
    name.toLowerCase().split(' ').join('_').split('/').join('-');
  return (
    <li className={styles.itemList}>
      <img
        className={styles.image}
        src={`/${type}/${translateToFileName(data.name)}.png`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = `/${type}/default.png`;
        }}
        alt={data.name}
      />
      <div className={styles.details}>
        <h2>{data.name}</h2>
        {type === 'planets' && (
          <>
            <p className="capitalize">{data.climate}</p>
            <p>
              {data.population === 'unknown'
                ? 'Unknown population'
                : `Population of ${data.population}`}
            </p>
            <p>
              {`Famous characters: ${
                data.residents.length === 0 ? 'none' : ''
              }`}
              <br />
              {data.residents.map(() => (
                <FaUserCircle className={styles.icon} />
              ))}
            </p>
          </>
        )}
        {(type === 'starships' || type === 'vehicles') && (
          <>
            <p>Crew: {data.crew}</p>
            <p>Cargo: {data.cargo_capacity}</p>
            <p>Consumables: {data.consumables}</p>
            <p>Manufacturer: {data.manufacturer}</p>
          </>
        )}
        {type === 'people' && (
          <>
            <p className="capitalize">{data.gender}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Eyes color: {data.eye_color}</p>
            <p>Height: {data.height}</p>
            <p>Weight: {data.mass}</p>
          </>
        )}
      </div>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
