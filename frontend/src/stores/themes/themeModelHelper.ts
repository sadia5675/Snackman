import { Playerrole } from '@/stores/game/dtd/EPlayerrole'

export function getAppropriateScaleNumberThemeCharacter(
  role: Playerrole | undefined,
  theme: string
): number {
  if (theme == 'realistic') {
    if (role === Playerrole.SNACKMAN) {
      return 0.4
    } else if (role === Playerrole.GHOST) {
      return 0.3
    }
  } else if (theme == 'retro') {
    if (role === Playerrole.SNACKMAN) {
      return 0.6
    } else if (role === Playerrole.GHOST) {
      return 0.6
    }
  } else if (theme == 'christmas') {
    if (role === Playerrole.SNACKMAN) {
      return 1
    } else if (role === Playerrole.GHOST) {
      return 1
    }
  } else if (theme == 'sweetWorld') {
    if (role === Playerrole.SNACKMAN) {
      return 0.3
    } else if (role === Playerrole.GHOST) {
      return 0.2
    }
  } else {
    console.log('Error: Undefined Theme')
  }
  return 0.5
}

export function getAppropriateYoffsetForThemeCharacter(
  role: Playerrole | undefined,
  theme: string
) {
  if (theme == 'realistic') {
    if (role === Playerrole.SNACKMAN) {
      return -0.4
    } else if (role === Playerrole.GHOST) {
      return -0.4
    }
  } else if (theme == 'retro') {
    if (role === Playerrole.SNACKMAN) {
      return -0.4
    } else if (role === Playerrole.GHOST) {
      return -0.4
    }
  } else if (theme == 'christmas') {
    if (role === Playerrole.SNACKMAN) {
      return -1
    } else if (role === Playerrole.GHOST) {
      return -1
    }
  } else if (theme == 'sweetWorld') {
    if (role === Playerrole.SNACKMAN) {
      return 0
    } else if (role === Playerrole.GHOST) {
      return -0.3
    }
  } else {
    console.log('Error: Undefined Theme')
  }
  return 0
}
