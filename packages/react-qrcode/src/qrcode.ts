import React, { HTMLAttributes } from 'react'

import { QRCodeOptions } from './types'
import { useQRCode } from './use-qrcode'

export type QRCodeProps = QRCodeOptions &
  Omit<HTMLAttributes<HTMLImageElement>, 'color' | 'src'>

export const QRCode: React.FC<QRCodeProps> = ({
  color,
  errorCorrectionLevel,
  margin,
  maskPattern,
  quality,
  scale,
  toSJISFunc,
  type,
  value,
  version,
  width,
  ...props
}) =>
  React.createElement('img', {
    ...props,
    src: useQRCode({
      color,
      errorCorrectionLevel,
      margin,
      maskPattern,
      quality,
      scale,
      toSJISFunc,
      type,
      value,
      version,
      width,
    }),
  })
