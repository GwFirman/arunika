"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            router.replace(pathname, { locale: newLocale });
            // router.refresh();
        }
    };

    return (
        <select className={"styles.localeSelect"} value={locale} onChange={(e) => switchLocale(e.target.value)}>
            <option value="id">EN</option>
            <option value="jv">jawa</option>
        </select>
    );
}
