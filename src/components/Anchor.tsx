import styles from './Anchor.module.css';

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  rel?: string;
}

export function Anchor(props: AnchorProps) {
  return (
    <a className={styles.anchor} href={props.href} rel={props.rel ?? 'noreferrer'} target="_blank">
      {props.children}
    </a>
  );
}
