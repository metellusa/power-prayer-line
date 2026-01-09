import React from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";

const creed = [
  {
    h: "The Bible",
    p: [
      "We affirm the Bible as sacred Scripture—Spirit-breathed testimony that faithfully bears witness to God’s character, purposes, and redemptive work throughout history. The Scriptures, comprised of the Old and New Testaments, remain our primary guide for faith, discernment, and spiritual formation.",
      "We believe the Bible was written through human authors inspired by the Holy Spirit, shaped by historical context, language, culture, and literary form. Scripture is not a scientific manual nor a collection of isolated proof texts, but a unified narrative that finds its fullest meaning in the life, teachings, death, and resurrection of Jesus Christ.",
      "We read Scripture with reverence, humility, and prayer, seeking not merely information but transformation. We affirm that God continues to illuminate Scripture by His Spirit, inviting us into deeper understanding as we grow in love, wisdom, and truth.",
    ],
  },
  {
    h: "God",
    p: [
      "We believe in one God, the eternal Source of all that exists, who created all things out of love and for love. God is infinite, personal, and relational—perfect in wisdom, justice, mercy, and goodness.",
      "God has revealed Himself as Father, Son, and Holy Spirit—distinct yet united in essence, purpose, and love. God is not distant or detached from creation but actively present within it, sustaining all things and drawing every soul toward fullness of life.",
      "At the heart of God’s nature is love. All of God’s actions—creation, judgment, mercy, and restoration—flow from this love and are ordered toward healing, reconciliation, and wholeness.",
    ],
  },
  {
    h: "Jesus Christ",
    p: [
      "We confess Jesus Christ as the clearest and fullest revelation of God. In Jesus, God entered human history, not ceasing to be divine, but fully embracing humanity to show us who God is and who we are called to become.",
      "Jesus embodied divine love through compassion, truth, humility, and self-giving service. His teachings reveal the way of the Kingdom of God—a life oriented toward love of God and love of neighbor.",
      "Through His life, death, and resurrection, Jesus confronted sin, exposed the destructiveness of fear and selfishness, and revealed the transformative power of sacrificial love. His death was not merely a legal transaction but a profound act of redemptive love that heals, reconciles, and restores.",
      "To receive Jesus is to align oneself with His way—to participate in His life, embody His love, and be transformed by His Spirit. Jesus remains alive and present, guiding humanity toward truth, freedom, and communion with God.",
    ],
  },
  {
    h: "The Holy Spirit",
    p: [
      "We believe the Holy Spirit is God’s living presence within creation and humanity. The Spirit animates life, convicts hearts, inspires conscience, and draws all people toward truth and love.",
      "God’s Spirit is near to all, inviting every person into greater awareness, cooperation, and transformation. While we may resist or ignore the Spirit, we are never abandoned by Him.",
      "The Holy Spirit empowers spiritual growth, illuminates Scripture, nurtures wisdom, and cultivates the fruits of love, peace, humility, patience, and self-control. Spiritual gifts are given according to God’s wisdom for the building up of others and the healing of the world.",
    ],
  },
  {
    h: "The Spiritual Realm",
    p: [
      "We affirm the reality of a spiritual dimension beyond the physical world. Creation includes both seen and unseen realities.",
      "We acknowledge the existence of spiritual beings and forces that may align with love or resist it. Evil is real, but it is not an equal power to God. We believe that God will ultimately subdue evil.",
    ],
  },
  {
    h: "Humanity",
    p: [
      "We affirm that all people are created in the image and likeness of God, endowed with inherent dignity, worth, and purpose. Humanity is not created evil or worthless but good—yet incomplete, developing, and vulnerable.",
      "Sin is the distortion of love—the misuse of freedom that leads to harm, alienation, and spiritual blindness. While humanity is wounded by fear, ignorance, and brokenness, we are never abandoned by God nor stripped of our sacred value.",
      "Human growth is both moral and spiritual. We are called not merely to obey, but to mature—to learn love through experience, responsibility, and relationship.",
    ],
  },
  {
    h: "Salvation",
    p: [
      "We believe salvation is the work of God’s grace, not human achievement. It is God who initiates, sustains, and completes the work of restoration in every soul.",
      "Salvation is not merely rescue from punishment, but healing from within—freedom from fear, selfishness, and separation from love. It is the process of becoming who we were created to be.",
      "Faith is trustful participation in God’s transforming work, expressed through love. Good works do not earn salvation, but they naturally flow from a heart being healed and aligned with divine love.",
      "God’s grace is persistent, patient, and redemptive. We trust that God’s purposes extend beyond our limited understanding and that no soul is beyond His reach.",
    ],
  },
  {
    h: "The Church",
    p: [
      "We believe the Church is not a building or an institution, but a living body—made up of all who seek to follow the way of Christ in love and truth.",
      "The Church exists to form people into Christ-like love, to foster spiritual growth, to care for the wounded, and to serve the world with humility. It is a place of belonging and of healing.",
      "Baptism and the Lord’s Supper are sacred practices that point us toward transformation, remembrance, and renewed commitment to Christ’s way of life.",
      "The Church’s mission is to embody the reconciling love of God, proclaiming good news not only with words, but through lives marked by compassion, justice, and mercy.",
    ],
  },
  {
    h: "Our Commitment",
    p: [
      "We commit ourselves to a faith marked by humility, courage, compassion, and truth-seeking. We seek not shallow certainty, but deep transformation.",
      "We believe that to walk with Christ is to grow continually—to love more fully, to see more clearly, and to live more faithfully in the light of God’s enduring presence.",
    ],
  },
];

function Item({ h, p }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="glass rounded-4xl p-6">
      <button
        className="w-full flex items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="text-xl font-black text-power-ink dark:text-white">{h}</div>
        <ChevronDown className={["h-5 w-5 text-power-ink/70 dark:text-white/70 transition-transform", open ? "rotate-180" : ""].join(" ")} />
      </button>

      {open ? (
        <div className="mt-4 space-y-3 text-power-ink/80 dark:text-white/75 leading-relaxed">
          {p.map((x, idx) => (
            <p key={idx}>{x}</p>
          ))}
        </div>
      ) : (
        <div className="mt-3 text-sm text-power-ink/60 dark:text-white/60">
          Tap to expand
        </div>
      )}
    </div>
  );
}

export default function Creed() {
  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title="Our Creed">
          <p className="text-lg">
            We are a non-denominational ministry, united around the following key tenets of the Christian faith.
            Help us spread the word by sharing <a href="/flyer">our flyer</a> on social media, or with family and friends. 
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <div className="grid gap-4">
          {creed.map((s) => (
            <Item key={s.h} {...s} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
