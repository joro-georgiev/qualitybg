
import ln from '../lang/ln';

export default function Home() {
  return (
    <>
      <div className="page-header">
        <h3>{ ln( "customers_title" ) }</h3>
      </div>
      <div className="row">
        <ul className="arrow-list col-md-4">
          <li>Мартинели</li>
          <li>Мартини Бар</li>
          <li>Бар "Оникс"</li>
          <li>Бар "Дежа-Вю"</li>
          <li>ВиК Варна</li>
          <li>Булсатком</li>
          <li>Ресторант Massa Kitchen</li>
          <li>Сладкарница Marmalad</li>
          <li>Design Corner</li>
        </ul>
        <ul className="arrow-list col-md-4">
          <li>Паркетен свят</li>
          <li>Антонов Клима</li>
          <li>Ресторант "Стария чинар"</li>
          <li>Алто Клима</li>
          <li>Хотел Лондон</li>
          <li>Бутик за цветя Ama-No</li>
          <li>Секънд хенд хипер маркет</li>
          <li>и др.</li>
        </ul>
        <div className="col-md-4">
        </div>
      </div>
    </>
  );
}
