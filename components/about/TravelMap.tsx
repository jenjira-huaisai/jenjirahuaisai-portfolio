import Container from '../Container';
import MapHighlighter from './MapHighlighter';
import { homeCountry, visitedCountries } from '@/data/about';
import { CENTROIDS, COUNTRY_SHAPES, MAP_HEIGHT, MAP_WIDTH } from '@/data/world-map';
import styles from './about.module.css';

const visitedIds = new Set(visitedCountries.map((country) => country.id));

// Too small to see or point at on a world map, so they also get a dot
const MARKED = ['SGP', 'QAT'];

function stateOf(id: string) {
  if (id === homeCountry.id) return 'home';
  if (visitedIds.has(id)) return 'visited';
  return undefined;
}

function nameOf(id: string) {
  if (id === homeCountry.id) return homeCountry.name;
  return visitedCountries.find((country) => country.id === id)?.name;
}

export default function TravelMap() {
  return (
    <section id="where-ive-been" className="section" aria-labelledby="map-title">
      <Container>
        <p className="section-label">TRAVEL</p>
        <h2 id="map-title" className="section-title">
          Where I&rsquo;ve been
        </h2>

        <ul className={styles.legend} aria-hidden="true">
          <li>
            <span className={`${styles.swatch} ${styles.swatchHome}`} />
            Home
          </li>
          <li>
            <span className={`${styles.swatch} ${styles.swatchVisited}`} />
            Visited
          </li>
        </ul>

        <MapHighlighter>
          <svg
            className={styles.map}
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            role="img"
            aria-labelledby="map-svg-title"
          >
            <title id="map-svg-title">
              World map. Home: Thailand. Visited: {visitedCountries.length} countries, listed
              below.
            </title>

            {COUNTRY_SHAPES.map((shape) => {
              const state = stateOf(shape.id);
              return (
                <path
                  key={shape.id}
                  d={shape.d}
                  data-state={state}
                  {...(state ? { 'data-country': shape.id, 'data-name': nameOf(shape.id) } : {})}
                />
              );
            })}

            {MARKED.map((id) => {
              const [cx, cy] = CENTROIDS[id];
              return (
                <circle
                  key={id}
                  cx={cx}
                  cy={cy}
                  r="4"
                  className={styles.marker}
                  data-state={stateOf(id)}
                  data-country={id}
                  data-name={nameOf(id)}
                />
              );
            })}
          </svg>

          <ul className={styles.countryList}>
            <li data-country={homeCountry.id} data-name={homeCountry.name}>
              <span className={`${styles.swatch} ${styles.swatchHome}`} aria-hidden="true" />
              {homeCountry.name}
              <span className="sr-only"> (home)</span>
            </li>
            {visitedCountries.map((country) => (
              <li key={country.id} data-country={country.id} data-name={country.name}>
                <span
                  className={`${styles.swatch} ${styles.swatchVisited}`}
                  aria-hidden="true"
                />
                {country.name}
              </li>
            ))}
          </ul>
        </MapHighlighter>
      </Container>
    </section>
  );
}