
import ln from './lang/ln';

export default function Home() {
  return (
    <>
        <div className="page-header">
          <h3>{ ln( 'about_title' ) }</h3>
        </div>
        <p>
          { ln( 'about_p1' ) }
        </p>
        <div>
          <b>{ ln( 'about_aims' )}</b>:
          <ul>
            <li>{ ln( 'about_aims_1' )}</li>
            <li>{ ln( 'about_aims_2' )}</li>
          </ul>
        </div>
        <div>{ ln( 'about_p2' )}</div>
        <img src="images/professional_cleaning_3.jpg" className="img-rounded img-responsive" />
    </>
  );
}
