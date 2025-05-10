import type { Metadata } from "next";

import ln from './lang/ln';

export const metadata: Metadata = {
  title: ln( 'title' ) as string,
  description: ln( 'description' ) as string
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <head>
        	<meta charSet="UTF-8" />
	        <meta name="viewport" content="width=device-width, initial-scale=1" />
	        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
	        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
	        <link rel="stylesheet" href="site.css?ver=1" />
	        <link rel="stylesheet" href="languages.min.css" />
	        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js" />
	        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"/>
	        <script src="http://1000hz.github.io/bootstrap-validator/dist/validator.min.js" />
      </head>

      <body>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-menu">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span> 
              </button>
              <a className="navbar-brand" href="/">
                <img id="logo" src="images/logo_small.png" alt="Quality Eight" />
              </a>
            </div>
            <div id="main-menu" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li id="menu-item-about"><a href="/">{ ln( 'menu_about' )}</a></li>
                <li id="menu-item-services"><a href="/services">{ln( 'menu_services' )}</a></li>
                <li id="menu-item-prices"><a href="/prices">{ln( 'menu_prices' )}</a></li>
                <li id="menu-item-promotions"><a href="/promotions">{ln( 'menu_promotions' )}</a></li>
                <li id="menu-item-customers"><a href="/customers">{ln( 'menu_customers' )}</a></li>
                <li id="menu-item-contacts"><a href="/contacts">{ln( 'menu_contacts' )}</a></li>
              </ul>
              {/* <ul className="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span class="lang-sm" lang="<?=$current_lang?>"></span> <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="/?lang=bg"><span class="lang-sm" lang="bg"></span> Български</a></li>
                    <li><a href="/?lang=ru"><span class="lang-sm" lang="ru"></span> Pусский</a></li>
                    <li><a href="/?lang=en"><span class="lang-sm" lang="en"></span> English</a></li>
                  </ul>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>

        <div className="container hidden-xs">
          <div className="row">
            <div className="col-md-8">
              <div id="header" className="jumbotron">
                <img src="images/header.jpg" className="pull-left"/>
                <p>{ln( 'home_p1' )}</p>
                <p>{ln( 'home_p2' )}</p>
                <p>{ln( 'home_p3' )}</p>
              </div>
            </div>	
            <div className="col-md-4">
              <div className="thumbnail borderless">
                <img src="images/professional_cleaning_1.jpg" className="pull-left img-thumbnail"/>
                <div className="caption">
                  <p>{ln( 'home_p4' )}</p>
                </div>
              </div>
              <div className="thumbnail borderless">
                <img src="images/professional_cleaning_2.jpg" className="pull-left img-thumbnail"/>
                <div className="caption">
                  <p>{ln( 'home_p5' )}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
               {children}
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>

        <footer id="footer">
          <div className="container">
            <p className="text-muted">Copyright © 2025. All Rights Reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
