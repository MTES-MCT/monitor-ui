export class RetryError extends Error {
  constructor() {
    super('Retrying...')

    this.name = 'RetryError'
  }
}
