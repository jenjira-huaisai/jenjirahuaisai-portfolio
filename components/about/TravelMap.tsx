import Image from 'next/image';
import Container from '../Container';
import MapHighlighter from './MapHighlighter';
import { FLAGS } from './flags';
import { homeCountry, visitedCountries, type Country } from '@/data/about';
import { CENTROIDS, COUNTRY_SHAPES, MAP_HEIGHT, MAP_WIDTH } from '@/data/world-map';
import styles from './about.module.css';

const allCountries = [homeCountry, ...visitedCountries];
const byId = new Map(allCountries.map((country) => [country.id, country]));

// Too small to see or point at on a world map, so they also get a dot
const MARKED = ['SGP', 'QAT'];

/*
 * The part of data/world-map.ts to show. This is the whole world.
 * To zoom in on Europe–Asia instead: { x: 444, y: 34, width: 494, height: 355 }
 */
const VIEW = { x: 0, y: 0, width: MAP_WIDTH, height: MAP_HEIGHT };

function stateOf(id: string) {
  if (id === homeCountry.id) return 'home';
  if (byId.has(id)) return 'visited';
  return undefined;
}

// Country centre as % of the map, where the label appears
// when the visitor points at the list instead of the map
function labelPosition(id: string) {
  const [cx, cy] = CENTROIDS[id];
  return {
    'data-x': (((cx - VIEW.x) / VIEW.width) * 100).toFixed(2),
    'data-y': (((cy - VIEW.y) / VIEW.height) * 100).toFixed(2),
  };
}

function CountryItem({ country, isHome }: { country: Country; isHome?: boolean }) {
  return (
    <li
      className={styles.countryItem}
      data-country={country.id}
      data-name={country.name}
      {...labelPosition(country.id)}
    >
      <Image
        src={FLAGS[country.flag]}
        alt=""
        width={24}
        height={24}
        className={styles.flag}
        unoptimized
      />
      <span>{country.name}</span>
      {isHome && <span className={styles.homeTag}>Home</span>}
    </li>
  );
}

export default function TravelMap() {
  // Desktop: the list is as tall as the map and scrolls when it is longer.
  // tabIndex={0} lets keyboard users focus it and scroll with the arrow keys.
  const list = (
    <ul
      id="country-list"
      className={styles.countryList}
      aria-label="Home and countries visited"
      tabIndex={0}
    >
      <CountryItem country={homeCountry} isHome />
      {visitedCountries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );

  const map = (
    <svg
      className={styles.map}
      viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.width} ${VIEW.height}`}
      role="img"
      aria-labelledby="map-svg-title"
    >
      <title id="map-svg-title">
        Map of Europe and Asia. Home: Thailand. Visited: {visitedCountries.length} countries, listed
        beside the map.
      </title>

      {COUNTRY_SHAPES.map((shape) => {
        const state = stateOf(shape.id);
        return (
          <path
            key={shape.id}
            d={shape.d}
            data-state={state}
            {...(state ? { 'data-country': shape.id, 'data-name': byId.get(shape.id)?.name } : {})}
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
            data-name={byId.get(id)?.name}
          />
        );
      })}
    </svg>
  );

  return (
    <section id="where-ive-been" className="section" aria-labelledby="map-title">
      <Container>
        <div className={styles.travelHeader}>
          <div>
            <p className="section-label">TRAVEL</p>
            <h2 id="map-title" className="section-title">
              Where I&rsquo;ve been
            </h2>
          </div>

          {/* Counts come from the data, so they never go out of date */}
          <ul className={styles.legend} aria-hidden="true">
            <li>
              <span className={`${styles.swatch} ${styles.swatchHome}`} />
              Home
            </li>
            <li>
              <span className={`${styles.swatch} ${styles.swatchVisited}`} />
              Visited · {visitedCountries.length}
            </li>
          </ul>
        </div>

        <MapHighlighter list={list} map={map} />
      </Container>
    </section>
  );
}