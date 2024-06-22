import TotalCard from '@/dashboard/components/TotalCard';
import PageStyles from '@/dashboard/styles/pageStyles';

export default function Home() {
  const sellings = {
    value: 1250000,
    date: '2024-06-22T15:36:52-05:00',
  };

  return (
    <PageStyles.Container>
      <PageStyles.Heading>
        <TotalCard {...sellings} />

        <div>
          <ul>
            <li>
              <button type="button">Hoy</button>
            </li>
            <li>
              <button type="button">Esta semana</button>
            </li>
            <li>
              <button type="button">Septiembre</button>
            </li>
          </ul>
          <button type="button">Filtrar</button>
        </div>
      </PageStyles.Heading>

      <table></table>
    </PageStyles.Container>
  );
}
