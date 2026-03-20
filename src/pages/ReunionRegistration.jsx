import React from "react";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  CreditCard,
  MapPin,
  Mail,
  Phone,
  HeartHandshake,
} from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";

function Field({ label, required, children, className = "" }) {
  return (
    <div className={className}>
      <label className="text-sm font-bold text-power-ink dark:text-white">
        {label} {required ? <span className="text-power-cyan">*</span> : null}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-power-cyan/35 focus:border-power-cyan/40 text-power-ink dark:text-white placeholder:text-power-ink/45 dark:placeholder:text-white/45";

const selectCls = `${inputCls} appearance-none`;

const PRODUCT = {
  id: "1001",
  name: "POWER Reunion",
  price: 100,
  taxRate: 0.065,
  image:
    "http://static.wixstatic.com/media/dacf7b_aa1b50fada764d4b81f4ce9faec48557.jpg_srz_p_151_140_75_22_0.50_1.20_0.00_jpg_srz",
};

const COUNTRIES = [
  "United States",
  "Canada",
  "Haiti",
  "Jamaica",
  "Bahamas",
  "Dominican Republic",
  "Mexico",
  "United Kingdom",
  "France",
  "Germany",
  "Brazil",
  "Australia",
  "Other",
];

function money(n) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function ReunionRegistration() {
  const { t } = useTranslation();
  const [quantity, setQuantity] = React.useState(1);

  const subtotal = PRODUCT.price * quantity;
  const tax = subtotal * PRODUCT.taxRate;
  const total = subtotal + tax;

  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title={t("reunion.title")}>
          <p className="text-lg text-power-ink/80 dark:text-white/75">
            {t("reunion.intro")}
          </p>
        </Section>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <Card
            title={t("reunion.formTitle")}
            className="relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-cyan/15 blur-3xl" />
            <div className="relative">
              <form
                name="form_260758936290165"
                id="260758936290165"
                action="https://submit.jotform.com/submit/260758936290165"
                method="post"
                acceptCharset="utf-8"
                autoComplete="on"
                className="grid gap-4 md:grid-cols-2"
              >
                <input type="hidden" name="formID" value="260758936290165" />
                <input
                  type="hidden"
                  name="simple_spc"
                  value="260758936290165-260758936290165"
                />
                <input
                  type="hidden"
                  name="payment_transaction_uuid"
                  value=""
                />
                <input type="hidden" name="payment_version" value="4" />
                <input
                  type="hidden"
                  name="q13_registrationFee[][id]"
                  value={PRODUCT.id}
                />

                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="website" />
                  </label>
                </p>

                <Field label={t("reunion.fields.firstName")} required>
                  <input
                    name="q3_name3[first]"
                    required
                    className={inputCls}
                    autoComplete="given-name"
                    placeholder={t("reunion.placeholders.firstName")}
                  />
                </Field>

                <Field label={t("reunion.fields.lastName")} required>
                  <input
                    name="q3_name3[last]"
                    required
                    className={inputCls}
                    autoComplete="family-name"
                    placeholder={t("reunion.placeholders.lastName")}
                  />
                </Field>

                <Field
                  label={t("reunion.fields.street1")}
                  required
                  className="md:col-span-2"
                >
                  <input
                    name="q15_address[addr_line1]"
                    required
                    className={inputCls}
                    autoComplete="address-line1"
                    placeholder={t("reunion.placeholders.street1")}
                  />
                </Field>

                <Field
                  label={t("reunion.fields.street2")}
                  className="md:col-span-2"
                >
                  <input
                    name="q15_address[addr_line2]"
                    className={inputCls}
                    autoComplete="address-line2"
                    placeholder={t("reunion.placeholders.street2")}
                  />
                </Field>

                <Field label={t("reunion.fields.city")} required>
                  <input
                    name="q15_address[city]"
                    required
                    className={inputCls}
                    autoComplete="address-level2"
                    placeholder={t("reunion.placeholders.city")}
                  />
                </Field>

                <Field label={t("reunion.fields.state")} required>
                  <input
                    name="q15_address[state]"
                    required
                    className={inputCls}
                    autoComplete="address-level1"
                    placeholder={t("reunion.placeholders.state")}
                  />
                </Field>

                <Field label={t("reunion.fields.postal")}>
                  <input
                    name="q15_address[postal]"
                    className={inputCls}
                    autoComplete="postal-code"
                    placeholder={t("reunion.placeholders.postal")}
                  />
                </Field>

                <Field label={t("reunion.fields.country")} required>
                  <div className="relative">
                    <select
                      name="q15_address[country]"
                      required
                      className={selectCls}
                      defaultValue="United States"
                      autoComplete="country"
                    >
                      <option value="" disabled>
                        {t("reunion.placeholders.selectCountry")}
                      </option>
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-power-ink/50 dark:text-white/50">
                      ▾
                    </span>
                  </div>
                </Field>

                <Field
                  label={t("reunion.fields.maritalStatus")}
                  required
                  className="md:col-span-2"
                >
                  <div className="grid gap-3 sm:grid-cols-3 pt-2">
                    {[
                      t("reunion.marital.married"),
                      t("reunion.marital.engaged"),
                      t("reunion.marital.single"),
                    ].map((status) => (
                      <label
                        key={status}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm text-power-ink dark:text-white cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="q17_typeA"
                          value={status}
                          required
                          className="h-4 w-4"
                        />
                        <span>{status}</span>
                      </label>
                    ))}
                  </div>
                </Field>

                <Field label={t("reunion.fields.phone")}>
                  <input
                    type="tel"
                    name="q5_phoneNumber5[full]"
                    className={inputCls}
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder={t("reunion.placeholders.phone")}
                  />
                </Field>

                <Field label={t("reunion.fields.email")} required>
                  <input
                    type="email"
                    name="q12_email"
                    required
                    className={inputCls}
                    autoComplete="email"
                    placeholder={t("reunion.placeholders.email")}
                  />
                </Field>

                <div className="md:col-span-2">
                  <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4 sm:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <img
                        src={PRODUCT.image}
                        alt={PRODUCT.name}
                        className="h-20 w-20 rounded-2xl object-cover border border-slate-200/60 dark:border-white/10"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-sm font-bold text-power-ink dark:text-white">
                              {t("reunion.registrationFee")}{" "}
                              <span className="text-power-cyan">*</span>
                            </div>
                            <div className="mt-1 text-base font-semibold text-power-ink dark:text-white">
                              {PRODUCT.name}
                            </div>
                            <div className="text-sm text-power-ink/65 dark:text-white/65">
                              {money(PRODUCT.price)} {t("reunion.perPerson")}
                            </div>
                          </div>

                          <div className="hidden sm:block text-right">
                            <div className="text-xs uppercase tracking-wide text-power-ink/50 dark:text-white/50">
                              {t("reunion.price")}
                            </div>
                            <div className="text-lg font-bold text-power-ink dark:text-white">
                              {money(PRODUCT.price)}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 max-w-[180px]">
                          <label className="text-sm font-bold text-power-ink dark:text-white">
                            {t("reunion.quantity")}
                          </label>
                          <div className="relative mt-1">
                            <select
                              className={selectCls}
                              name="q13_registrationFee[special_1001][item_0]"
                              value={String(quantity)}
                              onChange={(e) => setQuantity(Number(e.target.value))}
                            >
                              {[1, 2, 3, 4, 5].map((n) => (
                                <option key={n} value={n}>
                                  {n}
                                </option>
                              ))}
                            </select>
                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-power-ink/50 dark:text-white/50">
                              ▾
                            </span>
                          </div>
                        </div>

                        <div className="mt-5 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4 space-y-2">
                          <div className="flex items-center justify-between text-sm text-power-ink/75 dark:text-white/75">
                            <span>{t("reunion.summary.subtotal")}</span>
                            <span>{money(subtotal)}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-power-ink/75 dark:text-white/75">
                            <span>{t("reunion.summary.tax")}</span>
                            <span>{money(tax)}</span>
                          </div>
                          <div className="h-px bg-slate-200/70 dark:bg-white/10" />
                          <div className="flex items-center justify-between text-base font-bold text-power-ink dark:text-white">
                            <span>{t("reunion.summary.total")}</span>
                            <span>{money(total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 rounded-2xl border border-power-cyan/20 bg-power-cyan/5 dark:bg-power-cyan/10 p-4">
                  <div className="flex gap-3">
                    <CreditCard className="h-5 w-5 shrink-0 mt-0.5 text-power-blue dark:text-power-cyan" />
                    <div className="text-sm text-power-ink/80 dark:text-white/75 space-y-3">
                      <p>{t("reunion.paypal.line1")}</p>
                      <p>{t("reunion.paypal.line2")}</p>

                      <img
                        src="https://www.jotform.com/uploads/powerprayerline/form_files/non-paypal-option.115.png"
                        alt={t("reunion.paypal.imageAlt")}
                        className="rounded-xl border border-slate-200/60 dark:border-white/10 max-w-[260px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                  <Button type="submit" variant="primary">
                    {t("reunion.submit")}
                  </Button>

                  <div className="text-sm text-power-ink/60 dark:text-white/60 inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-power-blue dark:text-power-cyan" />
                    {t("reunion.secure")}
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-6">
            <Card title={t("reunion.notes.title")}>
              <div className="space-y-4 text-power-ink/80 dark:text-white/75">
                <div className="flex items-start gap-3">
                  <HeartHandshake className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">{t("reunion.notes.whoFor.title")}</div>
                    <div>{t("reunion.notes.whoFor.body")}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">{t("reunion.notes.confirmation.title")}</div>
                    <div>{t("reunion.notes.confirmation.body")}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">{t("reunion.notes.phone.title")}</div>
                    <div>{t("reunion.notes.phone.body")}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </div>
  );
}