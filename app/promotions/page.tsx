
import ln from '../lang/ln';

export default function Home() {
  return (
    <>
       <div className="page-header">
          <h3>{ ln( "promotions_title" ) }</h3>
      </div>
      <p>{ ln( "promotions_no" ) }</p>
    </>
  );
}
