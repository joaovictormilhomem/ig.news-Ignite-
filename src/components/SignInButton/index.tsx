import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react'

export function SignInButton() {
  const { data: session } = useSession();
  
  return session ?
    (
      <button
        className={styles.signInButton}
        type="button"
        onClick={() => signOut()}
      >
        <FaGithub color="04d361" />
        João Victor Milhomem
        <FiX color="737380" className={styles.closeIcon} />
      </button>
    )
    :
    (
      <button
        className={styles.signInButton}
        type="button"
        onClick={() => signIn('github')}
      >
        <FaGithub color="eba417" />
        Sign in with Github
      </button>
    )
}