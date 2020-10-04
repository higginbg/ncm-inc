import Swal from 'sweetalert2';

export const showError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error sending message.',
    html: `
      <div class="pv2 tl">
        <div class="pv2">You can still reach us!</div>
        <div class="f5 flex flex-row pa3">
          <div class="flex flex-column b pr2">
            <span class="mb1">Phone</span>
            <span class="mt1">Email</span>
          </div>
          <div class="flex flex-column pl2">
            <span class="mb1">
              <a href="tel:+1971-336-2341" class="link">(971) 336-2341</a>
            </span>
            <span class="mt1">
              <a href="mailto:office@ncmreno.com" class="link">office@ncmreno.com</a>
            </span>
          </div>
        </div>
        <div class="pv2">We apologize for any inconvenience.</div>
      </div>
    `,
    footer: '<a href="/" class="link">Return home</a>',
  });
};
