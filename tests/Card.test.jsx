import Card from '../components/Card';
import { render } from './test-utils';

describe('Card component', () => {
  const mockedData = {
    name: 'default',
    climate: 'Test climate',
    population: '1000',
    residents: [],
    crew: 'Test crew',
    cargo_capacity: '50000',
    consumables: 'Test consumables',
    manufacturer: 'Test manufacturer',
    gender: 'Test gender',
    hair_color: 'Test hair_color',
    eye_color: 'Test eye_color',
    height: 'Test height',
    mass: 'Test mass',
  };
  test('Card type planets (with no famous characaters)', async () => {
    const { getByText } = render(<Card data={mockedData} type="planets" />);
    const name = getByText(mockedData.name);
    const climate = getByText(mockedData.climate);
    const population = getByText(`Population of ${mockedData.population}`);
    const famousCharacters = getByText(/Famous characters: none/i);
    expect(name).toBeInTheDocument();
    expect(climate).toBeInTheDocument();
    expect(population).toBeInTheDocument();
    expect(famousCharacters).toBeInTheDocument();
  });
  test('Card type planets (with famous characaters)', async () => {
    const newResidents = [1, 2, 3, 4];
    const { getByText, getAllByRole } = render(
      <Card data={{ ...mockedData, residents: newResidents }} type="planets" />
    );
    const name = getByText(mockedData.name);
    const climate = getByText(mockedData.climate);
    const population = getByText(`Population of ${mockedData.population}`);
    const famousCharacters = getAllByRole('special-character');
    expect(name).toBeInTheDocument();
    expect(climate).toBeInTheDocument();
    expect(population).toBeInTheDocument();
    expect(famousCharacters.length).toBe(newResidents.length);
  });
  test('Card type starships)', async () => {
    const { getByText } = render(<Card data={mockedData} type="starships" />);
    const name = getByText(mockedData.name);
    const crew = getByText(`Crew: ${mockedData.crew}`);
    const cargo = getByText(`Cargo: ${mockedData.cargo_capacity}`);
    const consumables = getByText(`Consumables: ${mockedData.consumables}`);
    const manufacturer = getByText(`Manufacturer: ${mockedData.manufacturer}`);
    expect(name).toBeInTheDocument();
    expect(crew).toBeInTheDocument();
    expect(cargo).toBeInTheDocument();
    expect(consumables).toBeInTheDocument();
    expect(manufacturer).toBeInTheDocument();
  });
  test('Card type vehicles)', async () => {
    const { getByText } = render(<Card data={mockedData} type="vehicles" />);
    const name = getByText(mockedData.name);
    const crew = getByText(`Crew: ${mockedData.crew}`);
    const cargo = getByText(`Cargo: ${mockedData.cargo_capacity}`);
    const consumables = getByText(`Consumables: ${mockedData.consumables}`);
    const manufacturer = getByText(`Manufacturer: ${mockedData.manufacturer}`);
    expect(name).toBeInTheDocument();
    expect(crew).toBeInTheDocument();
    expect(cargo).toBeInTheDocument();
    expect(consumables).toBeInTheDocument();
    expect(manufacturer).toBeInTheDocument();
  });
  test('Card type people)', async () => {
    const { getByText } = render(<Card data={mockedData} type="people" />);
    const name = getByText(mockedData.name);
    const gender = getByText(mockedData.gender);
    const hair = getByText(`Hair color: ${mockedData.hair_color}`);
    const eye = getByText(`Eyes color: ${mockedData.eye_color}`);
    const height = getByText(`Height: ${mockedData.height}`);
    const mass = getByText(`Weight: ${mockedData.mass}`);
    expect(name).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(hair).toBeInTheDocument();
    expect(eye).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(mass).toBeInTheDocument();
  });
});
