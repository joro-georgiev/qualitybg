
import ln from '../lang/ln';

export default function Home() {
  return (
    <>
        <div className='page-header'>
          <h3>{ln( 'services_title' )}</h3>
        </div>
        <div>
          {ln( 'services_list' )}:
          <ul>
            <li>{ln( 'services_list.1' )}</li>
            <li>{ln( 'services_list.2' )}</li>
            <li>{ln( 'services_list.3' )}</li>
            <li>{ln( 'services_list.4' )}</li>
            <li>{ln( 'services_list.5' )}</li>
            <li>{ln( 'services_list.6' )}</li>
          </ul>
        </div>
        <div><b>{ln( 'services_basic' )}</b></div>
        <div><b>{ln( 'services_subscription' )}</b></div>
        <div><b>{ln( 'services_mowing' )}</b></div>
        <div><b>{ln( 'services_painting' )}</b></div>
        <div>{ln( 'services_info' )}</div>
    </>
  );
}
