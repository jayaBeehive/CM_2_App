import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PrintService {

  printHtml(html: string, title = 'Print') {
    if (!html) return;

    const popupWindow = window.open(
      '',
      '_blank',
      'width=900,height=1500,scrollbars=yes'
    );

    if (!popupWindow) return;

    popupWindow.document.open();
    popupWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            @page {
              size: A4;
              margin: 10mm;
            }

            * {
              box-sizing: border-box;
              max-width: 100%;
            }

            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              overflow-x: hidden;
              overflow-y: auto;
              word-wrap: break-word;
              word-break: break-word;
            }

            /* Tables should never overflow */
            table {
              width: 100%;
              max-width: 100%;
              border-collapse: collapse;
              table-layout: fixed;
            }

            th, td {
              word-wrap: break-word;
              word-break: break-word;
              white-space: normal;
            }

            /* Images auto fit */
            img {
              max-width: 100%;
              height: auto;
            }

            @media screen {
              body {
                overflow-y: auto;
                overflow-x: hidden;
              }
            }

            @media print {
              body {
                overflow: visible;
              }
              ::-webkit-scrollbar {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          ${html}
          <script>
            window.onload = function () {
              window.focus();
              window.print();
              window.onafterprint = function () {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `);
    popupWindow.document.close();
  }
}
