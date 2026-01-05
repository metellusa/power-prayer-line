import React from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Badge from "../components/ui/Badge";

const creed = [
  {
    h: "The Bible",
    p: [
      "We believe that the Bible, made up of the Old and New Testaments, is the inspired, infallible, and authoritative Word of God (Matthew 5:18; 2 Timothy 3:16-17). In faith we hold the Bible to be without errors in the original writings, God-breathed, and the complete and final authority for faith and practice (2 Timothy 3:16-17).",
      "While still using the individual writing styles of the human authors, the Holy Spirit perfectly guided them to ensure they wrote precisely what He wanted written, without error or omission (2 Peter 1:21).",
    ],
  },
  {
    h: "God",
    p: [
      "We believe in one God who created everything (Deuteronomy 6:4; Colossians 1:16), who has revealed Himself in three distinct Persons: Father, Son, and Holy Spirit (2 Corinthians 13:14), yet who is one in being, essence, and glory (John 10:30).",
      "God is eternal (Psalm 90:2), infinite (1 Timothy 1:17), and sovereign (Psalm 93:1). God is omniscient (Psalm 139:1-6), omnipresent (Psalm 139:7-13), omnipotent (Revelation 19:6), and unchanging (Malachi 3:6).",
      "God is holy (Isaiah 6:3), just (Deuteronomy 32:4), and righteous (Exodus 9:27). God is love (1 John 4:8), gracious (Ephesians 2:8), merciful (1 Peter 1:3), and good (Romans 8:28).",
    ],
  },
  {
    h: "Jesus Christ",
    p: [
      "We believe that Jesus Christ is God. He is God incarnate, God in human form, the expressed image of the Father, who, without ceasing to be God, became man in order that He might demonstrate who God is and provide the means of salvation for humanity (Matthew 1:21; John 1:18; Colossians 1:15).",
      "We believe that Jesus Christ was conceived of the Holy Spirit and was born of the virgin Mary; that He is truly fully God and truly fully man; that He lived a perfect, sinless life; that all His teachings are true; and that He died on the cross for all humanity (1 John 2:2) as a substitutionary sacrifice (Isaiah 53:5-6).",
      "We hold that His death is sufficient to provide salvation for all who receive Him as Savior (John 1:12; Acts 16:31).",
    ],
  },
  {
    h: "The Holy Spirit",
    p: [
      "We believe in the deity and personality of the Holy Spirit (Acts 5:3-4). He regenerates sinners (Titus 3:5) and indwells believers (Romans 8:9). He is the Divine Teacher who illumines believers’ hearts and minds as they study the Word of God (1 Corinthians 2:9-12).",
      "We believe that the Holy Spirit is ultimately sovereign in the distribution of spiritual gifts (1 Corinthians 12:11).",
    ],
  },
  {
    h: "Angels and Demons",
    p: [
      "We believe in the reality and personality of angels. We believe that God created the angels to be His servants and messengers (Nehemiah 9:6; Psalm 148:2; Hebrews 1:14).",
      "We believe in the existence and personality of Satan and demons. Satan is a fallen angel who led a group of angels in rebellion against God (Isaiah 14:12-17; Ezekiel 28:12-15). He and his demons will be eternally punished in the lake of fire (Matthew 25:41; Revelation 20:10).",
    ],
  },
  {
    h: "Humanity",
    p: [
      "We believe that humanity came into existence by direct creation of God and that humanity is uniquely made in the image and likeness of God (Genesis 1:26-27).",
      "We believe that all humanity, because of Adam's fall, has inherited a sinful nature, that all human beings choose to sin (Romans 3:23), and that all sin is exceedingly offensive to God (Romans 6:23).",
    ],
  },
  {
    h: "Salvation",
    p: [
      "We believe that salvation is a gift of God’s grace through faith in the finished work of Jesus Christ on the cross (Ephesians 2:8-9). We believe salvation is received by grace alone, through faith alone, in Christ alone.",
      "Good works and obedience are results of salvation, not requirements for salvation (James 2).",
    ],
  },
  {
    h: "The Church",
    p: [
      "We believe that the Church, the Body of Christ, is a spiritual organism made up of all believers of this present age (1 Corinthians 12:12-14; Ephesians 1:22-23).",
      "We believe in the Great Commission as the primary mission of the Church (Matthew 28:19-20; Acts 1:8; 2 Corinthians 5:19-20).",
    ],
  },
  {
    h: "Things to Come",
    p: [
      "We believe in the blessed hope (Titus 2:13), the personal and imminent coming of the Lord Jesus Christ (1 Thessalonians 4:13-18).",
      "We believe in the physical resurrection of all men—the saints to everlasting joy and bliss on the New Earth, and the wicked to eternal punishment (Matthew 25:46; John 5:28-29; Revelation 20:11-15).",
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
            Below is the creed content from the existing site (now presented as expandable sections).
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
