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
            // router.refresh(); // opsional jika ingin reload konten penuh
        }
    };

    return (
        <select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffa559]" value={locale} onChange={(e) => switchLocale(e.target.value)}>
            <option value="id">Indonesia</option>
            <option value="jv">Jawa</option>
            <option value="su">Sunda</option>
            <option value="bt">Batak</option>
            <option value="ba">Bali</option>
            <option value="bug">Bugis</option>
            <option value="min">Minangkabau</option>
        </select>
    );
}
