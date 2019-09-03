declare module 'qrious' {
  namespace QRious {
    interface QRiousOptions {
      value: string
      background?: string
      backgroundAlpha?: number
      foreground?: string
      foregroundAlpha?: number
      level?: 'L' | 'M' | 'Q' | 'H'
      mime?: string
      padding?: number
      size?: number
    }
  }

  class QRious {
    constructor(options?: QRious.QRiousOptions)
    toDataURL(mime?: string): string
    set(options?: QRious.QRiousOptions): void
  }

  export = QRious
}