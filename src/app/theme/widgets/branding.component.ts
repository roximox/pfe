import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="d-inline-block   text-reset " href="/">
      <img src="./assets/images/slinker_titre.png" class="brand-logo align-middle m-2" alt="logo" />
    </a>
  `,
  styles: [
    `
      .brand-logo {
        width: 150px;
        height: 30px;
        padding-left: 36%;

      }

    `,
  ],
})
export class BrandingComponent {}
