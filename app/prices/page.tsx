
import ln from '../lang/ln';

export default function Home() {
  return (
    <>
      <div className="page-header">
        <h3>{ln( "prices_title" )}</h3>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>1. {ln('prices_table.windows')}</b>
          <br/>
          {ln('prices_oneside')}
          <br/>
          {ln('prices_table.windows.discount')}
        </div>
        <div className="col-xs-3">2.00 {ln( "prices_lev_sq" )}*</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>2. {ln('prices_table.windows_after_renovation')}</b>
          <br/>
          {ln('prices_oneside')}
        </div>
        <div className="col-xs-3">4.00 {ln( "prices_lev_sq" )}*</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>3. {ln('prices_table.display_case')} </b>
        </div>
        <div className="col-xs-3">0.40 {ln( "prices_lev_sq" )}</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>4. {ln('prices_table.blinds')} </b>
        </div>
        <div className="col-xs-3">2.00 {ln( "prices_lev_sq" )}</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>5. {ln('prices_table.hard_flooring')} </b>
          <br/>
          {ln('prices_table.hard_flooring.details')}
          <br/>
          {ln('prices_table.hard_flooring.discount')}
        </div>
        <div className="col-xs-3">2.50 {ln( "prices_lev_sq" )}*</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>6. {ln('prices_table.wash_hard_flooring')} </b>
          <br/>
          {ln('prices_table.wash_hard_flooring.details')}
          <br/>
          {ln('prices_table.wash_hard_flooring.discount')}
        </div>
        <div className="col-xs-3">4.50 {ln( "prices_lev_sq" )}*</div>
      </div>

      <div className="table-row">
        <div className="row">
          <div className="col-xs-9">
            <b>7. {ln('prices_table.soft_flooring')} </b>
            <br />
            {ln('prices_table.soft_flooring.details')}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9">- {ln( "prices_table.soft_flooring.in_place" )}</div>
          <div className="col-xs-3">3.00 {ln( "prices_lev_sq" )}</div>
        </div>
        <div className="row">
          <div className="col-xs-9">- {ln( "prices_table.soft_flooring.with_return" )}</div>
          <div className="col-xs-3">4.00 {ln( "prices_lev_sq" )}</div>
        </div>
      </div>

      <div className="table-row">
        <div className="row">
          <div className="col-xs-9">
            <b>8. {ln('prices_table.furniture')} </b>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9">- {ln('prices_table.furniture.mattress')}</div>
          <div className="col-xs-3">15.00 {ln( "prices_lev" )}</div>
        </div>
        <div className="row">
          <div className="col-xs-9">- {ln('prices_table.furniture.chairs')}</div>
          <div className="col-xs-3">5.00 {ln( "prices_lev" )}</div>
        </div>
        <div className="row">
          <div className="col-xs-9">- {ln('prices_table.furniture.cars')}</div>
          <div className="col-xs-3">60.00 - 80.00 {ln( "prices_lev" )}</div>
        </div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>9. {ln('prices_table.bath')} </b>
          <br/>
          {ln('prices_table.bath.details')}
        </div>
        <div className="col-xs-3">40.00 - 60.00 {ln( "prices_lev" )}.</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>10. {ln('prices_table.complete_cleanup')} </b>
        </div>
        <div className="col-xs-3">4.50 {ln( "prices_lev_sq" )}</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>11. {ln('prices_table.complete_cleanup_after_renovation')} </b>
        </div>
        <div className="col-xs-3">5.50 {ln( "prices_lev_sq" )}</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>12. {ln('prices_table.apartment_subscription')} </b>
        </div>
        <div className="col-xs-3"><a href="/contacts">{ln('prices_ask')}</a></div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>13. {ln('prices_table.garage_vacuuming')} </b>
        </div>
        <div className="col-xs-3">0.70 - 1.00 {ln( "prices_lev_sq" )}</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>14. {ln('prices_table.house_cleaner')} </b>
          <br />
          {ln('prices_table.house_cleaner.details')}
        </div>
        <div className="col-xs-3">20 {ln( "prices_lev_hour" )}</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>15. {ln('prices_table.house_yard_cleaning')} </b>
        </div>
        <div className="col-xs-3">{ln( "prices_price_after_examination" )}</div>
      </div>

      <div className="row table-row">
        <div className="col-xs-9">
          <b>16. {ln('prices_table.house_painting')} </b>
        </div>
        <div className="col-xs-3">{ln( "prices_price_after_examination" )}</div>
      </div>

      <div className="row table-row">
        <b>{ln('prices_notes')}:</b><br />
        <span style={{color: '#ff0000'}}>{ln('prices_notes.important')}</span><br/>
        {ln('prices_notes.1')}<br/>
        {ln('prices_min_order')} - 60{ln( "prices_lev" )}.<br/>
        {ln("prices_notes.vat")}<br/>
      </div>

      <br />
    </>
  );
}
