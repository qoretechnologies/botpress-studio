// TODO: move this in common
export type PollBranch<T> = { status: 'stay' } | { status: 'leave'; data: T }
export type PollCb<T> = () => Promise<PollBranch<T>>

export const poll = <T>(cb: PollCb<T>, ms: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    const int = setInterval(async () => {
      try {
        const x = await cb()
        if (x.status === 'leave') {
          clearInterval(int)
          resolve(x.data)
        }
      } catch (err) {
        clearInterval(int)
        reject(err)
      }
    }, ms)
  })
}
