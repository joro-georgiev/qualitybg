
import ln from '../lang/ln';

export default function Home() {
  return (
    <>
      <div className="page-header">
        <h3>{ ln( "contacts_title" ) }</h3>
      </div>
      <p>
        <span className="glyphicon glyphicon-home"></span>
        &nbsp; { ln( "contacts_address" ) }
      </p>
      <p>
        <span className="glyphicon glyphicon-envelope"></span>
        <a href="mailto:qualityeight@mail.bg?subject=Професионално%20почистване"> qualityeight@mail.bg</a>
      </p>
      <p>
        <span className="glyphicon glyphicon-phone"></span>
        <a href="tel:+359893306633"> 0893 306 633</a> и
        <a href="tel:+359889141617"> 0889 141 617</a>
      </p>

      <p>
        <i className="fa fa-facebook-official"></i>
        <a 
          href="https://www.facebook.com/%D0%9F%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B2%D0%B0%D1%89%D0%B0-%D1%84%D0%B8%D1%80%D0%BC%D0%B0-%D0%92%D0%B0%D1%80%D0%BD%D0%B0-%D0%9A%D1%83%D0%B0%D0%BB%D0%B8%D1%82%D0%B8-%D0%95%D0%B9%D1%82-1270755522940720" 
          target="_blank"> { ln( "contacts_fblink" ) }</a>
      </p>

      <br/>
    </>
  );
}
