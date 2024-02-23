import { useKey } from '@hooks/useKey'
import classnames from 'classnames'
import { useMemo, type CSSProperties } from 'react'
import { Radio as RsuiteRadio } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'

import type { RadioProps as RsuiteRadioProps } from 'rsuite'

export type RadioProps = Omit<RsuiteRadioProps, 'as' | 'checked' | 'defaultChecked' | 'id'> & {
  checked?: boolean | undefined
  className?: string | undefined
  hasError?: boolean | undefined
  isLight?: boolean | undefined
  name?: string | undefined
  style?: CSSProperties | undefined
}
export function Radio({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  checked = false,
  className,
  hasError = false,
  isLight = false,
  style,
  ...originalProps
}: RadioProps) {
  const controlledClassName = useMemo(() => classnames('Field-Radio', className), [className])
  const key = useKey([originalProps.disabled, originalProps.name])

  const commonProps = {
    ...originalProps,
    $isLight: isLight,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    checked,
    key
  }

  return (
    <Field className={controlledClassName} style={style}>
      {(() => {
        if (originalProps.disabled) {
          return <StyledRadioWhenDisabled {...commonProps} />
        }

        if (originalProps.readOnly) {
          return <StyledRadioWhenReadOnly {...commonProps} />
        }

        return <StyledRadio $hasError={hasError} {...commonProps} />
      })()}
    </Field>
  )
}

const StyledRadioBase = styled(RsuiteRadio)<{
  $isLight: boolean
}>`
  * {
    user-select: none;
  }

  > .rs-radio-checker {
    min-height: unset;
    padding: 0 0 0 24px;

    > label {
      font-size: 13px;
      font-weight: 500;
      line-height: 1;
      transition: color 0.2s linear;

      > .rs-radio-wrapper {
        left: 0;
        top: 2px;

        > .rs-radio-inner {
          &:after {
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
          }
        }
      }
    }
  }
`

const StyledRadio = styled(StyledRadioBase)<{
  $hasError: boolean
}>`
  > .rs-radio-checker {
    > label {
      > .rs-radio-wrapper {
        > .rs-radio-inner {
          &:before {
            background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
            border: solid 2px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.lightGray)};
          }
        }
      }
    }

    &:hover {
      > label {
        color: ${p => p.theme.color.blueYonder};

        > .rs-radio-wrapper {
          > .rs-radio-inner {
            &:before {
              background-color: ${p => p.theme.color.blueYonder25};
              border: solid 2px ${p => p.theme.color.blueYonder};
            }
          }
        }
      }
    }

    &:active,
    &:focus {
      > label {
        > .rs-radio-wrapper {
          > .rs-radio-inner {
            &:before {
              background-color: ${p => p.theme.color.blueGray25};
              border: solid 2px ${p => p.theme.color.blueGray};
            }
          }
        }
      }
    }
  }

  &.rs-radio-checked {
    > .rs-radio-checker {
      > label {
        > .rs-radio-wrapper {
          > .rs-radio-inner {
            &:before {
              background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
              border: solid 2px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
            }

            &:after {
              background-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
            }
          }
        }
      }

      &:hover {
        > label {
          color: ${p => p.theme.color.blueYonder};

          > .rs-radio-wrapper {
            > .rs-radio-inner {
              &:before {
                background-color: ${p => p.theme.color.blueYonder25};
                border: solid 2px ${p => p.theme.color.blueYonder};
              }

              &:after {
                background-color: ${p => p.theme.color.blueYonder};
              }
            }
          }
        }
      }

      &:active,
      &:focus {
        > label {
          color: ${p => p.theme.color.blueYonder};

          > .rs-radio-wrapper {
            > .rs-radio-inner {
              &:before {
                background-color: ${p => p.theme.color.blueGray25};
                border: solid 2px ${p => p.theme.color.blueGray};
              }

              &:after {
                background-color: ${p => p.theme.color.blueGray};
              }
            }
          }
        }
      }
    }
  }
`

const StyledRadioWhenDisabled = styled(StyledRadioBase)`
  > .rs-radio-checker {
    > label {
      color: ${p => p.theme.color.lightGray};

      > .rs-radio-wrapper {
        &:before {
          opacity: 1;
        }

        > .rs-radio-inner {
          &:before {
            background-color: transparent !important;
            border: solid 2px ${p => p.theme.color.lightGray} !important;
          }
        }
      }
    }
  }

  &.rs-radio-checked {
    > .rs-radio-checker {
      > label {
        > .rs-radio-wrapper {
          > .rs-radio-inner {
            &:before {
              background-color: transparent !important;
              border: solid 2px ${p => p.theme.color.lightGray} !important;
            }

            &:after {
              background-color: ${p => p.theme.color.lightGray} !important;
            }
          }
        }
      }
    }
  }
`

const StyledRadioWhenReadOnly = styled(StyledRadioBase)`
  > .rs-radio-checker {
    > label {
      color: ${p => p.theme.color.lightGray};

      > .rs-radio-wrapper {
        > .rs-radio-inner {
          &:before {
            background-color: transparent;
            border: solid 2px ${p => p.theme.color.lightGray};
          }
        }
      }
    }
  }

  &.rs-radio-checked {
    > .rs-radio-checker {
      > label {
        > .rs-radio-wrapper {
          > .rs-radio-inner {
            &:before {
              background-color: transparent;
              border: solid 2px ${p => p.theme.color.lightGray};
            }

            &:after {
              background-color: ${p => p.theme.color.charcoal};
            }
          }
        }
      }
    }
  }
`
