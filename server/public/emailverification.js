
// this file is in updating mode , it's won't get any affect to project
exports.verifyemail = ( username )=>{
     return `<!doctype html>
     <html ⚡4email data-css-strict>
     
     <head>
         <meta charset="utf-8">
         <style amp4email-boilerplate>
             body {
                 visibility: hidden
             }
         </style>
         <script async src="https://cdn.ampproject.org/v0.js"></script>
         <style amp-custom>
             .es-desk-hidden {
                 display: none;
                 float: left;
                 overflow: hidden;
                 width: 0;
                 max-height: 0;
                 line-height: 0;
             }
     
             body {
                 width: 100%;
                 font-family: arial, "helvetica neue", helvetica, sans-serif;
             }
     
             table {
                 border-collapse: collapse;
                 border-spacing: 0px;
             }
     
             table td,
             body,
             .es-wrapper {
                 padding: 0;
                 Margin: 0;
             }
     
             .es-content,
             .es-header,
             .es-footer {
                 table-layout: fixed;
                 width: 100%;
             }
     
             p,
             hr {
                 Margin: 0;
             }
     
             h1,
             h2,
             h3,
             h4,
             h5 {
                 Margin: 0;
                 line-height: 120%;
                 font-family: arial, "helvetica neue", helvetica, sans-serif;
             }
     
             .es-left {
                 float: left;
             }
     
             .es-right {
                 float: right;
             }
     
             .es-p5 {
                 padding: 5px;
             }
     
             .es-p5t {
                 padding-top: 5px;
             }
     
             .es-p5b {
                 padding-bottom: 5px;
             }
     
             .es-p5l {
                 padding-left: 5px;
             }
     
             .es-p5r {
                 padding-right: 5px;
             }
     
             .es-p10 {
                 padding: 10px;
             }
     
             .es-p10t {
                 padding-top: 10px;
             }
     
             .es-p10b {
                 padding-bottom: 10px;
             }
     
             .es-p10l {
                 padding-left: 10px;
             }
     
             .es-p10r {
                 padding-right: 10px;
             }
     
             .es-p15 {
                 padding: 15px;
             }
     
             .es-p15t {
                 padding-top: 15px;
             }
     
             .es-p15b {
                 padding-bottom: 15px;
             }
     
             .es-p15l {
                 padding-left: 15px;
             }
     
             .es-p15r {
                 padding-right: 15px;
             }
     
             .es-p20 {
                 padding: 20px;
             }
     
             .es-p20t {
                 padding-top: 20px;
             }
     
             .es-p20b {
                 padding-bottom: 20px;
             }
     
             .es-p20l {
                 padding-left: 20px;
             }
     
             .es-p20r {
                 padding-right: 20px;
             }
     
             .es-p25 {
                 padding: 25px;
             }
     
             .es-p25t {
                 padding-top: 25px;
             }
     
             .es-p25b {
                 padding-bottom: 25px;
             }
     
             .es-p25l {
                 padding-left: 25px;
             }
     
             .es-p25r {
                 padding-right: 25px;
             }
     
             .es-p30 {
                 padding: 30px;
             }
     
             .es-p30t {
                 padding-top: 30px;
             }
     
             .es-p30b {
                 padding-bottom: 30px;
             }
     
             .es-p30l {
                 padding-left: 30px;
             }
     
             .es-p30r {
                 padding-right: 30px;
             }
     
             .es-p35 {
                 padding: 35px;
             }
     
             .es-p35t {
                 padding-top: 35px;
             }
     
             .es-p35b {
                 padding-bottom: 35px;
             }
     
             .es-p35l {
                 padding-left: 35px;
             }
     
             .es-p35r {
                 padding-right: 35px;
             }
     
             .es-p40 {
                 padding: 40px;
             }
     
             .es-p40t {
                 padding-top: 40px;
             }
     
             .es-p40b {
                 padding-bottom: 40px;
             }
     
             .es-p40l {
                 padding-left: 40px;
             }
     
             .es-p40r {
                 padding-right: 40px;
             }
     
             .es-menu td {
                 border: 0;
             }
     
             s {
                 text-decoration: line-through;
             }
     
             p,
             ul li,
             ol li {
                 font-family: arial, "helvetica neue", helvetica, sans-serif;
                 line-height: 150%;
             }
     
             ul li,
             ol li {
                 Margin-bottom: 15px;
                 margin-left: 0;
             }
     
             a {
                 text-decoration: underline;
             }
     
             .es-menu td a {
                 text-decoration: none;
                 display: block;
                 font-family: arial, "helvetica neue", helvetica, sans-serif;
             }
     
             .es-wrapper {
                 width: 100%;
                 height: 100%;
             }
     
             .es-wrapper-color,
             .es-wrapper {
                 background-color: #FAFAFA;
             }
     
             .es-header {
                 background-color: transparent;
             }
     
             .es-header-body {
                 background-color: transparent;
             }
     
             .es-header-body p,
             .es-header-body ul li,
             .es-header-body ol li {
                 color: #333333;
                 font-size: 14px;
             }
     
             .es-header-body a {
                 color: #666666;
                 font-size: 14px;
             }
     
             .es-content-body {
                 background-color: #FFFFFF;
             }
     
             .es-content-body p,
             .es-content-body ul li,
             .es-content-body ol li {
                 color: #333333;
                 font-size: 14px;
             }
     
             .es-content-body a {
                 color: #5C68E2;
                 font-size: 14px;
             }
     
             .es-footer {
                 background-color: transparent;
             }
     
             .es-footer-body {
                 background-color: #FFFFFF;
             }
     
             .es-footer-body p,
             .es-footer-body ul li,
             .es-footer-body ol li {
                 color: #333333;
                 font-size: 12px;
             }
     
             .es-footer-body a {
                 color: #333333;
                 font-size: 12px;
             }
     
             .es-infoblock,
             .es-infoblock p,
             .es-infoblock ul li,
             .es-infoblock ol li {
                 line-height: 120%;
                 font-size: 12px;
                 color: #CCCCCC;
             }
     
             .es-infoblock a {
                 font-size: 12px;
                 color: #CCCCCC;
             }
     
             h1 {
                 font-size: 46px;
                 font-style: normal;
                 font-weight: bold;
                 color: #333333;
             }
     
             h2 {
                 font-size: 26px;
                 font-style: normal;
                 font-weight: bold;
                 color: #333333;
             }
     
             h3 {
                 font-size: 20px;
                 font-style: normal;
                 font-weight: bold;
                 color: #333333;
             }
     
             .es-header-body h1 a,
             .es-content-body h1 a,
             .es-footer-body h1 a {
                 font-size: 46px;
             }
     
             .es-header-body h2 a,
             .es-content-body h2 a,
             .es-footer-body h2 a {
                 font-size: 26px;
             }
     
             .es-header-body h3 a,
             .es-content-body h3 a,
             .es-footer-body h3 a {
                 font-size: 20px;
             }
     
             a.es-button,
             button.es-button {
                 padding: 10px 30px 10px 30px;
                 display: inline-block;
                 background: #5C68E2;
                 border-radius: 5px;
                 font-size: 20px;
                 font-family: arial, "helvetica neue", helvetica, sans-serif;
                 font-weight: normal;
                 font-style: normal;
                 line-height: 120%;
                 color: #FFFFFF;
                 text-decoration: none;
                 width: auto;
                 text-align: center;
             }
     
             .es-button-border {
                 border-style: solid solid solid solid;
                 border-color: #2CB543 #2CB543 #2CB543 #2CB543;
                 background: #5C68E2;
                 border-width: 0px 0px 0px 0px;
                 display: inline-block;
                 border-radius: 5px;
                 width: auto;
             }
     
             .es-menu amp-img,
             .es-button amp-img {
                 vertical-align: middle;
             }
     
             @media only screen and (max-width:600px) {
     
                 p,
                 ul li,
                 ol li,
                 a {
                     line-height: 150%
                 }
     
                 h1,
                 h2,
                 h3,
                 h1 a,
                 h2 a,
                 h3 a {
                     line-height: 120%
                 }
     
                 h1 {
                     font-size: 36px;
                     text-align: left
                 }
     
                 h2 {
                     font-size: 26px;
                     text-align: left
                 }
     
                 h3 {
                     font-size: 20px;
                     text-align: left
                 }
     
                 .es-header-body h1 a,
                 .es-content-body h1 a,
                 .es-footer-body h1 a {
                     font-size: 36px;
                     text-align: left
                 }
     
                 .es-header-body h2 a,
                 .es-content-body h2 a,
                 .es-footer-body h2 a {
                     font-size: 26px;
                     text-align: left
                 }
     
                 .es-header-body h3 a,
                 .es-content-body h3 a,
                 .es-footer-body h3 a {
                     font-size: 20px;
                     text-align: left
                 }
     
                 .es-menu td a {
                     font-size: 12px
                 }
     
                 .es-header-body p,
                 .es-header-body ul li,
                 .es-header-body ol li,
                 .es-header-body a {
                     font-size: 14px
                 }
     
                 .es-content-body p,
                 .es-content-body ul li,
                 .es-content-body ol li,
                 .es-content-body a {
                     font-size: 14px
                 }
     
                 .es-footer-body p,
                 .es-footer-body ul li,
                 .es-footer-body ol li,
                 .es-footer-body a {
                     font-size: 14px
                 }
     
                 .es-infoblock p,
                 .es-infoblock ul li,
                 .es-infoblock ol li,
                 .es-infoblock a {
                     font-size: 12px
                 }
     
                 *[class="gmail-fix"] {
                     display: none
                 }
     
                 .es-m-txt-c,
                 .es-m-txt-c h1,
                 .es-m-txt-c h2,
                 .es-m-txt-c h3 {
                     text-align: center
                 }
     
                 .es-m-txt-r,
                 .es-m-txt-r h1,
                 .es-m-txt-r h2,
                 .es-m-txt-r h3 {
                     text-align: right
                 }
     
                 .es-m-txt-l,
                 .es-m-txt-l h1,
                 .es-m-txt-l h2,
                 .es-m-txt-l h3 {
                     text-align: left
                 }
     
                 .es-m-txt-r amp-img {
                     float: right
                 }
     
                 .es-m-txt-c amp-img {
                     margin: 0 auto
                 }
     
                 .es-m-txt-l amp-img {
                     float: left
                 }
     
                 .es-button-border {
                     display: inline-block
                 }
     
                 a.es-button,
                 button.es-button {
                     font-size: 20px;
                     display: inline-block
                 }
     
                 .es-adaptive table,
                 .es-left,
                 .es-right {
                     width: 100%
                 }
     
                 .es-content table,
                 .es-header table,
                 .es-footer table,
                 .es-content,
                 .es-footer,
                 .es-header {
                     width: 100%;
                     max-width: 600px
                 }
     
                 .es-adapt-td {
                     display: block;
                     width: 100%
                 }
     
                 .adapt-img {
                     width: 100%;
                     height: auto
                 }
     
                 td.es-m-p0 {
                     padding: 0
                 }
     
                 td.es-m-p0r {
                     padding-right: 0
                 }
     
                 td.es-m-p0l {
                     padding-left: 0
                 }
     
                 td.es-m-p0t {
                     padding-top: 0
                 }
     
                 td.es-m-p0b {
                     padding-bottom: 0
                 }
     
                 td.es-m-p20b {
                     padding-bottom: 20px
                 }
     
                 .es-mobile-hidden,
                 .es-hidden {
                     display: none
                 }
     
                 tr.es-desk-hidden,
                 td.es-desk-hidden,
                 table.es-desk-hidden {
                     width: auto;
                     overflow: visible;
                     float: none;
                     max-height: inherit;
                     line-height: inherit
                 }
     
                 tr.es-desk-hidden {
                     display: table-row
                 }
     
                 table.es-desk-hidden {
                     display: table
                 }
     
                 td.es-desk-menu-hidden {
                     display: table-cell
                 }
     
                 .es-menu td {
                     width: 1%
                 }
     
                 table.es-table-not-adapt,
                 .esd-block-html table {
                     width: auto
                 }
     
                 table.es-social {
                     display: inline-block
                 }
     
                 table.es-social td {
                     display: inline-block
                 }
     
                 td.es-m-p5 {
                     padding: 5px
                 }
     
                 td.es-m-p5t {
                     padding-top: 5px
                 }
     
                 td.es-m-p5b {
                     padding-bottom: 5px
                 }
     
                 td.es-m-p5r {
                     padding-right: 5px
                 }
     
                 td.es-m-p5l {
                     padding-left: 5px
                 }
     
                 td.es-m-p10 {
                     padding: 10px
                 }
     
                 td.es-m-p10t {
                     padding-top: 10px
                 }
     
                 td.es-m-p10b {
                     padding-bottom: 10px
                 }
     
                 td.es-m-p10r {
                     padding-right: 10px
                 }
     
                 td.es-m-p10l {
                     padding-left: 10px
                 }
     
                 td.es-m-p15 {
                     padding: 15px
                 }
     
                 td.es-m-p15t {
                     padding-top: 15px
                 }
     
                 td.es-m-p15b {
                     padding-bottom: 15px
                 }
     
                 td.es-m-p15r {
                     padding-right: 15px
                 }
     
                 td.es-m-p15l {
                     padding-left: 15px
                 }
     
                 td.es-m-p20 {
                     padding: 20px
                 }
     
                 td.es-m-p20t {
                     padding-top: 20px
                 }
     
                 td.es-m-p20r {
                     padding-right: 20px
                 }
     
                 td.es-m-p20l {
                     padding-left: 20px
                 }
     
                 td.es-m-p25 {
                     padding: 25px
                 }
     
                 td.es-m-p25t {
                     padding-top: 25px
                 }
     
                 td.es-m-p25b {
                     padding-bottom: 25px
                 }
     
                 td.es-m-p25r {
                     padding-right: 25px
                 }
     
                 td.es-m-p25l {
                     padding-left: 25px
                 }
     
                 td.es-m-p30 {
                     padding: 30px
                 }
     
                 td.es-m-p30t {
                     padding-top: 30px
                 }
     
                 td.es-m-p30b {
                     padding-bottom: 30px
                 }
     
                 td.es-m-p30r {
                     padding-right: 30px
                 }
     
                 td.es-m-p30l {
                     padding-left: 30px
                 }
     
                 td.es-m-p35 {
                     padding: 35px
                 }
     
                 td.es-m-p35t {
                     padding-top: 35px
                 }
     
                 td.es-m-p35b {
                     padding-bottom: 35px
                 }
     
                 td.es-m-p35r {
                     padding-right: 35px
                 }
     
                 td.es-m-p35l {
                     padding-left: 35px
                 }
     
                 td.es-m-p40 {
                     padding: 40px
                 }
     
                 td.es-m-p40t {
                     padding-top: 40px
                 }
     
                 td.es-m-p40b {
                     padding-bottom: 40px
                 }
     
                 td.es-m-p40r {
                     padding-right: 40px
                 }
     
                 td.es-m-p40l {
                     padding-left: 40px
                 }
     
                 .es-desk-hidden {
                     display: table-row;
                     width: auto;
                     overflow: visible;
                     max-height: inherit
                 }
             }
         </style>
     </head>
     
     <body data-new-gr-c-s-loaded="14.1122.0">
         <div class="es-wrapper-color">
             <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                 <tr>
                     <td valign="top">
                         <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                             <tr>
                                 <td class="es-info-area" align="center">
                                     <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                                         width="600" style="background-color: transparent" bgcolor="rgba(0, 0, 0, 0)">
                                         <tr>
                                             <td class="es-p20" align="left">
                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                     <tr>
                                                         <td width="560" align="center" valign="top">
                                                             <table cellpadding="0" cellspacing="0" width="100%"
                                                                 role="presentation">
                                                                 <tr>
                                                                     <td align="center" class="es-infoblock">
                                                                         <p><a target="_blank">View online version</a></p>
                                                                     </td>
                                                                 </tr>
                                                             </table>
                                                         </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                     </table>
                                 </td>
                             </tr>
                         </table>
                         <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                             <tr>
                                 <td align="center">
                                     <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                         cellspacing="0" width="600">
                                         <tr>
                                             <td class="es-p20t es-p10b es-p20r es-p20l" align="left">
                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                     <tr>
                                                         <td width="560" align="center" valign="top">
                                                             <table cellpadding="0" cellspacing="0" width="100%"
                                                                 role="presentation">
                                                                 <tr>
                                                                     <td align="center" class="es-p10t es-p10b"
                                                                         style="font-size: 0px"><amp-img class="adapt-img"
                                                                             src="https://qyqoer.stripocdn.email/content/guids/CABINET_2caf36565baceab6c8e527b3069181ce/images/55221617977066781.png"
                                                                             alt style="display: block" width="300"
                                                                             height="298" layout="responsive"></amp-img></td>
                                                                 </tr>
                                                                 <tr>
                                                                     <td align="center" class="es-p20t es-p5b es-m-txt-c">
                                                                         <h1>Verify Your Email</h1>
                                                                     </td>
                                                                 </tr>
                                                                 <tr>
                                                                     <td align="left" class="es-p30t es-p5b es-p30r es-p30l">
                                                                         <p>Dear ${username},</p>
                                                                         <p>Thank you for signing up with Flipkart Clone. To
                                                                             ensure the security of your account and to enjoy
                                                                             the full benefits of our services, please verify
                                                                             your email address by clicking the link below:
                                                                         </p>
                                                                     </td>
                                                                 </tr>
                                                             </table>
                                                         </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                         <tr>
                                             <td class="es-p10b es-p20r es-p20l" align="left">
                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                     <tr>
                                                         <td width="560" align="center" valign="top">
                                                             <table cellpadding="0" cellspacing="0" width="100%"
                                                                 role="presentation">
                                                                 <tr>
                                                                     <td align="center" class="es-p10b">
                                                                         <!--[if mso]><a href="" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" style="height:41px; v-text-anchor:middle; width:178px" arcsize="10%" strokecolor="#5c68e2" strokeweight="2px" fillcolor="#5c68e2"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:15px; font-weight:400; line-height:15px; mso-text-raise:1px'>Verify Email</center> </v:roundrect></a><![endif]-->
                                                                         <!--[if !mso]><!-- --><span
                                                                             class="msohide es-button-border"
                                                                             style="border-width: 2px;border-color: #5c68e2;background: #5c68e2;border-radius: 4px"><a
                                                                                 href class="es-button es-button-1"
                                                                                 target="_blank"
                                                                                 style="font-size: 18px;padding: 10px 30px;border-radius: 4px">Verify
                                                                                 Email</a></span> <!--<![endif]--></td>
                                                                 </tr>
                                                             </table>
                                                         </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                     </table>
                                 </td>
                             </tr>
                         </table>
                         <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                             <tr>
                                 <td align="center">
                                     <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="640"
                                         style="background-color: transparent">
                                         <tr>
                                             <td class="es-p20t es-p20b es-p20r es-p20l" align="left">
                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                     <tr>
                                                         <td width="600" align="left">
                                                             <table cellpadding="0" cellspacing="0" width="100%"
                                                                 role="presentation">
                                                                 <tr>
                                                                     <td align="center" class="es-p15t es-p15b"
                                                                         style="font-size:0">
                                                                         <table cellpadding="0" cellspacing="0"
                                                                             class="es-table-not-adapt es-social"
                                                                             role="presentation">
                                                                             <tr>
                                                                                 <td align="center" valign="top"
                                                                                     class="es-p40r"><a target="_blank"
                                                                                         href="https://twitter.com/Mahesh_web_dev"><amp-img
                                                                                             title="Twitter"
                                                                                             src="https://qyqoer.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                                                                             alt="Tw" width="32"
                                                                                             height="32"></amp-img></a></td>
                                                                                 <td align="center" valign="top"
                                                                                     class="es-p40r"><a target="_blank"
                                                                                         href="https://www.instagram.com/maheshpatil5423/"><amp-img
                                                                                             title="Instagram"
                                                                                             src="https://qyqoer.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png"
                                                                                             alt="Inst" width="32"
                                                                                             height="32"></amp-img></a></td>
                                                                                 <td align="center" valign="top"><a
                                                                                         target="_blank"
                                                                                         href="https://www.linkedin.com/in/mahesh-patil-bb4ba5218/"><amp-img
                                                                                             title="Linkedin"
                                                                                             src="https://qyqoer.stripocdn.email/content/guids/CABINET_238ecd1a07422d380f92458e4b10aa43ec283c3bed83846bbc7b07d901287843/images/linkedin.png"
                                                                                             alt="In" width="32"
                                                                                             height="32"></amp-img></a></td>
                                                                             </tr>
                                                                         </table>
                                                                     </td>
                                                                 </tr>
                                                                 <tr>
                                                                     <td align="center" class="es-p35b">
                                                                         <p>Mahesh patil&nbsp;© 2023&nbsp;Flipkart clone,
                                                                             Inc. All Rights Reserved.</p>
                                                                         <p>this flipkart clone is made for learning purpose
                                                                             only</p>
                                                                     </td>
                                                                 </tr>
                                                             </table>
                                                         </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                     </table>
                                 </td>
                             </tr>
                         </table>
                         <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                             <tr>
                                 <td class="es-info-area" align="center">
                                     <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                                         width="600" style="background-color: transparent" bgcolor="rgba(0, 0, 0, 0)">
                                         <tr>
                                             <td class="es-p20" align="left">
                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                     <tr>
                                                         <td width="560" align="center" valign="top">
                                                             <table cellpadding="0" cellspacing="0" width="100%"
                                                                 role="presentation">
                                                                 <tr>
                                                                     <td align="center" class="es-infoblock">
                                                                         <p><a target="_blank"></a>No longer want to receive
                                                                             these emails?&nbsp;<a href
                                                                                 target="_blank">Unsubscribe</a>.<a
                                                                                 target="_blank"></a></p>
                                                                     </td>
                                                                 </tr>
                                                             </table>
                                                         </td>
                                                     </tr>
                                                 </table>
                                             </td>
                                         </tr>
                                     </table>
                                 </td>
                             </tr>
                         </table>
                     </td>
                 </tr>
             </table>
         </div>
     </body>
     
     </html>`
}