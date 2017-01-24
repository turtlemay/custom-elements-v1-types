declare class CustomElementRegistry {
  define: (
    tagName: string,
    constructor: new () => HTMLElement,
    options?: {
      extends?: string,
    },
  ) => void

  get: (tagName: string) => (new () => HTMLElement) | undefined

  whenDefined: (tagName: string) => Promise<void>
}

declare const customElements: CustomElementRegistry
