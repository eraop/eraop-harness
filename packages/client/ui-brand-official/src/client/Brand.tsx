import type { SidebarBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'
import artworkUrl from './assets/eraop-harness.png'
import css from './Brand.module.css'

/**
 * Render the official mark with the presentation requested by its host surface.
 * @param props - Host-supplied mark presentation.
 * @returns the Eraop mark cropped from the supplied artwork.
 */
export function OfficialBrandMark({ size }: SidebarBrandMarkOwnerProps) {
  return (
    <svg width={size} height={size} viewBox="64 48 648 648" className={css.artwork} aria-hidden="true">
      <image href={artworkUrl} width="2172" height="724" />
    </svg>
  )
}

/**
 * Render the official name artwork without its independently slotted mark.
 * @returns the official name wordmark.
 */
export function OfficialBrandName() {
  return (
    <svg width={76} height={24} viewBox="744 176 1368 432" className={css.artwork} aria-hidden="true">
      <image href={artworkUrl} width="2172" height="724" />
    </svg>
  )
}

/**
 * Render the full Eraop Harness artwork above the blank-session composer.
 * @returns a responsive banner retaining the supplied artwork's proportions.
 */
export function OfficialBrandBanner() {
  return <img src={artworkUrl} width={2172} height={724} alt="" className={css.banner} />
}
