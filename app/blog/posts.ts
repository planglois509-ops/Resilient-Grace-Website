/**
 * Blog post data. Placeholder while the CMS wiring is built — the shape here
 * is intentionally close to what a headless CMS (Sanity, Contentlayer, MDX
 * + frontmatter, etc.) would return so swapping to a live source is mostly
 * a fetch swap.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** HTML string for body. CMS will produce this from a rich-text editor. */
  body: string;
  image: string;
  imageAlt: string;
  /** ISO date string. */
  publishedAt: string;
  readMinutes: number;
  tag: string;
};

export const posts: BlogPost[] = [
  {
    slug: "befriending-resistance",
    title: "A Guided Practice for Befriending Resistance",
    excerpt:
      "Resistance can be a powerful teacher — if we learn how to work with it rather than against it. A practice for turning the friction of healing into a doorway.",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Wildflowers in a windswept alpine meadow at dusk.",
    publishedAt: "2026-05-12",
    readMinutes: 7,
    tag: "Mindfulness",
    body: `
      <p>For most of my life I treated resistance as something to overcome. The voice that didn't want to meditate. The body that didn't want to move. The grief that didn't want to be felt. I thought the work of healing was to outmaneuver these refusals — to be more disciplined, more brave, more <em>spiritual</em> than the parts of me that pulled the other way.</p>
      <p>It turns out that was the wound, not the cure.</p>
      <h2>The shape of resistance</h2>
      <p>Resistance is not laziness. It is rarely cowardice. It is, almost always, an old protection — a part of you that learned, somewhere far back, that this thing you are now trying to do was not safe. The body remembers what the mind has forgotten, and it speaks in the language of refusal.</p>
      <p>To <em>befriend</em> resistance is to slow down enough to ask: <strong>what are you protecting me from?</strong> The answer is almost never what the thinking mind expects.</p>
      <blockquote>The strength we are reaching for is not the strength to override ourselves. It is the strength to remain in conversation with every part of who we are.</blockquote>
      <h2>A practice</h2>
      <p>Find a quiet place. Bring to mind something you have been avoiding — not the biggest thing, something medium. Notice where in the body the refusal lives. The throat. The chest. The pit of the stomach. Place a hand there.</p>
      <p>Now, instead of asking it to leave, ask it three things, one at a time, and listen:</p>
      <ol>
        <li>How long have you been here?</li>
        <li>What are you afraid will happen if I move forward?</li>
        <li>What do you need from me right now?</li>
      </ol>
      <p>You may not get a verbal answer. You may get an image. A memory. A softening. A tightening that finally releases. All of those are the answer.</p>
      <p>This is not a one-time conversation. It is a relationship. The parts of us that say <em>no</em> are not enemies of the healing — they are often the first responders who kept us alive long enough to find the healing in the first place.</p>
    `,
  },
  {
    slug: "heal-brain-heal-spirit",
    title: "Heal the Brain, Heal the Spirit: Maslow & the Spiritual Path",
    excerpt:
      "Mental clarity is the foundation upon which all other aspects of spiritual and personal growth are built. A reflection on the body-spirit connection.",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Sunlight filtering through aspen leaves.",
    publishedAt: "2026-04-28",
    readMinutes: 9,
    tag: "Healing",
    body: `
      <p>Years into my own recovery I noticed something I could not explain: the more I tended to my nervous system, the more available God became.</p>
      <p>I had spent the years before that climbing the spiritual ladder — meditation, retreats, books, teachers — and grasping for the experiences they described. The peace. The presence. The dissolution of the self into something larger. And it was not that none of it was true. It was that I could not hold it. I could touch it on a cushion and lose it before I made it to the kitchen.</p>
      <h2>Maslow, revisited</h2>
      <p>Maslow's hierarchy is often dismissed as outdated psychology, but the underlying observation remains useful: <strong>the body has to be safe before the spirit can soar</strong>. A dysregulated nervous system cannot be a contemplative one. A sleep-deprived brain cannot be a discerning one. A traumatized body cannot, by itself, be a praying body — it can be a desperate one, but not a discerning one.</p>
      <blockquote>The foundation is not the opposite of the spire. The foundation is what allows the spire to be possible at all.</blockquote>
      <h2>The integrative move</h2>
      <p>This is why I work the way I work. We tend to the brain — sleep, food, movement, nervous-system regulation, breath — not because the body is the goal, but because the body is the <em>condition</em>. Once the floor is solid, the rest opens up on its own.</p>
      <p>Healing is rarely a leap into the sublime. It is a slow descent into the ordinary, until the ordinary itself becomes sublime.</p>
    `,
  },
  {
    slug: "sangha-community",
    title: "Sangha: Why Healing Happens in Community",
    excerpt:
      "Illness breeds in isolation, darkness, and shame. The Buddhist concept of community as medicine — and why we do not heal alone.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Hands holding a cup of tea in soft afternoon light.",
    publishedAt: "2026-04-09",
    readMinutes: 6,
    tag: "Community",
    body: `
      <p>The Buddha taught three jewels: the teacher, the teaching, and the community. People talk a lot about the first two. They almost never talk about the third.</p>
      <p>And yet, of the three, the community is the one I have seen do the work that nothing else could.</p>
      <h2>Why isolation hurts</h2>
      <p>Shame cannot survive being witnessed with love. It can survive being witnessed with judgment — that only makes it stronger. But the very specific act of being seen, fully, in our worst moment, by someone who does not flinch and does not fix and does not look away — this is the antidote that nothing in our medicine cabinet can replicate.</p>
      <blockquote>You can sit on a meditation cushion for ten thousand hours and never touch what one honest conversation with one safe person can touch in twenty minutes.</blockquote>
      <h2>What sangha actually looks like</h2>
      <p>It does not have to be Buddhist. It does not have to be religious at all. It can be a Wednesday-night recovery meeting. A women's circle in someone's living room. A weekly call with two friends who know your real story. A group of people who agree, by their presence alone, that you are not alone.</p>
      <p>I have begun to think that the question is not <em>am I doing my healing</em>, but <em>am I doing it in front of anyone</em>. Privacy and isolation are not the same thing. Privacy is a closed door we choose. Isolation is a closed door we forgot we shut.</p>
    `,
  },
  {
    slug: "the-body-keeps-the-clock",
    title: "The Body Keeps the Clock: On Sleep, Circadian Rhythm & Recovery",
    excerpt:
      "The simplest, most powerful tool in the integrative recovery kit is also the one most often overlooked: a steady, well-tended sleep.",
    image:
      "https://images.unsplash.com/photo-1455642305367-68834a9c9b13?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "A window at first light, sheer curtains glowing.",
    publishedAt: "2026-03-22",
    readMinutes: 8,
    tag: "Whole-Person",
    body: `
      <p>Before any other intervention, before the supplements and the journaling and the breath-work, I ask my clients about their sleep. Not because sleep is sexy. Because sleep is foundational, and almost no one is sleeping enough.</p>
      <p>Recovery happens at night. The nervous system reorganizes. The brain clears its waste. The hormones reset. The story softens. Skip a night of sleep and you have skipped a session of therapy you did not know you were in.</p>
      <h2>The non-negotiables</h2>
      <p>There are three that move the needle more than any other change I can suggest:</p>
      <ol>
        <li><strong>A fixed wake time.</strong> Not bedtime — wake time. The body sets its clock by when light hits the eye, not when you close the laptop.</li>
        <li><strong>Morning light, within the first hour.</strong> Outside. Even on a grey day. Even for ten minutes. This is the single most powerful free intervention I know.</li>
        <li><strong>An honest dimming after sunset.</strong> Lamps, not overheads. Screens off, or warm-filtered, ninety minutes before bed.</li>
      </ol>
      <p>None of this is exotic. None of it requires you to buy anything. And almost no one is doing it.</p>
    `,
  },
  {
    slug: "what-grief-knows",
    title: "What Grief Knows That the Mind Does Not",
    excerpt:
      "Grief is not a problem to be solved. It is a kind of attention — a final act of love. Notes from sitting with what we have lost.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "A bare tree against a pale winter sky.",
    publishedAt: "2026-03-05",
    readMinutes: 5,
    tag: "Reflection",
    body: `
      <p>We have, in our culture, an almost panicked relationship with grief. We give it a week of bereavement leave. We send a casserole. We say the words about closure and stages and moving on. And then we expect — quietly, but firmly — that the person who is grieving will reassemble themselves into the shape they were before.</p>
      <p>Grief does not do that. Grief is not a project.</p>
      <blockquote>Grief is what love looks like when it has nowhere else to go.</blockquote>
      <h2>The slow truth</h2>
      <p>What grief seems to ask of us is not that we solve it but that we keep it company. That we let it sit at the table. That we let it walk with us into the next room. That we do not try, with our well-meaning frantic minds, to make it smaller or quieter or shorter than it is.</p>
      <p>The people I know who have moved through their deepest losses with anything resembling grace did not bypass the grief. They walked through the middle of it, very slowly, with company. And on the other side they were not the person they had been — but they were a person, and the person they had become was somehow more present, more porous, more themselves.</p>
    `,
  },
  {
    slug: "letter-to-the-scapegoat",
    title: "A Letter to the Family Scapegoat",
    excerpt:
      "If you were the one in your family who was always too much, too sensitive, too difficult — this is for you. You were not the problem. You were the truth-teller.",
    image:
      "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "An open letter on a wooden desk, soft window light.",
    publishedAt: "2026-02-18",
    readMinutes: 6,
    tag: "Family Systems",
    body: `
      <p>I want to say something to you that no one in your family of origin was likely able to say.</p>
      <p>You were not the problem.</p>
      <p>The role you were assigned — the difficult one, the dramatic one, the one who could not just <em>get over it</em> — was not a description of your character. It was a function. Every family system needs somewhere to put the parts of itself that it cannot bear to look at. You were the place those parts got put.</p>
      <h2>The cost</h2>
      <p>The cost of being the family's mirror is that you grow up suspecting that whatever is wrong is your fault. You grow up over-functioning, or under-functioning, or both in alternating cycles. You grow up exquisitely tuned to other people's moods and dangerously dull to your own. You grow up <em>believing the story</em> the family told about you because, when everyone you love agrees on something, the strain of disagreeing is unbearable.</p>
      <blockquote>The scapegoat is not the family's weakest member. The scapegoat is most often the one whose system could not stop telling the truth.</blockquote>
      <h2>The way forward</h2>
      <p>The work, slowly, is to disentangle <em>who you are</em> from the role you were handed. To grieve the family you needed and did not get. To find the people who can see you as you actually are, not as the family's mirror needed you to be. And then to live, on purpose, in the shape that fits you — not the shape that fit them.</p>
      <p>It is the long way home. There is no other way.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function formatPublishedDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
