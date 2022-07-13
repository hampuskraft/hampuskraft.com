import styles from '@app/components/Anchor.module.css'
import React from 'react'

interface AnchorProps {
  href: string
  children: React.ReactNode
}

export function Anchor(props: AnchorProps): JSX.Element {
  return (
    <a className={styles.anchor} href={props.href} rel="noreferrer" target="_blank">
      {props.children}
    </a>
  )
}
