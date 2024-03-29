import {Bluesky, Discord, Email, GitHub, Keybase, LinkedIn, Mastodon, Threads} from '../common/icons';
import {useFavicon} from '../hooks/useFavicon';
import {Anchor} from './Anchor';
import styles from './App.module.css';

const PROFILES = [
  {
    label: 'Email',
    icon: <Email />,
    name: 'hello@hampuskraft.com',
    url: 'mailto:hello@hampuskraft.com',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn />,
    name: '@hampuskraft',
    url: 'https://www.linkedin.com/in/hampuskraft',
  },
  {
    label: 'GitHub',
    icon: <GitHub />,
    name: '@hampuskraft',
    url: 'https://github.com/hampuskraft',
  },
  {
    label: 'Keybase',
    icon: <Keybase />,
    name: '@hampuskraft',
    url: 'https://keybase.io/hampuskraft',
  },
  {
    label: 'Threads',
    icon: <Threads />,
    name: '@hampuskraft',
    url: 'https://www.threads.net/@hampuskraft',
  },
  {
    label: 'Mastodon',
    icon: <Mastodon />,
    name: '@hampus@mastodon.social',
    url: 'https://mastodon.social/@hampus',
    rel: 'me',
  },
  {
    label: 'Bluesky',
    icon: <Bluesky />,
    name: '@hampuskraft.com',
    url: 'https://bsky.app/profile/hampuskraft.com',
  },
  {
    label: 'Discord',
    icon: <Discord />,
    name: '@hampus.',
    url: 'discord:/users/514340181243854848',
  },
];

export function App() {
  useFavicon();
  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <svg className={styles.ghost} viewBox="79.47 66.52 241.02 267.52" xmlns="http://www.w3.org/2000/svg">
          <path d="M139.75 314.5c-10.7-10.7-19.85-19.5-20.25-19.5-.4 0-9.4 8.65-20 19.25S80.1 333.5 79.9 333.5c-.25 0-.4-34.95-.4-77.6 0-87.3-.1-84.2 3.7-99.25 3.9-15.3 12.2-32.05 22.35-44.9 4.25-5.4 12.8-14.15 17.7-18.1 15.3-12.35 34.1-21.3 52.5-24.9 11.1-2.15 13.5-2.35 26.8-2.15 11.85.2 13.2.35 20.45 1.8 24.25 5 45.35 16.3 62.3 33.3 6.35 6.4 12.4 13.85 16.25 20 2.1 3.4 7.2 12.8 8.85 16.3 3.3 7.2 7.4 21.1 8.6 29.25.35 2.2.8 5.25 1 6.75.25 1.5.45 37.9.45 80.9.05 62.5-.05 78.1-.55 78.1-.35 0-9.2-8.55-19.65-19s-19.35-19-19.75-19c-.4 0-9.55 8.8-20.25 19.5-10.7 10.75-19.7 19.5-20 19.5-.25 0-9.45-8.95-20.35-19.85l-19.9-19.9-19.9 19.9C169.2 325.05 160 334 159.75 334c-.3 0-9.3-8.75-20-19.5zm26.95-115.3c19.6-5.05 26.4-29.95 12.05-44.4-5.15-5.2-11.45-7.85-18.75-7.85-12.95.05-23.95 8.75-26.25 20.8-.95 4.8-.95 7.05 0 11.4 1 4.8 3 8.5 6.6 12.3 5.45 5.85 11.3 8.45 19.1 8.5 2.3.05 5.55-.3 7.25-.75zm80.3 0c4.3-1 8.1-3.15 11.65-6.65 3.85-3.7 6.15-7.6 7.35-12.35 2.15-8.45.7-15.7-4.7-23.25-2.95-4.05-9.25-8-15.05-9.45-5.3-1.3-12.95-.4-18 2.1-10.25 5.1-16.4 16.9-14.45 27.6 2.95 16.35 17.2 25.8 33.2 22z" />
        </svg>

        <div style={{marginTop: 16}} />
        <h1>Hampus Kraft</h1>
        <div style={{marginTop: 16}} />
        <p>Software engineer and friendly ghost. {'<'}3 Rust and TypeScript.</p>
        <div style={{marginTop: 16}} />

        {PROFILES.map((profile) => (
          <div className={styles.social} key={profile.label}>
            {profile.icon}
            <Anchor href={profile.url} rel={profile.rel}>
              {profile.name}
            </Anchor>
          </div>
        ))}
      </article>
    </main>
  );
}
