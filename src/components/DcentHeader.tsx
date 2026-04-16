export function DcentHeader() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#1e2225]">
        <a
          href="https://chromewebstore.google.com/detail/pehjmcpnbaogigbginlmkcmjgeiiggng"
          target="_blank"
          rel="noreferrer noopener"
          className="block"
        >
          <img
            src="https://store.dcentwallet.com/cdn/shop/files/Group_1000006516.png?v=1776124145&width=1920"
            alt="D'CENT Desktop Wallet Extension"
            className="w-full max-h-[45px] object-contain"
            width={1920}
            height={90}
          />
        </a>
      </div>

      {/* Main header */}
      <header className="bg-background border-b border-dcent-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="https://dcentwallet.com/en/" title="D'CENT Shop">
            <img
              src="https://store.dcentwallet.com/cdn/shop/files/dcent_logo_horizontal_full_color_b5795af0-d598-48a8-8904-ff84f7fb1d5a.png?v=1677607642"
              alt="D'CENT Shop"
              width={130}
              height={37}
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://store.dcentwallet.com/" className="hover:text-foreground transition-colors">Products</a>
            <a href="https://dcentwallet.com/en/mobileapp" className="hover:text-foreground transition-colors">Mobile App</a>
            <a href="https://dcentwallet.com/en/supportedcoin" className="hover:text-foreground transition-colors">Supported Coins</a>
            <a href="https://userguide.dcentwallet.com/" className="hover:text-foreground transition-colors">Manual</a>
            <a href="https://dcentwallet.zendesk.com/hc/en-us" className="hover:text-foreground transition-colors">Support</a>
            <a href="https://blog.dcentwallet.com/" className="hover:text-foreground transition-colors">Blog</a>
            <a href="https://store.dcentwallet.com/" className="hover:text-foreground transition-colors">Shops</a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">English</span>
            <a href="https://store.dcentwallet.com/cart" aria-label="Cart" className="text-muted-foreground hover:text-foreground">
              <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z" />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
