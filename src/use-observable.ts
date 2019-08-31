import { useEffect, useRef, useState } from 'react'
import { BehaviorSubject, Observable } from 'rxjs'

export type ObservableSource<T> =
  | Observable<T>
  | (() => Observable<T>)
  | null
  | undefined

export const useObservable = <T>(observable?: ObservableSource<T>) => {
  const [value, setValue] = useState<T | null>(
    observable instanceof BehaviorSubject ? observable.getValue() : null,
  )
  const observableRef = useRef(observable)
  useEffect(() => {
    const { current } = observableRef
    observableRef.current = typeof current === 'function' ? current() : current
    if (!observableRef.current) {
      return
    }
    const subscription = observableRef.current.subscribe(setValue)
    return () => subscription.unsubscribe()
  }, [observableRef])
  return value
}
