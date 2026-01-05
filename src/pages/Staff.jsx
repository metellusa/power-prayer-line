import React from "react";
import { MapPin } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Badge from "../components/ui/Badge";

const staff = [
  {
    name: "Anaja Metellus",
    location: "Orlando, FL",
    role: "POWER President (2026)",
    bio: [
      "Anaja is the son of pastor Nesly Metellus and Fernande Metellus. He co-founded POWER ministry with Clement Beauvais in November 2005.",
      "At the time, the two young men sadly realized that they were losing their Christian identities while staying on campus, faced with a strong and unprecedented wave of secularism.",
      "Today, Anaja is POWER's current president. He's married to the lovely Kadine Metellus. Together, they have devoted themselves to serving God by serving others.",
      "Anaja holds a Bachelor's degree in Computer Sciences and is currently working on a Master of Arts in Theology at Dallas Theological Seminary.",
    ],
  },
  {
    name: "Venel Pamphile",
    location: "New London, CT",
    role: "POWER Vice-President",
    bio: [
      "Venel Pamphile is a founding member and current vice president of POWER Ministry. He loves to laugh and makes people around him laugh as well!",
      "He was instrumental in bringing many people on the line when POWER first started.",
      "Venel currently attends Family Church of God in Norwich, CT where he serves as a deacon and works closely with the youth.",
      "He is married to the lovely Angeline Pamphile and they have a beautiful daughter together.",
      "Venel is currently working on a Bachelor's degree in Finances and tutors international students at New London High School.",
    ],
    quote: {
      text: "I had an amazing time listening to brother Johnson Jeannot last night and I went to sleep and woke up still thinking about it if God is not your first love then who is?",
      author: "Valerie Joseph",
      meta: "Listener feedback (Feb 6, 2014)",
    },
  },
  {
    name: "Clement Beauvais",
    location: "Woodbridge, VA",
    role: "POWER Member Greeter",
    bio: [
      "Clement is the son of pastor Jean Beauvais and his wife, Mona Beauvais. He accepted Christ as his Lord and Savior at the age of 12.",
      "In November 2005, he co-founded Power Ministry with Anaja when both young men realized that they needed to get closer to God.",
      "Today, Clement attends Belmont Height Church of Christ where he is frequently asked to preach the word of God.",
      "Clement holds a Bachelor of Science in Computer Science from the University of South Florida and hopes to further his studies in the area of Theology.",
    ],
  },
  {
    name: "Natalie Charles",
    location: "Brooklyn, NY",
    role: "POWER Secretary",
    bio: [
      "Natalie is the current secretary of POWER Ministry. She joined about 2 years ago at a time when she was going through a dark time in her life and has truly been blessed by the people who continuously prayed for her.",
      "Born and raised in church, she attends Mission Evangelique Bethesda Baptiste Church in Canarsie, Brooklyn. There she plays the piano every Sunday and remains active in the youth choir.",
      "Natalie holds a Bachelors of Science from Long Island University and is currently working on her Masters in Public Health at SUNY Downstate Medical Center.",
    ],
  },
  {
    name: "Fernande Metellus",
    location: "Tampa, FL",
    role: "POWER Noon Line Leader",
    bio: [
      "Fernande Metellus is pastor Nesly Metellus's lovely wife and the mother of two children: Anaja and Nandelyne Metellus.",
      "She was born in Haiti's capital, Port-au-Prince on January 6th. She accepted Christ as her Lord and Savior at the age of 17.",
      "Today, she currently attends First Baptist Church of Tampa and is the president of POWER's noon session.",
      "She is a mother to all the youths on the prayerline and an indispensable member to the POWER family.",
    ],
  },
  {
    name: "Rachel W. Michel",
    location: "Brandon, FL",
    role: "Noon Line Treasurer",
    bio: [
      "Rachel is the mother of three children: Rebecca, Anne David and Ketsia. She was born in Haiti.",
      "She is a founding member of the noon session of POWER Prayer line. She currently serves as the treasurer of the noon line.",
    ],
  },
];

export default function Staff() {
  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title="Our Staff">
          <p className="text-lg">
            We have a passionate and dedicated group of brothers and sisters as leaders of this wonderful ministry.
          </p>
          <p className="mt-3">
            We have a variety of evangelical denominations represented within the POWER ministry.
          </p>
        </Section>
      </Reveal>

      {/* <div className="grid gap-6 md:grid-cols-2">
        {staff.map((s, idx) => (
          <Reveal key={s.name} delay={idx * 0.03}>
            <Card title={s.name} className="relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-green/10 blur-3xl" />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm text-power-ink/60 dark:text-white/60 inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {s.location}
                  </div>
                  <Badge color="cyan">{s.role}</Badge>
                </div>

                <div className="mt-4 space-y-3">
                  {s.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {s.quote ? (
                  <div className="mt-6 glass rounded-3xl p-5">
                    <p className="italic">&quot;{s.quote.text}&quot;</p>
                    <div className="mt-3 text-sm font-semibold text-power-ink dark:text-white">{s.quote.author}</div>
                    <div className="text-xs text-power-ink/60 dark:text-white/60">{s.quote.meta}</div>
                  </div>
                ) : null}
              </div>
            </Card>
          </Reveal>
        ))}
      </div> */}
      <div><center>Coming Soon!</center></div>
    </div>
  );
}
