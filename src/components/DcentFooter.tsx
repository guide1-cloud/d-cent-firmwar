export function DcentFooter() {
  return (
    <footer className="bg-dcent-darker border-t border-dcent-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Company info */}
          <div>
            <img
              src="https://store.dcentwallet.com/cdn/shop/files/dcent_logo_horizontal_full_color_b5795af0-d598-48a8-8904-ff84f7fb1d5a.png?v=1677607642"
              alt="D'CENT"
              width={120}
              height={36}
              className="mb-4 h-8 w-auto"
              loading="lazy"
            />
            <div className="text-sm text-dcent-text-muted space-y-1">
              <p>IoTrust Co., Ltd. / CEO: Baek Sang Su</p>
              <p>Company Registration Number: 219-86-00705</p>
              <p>Customer Service: +82-2-1833-4022</p>
              <p>Email: contact@iotrust.kr</p>
              <p>7th floor, Samsungdang Building, 747 Seolleung-ro,<br />Gangnam-gu, Seoul, Republic of Korea</p>
              <p className="pt-2">© 2026 IoTrust All rights reserved.</p>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-foreground font-semibold mb-3">Products</h3>
              <ul className="space-y-2 text-sm text-dcent-text-muted">
                <li><a href="https://store.dcentwallet.com/pages/dcent-biometric-crypto-wallet" className="hover:text-foreground transition-colors">D'CENT Biometric Wallet</a></li>
                <li><a href="https://store.dcentwallet.com/pages/dcent-all-in-one" className="hover:text-foreground transition-colors">D'CENT Card Wallet</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-dcent-text-muted">
                <li><a href="https://userguide.dcentwallet.com/" className="hover:text-foreground transition-colors">User Guide</a></li>
                <li><a href="https://dev-docs.dcentwallet.com/" target="_blank" rel="noreferrer noopener" className="hover:text-foreground transition-colors">Dev Guide</a></li>
                <li><a href="https://academy.dcentwallet.com/" target="_blank" rel="noreferrer noopener" className="hover:text-foreground transition-colors">Academy</a></li>
                <li><a href="https://dcentwallet.zendesk.com/hc/en-us" target="_blank" rel="noreferrer noopener" className="hover:text-foreground transition-colors">Questions</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSddydt7fv7D0ATnw49tCsBsex9DpHinAr0sebGb_eQb0ne37g/viewform" target="_blank" rel="noreferrer noopener" className="hover:text-foreground transition-colors">Suggest coin to add</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Firmware update</a></li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-dcent-text-muted">
              <li><a href="https://about-us-en.iotrust.kr/" className="hover:text-foreground transition-colors">About us</a></li>
              <li><a href="https://store.dcentwallet.com/pages/partners" className="hover:text-foreground transition-colors">Partners</a></li>
              <li><a href="https://store.dcentwallet.com/pages/policy-stipulation-web" className="hover:text-foreground transition-colors">D'CENT Web Terms of Use</a></li>
              <li><a href="https://store.dcentwallet.com/pages/policy-privacy-web" className="hover:text-foreground transition-colors">D'CENT Web Privacy Policy</a></li>
              <li><a href="https://store.dcentwallet.com/pages/policy-stipulation-app" className="hover:text-foreground transition-colors">D'CENT App Terms of Use</a></li>
              <li><a href="https://store.dcentwallet.com/pages/policy-privacy-app" className="hover:text-foreground transition-colors">D'CENT App Privacy Policy</a></li>
              <li><a href="https://store.dcentwallet.com/pages/dcent-referral-program" className="hover:text-foreground transition-colors">D'CENT Referral Program</a></li>
              <li><a href="https://store.dcentwallet.com/pages/dcent-influencer-program" className="hover:text-foreground transition-colors">D'CENT Affiliate Program</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
